import React from 'react';
import Admin from './pages/admin/admin'
import {HashRouter,Link,Route,Redirect} from 'react-router-dom'
import Goods from './Router/GoodsList/Goods'
import AddGoods from './Router/AddGoods/AddGoods'
<<<<<<< HEAD
import UpdateGoods from './Router/UpdateGoods/UpdateGoods'
import Orders from './Router/Orders'
import Users from './Router/Users'
=======
import Orders from './Router/Orders/Orders'
import Users from './Router/User/Users'
>>>>>>> 2102f1a9e7e0f680436404ce1e66711bf3003fbb
import Login from './pages/Login'
function App() {
  return (
    <div className="App" style = {{width:'100vw',height:'100vh'}}>
      <HashRouter>
        <Link to = '/login'>登录</Link>
        <Route path='/login' component={Login}></Route>
        <Route path = '/admin' render = { () => {
          return(
            <Admin >
              <Route path = '/admin/goods' component = {Goods}></Route>
              <Route path = '/admin/addgoods' component = {AddGoods}></Route>
              <Route path = '/admin/updategoods' component = {UpdateGoods}></Route>
              <Route path = '/admin/orders' component = {Orders}></Route>
              <Route path = '/admin/users' component = {Users}></Route>
              <Redirect from = '/' to = '/admin/goods'></Redirect>
            </Admin>
          )
        }}>
        </Route>
        {/* <Redirect from = '/' to = '/login'></Redirect> */}
      </HashRouter>
    </div>
  )
}
export default App;
