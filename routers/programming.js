const { programming } = require('../data/courses').infoCourses;
const express = require('express');
const programmingRouter = express.Router();

//  Middleware is important 
//Middleware
programmingRouter.use(express.json())

programmingRouter.patch('/:id',(req,res)=>{
  const updateInfo = req.body;
  const id = req.params.id;
  const index = programming.findIndex(res => res.id == id);
  if(index >= 0){
    const courseToModify = programming[index];
    Object.assign(courseToModify,updateInfo);
  }
  res.send(JSON.stringify(programming));
})

module.exports.programmingRouter = programmingRouter;