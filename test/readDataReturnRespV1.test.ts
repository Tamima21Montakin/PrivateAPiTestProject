import * as fs from 'fs';
import * as path from 'path';
import Ajv from 'ajv';
import { readRequest } from '@util';
//@ts-ignore
import * as readline from 'readline';
//@ts-ignore
import * as jobSchema from '..//scripts/json_schemas/JobSchema.json';

// Define the type for the CSV data
type CsvData = {
  resource: number;
  idList: number;
  fields: string;
};

type JsonData = {
  resource: number;
  idList: number[];
  fields: string;
};

let res:Response;
const ajv = new Ajv();
ajv.addVocabulary(["version","total"]);
// Function to read and parse CSV file
function readCsvFile(csvFilePath: string): CsvData[] {
  const data = fs.readFileSync(csvFilePath, 'utf8');
  const lines = data.trim().split('\n');
  const rows: CsvData[] = lines.map(line => {
    const [resource, idList, fields] = line.split(',');
    return {
      resource: Number(resource),
      idList: Number(idList),
      fields: fields.replace(/\r/g, '')
    };
  });
  return rows;
}

// @ts-ignore
function processCsvFileForSingleField(rows: CsvData[]): JsonData[] {
  const resultMap: { [key: string]: JsonData } = {};

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

// @ts-ignore
function processCsvFileForMultipleFields(rows: CsvData[]): JsonData[] {
  const resultMap: { [key: string]: JsonData } = {};

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
    } else {
      // for resource with multiple fields in a single request
      resultMap[key].fields += `,${row.fields}`;
    }
  });

  // Convert resultMap values to array
  return Object.values(resultMap);
}

// D:/tasks/Generate CSV files for generic resource
const csvFilePath = path.join(__dirname, '..', 'scripts/files', 'job_res.csv');
const getCsvdata = readCsvFile(csvFilePath);

// Single fields
const jsonResult = processCsvFileForSingleField(getCsvdata);

// Multiple fields
// const jsonResult = processCsvFileForMultipleFields(getCsvdata);

// for (let i = 0; i < jsonResult.length; i++) {
//   describe('[E1]generic/resource-record READ_test_case - ' + (i + 1), () => {
//     describe('[M1]HTTP POST', () => {
//     it('Confirm that a normal result is returned for the generic resource : ' + jsonResult[i].resource + '.' + jsonResult[i].fields + ' (' + jsonResult[i].idList + ')', async () => {
//       const res = await readRequest(jsonResult[i]);
//       console.log('The request body in JSON: \n', jsonResult[i]);
//       console.log('The response body in JSON: \n', await res.json());
//       expect(res.status).toBe(200);
//     });
//   });
//   });
// }


  describe.each(jsonResult)('[E1]generic/resource-record READ_test_case -  ', (jsondata) => {

    describe('[T1]HTTP POST TEST-> '+jsondata.resource+'-'+jsondata.fields+'-'+jsondata.idList, () => {
    it('Confirm that a normal result is returned for the generic resource', async () => {
      res = await readRequest(jsondata);
      console.log('[T1] The request body in JSON: \n', jsondata);
      console.log('[T1] The response body in JSON: \n', await res.json());
      expect(res.status).toBe(200);
    });
  });

  describe('[T2] RESPONSE DATA VALIDATION TEST FOR -> '+jsondata.resource+'-'+jsondata.fields+'-'+jsondata.idList, () => {
    it('Return expected response for the generic resource fields', async () => {
      res = await readRequest(jsondata);
      console.log('[T2] The request body in JSON: \n', jsondata);    
      const validate = ajv.compile(jobSchema);
      const output = await res.json();
      const valid = validate(output);
      console.log('[T2] Field is',valid);
      console.log('[T2] The response body in JSON: \n', output);            
      expect(valid).toBe(true); 
    });
  });
  });




