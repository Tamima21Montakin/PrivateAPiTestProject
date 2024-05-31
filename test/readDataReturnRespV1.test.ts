import * as fs from 'fs';
import * as path from 'path';
import { readRequest } from '@util';

// Define the type for the CSV data
type CsvData = {
  resource: number;
  idList: number;
  fields: string;
};

type jsonData = {
  resource: number;
  idList: number[];
  fields: string;
};
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

// @ts-ignore
function processCsvFileForSingleField(rows: CsvData[]): jsonData[] {
  
  const resultMap: { [key: string]: jsonData } = {};

  rows.forEach(row => {
    if (isNaN(row.resource) || isNaN(row.idList)) return;
   
    // Check if there's already an entry for the current `resource` and `fields`
    const key = `${row.fields}`;
    if (!resultMap[key]) {
      // If not, create a new entry
      resultMap[key] = {
        resource: row.resource,
        idList: [row.idList],
        fields: row.fields
      };
    }
  });

  // Convert resultMap values to array
  return Object.values(resultMap);
}


function processCsvFileForMultipleFields(rows: CsvData[]): jsonData[] {
  
    const resultMap: { [key: string]: jsonData } = {};
  
    rows.forEach(row => {
      if (isNaN(row.resource) || isNaN(row.idList)) return;      
   
      // Check if there's already an entry for the current `resource` and `fields`
      const key = `${row.idList}`;
      if (!resultMap[key]) {
        // If not, create a new entry
        resultMap[key] = {
          resource: row.resource,
          idList: [row.idList],
          fields: row.fields
        };
      }else {      
        // for resource with multiple fields in a single request  
        resultMap[key].fields += `,${row.fields}`;
      }  
  
    });
  
    // Convert resultMap values to array
    return Object.values(resultMap);
  }
// D:/tasks/Generate CSV files for generic resource
const csvFilePath = path.join(__dirname, '..', 'scripts/files','job_res.csv');
//path.join('.', 'job_res.csv'); 
const getCsvdata = readCsvFile(csvFilePath);
//single fields
//const jsonResult = processCsvFileForSingleField(getCsvdata);
//multiple fields
const jsonResult = processCsvFileForMultipleFields(getCsvdata);

for(let i = 0; i <jsonResult.length; i++ )
      {
describe('PrivateAPI Generic resource record test case - '+(i+1), () => {
    it('Confirm that a normal result is returned in case of '+'Generic Resource id : '+jsonResult[i].resource +' Field id : '+jsonResult[i].fields+' ID List : '+jsonResult[i].idList, async () => {
       
      
        const res = await readRequest(jsonResult[i]);   
        console.log('The request body in JSON: \n',jsonResult[i]);     
        console.log('The response body in JSON: \n',await res.json());

          
        
    });
});

} 