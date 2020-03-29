import React from 'react';
import Admin from './pages/admin/admin'
import {HashRouter,Link,Route,Redirect} from 'react-router-dom'
import Goods from './Router/Goods'
import Orders from './Router/Orders'
import Users from './Router/Users'
import Login from './pages/Login'
function App() {
  return (
    <div className="App">
      <HashRouter>
      <Route path='/login' component={Login}></Route>
        <Route path = '/admin' render = { () => {
          return(
            <Admin >
              {/* <Redirect path = '/admin/goods'></Redirect> */}
              <Route path = '/admin/goods' component = {Goods}></Route>
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
