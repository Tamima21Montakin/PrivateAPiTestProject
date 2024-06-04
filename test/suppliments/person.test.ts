// @ts-ignore
import * as fs from 'fs';
import Ajv from 'ajv';
import * as personSchema from '../../scripts/json_schemas/PersonSchema.json'; // test/PersonSchema.json





const ajv = new Ajv();
// const ajv = new Ajv({strict: 'log'});
ajv.addVocabulary(["version","total"]);




const validCookie = 'HRBCUQ=cf3fa5f90320df8bb43576f6724bc96b; _uetvid=4b5d1120daa611ee9187bdfdfe93e8f6; _fbp=fb.3.1709611826606.1665925065; __uuidusoner=ab126837-d306-4687-b298-7a8eec9e984a; _im_vid=01HR6CWG0J7VF1TEG7PKSJFWKH; _uetsid=c57b3c00215e11efa12d8d6cbf667731; _gcl_au=1.1.478789005.1717395019; _clck=kg68o5%7C2%7Cfmc%7C0%7C1525; _clsk=xmyzu1%7C1717472487550%7C1%7C1%7Ct.clarity.ms%2Fcollect; YII_CSRF_TOKEN=2d2d8d83781026e0b6728c369f8029f0acae065ds%3A40%3A%22043e5a918b270a913490d0a72b0774beba7132e7%22%3B; _ga=GA1.1.263064546.1709611825; _gid=GA1.1.1103105475.1717387640; _ga_LHX1F20B6L=GS1.1.1717488932.51.0.1717488932.0.0.0; _ga_GTFG9D7K5J=GS1.1.1717488932.51.0.1717488932.0.0.0; HRBCACCOUNT=10002-1; HRBCAUTH=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvbXBhbnlJZCI6MTAwMDIsInVzZXJJZCI6MSwic2Vzc2lvbktleSI6ImQyYmU3MzJiIiwiYWZ0ZXJMb2dpbkNoZWNrRmxhZyI6dHJ1ZX0sImV4cCI6MTcxNzQ4OTU0MywiaWR0IjoxNzE3NTAwMzQzfQ.V-GEEaCNFhYsuyet5m-9gHNYQ-o1t7WJkYhUSJi7EuOCSqSgpkV9qpp9ws8zJXEdjOV7XWx9HKfNjuAJAZZ9_P0UkbO6vfW30fPX8zx65H2-Z-w1_haVPWhL8UJKCVJCoMPUwCGvRniu4HK-BTxEhLOLE6rdMDwLRW_Urn4LStLLta6CZn12DK20XqCB8JqFduTz6cEUz4N8oFP4FjV5HcWRdjWvhQ_I5xYWeYl9BuiuQb31rr3KSWIhU7Zy5LlWu0wjBZDXOQdSAjdyAyQ38ZTE0uisSDnfR117zLgocs20xsee3s8SgpkyGd57mc5JB8AnLygFHjqJ-dBFNCDLXA; _ga_YE05J2N37C=GS1.1.1717488932.53.1.1717488943.49.0.0; _ga_Q0E6PC7H6Z=GS1.1.1717488925.88.1.1717488965.0.0.0; _gat=1';
//@ts-ignore
const invalidCookie = 'HRBCAUTH=eyJhbGciOiJsUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvbXBhbnlJZCI6MTAwMDIsInVzZXJJZCI6MSwic2Vzc2lvbktleSI6ImRmZmU2YmRlIiwiYWZ0ZXJMb2dpbkNoZWNrRmxhZyI6dHJ1ZX0sImV4cCI6MTcxNzQwNzg5NiwiaWR0IjoxNzE3NDE4Njk2fQ.dZu4bwh-tKGauC1AU7hiX1H_KzKLAZje_ikLEJxJcySJes0ii0pg4e48pyvtg2XeQ0072jn5LDFCYOhTDVGqcdCbFSB8Y27PHdyve5l7RzYr3TX77xXl4_u6Gh7_P0Y5Tra6yim_tuqLQU95HReRqJofj6BDvz5BKtehCpC43e3ZQa8fdQmfe2hLE7aAf_eBpOa5uThVu46bw9NRDcNzKf7gXbroCDqFBnPZ7cmHRKvZ6Q5qnCrY9iRp7_dW3z1Y91t59F7JQ1xbbuO46rhLqychLlkiESwwmWRPDMQnWrONaJl0Q6BcJgeOUUyZgUtR2KoYOPkBao8ZNI9lY5CxVA';
const resourceIds = [1];
const id = 10003;
const fields = ['Person.P_City',' Person.P_Clip',' Person.P_Country',' Person.P_Deleted',' Person.P_Fax',' Person.P_Id',' Person.P_Mail',' Person.P_Memo',' Person.P_Mobile',' Person.P_MobileMail',' Person.P_Name',' Person.P_Owner',' Person.P_Phase',' Person.P_PhaseDate',' Person.P_PhaseMemo',' Person.P_PkmAddress',' Person.P_PkmGeoLat',' Person.P_PkmGeoLon',' Person.P_PkmNearestStation',' Person.P_Prefecture',' Person.P_Reading',' Person.P_RegisteredBy',' Person.P_RegistrationDate',' Person.P_Street',' Person.P_Telephone',' Person.P_UpdateDate',' Person.P_UpdatedBy',' Person.P_Zipcode'];
    // ['Job.P_Area','Job.P_AreaSummary','Job.P_Benefits','Job.P_CapitalText','Job.P_CityReference','Job.P_Client','Job.P_Clip','Job.P_CountryReference','Job.P_Deleted','Job.P_EmploymentPeriod','Job.P_EmploymentType','Job.P_EstablishmentDateText','Job.P_ExpectedAgeReason','Job.P_FaxReference','Job.P_Holidays','Job.P_Id','Job.P_Industry','Job.P_IndustrySummary','Job.P_JobCategory','Job.P_JobCategorySummary','Job.P_Mail','Job.P_MaxSalary','Job.P_Memo','Job.P_MinSalary','Job.P_MobileMail','Job.P_MobileReference','Job.P_Owner','Job.P_PayrollsText','Job.P_Phase','Job.P_PhaseDate','Job.P_PhaseMemo','Job.P_PkmAddress','Job.P_PkmGeoLat','Job.P_PkmGeoLon','Job.P_PkmNearestStation','Job.P_Position','Job.P_PrefectureReference','Job.P_PubliclyTraded','Job.P_Publish','Job.P_Recruiter','Job.P_RegisteredBy','Job.P_RegistrationDate','Job.P_ReverseProcessLink','Job.P_SalarySummary','Job.P_SalesAmountText','Job.P_StreetReference','Job.P_TelephoneReference','Job.P_UpdateDate','Job.P_UpdatedBy','Job.P_WokingHours','Job.P_ZipcodeReference']];

