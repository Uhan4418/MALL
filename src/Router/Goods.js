import React, {Component} from 'react'
import { Table,Card,Tag,Button,Menu,Select } from 'antd'
// import { DownOutlined } from '@ant-design/icons';
const columns = [
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
    dataIndex: 'types',
    key:'types',
    width:120,
  },
  {
    title: '价格',
    dataIndex: 'price',
    key:'price',
    width:80,
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
    dataIndex: 'putaway',
    key:'putaway',
    width:120,
    height: 40,
    render(putaway) {
      let obj = {
        '0':{color:'red',msg:'已下架'},
        '1':{color:'green',msg:'已上架'}
      }
    }
  },
  {
    title: '商品图片',
    dataIndex: 'path',
    key:'path',
    width:120,
  },
  {
    title: '操作',
    dataIndex: 'action',width:120,render: (recode) => {
      return (
        <div>
          <Button type = 'ghost' size = 'small' style = {{background:'green',color:'#fff',border:'none'}}>上架</Button><br/>
          <Button type = 'primary' size = 'small' style = {{border:'none',margin:"5px 0"}}>编辑</Button><br/>
          <Button type = 'danger' size = 'small'>删除</Button>
        </div>
      )
    }
  },

];
const data = [
  {
    key: '1',
    name: 'John Brown',
  },
  {
    key: '2',
    name: 'Jim Green',
  },
  {
    key: '3',
    name: 'Joe Black',
  },
  {
    key: '4',
    name: 'Disabled User',
  },
]
const { Option } = Select;

function handleChange(value) {
  console.log(`selected ${value}`);
}
class Goods extends Component {
  render () {
    return (
      <div>
        <div>
          <Tag>商品管理</Tag>
          状态&nbsp;&nbsp;
          <Select defaultValue="全部" style={{ width: 80 }} onChange={handleChange} size = 'small'>
            <Option value="全部">全部</Option>
            <Option value="已上架">已上架</Option>
            <Option value="已下架">已下架</Option>
          </Select>&nbsp;&nbsp;
          <Button type = 'primary' size = 'small'>新增商品</Button>
        </div>
        <Card title = '商品名称'>
          <Table
            columns={columns}
            dataSource={data}
          />
        </Card>
    </div>
    )
  }
}
export default Goods