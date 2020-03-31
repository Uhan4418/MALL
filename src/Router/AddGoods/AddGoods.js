import React, {Component} from 'react'
import { Card,Upload, message, Button,Input  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import GoodsApi from '../../pages/api/goodsApi'
const fileList = [
  {
    uid: '-1',
    name: '',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  }
]
const props = {
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  listType: 'picture',
  defaultFileList: [...fileList],
}
class AddGoods extends Component {
  state = {
    "name":"默认名称",
    'type':'零食',
    "price":"100",
    'detail':'最爱',
    'img':fileList[0].url
  }
  submit = async () => {
    if(!fileList[0].url){return message.info('请先上传图片')}
    let {err,msg} = await GoodsApi.add(this.state)
    if(err !== 0){ return message.error(msg)}
    this.props.history.replace('/admin/goods')
  }
  exit = () => {
    this.props.history.replace('/admin/goods')
  }
  render () {
    let {name,type,price,detail,putaway} = this.state
    return (
      <div style = {{marginTop:'-20px'}}>
        <Card title='商品添加'>
          商品名称 : <Input style = {{width:320,marginTop:'15px'}} value = {name}
          onChange = { (e) => {
            this.setState({name:e.target.value})
          }}/><br/>
          商品类型 : <Input style = {{width:320,marginTop:'15px'}} value = {type}
          onChange = { (e) => {
            this.setState({name:e.target.value})
          }}/><br/>
          商品价格 : <Input style = {{width:320,marginTop:'15px'}} value = {price}
          onChange = { (e) => {
            this.setState({name:e.target.value})
          }}/><br/>
          商品详情 : <Input style = {{width:320,margin:'15px 0'}} value = {detail}
          onChange = { (e) => {
            this.setState({name:e.target.value})
          }}/><br/>
          发布状态 :  
          <select style = {{marginBottom:'15px'}}>
            <option value={1}>上架</option>
          </select><br/>
          <Upload {...props}>
            <Button>
              <UploadOutlined />上传图片
            </Button>
            </Upload>
            <p></p>
          <Button type = 'danger' onClick = {this.exit}>取消</Button>&nbsp;&nbsp;&nbsp;
          <Button type = 'primary' onClick = {this.submit}>添加</Button>

        </Card>
      </div>
    )
  }
}
export default AddGoods