describe('[EP0001]getGenericResource ', () =>{

    describe('Positive Scenarios - ',()=>{
        
        describe.each(resourceIds)('For resource [R1]Candidate/Person', (resourceId)=>{
            
    
            it.each(fields)('[PT0001]returns expected response for field - %s ',async (field) =>{
                let payload = {"resource":resourceId,"idList":[id],"fields":field};
                const res = await fetch('http://127.0.10.10/privateapi/generic/resource-record/method/get',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json',
                        'cookie': validCookie
                    },
                    body: JSON.stringify(payload)
                });
                expect(res.status).toBe(200);            
                // console.log(await res.body);
              //  const personSchema = await import('scripts/json_schemas/PersonSchema.json');
              
                const validate = ajv.compile(personSchema);
                const output = await res.json();
                console.log(output);
                const valid = validate(output);
                console.log(valid);            
                expect(valid).toBe(true);    
            });
        });

    });

    describe('Negative Scenarios - ',()=>{
        it('[NT0002] Unauthorized access fails - ',async () =>{
            let payload = {"resource":1,"idList":[id],"fields":""};
            const res = await fetch('http://127.0.10.10/privateapi/generic/resource-record/method/get',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                    'cookie': invalidCookie
                },
                body: JSON.stringify(payload)
            });
            expect(res.status).toBe(401);
        });

        it('[NT0003] Malformed requests area not accepted - ',async () =>{
            let payload = {"resource":1,"idList":[],"fields":""};
            const res = await fetch('http://127.0.10.10/privateapi/generic/resource-record/method/get',{
                method:'POST',
                headers:{
                    'content-type':'application/json',
                    'cookie': validCookie
                },
                body: JSON.stringify(payload)
            });
            expect(res.status).toBe(400);
        });

    //     it('[NT0004] Unhandled requests throws internal server error - ',async () =>{
    //         let payload = {"resource":1,"idList":[10003],"fields":"Random.Field"};
    //         const res = await fetch('http://127.0.10.10/privateapi/generic/resource-record/method/get',{
    //             method:'POST',
    //             headers:{
    //                 'content-type':'application/json',
    //                 'cookie': validCookie
    //             },
    //             body: JSON.stringify(payload)
    //         });
    //         expect(res.status).toBe(500);
    //     });

    });

});