/**
 * 该组件仅用于展示由父组件传入的各个人员条目
 * 显示搜索结果
 */
import React,{Component} from 'react';
import StaffItem from './StaffItem.js';

class StaffItemPanel extends Component{
  render(){
    let items=[];
    if(this.props.items.length===0){
      items.push(<tr><th colSpan="5" className="tempEmpty">暂无用户</th></tr>);
    }
    else
    {
      this.props.items.forEach(item=>{
        items.push(<StaffItem key={item.key} item={item} removeStaffItem={this.props.removeStaffItem} detailStaffItem={this.props.detailStaffItem}/>);
      })
    }
    return(
      <table className="itemPanel">
        <thead>
          <th className="itemId">姓名</th>
          <th className="itemId">年龄</th>
          <th className="itemId">身份</th>
          <th className="itemId">性别</th>
          <th className="itemId">操作</th>
        </thead>
        <tbody>
          {items}
        </tbody>
      </table>
    );
  }
}

export default StaffItemPanel;