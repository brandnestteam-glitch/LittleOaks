const fs = require('fs');
const path = require('path');

const srcDir = 'd:/Website/LittleOaks/temp_extract/images/WhatsApp Unknown 2026-05-24 at 12.56.35 PM';
const destDir = path.join(__dirname, 'public/gallery');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

const files = fs.readdirSync(srcDir).filter(file => file.endsWith('.jpeg') || file.endsWith('.jpg') || file.endsWith('.png'));

files.forEach((file, index) => {
  const srcPath = path.join(srcDir, file);
  // Keep original extension
  const ext = path.extname(file);
  const destPath = path.join(destDir, `gallery_img_${index + 1}${ext}`);
  
  fs.copyFileSync(srcPath, destPath);
  console.log(`Copied ${file} to gallery_img_${index + 1}${ext}`);
});

console.log('All images copied successfully!');
