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
 *  Perform a read request
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
              'cookie':'HRBCUQ=cf3fa5f90320df8bb43576f6724bc96b; _gcl_au=1.1.1280184019.1709611825; _uetvid=4b5d1120daa611ee9187bdfdfe93e8f6; _fbp=fb.3.1709611826606.1665925065; __uuidusoner=ab126837-d306-4687-b298-7a8eec9e984a; _im_vid=01HR6CWG0J7VF1TEG7PKSJFWKH; _uetsid=2f69c0a01bda11ef906d1521344554e1; YII_CSRF_TOKEN=00997a053923574f39f7aa9b088404e2418e68ees%3A40%3A%226a0a4982028daf20bcb3bbd87361979a70ccda85%22%3B; _clck=kg68o5%7C2%7Cfm8%7C0%7C1525; _ga=GA1.1.263064546.1709611825; _gid=GA1.1.406990286.1716780934; _ga_LHX1F20B6L=GS1.1.1717138080.46.0.1717138080.0.0.0; _ga_GTFG9D7K5J=GS1.1.1717138081.46.0.1717138081.0.0.0; _clsk=7brf5a%7C1717138082143%7C1%7C1%7Cz.clarity.ms%2Fcollect; HRBCACCOUNT=10002-1; _ga_YE05J2N37C=GS1.1.1717138079.48.1.1717138137.2.0.0; HRBCAUTH=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvbXBhbnlJZCI6MTAwMDIsInVzZXJJZCI6MSwic2Vzc2lvbktleSI6IjJjZjM2YTY2IiwiYWZ0ZXJMb2dpbkNoZWNrRmxhZyI6dHJ1ZX0sImV4cCI6MTcxNzE1MDgzMCwiaWR0IjoxNzE3MTYxNjMwfQ.Ks9urV0Qv2ZOMBbZMJcLL7HC6XDx9m6ANKPnG-l8FzSl3FhjlSN9fmZC-UpeYXQ8gBH1PpzRk-ZBirGNcTGBjzS4doduU2mS6RTFNAqjYZ8Ed8PLbgeqOBPVMJpK1G-jY4iJc2zlAMZh5vfuEefiXR0OgUQYXX13_ZoMLjivEFNEzO0CoQ1ROxCbDn_EhcrALYSNq4XTBI2M7-D1oilv97aeG0C3y4ANA3Z2Pqawh4dL8IerxsdgPmLMOO2K93A0i1yyKSHVSv2ZrytttKO_4IT_ga07hWNtEryEXQpWPq-3M4aZ2tbr4WWyx1SXC5iOAkGTpVhTy6Zp1Jg40UiMsw; _ga_Q0E6PC7H6Z=GS1.1.1717150197.81.1.1717150240.0.0.0'
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
