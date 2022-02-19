const express = require('express');
const app = express();

const userRouter = require('./routes/user')

const users = require('./usersTable')

app.use(express.json());

app.use('/user',userRouter)

app.get('/users',(req,res)=>{
  res.json({
    users
  })
})


const port = 3000;
app.listen(port,()=>{
  console.log(`app running on port ${port}`)
})