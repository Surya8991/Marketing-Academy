const fs = require('fs');
const path = require('path');

try {
  const curriculumContent = fs.readFileSync(path.join(__dirname, '../src/lib/curriculum.ts'), 'utf8');
  
  const categories = [];
  const lines = curriculumContent.split('\n');
  let currentCategory = null;
  let inLessons = false;
  
  for (const line of lines) {
    const catMatch = line.match(/^\s*slug:\s*"([a-z0-9\-]+)",/);
    if (catMatch && !inLessons && !currentCategory) {
      currentCategory = { slug: catMatch[1], lessons: [] };
    }
    
    if (line.includes('lessons: [')) {
      inLessons = true;
    }
    
    if (inLessons) {
      const lessonMatch = line.match(/slug:\s*"([a-z0-9\-]+)"/);
      if (lessonMatch) {
        currentCategory.lessons.push(lessonMatch[1]);
      }
    }
    
    if (inLessons && line.includes('],')) {
      inLessons = false;
      if (currentCategory) {
        categories.push(currentCategory);
        currentCategory = null;
      }
    }
  }

  console.log(`Loaded ${categories.length} categories.`);
  
  const existingPath = path.join(__dirname, '../src/lib/quizzes_batches/existing.json');
  const existingQuizzes = JSON.parse(fs.readFileSync(existingPath, 'utf8'));

  const missingBySlug = {};
  let totalCanonical = 0;
  let totalMissing = 0;

  for (const cat of categories) {
    missingBySlug[cat.slug] = [];
    for (const lesSlug of cat.lessons) {
      totalCanonical++;
      const fullSlug = `${cat.slug}/${lesSlug}`;
      if (!existingQuizzes[fullSlug]) {
        missingBySlug[cat.slug].push(lesSlug);
        totalMissing++;
      }
    }
  }

  console.log(`Total canonical lessons: ${totalCanonical}`);
  console.log(`Total lessons with quizzes: ${totalCanonical - totalMissing}`);
  console.log(`Total lessons missing quizzes: ${totalMissing}`);

  fs.mkdirSync(path.join(__dirname, '../src/lib/quizzes_batches'), { recursive: true });
  fs.writeFileSync(
    path.join(__dirname, '../src/lib/quizzes_batches/missing_quizzes.json'),
    JSON.stringify(missingBySlug, null, 2),
    'utf8'
  );
  console.log('Successfully wrote missing_quizzes.json list.');
} catch (error) {
  console.error('Check failed:', error);
  process.exit(1);
}
