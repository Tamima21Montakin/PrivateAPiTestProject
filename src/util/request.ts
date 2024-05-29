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
              'cookie':'HRBCUQ=cf3fa5f90320df8bb43576f6724bc96b; _gcl_au=1.1.1280184019.1709611825; _uetvid=4b5d1120daa611ee9187bdfdfe93e8f6; _fbp=fb.3.1709611826606.1665925065; __uuidusoner=ab126837-d306-4687-b298-7a8eec9e984a; _im_vid=01HR6CWG0J7VF1TEG7PKSJFWKH; _uetsid=2f69c0a01bda11ef906d1521344554e1; _clck=kg68o5%7C2%7Cfm6%7C0%7C1525; YII_CSRF_TOKEN=2021c495420135ecc290b980280fcd23ea4ab141s%3A40%3A%2263465a8fb269e90b61a2cef4a60fac1efd6e2057%22%3B; _ga=GA1.1.263064546.1709611825; _gid=GA1.1.406990286.1716780934; _ga_LHX1F20B6L=GS1.1.1716968492.41.1.1716968515.0.0.0; _ga_GTFG9D7K5J=GS1.1.1716968492.41.1.1716968515.0.0.0; _clsk=a2jrfb%7C1716968517979%7C2%7C1%7Cz.clarity.ms%2Fcollect; _ga_YE05J2N37C=GS1.1.1716968490.43.1.1716968519.31.0.0; HRBCACCOUNT=10002-1; HRBCAUTH=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvbXBhbnlJZCI6MTAwMDIsInVzZXJJZCI6MSwic2Vzc2lvbktleSI6ImM0N2M1NjNjIiwiYWZ0ZXJMb2dpbkNoZWNrRmxhZyI6dHJ1ZX0sImV4cCI6MTcxNjk3MTMwMiwiaWR0IjoxNzE2OTgyMTAyfQ.DjoMU9Gxz0OlMFIb0jEuccPG7ng_yGc6jcSVE9iui2bcatv5zbUIrtE863EKNkuiGztA1QZRgnCrF-hWU0PtoHcUgz8-HIKQNpTy-OHJbXj-m5QT7LMugAtfVnnQkIKLf62NQfvJBjRgjVdiwaTN5sELV3Y2qbhZqMBwVrxmGR38kXun78dhos_FM6TEFqG1Ldu5fQIs8hv8lOmr0IUUT_dIaKj9TDLdOAB04cpGnvoZG6BBfe4Bluf2oF0S505Cd6vMndoPSaNXZT1D4ZJFbktEoqOlnbmWQSNVjW5bCXNuwLAqfHlWzcNk_uQT7jWAxGCq6jElGr-dh9yc8D0sog; _ga_Q0E6PC7H6Z=GS1.1.1716970709.73.1.1716970713.0.0.0'
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
