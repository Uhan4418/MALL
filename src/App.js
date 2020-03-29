import React from 'react';
import logo from './logo.svg';
import Admin from './pages/admin/admin'
import {HashRouter,Link,Route,Redirect} from 'react-router-dom'
import Goods from './Router/Goods'
import Orders from './Router/Orders'
import Users from './Router/Users'
function App() {
  return (
    <div className="App">
      <HashRouter>
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
