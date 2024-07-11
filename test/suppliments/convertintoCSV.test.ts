import * as fs from 'fs';
import * as path from 'path';

// Specify the input file path
const inputFilePath = path.join('D:/tasks/TestCase_Files/New folder', 'columns.txt');  // Replace with your input file path

// Function to convert table-like data to CSV format
async function convertToCSV(inputFilePath: string) {
    try {
        // Read input data from file
        const inputData = await fs.promises.readFile(inputFilePath, 'utf-8');

        // Split the input into lines
        const lines = inputData.trim().split('\n');

        // Extract header (first line) and rows (remaining lines)
        const header = lines[0].trim().slice(1, -1).split(' | ');
        const rows = lines.slice(2, -1).map(line => line.trim().slice(1, -1).split(' | '));

        // Convert rows to CSV format
        const csvData = `${header.join(',')}\n${rows.map(row => row.join(',')).join('\n')}`;

        // Output the CSV data to a file
        const outputFilePath = 'D:/tasks/TestCase_Files//New folder/columns.csv'; // Replace with your desired file path
        await fs.promises.writeFile(outputFilePath, csvData);

        console.log(`CSV data written to ${outputFilePath}`);
    } catch (error) {
        console.error('Error processing file:', error);
    }
}

// Call the function to convert and write to CSV
convertToCSV(inputFilePath);
