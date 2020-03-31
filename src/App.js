import React from 'react';
import Admin from './pages/admin/admin'
import {HashRouter,Link,Route,Redirect} from 'react-router-dom'
import Goods from './Router/GoodsList/Goods'
import AddGoods from './Router/AddGoods/AddGoods'
import Orders from './Router/Orders/Orders'
import Users from './Router/User/Users'
import Login from './pages/Login'
function App() {
  return (
    <div className="App" style = {{width:'100vw',height:'100vh'}}>
      <HashRouter>
      <Route path='/login' component={Login}></Route>
        <Route path = '/admin' render = { () => {
          return(
            <Admin >
              <Redirect from = '/' to = '/admin/goods'></Redirect>
              <Route path = '/admin/goods' component = {Goods}></Route>
              <Route path = '/admin/addgoods' component = {AddGoods}></Route>
              <Route path = '/admin/orders' component = {Orders}></Route>
              <Route path = '/admin/users' component = {Users}></Route>
            </Admin>
          )
        }}>
        </Route>
      </HashRouter>
    </div>
  )
}
export default App;
