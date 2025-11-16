import * as fs from 'fs';
import * as path from 'path';
// Read a file asynchronously
async function readFileAsync(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    });
}
// Write to a file
function writeToFile(filePath, content) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`File written to ${filePath}`);
}
// Example usage
const filePath = path.join(__dirname, 'example.txt');
writeToFile(filePath, 'Hello from Node.js with TypeScript!');
readFileAsync(filePath)
    .then((content) => {
    console.log('File content:', content);
})
    .catch((error) => {
    console.error('Error reading file:', error);
});
