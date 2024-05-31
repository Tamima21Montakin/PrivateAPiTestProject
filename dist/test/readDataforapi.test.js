import * as fs from 'fs';
import * as path from 'path';
import * as Papa from 'papaparse';
// Function to read and parse CSV file
const readCsvFile = (filePath) => {
    return new Promise((resolve, reject) => {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        Papa.parse(fileContent, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                resolve(results.data);
            },
            //   error: (error) => {
            //     reject(error);
            //   }
        });
    });
};
// Function to process CSV data
const processCsvData = (data) => {
    const result = {};
    data.forEach(row => {
        const { resource, idList, fields } = row;
        if (!result[resource]) {
            result[resource] = {};
        }
        if (!result[resource][idList]) {
            result[resource][idList] = [];
        }
        result[resource][idList].push(fields);
    });
    return result;
};
// Usage example
const filePath = path.join(__dirname, 'your-file.csv'); // Adjust the path to your CSV file
readCsvFile(filePath)
    .then((data) => {
    const processedData = processCsvData(data);
    console.log('Processed Data:', JSON.stringify(processedData, null, 2));
})
    .catch((error) => {
    console.error('Error reading CSV file:', error);
});
//# sourceMappingURL=readDataforapi.test.js.map