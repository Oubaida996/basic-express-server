"use strict"

const express = require(`express`);
const cors = require(`cors`);
const logger = require("./middleware/logger");
const validator =require("./middleware/validator");
const hadle500 =require("./error-handlers/500");
const hadle404 =require("./error-handlers/404");


const app = express();

//to parse data as json shap
app.use(express.json());

//it is important to make api calls from out our server or out domain's server
app.use(cors());

//Application level /Global custome middleware 
// this middleware will implemented every time when I call api (HTTP METODE)
app.use(logger); 





// Home page route
app.get("/",(req,res)=>{
// let data =req;
// console.log(data.data);
    res.send("Welcome in home page on your local server ");

});


// User route using query inside url and I will use middleware to check
// the query string for name  property. 


app.get("/person",validator,(req,res)=>{
// res.send(`success 2 :${req.query.name}`);
res.send({
    "name" :`${req.query.name}`
});
});

app.use(hadle500);
app.use("*",hadle404);




function start(port) {

    app.listen(port, () => {
        console.log(`Running on port ${port} `);
    })

}




module.exports = {
    app: app,
    start: start
}