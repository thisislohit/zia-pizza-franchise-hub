# Deployment Guide for Fasthosts

This guide will help you deploy your Zia Pizza website to Fasthosts hosting.

## Prerequisites

1. A Fasthosts hosting account (Shared Hosting, VPS, or Dedicated Server)
2. FTP credentials from Fasthosts
3. Node.js installed on your local machine (for building)

## Step 1: Build Your Website

First, ensure all dependencies are installed and build the production version:

```bash
# Install dependencies (if not already done)
npm install

# Build the production version
npm run build
```

This will create/update the `dist` folder with all optimized production files.

## Step 2: Prepare Files for Upload

After building, you'll find all the deployable files in the `dist` folder:
- `index.html` - Main HTML file
- `assets/` - JavaScript, CSS, and optimized images
- `favicon.ico` - Website icon
- `robots.txt` - Search engine instructions
- `placeholder.svg` - Placeholder image

**Important:** Check if your `dist/index.html` has a base path set. If you're hosting at the root of your domain, ensure the base path is `/`. If hosting in a subdirectory, update accordingly.

## Step 3: Upload Files to Fasthosts

### Option A: Using FTP Client

1. **Get FTP Credentials:**
   - Log into your Fasthosts control panel
   - Navigate to your hosting account
   - Find FTP/SFTP credentials (hostname, username, password, port)

2. **Connect via FTP Client:**
   - Use an FTP client like FileZilla, Cyberduck, or WinSCP
   - Connect using your FTP credentials
   - Navigate to your website's root directory (usually `public_html` or `www` or `htdocs`)

3. **Upload Files:**
   - Upload ALL contents from the `dist` folder to your website root
   - Maintain the folder structure (especially the `assets` folder)
   - Upload the `.htaccess` file (for Apache servers) if provided

### Option B: Using File Manager

1. Log into Fasthosts control panel
2. Open File Manager
3. Navigate to your website root directory
4. Upload all files from the `dist` folder
5. Ensure `index.html` is in the root directory

## Step 4: Configure Your Website

### Apache Configuration (.htaccess)

If your Fasthosts account uses Apache (most shared hosting accounts do), upload the `.htaccess` file provided in this project. This file:
- Enables clean URLs for React Router
- Redirects all requests to `index.html` for client-side routing
- Sets up proper caching and security headers

### Base Path Configuration

If you need to host your site in a subdirectory (e.g., `yoursite.com/zia-pizza/`), you'll need to:

1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/zia-pizza/', // Your subdirectory path
  // ... rest of config
})
```

2. Rebuild:
```bash
npm run build
```

3. Upload to the subdirectory on your server

### Domain Configuration

If your domain is registered with Fasthosts:
1. Navigate to Domain Names in the control panel
2. Configure DNS settings if needed
3. Ensure A records point to your hosting server

## Step 5: Verify Deployment

1. Visit your website URL in a browser
2. Test all pages and navigation
3. Check that assets (images, CSS, JS) load correctly
4. Test on mobile devices
5. Verify that React Router navigation works (try direct URLs)

## Troubleshooting

### 404 Errors on Direct URLs
- Ensure `.htaccess` is uploaded correctly
- Verify your hosting supports `.htaccess` files
- Check that mod_rewrite is enabled on Apache

### Assets Not Loading
- Check file paths in `index.html` match your hosting setup
- Verify base path configuration
- Ensure `assets` folder structure is preserved
- Check file permissions (should be 644 for files, 755 for directories)

### Website Shows Old Content
- Clear browser cache
- Verify you uploaded to the correct directory
- Check if there's a caching system that needs clearing

### FTP Upload Issues
- Verify FTP credentials are correct
- Check if SFTP is required instead of FTP
- Ensure firewall isn't blocking the connection
- Try passive mode in your FTP client

## Support

If you encounter issues:
1. Check Fasthosts knowledge base
2. Contact Fasthosts support
3. Review server error logs in your control panel

## Additional Notes

- Keep your local `dist` folder backed up
- Document your FTP credentials securely
- Consider setting up automated deployments if you update frequently
- Test builds locally using `npm run preview` before uploading

---

**Last Updated:** Deployment guide created for Fasthosts hosting
