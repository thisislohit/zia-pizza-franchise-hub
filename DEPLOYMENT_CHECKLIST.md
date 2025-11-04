# FastHosts Deployment Checklist

Use this checklist to ensure a smooth deployment to Fasthosts:

## Pre-Deployment

- [ ] Install all dependencies: `npm install`
- [ ] Test build locally: `npm run build`
- [ ] Preview build locally: `npm run preview`
- [ ] Verify all pages work in preview
- [ ] Check that images load correctly
- [ ] Test navigation between pages
- [ ] Verify responsive design on mobile devices

## Build Configuration

- [ ] Determine if hosting at root (`/`) or subdirectory (`/subdirectory/`)
- [ ] If hosting at root, ensure `vite.config.ts` doesn't have a `base` setting (or set to `/`)
- [ ] If hosting in subdirectory, set `base: '/your-subdirectory/'` in `vite.config.ts`
- [ ] Rebuild: `npm run build`

## File Preparation

- [ ] Verify `dist` folder contains:
  - [ ] `index.html`
  - [ ] `assets/` folder with JS, CSS, and images
  - [ ] `favicon.ico`
  - [ ] `robots.txt`
  - [ ] `.htaccess` file (for Apache servers)

## FTP/File Upload Setup

- [ ] Log into Fasthosts control panel
- [ ] Locate FTP credentials:
  - [ ] FTP Hostname
  - [ ] FTP Username
  - [ ] FTP Password
  - [ ] FTP Port (usually 21 or 22)
- [ ] Identify website root directory (usually `public_html`, `www`, or `htdocs`)
- [ ] Install FTP client (FileZilla, Cyberduck, WinSCP, etc.)

## Upload Process

- [ ] Connect to FTP server using credentials
- [ ] Navigate to website root directory
- [ ] Upload ALL contents from `dist` folder:
  - [ ] `index.html` (to root)
  - [ ] `assets/` folder (preserve structure)
  - [ ] `favicon.ico`
  - [ ] `robots.txt`
  - [ ] `.htaccess` (if Apache)
  - [ ] Any other files from `dist`
- [ ] Verify file structure matches `dist` folder structure

## Post-Upload Verification

- [ ] Visit website URL in browser
- [ ] Check homepage loads correctly
- [ ] Test all navigation links
- [ ] Verify direct URLs work (test direct links to pages)
- [ ] Check images display correctly
- [ ] Verify CSS styling is applied
- [ ] Test on mobile device
- [ ] Check browser console for errors
- [ ] Verify favicon displays

## DNS & Domain Setup (if needed)

- [ ] If domain registered elsewhere, update DNS A records
- [ ] If domain with Fasthosts, verify DNS settings
- [ ] Wait for DNS propagation (can take 24-48 hours)
- [ ] Test website with new domain

## Final Checks

- [ ] Test all pages: Home, About, Menu, Locations, Contact, etc.
- [ ] Check contact form (if applicable)
- [ ] Verify booking functionality (if applicable)
- [ ] Test search functionality
- [ ] Clear browser cache and retest
- [ ] Test in multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Check website speed and performance

## Troubleshooting (if needed)

- [ ] 404 errors on direct URLs → Check `.htaccess` uploaded correctly
- [ ] Assets not loading → Verify base path in `vite.config.ts`
- [ ] Styling issues → Clear browser cache, check CSS files uploaded
- [ ] Navigation not working → Verify `.htaccess` rewrite rules active

## Security & Optimization

- [ ] Verify security headers in `.htaccess` are active
- [ ] Check that caching headers are working
- [ ] Verify compression is enabled
- [ ] Test website speed using PageSpeed Insights

---

**Ready for Production!** 🚀

If you encounter any issues, refer to `DEPLOYMENT.md` for detailed troubleshooting steps.
