import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const imagesToOptimize = [
  'Airi.png',
  'malinda.png',
  'EASCCA.png',
  'valetxpress.png',
  'aspirevown.png',
  'dentalhub.png',
];

async function run() {
  console.log('--- Starting Image Optimization ---');
  let totalOldBytes = 0;
  let totalNewBytes = 0;

  for (const filename of imagesToOptimize) {
    const inputPath = path.join(publicDir, filename);
    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${inputPath}`);
      continue;
    }

    const oldStat = fs.statSync(inputPath);
    totalOldBytes += oldStat.size;

    const baseName = path.parse(filename).name;
    const outputWebpPath = path.join(publicDir, `${baseName}.webp`);

    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`\nProcessing: ${filename} (Original: ${(oldStat.size / 1024 / 1024).toFixed(2)} MB, ${metadata.width}x${metadata.height})`);

    // Target width: 1440px max (mockup frame viewport is max 600px wide on desktop, so 1440px gives 2.4x retina crispness)
    let pipeline = image;
    if (metadata.width > 1440) {
      pipeline = pipeline.resize({ width: 1440, withoutEnlargement: true });
    }

    await pipeline
      .webp({ quality: 82, effort: 6 })
      .toFile(outputWebpPath);

    const newStat = fs.statSync(outputWebpPath);
    totalNewBytes += newStat.size;

    const savingsPercent = (((oldStat.size - newStat.size) / oldStat.size) * 100).toFixed(1);
    console.log(`-> Saved as: ${baseName}.webp (${(newStat.size / 1024).toFixed(0)} KB) [Saved ${savingsPercent}%!]`);
  }

  console.log('\n======================================');
  console.log(`TOTAL OLD SIZE: ${(totalOldBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`TOTAL NEW SIZE: ${(totalNewBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log(`TOTAL BANDWIDTH SAVED: ${((totalOldBytes - totalNewBytes) / 1024 / 1024).toFixed(2)} MB (${(((totalOldBytes - totalNewBytes) / totalOldBytes) * 100).toFixed(1)}% reduction!)`);
  console.log('======================================');
}

run().catch(console.error);
