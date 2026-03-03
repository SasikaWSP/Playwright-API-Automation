const {test, expect} = require('@playwright/test')

//create a variable to read the JSON file
const bookingAPIRequestBody = require('../test-data/post_request_body.json');

test('Create POST API request using static JSON file' , async({request}) => {  //request object is used to make API calls: GET, POST ..
   //API POST resquest
    const postAPIResponse= await request.post('https://restful-booker.herokuapp.com/booking', {
        
        data: bookingAPIRequestBody //pass the variable to post request variable
        
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