#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('=== Update Resume ===\n');
  console.log('This script will help you replace your resume file.\n');

  const sourcePath = await question('Enter the path to your resume PDF: ');

  if (!fs.existsSync(sourcePath)) {
    console.error('Error: File not found at the specified path.');
    rl.close();
    return;
  }

  const destPath = path.join(process.cwd(), 'public', 'resume.pdf');

  try {
    fs.copyFileSync(sourcePath, destPath);
    console.log('\n✓ Resume updated successfully!');
    console.log(`Location: ${destPath}`);
  } catch (error) {
    console.error('Error copying file:', error.message);
  }

  rl.close();
}

main().catch(console.error);
