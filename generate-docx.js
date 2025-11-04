#!/usr/bin/env node
/**
 * Script to convert PROJECT_TECHNOLOGY_DOCUMENT.md to DOCX format
 * Usage: node generate-docx.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function parseMarkdownToDocx(mdContent, { 
  Paragraph, 
  TextRun, 
  HeadingLevel, 
  AlignmentType,
  ImageRun,
  Width,
  Height,
  hexColorValue,
  ShadingType,
  brandColors,
  logoBuffer
}) {
  const lines = mdContent.split('\n');
  const children = [];
  let headerCount = 0;
  
  // Add logo at the top if available
  if (logoBuffer) {
    try {
      children.push(
        new Paragraph({
          children: [
            new ImageRun({
              data: logoBuffer,
              transformation: {
                width: 200,
                height: 200,
              },
            }),
          ],
          alignment: AlignmentType.CENTER,
          spacing: { after: 300 }
        })
      );
    } catch (e) {
      console.warn('Could not add logo:', e.message);
    }
  }
  
  let i = 0;
  let inCodeBlock = false;
  let codeBlockLines = [];
  
  while (i < lines.length) {
    const line = lines[i].trim();
    
    // Handle code blocks
    if (line.startsWith('```')) {
      if (inCodeBlock) {
        // End of code block
        if (codeBlockLines.length > 0) {
          const codeText = codeBlockLines.join('\n');
          children.push(
            new Paragraph({
              text: codeText,
              spacing: { after: 200 },
              indent: { left: 720 } // 0.5 inch
            })
          );
        }
        codeBlockLines = [];
        inCodeBlock = false;
      } else {
        // Start of code block
        inCodeBlock = true;
      }
      i++;
      continue;
    }
    
    if (inCodeBlock) {
      codeBlockLines.push(lines[i]);
      i++;
      continue;
    }
    
    // Skip empty lines
    if (!line) {
      i++;
      continue;
    }
    
    // H1 Title
    if (line.match(/^# [^#]/)) {
      const text = line.substring(2).trim();
      children.push(
        new Paragraph({
          children: [
            new TextRun({ 
              text, 
              bold: true, 
              size: 36,
              color: brandColors.charcoalNavy
            })
          ],
          heading: HeadingLevel.TITLE,
          alignment: AlignmentType.CENTER,
          spacing: { after: 400 }
        })
      );
    }
    // H2 - Branded section headers with red color and background
    else if (line.match(/^## [^#]/)) {
      const text = line.substring(3).trim();
      if (text !== '---') {
        headerCount++;
        // Alternate between red text on gold background and gold text on red background
        const useAlternate = headerCount % 2 === 0;
        children.push(
          new Paragraph({
            children: [
              new TextRun({ 
                text: `  ${text}  `, 
                bold: true, 
                size: 22,
                color: useAlternate ? brandColors.goldHighlight : brandColors.logoRed,
                shading: {
                  type: ShadingType.SOLID,
                  color: useAlternate ? brandColors.logoRed : brandColors.goldHighlight
                }
              })
            ],
            heading: HeadingLevel.HEADING_1,
            spacing: { before: 300, after: 200 },
            indent: { left: 144 } // Small left indent for visual effect
          })
        );
      }
    }
    // H3 - Use charcoal navy color
    else if (line.match(/^### /)) {
      const text = line.substring(4).trim();
      children.push(
        new Paragraph({
          children: [
            new TextRun({ 
              text, 
              bold: true, 
              size: 20,
              color: brandColors.charcoalNavy
            })
          ],
          heading: HeadingLevel.HEADING_2,
          spacing: { before: 200, after: 150 }
        })
      );
    }
    // Horizontal rule
    else if (line === '---') {
      children.push(
        new Paragraph({
          spacing: { after: 200 }
        })
      );
    }
    // Bullet list
    else if (line.match(/^\- /)) {
      const text = line.substring(2).trim();
      // Handle bold text in bullet points with brand color
      const parts = text.split(/(\*\*[^*]+\*\*)/g);
      const runs = [];
      parts.forEach(part => {
        if (part.startsWith('**') && part.endsWith('**')) {
          const boldText = part.slice(2, -2);
          runs.push(new TextRun({ 
            text: boldText, 
            bold: true,
            color: brandColors.logoRed
          }));
        } else if (part) {
          runs.push(new TextRun({ text: part }));
        }
      });
      children.push(
        new Paragraph({
          children: runs.length > 0 ? runs : [new TextRun({ text: text.replace(/\*\*/g, '') })],
          bullet: { level: 0 },
          spacing: { after: 100 }
        })
      );
    }
    // Numbered list
    else if (line.match(/^\d+\. /)) {
      const text = line.replace(/^\d+\. /, '').trim();
      const cleanText = text.replace(/\*\*(.+?)\*\*/g, '$1');
      children.push(
        new Paragraph({
          children: [new TextRun({ text: cleanText })],
          numbering: { level: 0, reference: 'default-numbering' },
          spacing: { after: 100 }
        })
      );
    }
    // Regular paragraph
    else {
      let text = line;
      // Remove markdown formatting
      text = text.replace(/\*\*(.+?)\*\*/g, '$1');
      text = text.replace(/\*(.+?)\*/g, '$1');
      text = text.replace(/`(.+?)`/g, '$1');
      
      const runs = [];
      let remaining = text;
      
      // Handle bold text in paragraphs with brand color
      while (remaining.includes('**')) {
        const start = remaining.indexOf('**');
        if (start > 0) {
          runs.push(new TextRun({ text: remaining.substring(0, start) }));
        }
        const end = remaining.indexOf('**', start + 2);
        if (end > start) {
          runs.push(new TextRun({ 
            text: remaining.substring(start + 2, end), 
            bold: true,
            color: brandColors.charcoalNavy
          }));
          remaining = remaining.substring(end + 2);
        } else {
          runs.push(new TextRun({ text: remaining.substring(start) }));
          remaining = '';
        }
      }
      
      if (remaining || runs.length === 0) {
        runs.push(new TextRun({ text: remaining || text }));
      }
      
      children.push(
        new Paragraph({
          children: runs,
          spacing: { after: 150 }
        })
      );
    }
    
    i++;
  }
  
  // Add footer with brand styling
  children.push(
    new Paragraph({
      spacing: { before: 400 }
    }),
    new Paragraph({
      children: [
        new TextRun({ 
          text: 'Document generated for: ', 
          italics: true,
          color: brandColors.charcoalNavy
        }),
        new TextRun({ 
          text: 'Zia Pizza Franchise Hub', 
          italics: true,
          bold: true,
          color: brandColors.logoRed
        })
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 }
    }),
    new Paragraph({
      children: [
        new TextRun({ 
          text: 'Last updated: 2025', 
          italics: true,
          color: brandColors.charcoalNavy
        })
      ],
      alignment: AlignmentType.CENTER
    })
  );
  
  return children;
}

