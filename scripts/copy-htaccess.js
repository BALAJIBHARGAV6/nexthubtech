import { copyFileSync, existsSync, mkdirSync, readdirSync, rmSync, statSync } from 'fs';
import { join } from 'path';

const sourceFile = '.htaccess';
const distDir = 'dist';
const publicHtmlDir = 'public_html';
const distFile = join(distDir, '.htaccess');

// Recursive copy function
const copyRecursive = (src, dest) => {
  const entries = readdirSync(src, { withFileTypes: true });
  mkdirSync(dest, { recursive: true });
  
  for (const entry of entries) {
    const srcPath = join(src, entry.name);
    const destPath = join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      copyFileSync(srcPath, destPath);
    }
  }
};

try {
  if (!existsSync(sourceFile)) {
    console.warn('Warning: .htaccess file not found in root directory');
    process.exit(0);
  }

  if (!existsSync(distDir)) {
    console.error('Error: dist directory not found. Run "npm run build" first.');
    process.exit(1);
  }

  // Copy .htaccess to dist
  copyFileSync(sourceFile, distFile);
  console.log('✓ .htaccess file copied to dist directory');

  // Create public_html folder structure for Hostinger
  if (existsSync(publicHtmlDir)) {
    // Remove existing public_html to ensure clean copy
    rmSync(publicHtmlDir, { recursive: true, force: true });
  }
  
  // Copy all files from dist to public_html
  copyRecursive(distDir, publicHtmlDir);
  console.log('✓ Hostinger-ready public_html folder created');
  console.log('  → Upload the contents of "public_html" folder to Hostinger');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}

