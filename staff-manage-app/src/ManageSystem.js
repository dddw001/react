/**
 * 最外层的容器
 */
import React,{Component} from 'react';
import StaffHeader from './StaffHeader.js';
import StaffitemPanel from './StaffItemPanel.js';
import StaffFooter from './StaffFooter.js';
import StaffDetail from './StaffDetail.js';

import STAFF from './STAFF.js';

class ManageSystem extends Component{
  constructor(){
    super();
    this.state={staff:new STAFF(),staffDetail:null}
    this.addStaffItem=this.addStaffItem.bind(this);
  }

  addStaffItem(item){
    this.setState({
      staff:this.state.staff.addItem(item)
    })
  }

  searchStaff(word){
    this.setState({staff:this.state.staff.search(word)});
  }

  selectStaff(id){
    this.setState({staff:this.state.staff.select(id)});
  }

  orderStaff(method){
    this.setState({staff:this.state.staff.order(method)});
  }

  removeStaffItem(key){
    this.setState({staff:this.state.staff.remove(key)});
  }

  detailStaffItem(key){
    this.setState({staffDetail:this.state.staff.staff.filter((item)=>{
      return item.key==key;
    })[0]
  });
  }

  closeDetail(){
    this.setState({
      staffDetail:null
    })
  }

  editDetail(item){
    this.setState({staff:this.state.staff.editStaffItem(item)});
  }
  render(){
    // console.log(this.state.staff);
    // console.log(this.state.staff.staff);
    return(
      <div>
        <StaffHeader searchStaff={this.searchStaff.bind(this)} selectStaff={this.selectStaff.bind(this)} orderStaff={this.orderStaff.bind(this)}/>
        <StaffitemPanel items={this.state.staff.staff} removeStaffItem={this.removeStaffItem.bind(this)} detailStaffItem={this.detailStaffItem.bind(this)}/>
        <StaffFooter addStaffItem={this.addStaffItem}/>
        <StaffDetail staffDetail={this.state.staffDetail} closeDetail={this.closeDetail.bind(this)} editDetail={this.editDetail.bind(this)}/>
      </div>
    )
  }
}

export default ManageSystem;