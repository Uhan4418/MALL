import axios from "../utils/axios"
class Orders {
  list(page = 1,pageSize = 2){
    let url = '/mall/admin/orders/getOrderList'
    return axios.get(url,{params:{page,pageSize}})
  }
  ststus(status,page = 1,pageSize = 2){
    // http://localhost:3000/admin/orders/getOrdersByStatus
    let url = 'mall/admin/orders/getOrdersByStatus'
    return axios.post(url,{status,page,pageSize})
  }
  gname(gname,page = 1,pageSize = 2){
    // http://localhost:3000/admin/orders/getOrdersByStatus
    let url = 'mall/admin/orders/getOrdersByGName'
    return axios.post(url,{gname,page,pageSize})
  }
  excname(excname,page = 1,pageSize = 2){
    // http://localhost:3000/admin/orders/getOrdersByStatus
    let url = 'mall/admin/orders/getOrdersByCName'
    return axios.post(url,{excname,page,pageSize})
  }
  tel(tel,page = 1,pageSize = 2){
    // http://localhost:3000/admin/orders/getOrdersByStatus
    let url = 'mall/admin/orders/getOrdersByTel'
    return axios.post(url,{tel,page,pageSize})
  }
}

export default new Orders()