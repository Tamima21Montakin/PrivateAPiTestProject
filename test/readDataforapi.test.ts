import * as fs from 'fs';
import * as path from 'path';

// Define the type for the CSV data
interface CsvData {
  resource: number;
  idList: number;
  fields: string;
}

interface jsonData {
  resource: number;
  idList: number[];
  fields: string;
}
// Function to read and parse CSV file
function readCsvFile(csvFilePath: string): CsvData[] {
  const data = fs.readFileSync(csvFilePath, 'utf8');
  const lines = data.trim().split('\n');
  const rows: CsvData[] = lines.map(line => {
      const [resource, idList, fields] = line.split(',');
      return {
          resource: Number(resource), idList: Number(idList),  fields: fields.replace(/\r/g, '') 
      };
  });
  return rows;

}

function processCsvFile(rows: CsvData[]): jsonData[] {
  
  const resultMap: { [key: number]: jsonData } = {};

  rows.forEach(row => {
    if (isNaN(row.resource) || isNaN(row.idList)) return;
    
      if (!resultMap[row.idList]) {
          resultMap[row.idList] = {
              resource: row.resource,
              idList: [row.idList],
              fields: row.fields
          };
      } else {
          resultMap[row.idList].fields += `,${row.fields}`;
      }
  });

  return Object.values(resultMap).filter(resultMap => resultMap !== null);
}

const csvFilePath = path.join('D:/tasks/Generate CSV files for generic resource', 'job_res.csv'); 
const getCsvdata = readCsvFile(csvFilePath);
const jsonResult = processCsvFile(getCsvdata);
const finalData = JSON.stringify(jsonResult, null, 2);
console.log('CSV file converted to JSON ',finalData);

