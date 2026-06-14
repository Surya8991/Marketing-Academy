const fs = require('fs');
const path = require('path');

const curriculumContent = fs.readFileSync(path.join(__dirname, '..', 'src', 'lib', 'curriculum.ts'), 'utf-8');

// Simple regex to parse categories and lessons from curriculum.ts
const categoryRegex = /slug:\s*"([^"]+)"[\s\S]*?lessons:\s*\[([\s\S]*?)\]/g;
const lessonRegex = /slug:\s*"([^"]+)"/g;

let match;
let missingFiles = [];
let totalCanonical = 0;

while ((match = categoryRegex.exec(curriculumContent)) !== null) {
  const categorySlug = match[1];
  const lessonsBlock = match[2];
  
  let lessonMatch;
  while ((lessonMatch = lessonRegex.exec(lessonsBlock)) !== null) {
    totalCanonical++;
    const lessonSlug = lessonMatch[1];
    const mdxPath = path.join(__dirname, '..', 'src', 'content', categorySlug, `${lessonSlug}.mdx`);
    if (!fs.existsSync(mdxPath)) {
      missingFiles.push(`${categorySlug}/${lessonSlug}`);
    }
  }
}

console.log(`Total canonical lessons in curriculum.ts: ${totalCanonical}`);
console.log(`Missing MDX files for canonical lessons: ${missingFiles.length}`);
if (missingFiles.length > 0) {
  console.log('Missing files:', missingFiles);
}
