const { QUIZZES } = require('../src/lib/quizzes');
const { CATEGORIES } = require('../src/lib/curriculum');
const fs = require('fs');
const path = require('path');

console.log('Total quizzes in quizzes.ts:', Object.keys(QUIZZES).length);

let missingQuizzes = [];
let canonicalCount = 0;

for (const cat of CATEGORIES) {
  for (const lesson of cat.lessons) {
    canonicalCount++;
    const key = `${cat.slug}/${lesson.slug}`;
    if (!QUIZZES[key]) {
      missingQuizzes.push(key);
    }
  }
}

console.log(`Canonical lessons: ${canonicalCount}`);
console.log(`Missing quizzes for canonical lessons: ${missingQuizzes.length}`);
if (missingQuizzes.length > 0) {
  console.log('Missing keys:', missingQuizzes);
}

// Check if any keys in QUIZZES do not correspond to MDX files on disk
let orphanedQuizzes = [];
for (const key of Object.keys(QUIZZES)) {
  const filePath = path.join(__dirname, '..', 'src', 'content', `${key}.mdx`);
  if (!fs.existsSync(filePath)) {
    orphanedQuizzes.push(key);
  }
}

console.log(`Orphaned quiz keys (no MDX file on disk): ${orphanedQuizzes.length}`);
if (orphanedQuizzes.length > 0) {
  console.log('Orphaned keys:', orphanedQuizzes);
}
