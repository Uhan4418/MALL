import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import style from './index.module.less';
class Login extends Component {
  onFinish = async () => {

  }
  render() {
    return (
      <div className={style['login-box']}>
        <span className={style.title}>后台管理系统</span>
        <Form
          className={style["login-form"]} >
          {/* 用户名 */}
          <Form.Item
            name="userName"
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
              // { max: 9, message: "用户名最长9位" },
              // { min: 3, message: "用户名最少3位" }
            ]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          {/* 密码 */}
          <Form.Item
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input prefix={<LockOutlined className="site-form-item-icon" />} placeholder="password" />
          </Form.Item>
          {/* 记住我 */}
          <Form.Item>
            <Form.Item>
              <Checkbox>记住用户名密码</Checkbox>
            </Form.Item>
            <a className="login-form-forgot" href="">
              忘记密码
        </a>
          </Form.Item>
          {/* 登录按钮 */}
          <Form.Item className={style.item}>
            <Button type="primary" htmlType="submit" className={style["login-form-button"]}>
              登录
        </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;