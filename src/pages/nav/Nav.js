import React, {Component} from 'react'
import { Menu, Button } from 'antd';
import {withRouter} from 'react-router-dom'
const { SubMenu } = Menu;
class Nav extends Component {
  state = {
    collapsed: false,
    list:[
      {key:'1',title:'商品管理',child:'商品信息',path:'/admin/goods'},
      {key:'2',title:'订单管理',child:'订单信息',path:'/admin/orders'},
      {key:'3',title:'用户管理',child:'用户信息',path:'/admin/users'},
    ]
  }
  render () {
    let {list} = this.state
    return (
      <div>
        <div style={{ width: 200 }}>
          <h1 
            style = {{color:'#fff',height:'36px',lineHeight:'36px',textAlign:'center',fontSize:'18px',fontWeight:700}}
          >
            积分商城管理后台
          </h1>
          <Menu
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            {list.map((item,index) => {
              return (
                <SubMenu
                  key = {'sub'+index}
                  title = {
                    <span>
                      <span>{item.title}</span>
                    </span>
                  }
                >
                  <Menu.Item
                    key = {index}
                    onClick = { () => {
                      this.props.history.push(`${item.path}`)
                    }}
                  >
                    {item.child}
                  </Menu.Item>
                </SubMenu>
              )
            })}
          </Menu>
        </div>
      </div>
    )
  }
}
export default withRouter(Nav)