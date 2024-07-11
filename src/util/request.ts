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
              'cookie': 'HRBCUQ=cf3fa5f90320df8bb43576f6724bc96b; _uetvid=4b5d1120daa611ee9187bdfdfe93e8f6; _fbp=fb.3.1709611826606.1665925065; __uuidusoner=ab126837-d306-4687-b298-7a8eec9e984a; _im_vid=01HR6CWG0J7VF1TEG7PKSJFWKH; _gcl_au=1.1.478789005.1717395019; _uetsid=3289bcc026db11ef92a2273dfcfb6132; YII_CSRF_TOKEN=fec7cf9fb57ddcfeb9fcf2d50a5f8ece8ee14eebs%3A40%3A%222d43fc97b49be082601f9e60d20d0e1107b63de5%22%3B; _ga=GA1.1.263064546.1709611825; _gid=GA1.1.388709735.1717990836; _ga_LHX1F20B6L=GS1.1.1718079065.60.0.1718079065.0.0.0; _ga_GTFG9D7K5J=GS1.1.1718079065.60.0.1718079065.0.0.0; _clck=kg68o5%7C2%7Cfmj%7C0%7C1525; _clsk=194pmoe%7C1718079067274%7C1%7C1%7Cz.clarity.ms%2Fcollect; HRBCACCOUNT=10002-1; _ga_YE05J2N37C=GS1.1.1718079064.62.0.1718079073.51.0.0; _gat=1; HRBCAUTH=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvbXBhbnlJZCI6MTAwMDIsInVzZXJJZCI6MSwic2Vzc2lvbktleSI6ImU1ZTVlNjQ0IiwiYWZ0ZXJMb2dpbkNoZWNrRmxhZyI6dHJ1ZX0sImV4cCI6MTcxODA4ODM4NCwiaWR0IjoxNzE4MDk5MTg0fQ.E3QXYye6jeLepVHolk7FC_uKJHE9-5nh2tsVkMS6b7Kvfy3kAUrvb62v8uOcaNWLukvzi-V7Anvne2MMcgi4W1Cygz739idW_LFJJeDlZMQsFSdYBUGCIIVJScsymyrLEFulxB-nld_ROE-0UZJsxsiNdYtZkpDHhXcryoWSCynzKLFg-CA-OnKvnYJbBmshbGMC2Qxdx8qq8yezmY4RvZ0NIoS2FbwRqDidu7r1NU3VTy0j3H6lyQBTu_AVQUYihGrBVFqxOCoG6VZsYTR2nqf9ynIZcFtn_9wX778GNUjVOt3RZCb8YKsGOOytdvAUZcBm8ye1aUUpdHK3ybkpyw; _ga_Q0E6PC7H6Z=GS1.1.1718087774.100.1.1718087793.0.0.0'
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
