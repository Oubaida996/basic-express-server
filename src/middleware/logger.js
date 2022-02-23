"use strict"

const logger = (req, res, next) => {





req.data = new Date().toLocaleDateString();




console.log(`Logged at ${req.data} global middleware \n request methode :${req.method} \n request path :${req.path} `);
next();
















       

    

    






}

module.exports = logger;