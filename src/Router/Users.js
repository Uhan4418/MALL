import React ,{Component} from 'react'
import {Card ,Table,Button,Modal,notification,Spin,Popconfirm,message,Pagination }from 'antd'
class User extends Component {
  state ={
    dataSource:[],//表格内容数据
    // visible:true,
    spinning:false,
    columns:[//表头数据
      {
        title: 'id',   //显示
        dataIndex: '_id',//数据索引字段
        key: '_id', //key值
      },
      {
        title: '姓名',
        dataIndex: '',
        key: '',
      },
      {
        title: '手机号',
        dataIndex: '',
        key: '',
      },
      {
        title: '当前积分',
        dataIndex: '',
        key: '',
      },
      {
        title: '累计兑换数',
        dataIndex: '',
        key: '',
      },
      {
        title: '累计消耗积分',
        dataIndex: '',
        key: '',
      },
      {
        title: '状态',
        dataIndex: '',
        key: '',
      },
      {
        title: '操作',
        dataIndex: '',
        key: '',
      },
    ]
  }
  // onChange(pageNumber) {
  //   console.log('Page: ', pageNumber);
  // }
  render(){
    let {dataSource,visible,spinning,columns} =this.state
    return(
      <div>
        <Card title='用户列表'>
        <Spin spinning={spinning}>
              <Table dataSource={dataSource} columns={columns} rowKey='_id'></Table>
            </Spin>
        </Card>
        <div>
        <Pagination showQuickJumper defaultCurrent={1} total={100}  />
        <br />
      </div>
      </div>
        
    )
  }
}

export default User