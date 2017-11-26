/**
 * 该组件展示每个人员的基本信息
 * 并接收用户的删除和点击详情的操作
 */
import React,{Component} from 'react';
class StaffItem extends Component{
  handleDelete(e){
    this.props.removeStaffItem(this.props.item.key);
  }

  handleShow(){
    this.props.detailStaffItem(this.props.item.key);
  }
  render(){
    // console.log(this.props.item);
    // console.log(this.props.item.info);
    return(
      <tr style={{'cursor':'pointer'}}>
        <td className="itemId">{this.props.item.info.name}</td>
        <td className="itemId">{this.props.item.info.age}</td>
        <td className="itemId">{this.props.item.info.id}</td>
        <td className="itemId">{this.props.item.info.sex}</td>
        <td className="itemId">
          <a className="deleteBtn" onClick={this.handleDelete.bind(this)}>删除</a>
          <a className="detailBtn" onClick={this.handleShow.bind(this)}>详情</a>
        </td>
      </tr>
    )
  }
}

export default StaffItem;