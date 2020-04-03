/* import React, {Component} from 'react'
class Orders extends Component {
  render () {
    return (
      <div>
        这里是订单信息页
      </div>
    )
  }
}
export default Orders */
import React, { Component } from 'react'
import orderApi from '../../api/orderApi'
import style from './index.module.less'
import {Card,Input,Select,Table,Badge,message,Pagination,Button,Modal,Divider} from "antd"
const { Option } = Select;
class Order extends Component {
  state = {
    visible:false,
    page:1,
    pageSize:4,
    list:[],
    allCount:0,
    paginationstate:0,
    content:'',
    columns:[
      {title: '订单编号',dataIndex: 'code',key: 'code'},
      {title: '商品名称',dataIndex: 'gname',key: 'gname'},
      {title: '商品类型',dataIndex: 'gtype',key: 'gtype'},
      {title: '积分',dataIndex: 'score',key: 'score'},
      {title: '兑换数量',dataIndex: 'exnum',key: 'exnum'},
      {title: '兑换时间',dataIndex: 'extime',key: 'extime'},
      {title: '兑换人姓名',dataIndex: 'excname',key: 'excname'},
      {title: '手机号',dataIndex: 'tel',key: 'tel'},
      {title: '状态',dataIndex: 'status',key: 'status',render(status){
        // console.log(status)
        let obj = {"兑换成功":{color:'blue',msg:'兑换成功'},"待发货":{color:'red',msg:'待发货'},"已发货":{color:'green',msg:'已发货'}}
        return(<Badge color={obj[status].color} text={obj[status].msg} />)
      }},
      {title: '操作',key: 'action',render:(recode)=>{
        // console.log(recode)
        let {visible} = this.state
        let {code,gname,gtype,score,exnum,extime,excname,status,address,cmp,expnum} = recode
        return(
          <div>
            <Button type="primary" onClick={this.showModal}>查看</Button>
            <Modal
              title="查看详情"
              visible={visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <div className={style.wrapper}>
                <p>订单编号：{code}</p>
                <p>商品名称：{gname}</p>
                <p>商品类型：{gtype}</p><p>积分：{score}</p>
                <p>兑换数量：{exnum}</p><p>兑换时间：{extime}</p>
                <Divider dashed />
                <p>兑换人姓名：{excname}</p>
                <p>收货地址：{address}</p>
                <Divider dashed />
                <p>状态：{status}</p>
                <p>物流公司：{cmp}</p>
                <p>快递单号：{expnum}</p>
              </div>
            </Modal>
          </div>
        )
      }},
    ]
  }
  //   点击查看按钮显示模态框
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  //  模态框中的确认按钮
  handleOk = () => {
    this.setState({
      visible: false,
    });
  };
  //  模态框中的取消按钮
  handleCancel = () => {
    this.setState({
      visible: false,
    });
  };
  //  select中option选中值变化后的操作
  handleChange = (value) => {
    console.log(`selected ${value}`);
    this.setState({page:1,paginationstate:3,content:value})
    this.getOrdersByStstus(value)
  }

  //  初始化挂载
  componentDidMount(){
    this.setState({paginationstate:0})
    this.getOrdersData()
  }

  //  获取订单数据
  getOrdersData = async () => {
    let {page,pageSize} = this.state
    let result = await orderApi.list(page,pageSize)
    // console.log("result",result)
    let {err,msg,list,allCount} = result
    if(err !== 0){return message.error(msg)}
    this.setState({list,allCount})
  }
  //  通过订单状态查询订单
  getOrdersByStstus = async (value) => {
    let {page,pageSize} = this.state
    if(value === "全部"){
      this.getOrdersData()
    }else{
      let result = await orderApi.ststus(value,page,pageSize)
      console.log("result",result)
      let {err,msg,list,allCount} = result
      if(err !== 0){return message.error(msg)}
      this.setState({list,allCount})
    }
  }

  //  通过商品名称查询订单
  getOrdersByGName = async (value) => {
    let {page,pageSize} = this.state
    let result = await orderApi.gname(value,page,pageSize)
    console.log("result",result)
    let {err,msg,list,allCount} = result
    if(err !== 0){return message.error(msg)}
    this.setState({list,allCount})
  }

  //  通过兑换人名称查询订单
  getOrdersByCName = async (value) => {
    let {page,pageSize} = this.state
    let result = await orderApi.excname(value,page,pageSize)
    console.log("result",result)
    let {err,msg,list,allCount} = result
    if(err !== 0){return message.error(msg)}
    this.setState({list,allCount})
  }

  //  通过兑换人手机号查询订单
  getOrdersByTel = async (value) => {
    let {page,pageSize} = this.state
    let result = await orderApi.tel(value,page,pageSize)
    console.log("result",result)
    let {err,msg,list,allCount} = result
    if(err !== 0){return message.error(msg)}
    this.setState({list,allCount})
  }

  //  通过兑换人姓名/手机号查询订单
  getOrdersByCNameOrTel = async (value) => {
    let {page,pageSize} = this.state
    console.log(value)
    //  正则数字验证
    var pattern = new RegExp("[0-9]+")
    if(pattern.test(value)){
      let result = await orderApi.tel(value,page,pageSize)
      console.log("result",result)
      let {err,msg,list,allCount} = result
      this.setState({list,allCount})
      if(err !== 0){
        return message.error(msg)
      }
    }else{
      let result = await orderApi.excname(value,page,pageSize)
      console.log("result",result)
      let {err,msg,list,allCount} = result
      this.setState({list,allCount})
      if(err !== 0){
        return message.error(msg)
      }
    }
  }
  render() {
    let {list,columns,allCount,page,pageSize,paginationstate,content} = this.state
    return (
      <div>
        <Card title="订单管理">
          <div className={style.inlinebox}>
            商品名称：<Input className={style.antd_Input} placeholder="请输入" style={{ marginRight:10}} ref="gname"/>
            状态：<Select defaultValue="全部" style={{ width: 120,marginRight:10 }} onChange=  {this.handleChange}>
              <Option value="全部">全部</Option>
              <Option value="已发货">已发货</Option>
              <Option value="待发货">待发货</Option>
              <Option value="兑换成功">兑换成功</Option>
            </Select>
            兑换人：<Input style={{ width: 130 ,marginRight:20}} placeholder="姓名/手机号" ref="cname"/>
            <Button type="primary" style={{ marginRight:20}} onClick={()=>{
              console.log(this)
              let gname = this.refs.gname.state.value
              let x = this.refs.cname.state.value
              console.log(gname,x)
              if(gname){
                this.setState({page:1,paginationstate:1,content:gname})
                this.getOrdersByGName(gname)
              }
              if(x){
                this.setState({page:1,paginationstate:2,content:x})
                this.getOrdersByCNameOrTel(x)
              }
              if(!gname&&!x){
                console.log('请输入查询条件')
                message.warning("请输入查询条件")
              }
            }}>查询</Button>
            <Button onClick={()=>{
              console.log("此功能尚未完善")
              message.warning("此功能尚未完善")
            }}>导出excel</Button>
          </div>
          {/* 表格内容 */}
          <Table pagination={false} dataSource={list} columns={columns} rowKey="_id"></Table>
        </Card>
        <Pagination total={allCount} pageSize={pageSize} current={page}  showQuickJumper onChange={(page,pageSize)=>{
          //  只要页码数发生改变就会触发
          //  onChange是一个异步，所以需要一个成功回调函数
          console.log(paginationstate)
          switch(paginationstate){
            case 0 :
              //  查询所有订单
              this.setState({page},()=>{
                return(
                  this.getOrdersData()
                )
              })
              break;
            case 1 :
              //  根据输入商品名查询订单
              this.setState({page},()=>{
                return(
                  this.getOrdersByGName(content)
                )
              })
              break;
            case 2 :
              //  根据输入兑换人名或手机号码查询订单
              this.setState({page},()=>{
                return(
                  this.getOrdersByCNameOrTel(content)
                )
              })
              break;
            case 3 :
              //  根据输入状态查询订单
              this.setState({page},()=>{
                return(
                  this.getOrdersByStstus(content)
                )
              })
              break;
            default:
              this.setState({page},()=>{
                return(
                  this.getOrdersData()
                )
              })
          }
        }}/>
      </div>
    );
  }
}

export default Order;