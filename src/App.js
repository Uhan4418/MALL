import React,{Component} from 'react';
import Login from './pages/Login'
import {HashRouter,Route} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <HashRouter>
         <Route path='/login' component={Login}></Route>
      </HashRouter>
    )
  }
}
export default App;
