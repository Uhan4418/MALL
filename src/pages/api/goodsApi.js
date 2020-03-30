import axios from '../../utils/axios'
class GoodsApi {
  list () {
    let url = '/mall/admin/goods/getGoodsById'
    return axios.post(url)
  }
  del (_id) {
    let url = `/mall/admin/goods/delGoods/${_id}`
    return axios.delete(url)
  }
}
export default new GoodsApi()