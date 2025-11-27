# Step-by-Step Guide: Deploy to Hostinger

## Quick Start (5 Steps)

### Step 1: Build Your Project

Open your terminal/command prompt in the project folder and run:

```bash
npm run build
```

This will:
- Create optimized production files in the `dist` folder
- Automatically copy the `.htaccess` file to `dist` folder
- Generate hashed filenames for cache busting

**Verify**: Check that `dist` folder contains:
- `index.html`
- `.htaccess` file
- `assets/` folder with JS and CSS files

### Step 2: Access Hostinger File Manager

1. Log in to your Hostinger account
2. Go to **hPanel** (Hostinger Control Panel)
3. Navigate to **Files** → **File Manager**
4. Open the **public_html** folder (this is your website root)

### Step 3: Clean the Directory (Optional but Recommended)

**IMPORTANT**: Backup any existing files first if needed!

1. In File Manager, select all existing files in `public_html`
2. Delete them (or move to backup folder)
3. This ensures a clean deployment

### Step 4: Upload Files

You have two options:

#### Option A: Upload via File Manager (Easiest)

1. In File Manager, make sure you're in `public_html` folder
2. Click **Upload** button (usually at top)
3. Select **ALL files** from your local `dist` folder:
   - `index.html`
   - `.htaccess` (IMPORTANT - make sure this is included!)
   - `assets/` folder (upload the entire folder)
4. Wait for upload to complete

#### Option B: Upload via FTP (For Large Files)

1. Get FTP credentials from Hostinger hPanel → **Files** → **FTP Accounts**
2. Use FTP client (FileZilla, WinSCP, etc.)
3. Connect to your FTP server
4. Navigate to `public_html` folder
5. Upload all contents from local `dist` folder

### Step 5: Set File Permissions

1. In File Manager, right-click on each file/folder:
   - **Files** (like `index.html`, `.htaccess`): Set to **644**
   - **Folders** (like `assets/`): Set to **755**

**How to set permissions in File Manager:**
- Right-click file → **Change Permissions**
- Enter: `644` for files, `755` for folders
- Click **Change Permissions**

### Step 6: Verify Deployment

1. Open your browser
2. Visit your domain: `https://yourdomain.com`
3. Check:
   - ✅ Homepage loads correctly
   - ✅ No blank page
   - ✅ CSS styles are applied
   - ✅ Navigation works
   - ✅ Test a route: `yourdomain.com/services`

## Important: File Structure

After upload, your `public_html` should look exactly like this:

```
public_html/
├── .htaccess          ← Must be here!
├── index.html         ← Must be here!
└── assets/
    ├── index-[hash].js
    └── index-[hash].css
```

**Common Mistake**: Don't upload the `dist` folder itself. Upload the CONTENTS of the `dist` folder.

## Troubleshooting Blank Page

If you see a blank page:

1. **Open Browser Console** (Press F12)
   - Go to **Console** tab - look for red errors
   - Go to **Network** tab - refresh page, check for 404 errors

2. **Check if files are uploaded correctly:**
   - Try accessing directly: `yourdomain.com/assets/index-[hash].js`
   - Replace `[hash]` with actual hash from your build
   - If 404, files weren't uploaded correctly

3. **Verify .htaccess is present:**
   - In File Manager, make sure you see `.htaccess` file
   - If not visible, enable "Show Hidden Files" in File Manager settings

4. **Check file permissions:**
   - `.htaccess` should be 644
   - `index.html` should be 644
   - `assets/` folder should be 755

5. **Clear browser cache:**
   - Press Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
   - Or use Incognito/Private browsing mode

## Updating Your Site

When you make changes:

1. **Build again:**
   ```bash
   npm run build
   ```

2. **Delete old files** from `public_html` (or just replace them)

3. **Upload new files** from `dist` folder

4. **Clear browser cache** and test

## Need Help?

If you're still having issues:

1. Check browser console (F12) for specific error messages
2. Check Network tab to see which files are failing to load
3. Verify all files from `dist` folder are uploaded
4. Contact Hostinger support if server-side issues

## Checklist

Before going live, verify:

- [ ] `npm run build` completed without errors
- [ ] `dist` folder contains `index.html`, `.htaccess`, and `assets/` folder
- [ ] All files uploaded to `public_html` on Hostinger
- [ ] `.htaccess` file is in `public_html` root directory
- [ ] File permissions set correctly (644 for files, 755 for folders)
- [ ] Website loads at your domain
- [ ] No errors in browser console (F12)
- [ ] All routes work (e.g., `/services`, `/contact`)
- [ ] CSS and images load correctly


