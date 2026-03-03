const {test, expect} = require('@playwright/test')

test('Create POST API request using static request body' , async({request}) => {  //request object is used to make API calls: GET, POST ..
   //API POST resquest
    const postAPIResponse= await request.post('https://restful-booker.herokuapp.com/booking', {
        data: {
            "firstname": "Mandy",
            "lastname": "Rose",
            "totalprice": 1000,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2021-01-01",
                "checkout": "2022-01-01"
            },
            "additionalneeds": "super bowls"
        }
        
    })
   const postAPIResponseBody = await postAPIResponse.json();

   //verify response status code is 200 and ok
   expect(postAPIResponse.status()).toBe(200);
   expect(postAPIResponse.ok()).toBeTruthy();

   //verify response contains some text
   const text = await postAPIResponse.text();
   expect(text).toContain('Mandy');

   //validate JSON API response
   expect(postAPIResponseBody.booking).toHaveProperty("lastname","Rose");

   //write response on the console
   console.log(postAPIResponseBody);

   //validate nested JSON objects
   expect(postAPIResponseBody.booking.bookingdates).toHaveProperty("checkin","2021-01-01");


})