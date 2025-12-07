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
  console.log('=== Add New Project ===\n');

  const title = await question('Project title: ');
  const description = await question('Description: ');
  const tags = await question('Tags (comma-separated): ');
  const github = await question('GitHub URL (optional): ');
  const demo = await question('Demo URL (optional): ');
  const featured = await question('Featured? (y/n): ');

  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const date = new Date().toISOString().split('T')[0];

  const content = `---
title: "${title}"
description: "${description}"
date: "${date}"
featured: ${featured.toLowerCase() === 'y'}
image: "/images/${slug}.png"
tags: [${tags.split(',').map(t => `"${t.trim()}"`).join(', ')}]
github: "${github}"
demo: "${demo}"
---

## Project Overview

Add your project overview here...

## Features

- Feature 1
- Feature 2
- Feature 3

## Technologies Used

List the technologies you used...

## Challenges & Solutions

Describe challenges and solutions...
`;

  const projectsDir = path.join(process.cwd(), 'content', 'projects');
  if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
  }

  const filePath = path.join(projectsDir, `${slug}.md`);
  fs.writeFileSync(filePath, content);

  console.log(`\n✓ Project created: ${filePath}`);
  console.log(`\nDon't forget to add an image at: public/images/${slug}.png`);

  rl.close();
}

main().catch(console.error);
