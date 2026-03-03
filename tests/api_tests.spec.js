import {test, expect } from '@playwright/test';

test('API GET Request', async ({request}) => {
   //send a GET request & store response in a variable
    const response = await request.get('https://gorest.co.in/public/v2/users');
   
   //verify the status code of the response is 200
    expect(response.status()).toBe(200);
  
   //check response contains some text
    const text = await response.text();
    expect(text).toContain('Mahesh');

   //write response on the console
    console.log(await response.json());
}) 

test.only('API POST request', async ({request}) => {
   //send a POST request along with request body & store response in a variable
   const response = await request.post('https://reqres.in/api/users', {
     data: {
        "id": 7,
      "email": "ann.rose@reqres.in",
      "first_name": "Ann",
      "last_name": "Rose",
      "avatar": "https://reqres.in/img/faces/6-image.jpg"
     }
   })

   //verify response status code is 201
   expect(response.status()).toBe(201);

   //check response contains some text
   const text = await response.text();
   expect(text).toContain('Ann');

   //write response on the console
   console.log(await response.json());
})

test('API PUT request', async({request}) => {
   //send a PUT request
   const response = await request.put('https://reqres.in/api/users/2', {
     data: {
     
       "name": "morpheus",
       "job": "zion resident"

     }
    });

    //verify response status code is 200
    expect(response.status()).toBe(200);

    //check response contains some text
    const text = await response.text();
    expect(text).toContain('morpheus');

    //write response on the console
    console.log(await response.json());

})

test('API DELETE request' , async({request}) => {
   //send a DELETE request
   const response = await request.delete('https://reqres.in/api/users/2');

   //verify response status code is 204
   expect(response.status()).toBe(204);

})
