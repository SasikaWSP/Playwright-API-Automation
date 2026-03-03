import {test, expect } from '@playwright/test';

test('Create API GET Request for Booking IDs', async ({request}) => {
   //send a GET request & store response in a variable
    const response = await request.get('https://restful-booker.herokuapp.com/booking');
   
   //verify the status code of the response is 200
    expect(response.status()).toBe(200);
    expect(response.ok).toBeTruthy();
  
   //check response contains some text
    const value = await response.text();
    expect(value).toContain('bookingid');

   //write response on the console
    console.log(response.json());
})