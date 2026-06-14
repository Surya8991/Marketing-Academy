const fs = require('fs');
const path = require('path');

try {
  const content = fs.readFileSync(path.join(__dirname, '../src/lib/quizzes.ts'), 'utf8');
  const startMarker = 'export const QUIZZES: Record<string, Quiz[]> =';
  const startIdx = content.indexOf(startMarker);
  if (startIdx === -1) {
    throw new Error('Could not find QUIZZES definition in quizzes.ts');
  }
  const objectStr = content.substring(startIdx + startMarker.length);
  
  // Clean up trailing semicolon if any
  let cleanObjectStr = objectStr.trim();
  if (cleanObjectStr.endsWith(';')) {
    cleanObjectStr = cleanObjectStr.substring(0, cleanObjectStr.length - 1);
  }

  const QUIZZES = eval(`(${cleanObjectStr})`);

  fs.mkdirSync(path.join(__dirname, '../src/lib/quizzes_batches'), { recursive: true });
  fs.writeFileSync(
    path.join(__dirname, '../src/lib/quizzes_batches/existing.json'),
    JSON.stringify(QUIZZES, null, 2),
    'utf8'
  );
  console.log(`Successfully extracted ${Object.keys(QUIZZES).length} existing quizzes to existing.json`);
} catch (error) {
  console.error('Extraction failed:', error);
  process.exit(1);
}
