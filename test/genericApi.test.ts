describe('testing', () =>{
    it('gets data', async()=>{
        const data = {"resource":11,"idList":[10002],"fields":"Sales.P_Id,Sales.P_Deleted"};
        let res = await fetch('http://127.0.10.10/privateapi/generic/resource-record/method/get',{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'cookie':'HRBCUQ=cf3fa5f90320df8bb43576f6724bc96b; _gcl_au=1.1.1280184019.1709611825; _uetvid=4b5d1120daa611ee9187bdfdfe93e8f6; _fbp=fb.3.1709611826606.1665925065; __uuidusoner=ab126837-d306-4687-b298-7a8eec9e984a; _im_vid=01HR6CWG0J7VF1TEG7PKSJFWKH; _uetsid=2f69c0a01bda11ef906d1521344554e1; _clck=kg68o5%7C2%7Cfm6%7C0%7C1525; YII_CSRF_TOKEN=ced6aa3a6105f2bb0433ec926f2d88379ed44de6s%3A40%3A%226d61d9f3e7cd469baae364194f03c01c212d6db5%22%3B; _ga=GA1.1.263064546.1709611825; _gid=GA1.1.406990286.1716780934; _ga_LHX1F20B6L=GS1.1.1717058895.44.0.1717058895.0.0.0; _ga_GTFG9D7K5J=GS1.1.1717058896.44.0.1717058896.0.0.0; HRBCACCOUNT=10002-1; _ga_YE05J2N37C=GS1.1.1717058893.46.1.1717058908.45.0.0; HRBCAUTH=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImNvbXBhbnlJZCI6MTAwMDIsInVzZXJJZCI6MSwic2Vzc2lvbktleSI6ImQ1MmJlMjJmIiwiYWZ0ZXJMb2dpbkNoZWNrRmxhZyI6dHJ1ZX0sImV4cCI6MTcxNzA2NjQ3NCwiaWR0IjoxNzE3MDc3Mjc0fQ.M-0skXPY831DdgDYxEUnj908jq2B2Pda2u85YZu21-f5qBIQ8wMcDRDX8Iyh95h-DEUMxxmnQGXIb-6x-tS08zryERYPFm7wGNAJpQ6llCx6TBeZledysIsCYtGgCEKP8eB8IexathypSnagVWYGt4cy6Cz-1eGe1ySa5vy0P_CQPau5X5xEhqFfBXatgmpPrZX7qe83UAkKlXN5uWAdquyY6uyCTReJSlt9B0GRDBx1s2PEn_5NOwtDxyFdpIrmzKKFAiUTwz9Bt1MaUzqPwi8vdmI6-qUegmZZL2vouyLleMaI1Vkt25PzE0CpwRE4uc_KjowqcW8jf4QpFRN_bw; _gat=1; _ga_Q0E6PC7H6Z=GS1.1.1717065875.76.1.1717066245.0.0.0'
            },
            body: JSON.stringify(data)
        });
        // .then(resp=>resp.json()).then(data=>{console.log(data);})

        console.log(await res.json());
    });
});