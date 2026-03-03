import {test, expect } from '@playwright/test';

import { stringFormat } from '../util/common';

const bookingAPIRequestBody = require('../test-data/post_dynamic_request_body.json')

test('Create API GET Request', async ({request}) => {
   //pass the runtime data to post_dynamic_request_body.json file
    const dynamicRequestBody = stringFormat(JSON.stringify(bookingAPIRequestBody),"Andy", "Raisin", "Patriot"); //pass string values to the post object in dynamic request body and convert them to JSON

   // create POST API request to pass the values
   const postAPIResponse = await request.post('https://restful-booker.herokuapp.com/booking/', {
         data: JSON.parse(dynamicRequestBody)
   })

   
    const postAPIResponseBody = await postAPIResponse.json();
    console.log(postAPIResponseBody);

     //check response contains some text
    const value = await postAPIResponse.text();
    expect(value).toContain("Andy");

   //write response on the console
    console.log(await postAPIResponse.json());

   //validate JSON api response
   expect(postAPIResponseBody.booking).toHaveProperty("firstname", "Andy");
   expect(postAPIResponseBody.booking).toHaveProperty("lastname", "Raisin");
    const bID = postAPIResponseBody.bookingid;
    
    console.log("================Response of GET request===============================");
    
   //send a GET request passing bookingID
    const getAPIresponse = await request.get(`https://restful-booker.herokuapp.com/booking/${bID}`);
    console.log(await getAPIresponse.json());
    

   //verify the status code of the response is 200
    expect(getAPIresponse.status()).toBe(200);
    expect(getAPIresponse.ok).toBeTruthy();
  
  
})