"use strict"
let validator = (req,res,next)=>{
  if (typeof req.query.name === "string" && req.query.name != "" ) {
     
      next();
  }else{
    next("Internal Server Error 500 You should add query name (/person?name =your name)");
  }
  

}

module.exports =validator;