require('dotenv').config();
import cheerio from 'cheerio';

//const loginendpoint = 'http://127.0.10.10/index/login';
 const endpoint = 'http://127.0.10.10/privateapi/generic/resource-record/method/get';

let csrfToken: any;
let setCookieVal: string;
 const loginendpoint = process.env.LOGINENDPOINT as string;
// console.log('*** Get port value from environment file', loginendpoint);

describe('Login attempt -', () => {
  it('[TS001] Get the CSRF Value  - ', async () => {
    // Step 1: Fetch the HTML content
    const response = await fetch(loginendpoint);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const htmlText = await response.text();
    const $ = cheerio.load(htmlText);
    // Step 3: Get the CSRF token value
    csrfToken = $('input[name="YII_CSRF_TOKEN"]').val() as string;
    //console.log('Get CSRF value', csrfToken);

  });
  it('[TS002] Login attempt with form data  - ', async () => {
    const payload = 'Model_LoginForm[company_login_id]=TestCompanyEn&Model_LoginForm[username]=test@porters.jp&Model_LoginForm[password]=password&YII_CSRF_TOKEN=' + csrfToken;

    const res = await fetch(loginendpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams(payload),
      redirect: 'manual'
    });

    const cookieVal = res.headers.get('set-cookie');
    setCookieVal = cookieVal ? cookieVal.split(',').map(cookie => cookie.split(';')[0]).join('; ') : '';



    expect(res.status).toBe(302);

  });

  it('[TS003] returns expected response for field  - ', async () => {

    const payload = { resource: 3, idList: [11024], fields: 'Job.P_Id' };
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        cookie: setCookieVal
      },
      body: JSON.stringify(payload)
    });
    const responseBody = await res.text();
    console.log('Response body:', responseBody);
    expect(res.status).toBe(200);

  });


});

// run the code : npx jest login.test.ts