const users = require('../usersTable')

const authenticate = (req,res,next)=>{
  const {username,password}=req.body;
  let result = users.find(x=>x.username === username);
  if(!result)
    res.json({
      success:false,
      message:'no such user found'
    })
  if(result.username!==username){
    res.json({
      success:false,
      message:'wrong password'
    })
  }
  next();

}

module.exports = authenticate;