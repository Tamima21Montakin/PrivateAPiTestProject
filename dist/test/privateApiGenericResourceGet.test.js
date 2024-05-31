import { readRequest } from '@util';
describe('Confirm that normal results are returned when a fixed Field is specified.', () => {
    it('Confirm that a normal result is returned in case of P_Id', async () => {
        const data = { "resource": 3, "idList": [10001], "fields": "Job.P_Position,Job.P_Id,Job.P_Deleted" };
        const res = await readRequest(data);
        console.log(await res.json());
    });
});
//# sourceMappingURL=privateApiGenericResourceGet.test.js.map