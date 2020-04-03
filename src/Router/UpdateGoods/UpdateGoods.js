import React, {Component} from 'react'
import { Card,Upload, message, Button,Input  } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import UpdateGoodsApi from '../../api/goodsApi'

class UpdateGoods extends Component {
  state = {
    "name":"默认名称",
    'type':'零食',
    "price":"100",
    "stock":'999',
    'detail':'最爱',
    'status:':'0',
    'img':null,
  }
  submit = async () => {
    let path = this.props.location.pathname
    let _id = path.split('/')[3]
    let {err,msg} = await UpdateGoodsApi.updateGoods(_id,this.state)
    if(err !== 0){ return message.error(msg)}
    this.props.history.replace('/admin/goods')
  }
  exit = () => {
    this.props.history.replace('/admin/goods')
  }
  upload = async () => {
    let file = this.refs.imgs.files[0]
    if(!file) {return message.error('请先上传图片')}
    let formdata = new FormData()
    formdata.append('img',file)
    let {err,msg,path} = await UpdateGoodsApi.upload(formdata)
    if(err !== 0) {return message.error(msg)}
    this.setState({img:path})
  }
  async componentDidMount () {
    let path = this.props.location.pathname
    let _id = path.split('/')[3]
    let result = await UpdateGoodsApi.findById(_id)
    let {name,type,price,stock,detail,status,img} = result.list[0]
    this.setState({name,type,price,stock,detail,status,img})
  }
  render () {
    let {name,type,price,stock,detail,status,img} = this.state
    return (
      <div style = {{marginTop:'-20px'}}>
        <Card title='商品修改'>
          商品名称 : <Input style = {{width:320,marginTop:'15px'}} value = {name}
          onChange = { (e) => {
            this.setState({name:e.target.value})
          }}/><br/>
          商品类型 : <Input style = {{width:320,marginTop:'15px'}} value = {type}
          onChange = { (e) => {
            this.setState({type:e.target.value})
          }}/><br/>
          商品价格 : <Input style = {{width:320,marginTop:'15px'}} value = {price}
          onChange = { (e) => {
            this.setState({price:e.target.value})
          }}/><br/>
          商品库存 : <Input style = {{width:320,marginTop:'15px'}} value = {stock}
          onChange = { (e) => {
            this.setState({stock:e.target.value})
          }}/><br/>
          商品详情 : <Input style = {{width:320,margin:'15px 0'}} value = {detail}
          onChange = { (e) => {
            this.setState({detail:e.target.value})
          }}/><br/>
          发布状态 : 
          <select disabled style = {{marginBottom:'5px'}}>
            <option value={status} >
              {status === '0' ? '上架' : '上架'}
            </option>
          </select><br/>
          缩略图 : <input type = 'file' ref = 'imgs'/>&nbsp;&nbsp;
          
          <img src={img} alt="" width = '120' height = '80'/><br/>
          
          <Button type = 'primary' onClick = {this.upload}>上传图片</Button>
            <p></p>
          <Button type = 'danger' onClick = {this.exit}>取消</Button>&nbsp;&nbsp;&nbsp;
          <Button type = 'primary' onClick = {this.submit}>修改</Button>
        </Card>
      </div>
    )
  }
}
export default UpdateGoods