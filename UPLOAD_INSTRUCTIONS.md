# 🚀 Hostinger Upload Instructions

## ✅ READY TO UPLOAD!

Your website is ready in the **`public_html`** folder. This folder contains everything you need to upload to Hostinger.

---

## 📁 Folder Structure

Your `public_html` folder contains:

```
public_html/
├── .htaccess          ← REQUIRED for React Router
├── index.html         ← Main HTML file
├── assets/            ← CSS and JavaScript
│   ├── index-[hash].css
│   └── index-[hash].js
└── README.txt         ← Upload instructions (delete after reading)
```

---

## 📤 How to Upload to Hostinger

### Method 1: File Manager (Recommended)

1. **Log in to Hostinger**
   - Go to https://hpanel.hostinger.com
   - Log in with your credentials

2. **Open File Manager**
   - Click on **Files** → **File Manager**
   - Navigate to **`public_html`** folder

3. **Upload Files**
   - Click **Upload** button (top menu)
   - Select ALL files and folders from your local `public_html` folder:
     - ✅ `.htaccess` file
     - ✅ `index.html` file
     - ✅ `assets/` folder (upload the entire folder)
   - Wait for upload to complete

4. **Set File Permissions**
   - Right-click on each file/folder:
     - **Files** (`.htaccess`, `index.html`): Set to **644**
     - **Folders** (`assets/`): Set to **755**

### Method 2: FTP (For Large Files)

1. **Get FTP Credentials**
   - Go to hPanel → **Files** → **FTP Accounts**
   - Note your FTP username, password, and server

2. **Connect via FTP Client**
   - Use FileZilla, WinSCP, or any FTP client
   - Connect to your FTP server
   - Navigate to `public_html` folder

3. **Upload Files**
   - Upload all contents from local `public_html` folder
   - Make sure `.htaccess` is uploaded (it's a hidden file)

---

## ⚠️ IMPORTANT NOTES

### ✅ DO THIS:
- Upload the **CONTENTS** of `public_html` folder
- Upload `.htaccess` file (enable "Show Hidden Files" in File Manager)
- Set file permissions correctly
- Upload the entire `assets/` folder

### ❌ DON'T DO THIS:
- Don't upload the `public_html` folder itself
- Don't forget to upload `.htaccess` file
- Don't skip setting file permissions

---

## ✅ After Upload Checklist

- [ ] All files uploaded successfully
- [ ] `.htaccess` file is in `public_html` root
- [ ] File permissions set (644 for files, 755 for folders)
- [ ] Visit your domain: `https://yourdomain.com`
- [ ] Homepage loads correctly
- [ ] Check browser console (F12) for any errors
- [ ] Test a route: `yourdomain.com/services`

---

## 🔧 Troubleshooting

### Blank Page?
1. Open browser console (F12)
2. Check for errors in Console tab
3. Check Network tab for 404 errors
4. Verify `.htaccess` file is uploaded
5. Check file permissions

### Routes Not Working?
- Verify `.htaccess` file is present
- Check file permissions (644)
- Test: `yourdomain.com/services` should work

### Files Not Loading?
- Check Network tab in browser console
- Verify all files from `assets/` folder are uploaded
- Clear browser cache (Ctrl+F5)

---

## 📝 Quick Reference

**File Permissions:**
- Files: `644`
- Folders: `755`

**Expected Structure on Hostinger:**
```
public_html/
├── .htaccess
├── index.html
└── assets/
    ├── index-[hash].css
    └── index-[hash].js
```

---

## 🎉 That's It!

Once uploaded, your React website will be live on Hostinger!

If you need to update your site:
1. Run `npm run build` again
2. Upload new files from `public_html` folder
3. Done!


