# Quick Start: Deploy to Fasthosts

## ✅ Build Complete!

Your website has been built and is ready to deploy. All production files are in the `dist` folder.

## 🚀 Quick Deployment Steps

### 1. **Get FTP Credentials from Fasthosts**
   - Log into Fasthosts control panel
   - Find your hosting account
   - Get FTP/SFTP credentials:
     - Hostname (e.g., `ftp.yoursite.com`)
     - Username
     - Password
     - Port (usually 21 for FTP or 22 for SFTP)

### 2. **Connect via FTP Client**
   - Use FileZilla, Cyberduck, WinSCP, or similar
   - Connect with your FTP credentials

### 3. **Navigate to Website Root**
   - Go to your website's root directory:
     - Usually `public_html` or `www` or `htdocs`
     - This is where your `index.html` should be

### 4. **Upload Everything from `dist` folder**
   Upload ALL files from the `dist` folder to your website root:
   - ✅ `index.html`
   - ✅ `assets/` folder (entire folder with all contents)
   - ✅ `favicon.ico`
   - ✅ `robots.txt`
   - ✅ `.htaccess` (important for React Router!)
   - ✅ `placeholder.svg`
   - ✅ Any other files in `dist`

### 5. **Verify Your Website**
   - Visit your domain in a browser
   - Test all pages
   - Verify images load correctly

## ⚠️ Important Notes

1. **Base Path**: Your site is configured for root domain hosting (`/`). If you need to host in a subdirectory, update `vite.config.ts` with `base: '/your-subdirectory/'` and rebuild.

2. **.htaccess File**: This file is essential for React Router to work correctly. Make sure it's uploaded!

3. **File Structure**: Maintain the exact folder structure when uploading (especially the `assets/` folder).

4. **File Permissions**: Set files to 644 and folders to 755 (if your FTP client allows).

## 📚 Need More Help?

- See `DEPLOYMENT.md` for detailed instructions
- See `DEPLOYMENT_CHECKLIST.md` for a step-by-step checklist
- Contact Fasthosts support if you have FTP issues

## 🔄 Rebuilding (If Needed)

If you make changes and need to rebuild:
```bash
npm run build
```

Then upload the new `dist` folder contents again.

---

**Ready to upload!** Your `dist` folder contains everything needed. 🎉
