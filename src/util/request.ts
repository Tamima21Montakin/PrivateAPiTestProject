const fetch = require('node-fetch');
const READ_URL=`http://127.0.10.10/privateapi/generic/resource-record/method/get`;

/**
 * create dictonary of version based on ids and version value.
 */
export const versions = (ids: number[], version: number): { [key: string]: number } =>
    ids.reduce((dict, id) => {
        dict[id] = version;
        return dict;
    }, {} as { [key: string]: number });
/**
 * create dictonary array of items based on fields and values.
 */
export const items = (fields: string[], values: unknown[]): { [key: string]: unknown }[] =>
    fields.map((key, index) => ({ [key]: values[index] }));

/**
 *  Perform a read request and need to perform validation
 *
 * @param req - the request body
 */

export const readRequest = async (req: unknown): Promise<Response> => {
    try {
        const response = await fetch(READ_URL, {
            method: 'POST',
            headers: {
              'Content-Type':
              'application/json; charset=UTF-8',
              'cookie':'HRBCUQ=cf3fa5f90320df8bb43576f6724bc96b; _uetvid=4b5d1120daa611ee9187bdfdfe93e8f6; _fbp=fb.3.1709611826606.1665925065; __uuidusoner=ab126837-d306-4687-b298-7a8eec9e984a; _im_vid=01HR6CWG0J7VF1TEG7PKSJFWKH; _uetsid=c57b3c00215e11efa12d8d6cbf667731; _gcl_au=1.1.478789005.1717395019; _clck=kg68o5%7C2%7Cfmc%7C0%7C1525; YII_CSRF_TOKEN=2d2d8d83781026e0b6728c369f8029f0acae065ds%3A40%3A%22043e5a918b270a913490d0a72b0774beba7132e7%22%3B; _gat_UA-170070201-1=1; _gat_UA-66726220-1=1; _ga=GA1.1.263064546.1709611825; _gid=GA1.1.1103105475.1717387640; _gat_UA-66726220-2=1; _ga_LHX1F20B6L=GS1.1.1717501915.52.0.1717501915.0.0.0; _ga_GTFG9D7K5J=GS1.1.1717501916.52.0.1717501916.0.0.0; _clsk=onlqsd%7C1717501917651%7C1%7C1%7Ct.clarity.ms%2Fcollect; HRBCACCOUNT=10002-1; HRBCAUTH=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvbXBhbnlJZCI6MTAwMDIsInVzZXJJZCI6MSwic2Vzc2lvbktleSI6ImZkZmQ2ZjllIiwiYWZ0ZXJMb2dpbkNoZWNrRmxhZyI6dHJ1ZX0sImV4cCI6MTcxNzUwMjUyMiwiaWR0IjoxNzE3NTEzMzIyfQ.CLS-QVm_L6KJdFKJjj-hHlornws-kUcimSwGfxkGmWmGOpgoX8gTJgwqD2cxq7FWbjpMkyP3q_VJLBtVKluKRcixBOM5ehZdM-4WuF-azjqr2nSJfhDqE4WFQHHvDcr5DHyRLLA4Mao4UAQXtSbmwTS8owowiS-d6jQd4D7vRpCcsOqX2o5_lFnF66bA0gQnbyfHbP9RZYA5lCrfpTzv7JaHQ22lQ2qpuzJn75oD5nURr3SB5iROGGpsUeWK8ib5yJ5-nLDFgPzEeQE4Hp3eLKiRvF13jZiLvrmWD-ZIxoSxTEPmBNGTnfyUf-4wThSIEfujcMYvJCdPbH76Nimwrg; _ga_YE05J2N37C=GS1.1.1717501915.54.0.1717501922.53.0.0; _gat=1; _ga_Q0E6PC7H6Z=GS1.1.1717501923.89.0.1717501923.0.0.0'
               },
            body: JSON.stringify(req)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return response;
    } catch (error) {
        console.error('Error in readRequest:', error);
        throw error;
    }
};
