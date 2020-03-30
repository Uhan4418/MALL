import axios from '../../utils/axios'
class Login {
  login(payload){
    let url='mall/admin/user/login'
    return axios.post(url,payload)
  }
}
export default new Login()