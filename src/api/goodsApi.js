import axios from '../utils/axios'
class GoodsApi {
  list () {
    let url = '/mall/admin/goods/getGoodsList'
    return axios.post(url)
  }
  del (_id) {
    let url = `/mall/admin/goods/delGoods?_id=${_id}`
    return axios.delete(url)
  }
  add(payload) {
    let url = '/mall/admin/goods/addGoods'
    console.log(payload);
    return axios.post(url,payload)
  }
  update(_id,payload) {
    let url = `/mall/admin/goods/updateGoods/${_id}`
    return axios.get(url,_id,payload)
  }
  findById(_id){
    console.log(_id);
    let url = '/mall/admin/goods/getGoodsById'
    return axios.post(url,{_id})
  }
  findListByPage(page,pageSize) {
    let url = `/mall/admin/goods/getInfosByPage`
    return axios.post(url,{page,pageSize})  
  }
  updateGoods (_id,payload) {
    let url = `/mall/admin/goods/updateGoods`
    let {name,type,price,stock,detail,status,img} = payload
    console.log(name,type,price,stock,detail,status,img);
    return axios.get(url,{
      params:{
        _id,
        name:name,
        type:type,
        price:price,
        stock:stock,
        detail:detail,
        status:status,
        img:img
      }
    })
  }
  changeStatus (_id,status) {
    let params = {
      _id:_id,
      status:status
    }
    let url = '/mall/admin/goods/updateStatusById'
    return axios.post(url,params)
  }
  // 根据状态查询数据
  findByStatus (status) {
    console.log(status);
    let url = '/mall/admin/goods/getInfosByStatus'
    return axios.post(url,{status})
  }
  upload (img) {
    let url = '/mall/admin/upload/file'
    return axios.post(url,img)
  }
}
export default new GoodsApi()