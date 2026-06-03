const fs = require('fs');
const { PDFDocument } = require('pdf-lib');

async function createPdf() {
  const imagePath = 'public/Brochure.jpeg';
  const outputPath = 'public/Brochure.pdf';

  if (!fs.existsSync(imagePath)) {
    console.error(`Image not found: ${imagePath}`);
    return;
  }

  const imageBytes = fs.readFileSync(imagePath);
  const pdfDoc = await PDFDocument.create();
  
  // Embed the JPEG image
  const image = await pdfDoc.embedJpg(imageBytes);
  
  // Get image dimensions
  const { width, height } = image.scale(1);
  
  // Create a page matching the image dimensions
  const page = pdfDoc.addPage([width, height]);
  
  // Draw the image on the page
  page.drawImage(image, {
    x: 0,
    y: 0,
    width,
    height,
  });

  // Save the PDF
  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(outputPath, pdfBytes);
  console.log(`Successfully created ${outputPath}`);
}

createPdf().catch(console.error);
