// const promises;
const { readFile } = require('fs/promises');
const path = require('path');

// Load configuration
const config = require('./config.json');

// Function to count words in a text
const countWords = (text) => {
  if (!text){
        return 0;
    }else{
        const words = text.trim().split(/\s+/);
        return words.length;
    } 
};

// Read and process files asynchronously
async function readAndProcessFiles(filePaths){
    for(const filePath of filePaths){
        try{
            const data = await readFile(path.resolve(__dirname, filePath), 'utf-8');
            const wordCount = countWords(data);
            console.log(`${filePath}: ${wordCount} words`);

        }catch (error){
            console.error(`Error reading ${filePath}: ${error.message}`);
        }
    }

};


// processing files
const filePaths = config.files;
readAndProcessFiles(filePaths);
