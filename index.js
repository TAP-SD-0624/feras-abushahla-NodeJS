const fs = require('fs');
const path = require('path');

// Load configuration
const config = require('./config.json');

// Function to count words in a text
const countWords = (text) => {
  if (!text) return 0;
  const words = text.trim().split(/\s+/);
  return words.length;
};

// Asynchronously read and process files
const processFiles = async (filePaths) => {
  for (const filePath of filePaths) {
    try {
      const data = await fs.promises.readFile(path.resolve(__dirname, filePath), 'utf-8');
      const wordCount = countWords(data);
      console.log(`${filePath}: ${wordCount} words`);
    } catch (error) {
      console.error(`Error reading ${filePath}: ${error.message}`);
    }
  }
};

// Start processing files
const filePaths = config.files;
processFiles(filePaths);
