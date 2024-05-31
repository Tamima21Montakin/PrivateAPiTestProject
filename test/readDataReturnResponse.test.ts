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

describe('Confirm that normal results are returned when a fixed Field is specified.', () => {
    it('Confirm that a normal result is returned in case of P_Id', async () => {
       
      const res = await readRequest(jsonResult[0]);   

    //  console.log('Sending the JSON body as request: \n',jsonResult[0]);
      console.log('Sending the JSON body as request: \n',jsonResult);     
      console.log('The response: \n',await res.json());
        
    });
});