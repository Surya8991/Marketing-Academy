const fs = require('fs');
const path = require('path');

try {
  const SKIP_FILES = ['existing.json', 'missing_quizzes.json'];
  const dirPath = path.join(__dirname, '../src/lib/quizzes_batches');
  const files = fs.readdirSync(dirPath).filter(f => f.endsWith('.json') && !SKIP_FILES.includes(f));

  let consolidated = {};

  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    console.log(`Merging ${file} with ${Object.keys(content).length} quizzes...`);
    
    for (const [key, quizzes] of Object.entries(content)) {
      consolidated[key] = quizzes;
    }
  }

  // Sort keys alphabetically
  const sortedKeys = Object.keys(consolidated).sort();
  const sortedConsolidated = {};
  for (const key of sortedKeys) {
    sortedConsolidated[key] = consolidated[key];
  }

  // Generate quizzes.ts content
  let tsContent = `export type Quiz = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export const QUIZZES: Record<string, Quiz[]> = {
`;

  for (const [key, quizzes] of Object.entries(sortedConsolidated)) {
    tsContent += `  "${key}": [\n`;
    for (const q of quizzes) {
      tsContent += `    {\n`;
      // Escape question and explanations for JS string templates (if any quotes exist)
      // Wait, we can use JSON.stringify to format individual properties safely!
      tsContent += `      question: ${JSON.stringify(q.question)},\n`;
      tsContent += `      options: [\n`;
      for (const opt of q.options) {
        tsContent += `        ${JSON.stringify(opt)},\n`;
      }
      tsContent += `      ],\n`;
      tsContent += `      correct: ${q.correct},\n`;
      tsContent += `      explanation: ${JSON.stringify(q.explanation)},\n`;
      tsContent += `    },\n`;
    }
    tsContent += `  ],\n\n`;
  }

  tsContent = tsContent.trim();
  tsContent += `\n};\n`;

  // Fix any potential format irregularities (like double spaces or double commas)
  // Ensure trailing comma for every resource/quiz list
  fs.writeFileSync(path.join(__dirname, '../src/lib/quizzes.ts'), tsContent, 'utf8');
  console.log(`Consolidated all quizzes successfully! Total lessons: ${Object.keys(sortedConsolidated).length}`);
} catch (error) {
  console.error('Consolidation failed:', error);
  process.exit(1);
}
