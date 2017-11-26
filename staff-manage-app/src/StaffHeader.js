/**
 * 该组件主要用于提供搜索框、人员筛选下拉框、排列方式下拉框
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class StaffHeader extends Component{
  handleSearch(){
    let bar=ReactDOM.findDOMNode(this.refs.searchBar);
    let value=bar.value;
    this.props.searchStaff(value);
  }

  handleIdSelect(e){
    var value=e.target.options[e.target.value].innerHTML;
    this.props.selectStaff(value);
  }

  handleOrderSelect(e){
    var value=e.target.options[e.target.value].innerHTML;
    this.props.orderStaff(value);
  }
  render(){
    return(
      <div>
        <h3 style={{'text-align':'center'}}>人员管理系统</h3>
        <table className="optHeader">
          <tbody>
            <tr>
              <td className="headerTd"><input type="text" placeholder="Search..." onChange={this.handleSearch.bind(this)} ref="searchBar"/></td>
              <td className="headerTd">
                <label for="idSelect">人员筛选</label>
                <select id="idSelect" onChange={this.handleIdSelect.bind(this)} >
                  <option value="0">全部</option>
                  <option value="1">主任</option>
                  <option value="2">老师</option>
                  <option value="3">学生</option>
                  <option value="4">实习</option>
                </select>
              </td>
              <td>
                <label for="orderSelect">排列方式</label>
                <select id="orderSelect" onChange={this.handleOrderSelect.bind(this)}>
                  <option value="0">身份</option>
                  <option value="1">年龄升</option>
                  <option value="2">年龄降</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default StaffHeader;