async function generateDocx() {
  // Try to load docx library
  let Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, ImageRun, Width, Height, ShadingType, BorderStyle, hexColorValue;
  try {
    const docx = await import('docx');
    Document = docx.Document;
    Packer = docx.Packer;
    Paragraph = docx.Paragraph;
    TextRun = docx.TextRun;
    HeadingLevel = docx.HeadingLevel;
    AlignmentType = docx.AlignmentType;
    ImageRun = docx.ImageRun;
    Width = docx.Width;
    Height = docx.Height;
    ShadingType = docx.ShadingType;
    BorderStyle = docx.BorderStyle;
    hexColorValue = docx.hexColorValue;
  } catch (e) {
    console.error('Error: docx library not found.');
    console.error('Please install it using: npm install docx');
    process.exit(1);
  }
  
  // Brand colors as hex strings
  const brandColors = {
    charcoalNavy: '0C0D14',
    logoRed: 'E31A24',
    goldHighlight: 'D4C29C'
  };
  
  const mdFile = path.join(__dirname, 'PROJECT_TECHNOLOGY_DOCUMENT.md');
  const logoFile = path.join(__dirname, 'public', 'logo.png');
  const docxFile = path.join(__dirname, 'PROJECT_TECHNOLOGY_DOCUMENT.docx');
  
  try {
    const mdContent = fs.readFileSync(mdFile, 'utf-8');
    let logoBuffer = null;
    if (fs.existsSync(logoFile)) {
      try {
        logoBuffer = fs.readFileSync(logoFile);
      } catch (e) {
        console.warn('Could not read logo file:', e.message);
      }
    }
    
    const children = parseMarkdownToDocx(mdContent, { 
      Document, 
      Paragraph, 
      TextRun, 
      HeadingLevel, 
      AlignmentType,
      ImageRun,
      Width,
      Height,
      hexColorValue,
      ShadingType,
      brandColors,
      logoBuffer
    });
    
    const doc = new Document({
      sections: [{
        properties: {},
        children: children
      }]
    });
    
    const buffer = await Packer.toBuffer(doc);
    fs.writeFileSync(docxFile, buffer);
    
    console.log(`✓ Successfully created ${docxFile}`);
  } catch (error) {
    console.error('Error:', error.message);
    if (error.code === 'ENOENT') {
      console.error(`File not found: ${mdFile}`);
    }
    process.exit(1);
  }
}

generateDocx();

