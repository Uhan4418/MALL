const express = require('express')
const bodyParser = require('body-parser')
//引入数据库连接文件  启动服务器的时候同时连接数据库
const db= require('./db/connect')

const app = express()
// app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.urlencoded({extended:true}))
// 解析json格式
app.use(bodyParser.json())

// 引入路由
let UserRouter = require('./Router/userRouter/userRouter')
app.use('/user',UserRouter)
let GoodsRouter = require('./Router/goodsRouter/goodRouter')
app.use('/goods',GoodsRouter)

app.listen(3000,()=>{
  console.log('服务器启动')
})