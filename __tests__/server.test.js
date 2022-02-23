"use strict";
const server = require("../src/server.js");
const supertest = require("supertest");
const request = supertest(server.app);

describe("server", () => {
    
    it('test path person path',async()=>{
        const response = await request.get('/persn');//like thunder
        console.log(response.query);
        console.log("status",response.status);
        console.log(response.req.path);
        expect(response.status).toEqual(404);
    });

    it('test method',async()=>{
        const response = await request.post('/person');
        console.log("requset method",response.req.method);

        expect(response.status).toEqual(404);
        
    });

    it('test query test 200',async()=>{
        const response = await request.get('/person?name=obieda');
        console.log("requset body",response.body.name);

        expect(response.status).toEqual(200);
        
    });


    it('test query test object',async()=>{
        const response = await request.get('/person?name=obieda');
        console.log("requset body",response.body.name);

        expect(typeof response.body).toEqual("object");
        
    });


    it('test query test 500',async()=>{
        const response = await request.get('/person?name=');
        console.log("requset body",response.body.name);

        expect(response.status).toEqual(500);
        
    });




});





   // console.log(response.request._query.name);
    // console.log(response.body.name);



