import {test, expect} from '@playwright/test';

test('Create API Delete request' , async ({request}) => {
    //API DELETE request
    const delRequest = await request.delete('https://restful-booker.herokuapp.com/booking/');

    
})