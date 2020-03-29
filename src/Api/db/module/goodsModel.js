const  mongoose = require('mongoose')

let GoodsSchema = new mongoose.Schema({
  name:{type:String},
  types:{type:Object},
  price:{type:Number},
  remark:{type:String},// 商品备注，
  data:{type:String},
  stock:{type:Number}, // 库存
  detail:{type:String}, // 详情
  img:{type:String} // 图片
})

let GoodsModel = mongoose.model('goods',GoodsSchema)

module.exports = GoodsModel