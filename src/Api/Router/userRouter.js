const express = require('express')
const router = express.Router()
const UserModel = require('../db/module/userModel')
router.post('/login',(req,res) => {
  let {userName,passWord} = req.body
  console.log(req.body);
  UserModel.find({userName,passWord})
  .then((req) => {
    console.log('then',req)
    if(req.length == 1){
      res.send( {err:0,msg:'登录成功'})
    }else{
      res.send({err:-1,msg:'用户名或密码错误'})
    }
  })
  .catch((err) => {
    res.send({err:-2,msg:'内部错误，请重试'})
    console.log('err',err);
  })
})
module.exports = router