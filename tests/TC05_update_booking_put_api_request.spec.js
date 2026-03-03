import {test, expect} from '@playwright/test';

test('Create API PUT Request', async({request}) => {
   //API PUT request
    const putReponse = await request.put('https://restful-booker.herokuapp.com/booking/1178', {
        date: {
            "firstname": "Sandy",
            "lastname": "Rose",
            "totalprice": 111,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2021-11-01",
                "checkout": "2022-01-01"
            },
            "additionalneeds": "super bowls"

        }
    })

    //verify the status code of the response is 200
    expect(response.status()).toBe(200);
    expect(response.ok).toBeTruthy();
  
   //check response contains some text
    const value = await response.text();
    expect(value).toContain('Sandy');

   //write response on the console
    console.log(response.json());


})