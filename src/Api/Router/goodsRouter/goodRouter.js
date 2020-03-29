const express = require('express')
const router = express.Router()
const goodsModel = require('../../db/module/goodsModel')
// 查询商品
router.get('/goodslist',(req,res) => {
  goodsModel.find()
  .then((data) => {
    res.send({err:0,msg:'查询成功', data: data})
  })
  .catch((err) => {
    res.send({err:-2,msg:'内部错误，请重试'})
  })
})

// 删除商品
router.delete('/delGoods',(req,res) => {
  let {_id} = req.query
  goodsModel.deleteOne({_id})
  .then((data) => {
    console.log(_id);
    res.send({err:0,msg:'删除成功',data:data})
  })
  .catch((err) => {
    res.send({err:-2,msg:'内部错误'});
  })
})

// 修改商品
router.put('/updateGoods',(req,res) => {
  let {_id} = req.query
  goodsModel.updateOne({_id})
  .then((data) => {
    console.log(data);
    res.send({err:0,msg:'查询',data:data})
  })
  .catch((err) => {
    console.log(err);
    res.send({err:-2,msg:'内部错误'});
  })
})
module.exports = router

