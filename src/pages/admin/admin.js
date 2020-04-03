import React, {Component} from 'react'
import Nav from '../nav/Nav'
import { Layout, Menu } from 'antd'
import style from './style.model.less'
const { SubMenu } = Menu;
const { Header, Sider, Content,Footer } = Layout;
class Admin extends Component {
  render () {
    return (
      <Layout>
        <Sider>
          <Nav></Nav>
        </Sider>
        <Layout className={style.siteLayout}>
          <Header className={style.antLayoutHeader} style={{ padding: 0 }}>
            这里是头部
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            {this.props.children}
          </Content>
          <Footer>
              footer
          </Footer>
        </Layout>
      </Layout>
    )
  }
}
export default Admin