import React, {Component} from 'react'
import { Table,Card,Tag,Button,Menu,Select,Popconfirm,message} from 'antd'
import GoodsApi from '../../api/goodsApi'
import style from './index.module.less'
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class Goods extends Component {
  state = {
    dataSource:[],
    columns : [
      {
        title: '商品编号',
        dataIndex: '_id',
        key:'_id',
        width:100,
      },
      {
        title: '商品名称',
        dataIndex: 'name',
        key:'name',
        width:120
      },
      {
        title: '商品类型',
        dataIndex: 'type',
        key:'type',
        width:120,
      },
      {
        title: '价格',
        dataIndex: 'price',
        key:'price',
        width:40,
      },
      {
        title: '库存',
        dataIndex: 'stock',
        key:'stock',
        width:80,
      },
      {
        title: '详情',
        dataIndex: 'detail',
        key:'detail',
        width:120
      },
      {
        title: '当前状态',
        key:'state',
        width:120,
        height: 40,
        render(recode) {
          let num = recode.status
          let obj = {
            '0':{color:'red',msg:'已下架'},
            '1':{color:'green',msg:'已上架'}
          }
          if(num){
            return (
              <Tag color = {obj[num].color}>
                {obj[num].msg}
              </Tag>
            )
          }else{
            return (
              <Tag color = 'green'>
                已上架
              </Tag>
            )
          }
        }
      },
      {
        title: '商品图片',
        key:'img',
        width:120,
        height:40,
        render:(recode) => {
          
          return (
            <div style = {{width:120,height:80}}>
              <img src= {recode.img} alt="" style = {{width:'100%',height:'100%'}}/>
            </div>
          )
        }
      },
      {
        title: '操作',
        key: 'action',width:120,
        render: (recode) => {
          return (
            <div>
              <Button type = 'ghost' size = 'small' style = {{background:'green',color:'#fff',border:'none'}}
                // onClick = {}
              >
                上架
              </Button><br/>
              <Button type = 'primary' size = 'small' style = {{border:'none',margin:"5px 0"}} 
                onClick = {() => {
                  this.props.history.push('/admin/updategoods/' + recode._id)
                }}>
                编辑
              </Button><br/>
              <Popconfirm
                title="你确定要删除这个商品吗?"
                onConfirm={()=>{
                  this.delGoods(recode._id)
                }}
                onCancel={()=>{
                  message.error('取消删除');
                }}
              >
                <Button type='danger' size='small'>删除</Button>
              </Popconfirm>
            </div>
          )
        }
      },
    
    ]
  }
  getGoodsList = async () => {
    let result = await GoodsApi.findListByPage()
    // console.log(result);
    this.setState({dataSource:result.list})
  }
  delGoods = async (_id) => {
    let result = await GoodsApi.del(_id)
    if(result.err !== 0 ) {return false}
    this.getGoodsList()
  }

  componentDidMount() {
    this.getGoodsList()
  }
  render () {
    let {dataSource,columns} = this.state
    return (
      <div  className ={style.box}>
        <div  className={style.card}>
          <Tag>商品管理</Tag>
          状态&nbsp;&nbsp;
          <Select defaultValue="全部" style={{ width: 80 }} onChange={handleChange} size = 'small'>
            <Option value="全部">全部</Option>
            <Option value="已上架">已上架</Option>
            <Option value="已下架">已下架</Option>
          </Select>&nbsp;&nbsp;
          <Button type = 'primary' size = 'small'>查询</Button>&nbsp;&nbsp;
          <Button type = 'primary' size = 'small'
            onClick = { () => {
              this.props.history.push('/admin/addgoods')
            }}
          >
            新增商品
          </Button>
          <Card title = '商品名称' style = {{marginTop:'30px'}}>
            <Table
              columns={columns}
              dataSource={dataSource}
            />
          </Card>
        </div>

    </div>
    )
  }
}
export default Goods