const {infoCourses} = require('./data/courses')
const express = require('express');
const app = express();
const  {programmingRouter}  = require('./routers/programming');

app.get('/',(req,res)=>{
  res.send('welcome to my server <3')
});

app.use('/api/courses/programming',programmingRouter)

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
  console.log(`the server is listening in the port ${PORT}`)
})
