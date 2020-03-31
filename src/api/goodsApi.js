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
    return axios.post(url,_id)
  }
  findListByPage() {
    let url = `/mall/admin/goods/getInfosByPage`
    return axios.post(url)  
  }
}
export default new GoodsApi()