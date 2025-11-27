# Hostinger Deployment Guide

This guide will help you deploy your React static website to Hostinger.

## Prerequisites

1. Hostinger hosting account with access to File Manager or FTP
2. Node.js installed on your local machine (for building the project)

## Build Steps

### 1. Build the Project

Run the following command to create a production build:

```bash
npm run build
```

This will create a `dist` folder with all the optimized static files.

### 2. Verify Build Output

After building, check that:
- The `dist` folder contains `index.html`
- The `dist/assets/` folder contains JS and CSS files
- The `.htaccess` file is automatically copied to `dist/` (check `dist/.htaccess` exists)

**Important**: 
- The `.htaccess` file is automatically copied during build
- Upload ALL contents of the `dist` folder (not the `dist` folder itself)
- The `.htaccess` file must be in the root of your public_html directory for React Router to work correctly

## Upload to Hostinger

### Option 1: Using File Manager (Recommended)

1. Log in to your Hostinger hPanel
2. Go to **File Manager**
3. Navigate to `public_html` (or your subdomain directory)
4. **Delete any existing files** in the directory (or backup first)
5. Upload all files from the `dist` folder
6. **Important**: Make sure the `.htaccess` file is uploaded to the root directory
7. Ensure file permissions are set correctly:
   - Files: 644
   - Folders: 755

### Option 2: Using FTP

1. Use an FTP client (FileZilla, WinSCP, etc.)
2. Connect to your Hostinger FTP server
3. Navigate to `public_html` (or your subdomain directory)
4. Upload all files from the `dist` folder
5. Make sure `.htaccess` is uploaded to the root

## Post-Deployment Checklist

- [ ] All files uploaded successfully
- [ ] `.htaccess` file is in the root directory
- [ ] Test the homepage loads correctly
- [ ] Test all routes (e.g., `/services`, `/contact`, etc.)
- [ ] Check that assets (images, CSS, JS) load properly
- [ ] Verify HTTPS is working (if SSL is enabled)

## Troubleshooting

### Blank White Page (Most Common Issue)

If you see a blank white page after deployment:

1. **Check Browser Console** (F12 → Console tab):
   - Look for JavaScript errors (red text)
   - Check for 404 errors on asset files (JS, CSS)
   - Common errors:
     - `Failed to load resource: net::ERR_FILE_NOT_FOUND` - Files not uploaded correctly
     - `Uncaught SyntaxError` - JavaScript file corrupted or incomplete
     - `Cannot read property of undefined` - Application error

2. **Verify File Upload**:
   - Open browser DevTools (F12) → Network tab
   - Refresh the page
   - Check if `index.html` loads (should be 200 status)
   - Check if JS and CSS files load (look for files in `/assets/` folder)
   - If you see 404 errors, the files weren't uploaded correctly

3. **Check .htaccess File**:
   - Ensure `.htaccess` is in the root directory (same level as `index.html`)
   - Verify file permissions are 644
   - Try accessing your site: `yourdomain.com/test.html` (if test.html exists)
   - If test.html works but main site doesn't, it's likely a JavaScript error

4. **Verify Directory Structure**:
   - Make sure you're uploading CONTENTS of `dist` folder, not the `dist` folder itself
   - Correct: `public_html/index.html`, `public_html/assets/...`
   - Wrong: `public_html/dist/index.html`

5. **Check File Permissions**:
   - Files: 644
   - Folders: 755
   - `.htaccess`: 644

6. **Test Direct File Access**:
   - Try accessing: `yourdomain.com/assets/index-[hash].js` directly
   - If you get 404, the file path in `index.html` doesn't match actual files
   - This usually means you need to rebuild and re-upload

7. **Clear Browser Cache**:
   - Hard refresh: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
   - Or use Incognito/Private mode

### Routes Not Working (404 Errors)

If direct links to routes like `/services` return 404:
- Verify `.htaccess` file is present in the root directory
- Check that mod_rewrite is enabled on your Hostinger server
- Ensure the `.htaccess` file has proper permissions (644)
- Test if `.htaccess` is working by checking if non-existent routes redirect to index.html

### Assets Not Loading

If CSS, JS, or images don't load:
- Check file paths in the browser console (Network tab)
- Verify all files from `dist` folder were uploaded
- Ensure paths in `index.html` match actual file names in `assets/` folder
- Clear browser cache
- Check file permissions (should be 644 for files)

### Base Path Issues

If hosting in a subdirectory (not root domain):
1. Update `vite.config.js`:
   ```js
   base: '/your-subdirectory-name/',
   ```
2. Rebuild the project
3. Upload the new build

### JavaScript Errors

If you see JavaScript errors in console:
- The application now includes error boundaries to catch React errors
- Check the browser console for detailed error messages
- Common issues:
  - Missing dependencies (should be bundled in build)
  - Browser compatibility issues
  - Third-party API failures (check Network tab)

## File Structure After Upload

Your Hostinger directory should look like this:

```
public_html/
├── .htaccess
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── ...
└── [other files]
```

## Build Process

The build process automatically:
1. Creates optimized production files in `dist/` folder
2. Copies `.htaccess` file to `dist/` folder (via `postbuild` script)
3. Generates hashed filenames for assets (for cache busting)

Simply run `npm run build` and upload the `dist/` folder contents.

## Support

If you encounter issues:
1. Check Hostinger's documentation
2. Contact Hostinger support
3. Verify your hosting plan supports `.htaccess` files

