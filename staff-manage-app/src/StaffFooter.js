/**
 * 该组件的功能是添加新成员
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class StaffFooter extends Component{
  constructor(){
    super();
    this.handleAddClick=this.handleAddClick.bind(this);
  }

  handleAddClick(evt){
    evt.preventDefault();
    let item={};
    let addForm=ReactDOM.findDOMNode(this.refs.addForm);
    let sex=addForm.querySelector('#staffAddSex');
    let id=addForm.querySelector('#staffAddId');

    item.name=addForm.querySelector("#staffAddName").value.trim();
    item.age=addForm.querySelector("#staffAddAge").value.trim();
    item.descrip=addForm.querySelector("#staffAddDescrip").value.trim();
    item.sex=sex.options[sex.selectedIndex].value;
    item.id=id.options[id.selectedIndex].value;

    if(item.name==''||item.age==''||item.descrip==''){
      let tips=ReactDOM.findDOMNode(this.refs.tipsUnDone);
      tips.style.display='block';
      setTimeout(()=>{
        tips.style.display='none';
      },1000);
      return;
    }

    let numReg=/^\d+$/;
    if(!numReg.test(item.age)||parseInt(item.age)>150){
      let tips=ReactDOM.findDOMNode(this.refs.tipsUnAge);
      tips.style.display='block';
      setTimeout(()=>{
        tips.style.display='none';
      },1000);
      return;
    }

    this.props.addStaffItem(item);
    addForm.reset();

    let tips=ReactDOM.findDOMNode(this.refs.tips);
    tips.style.display='block';
    setTimeout(()=>{
      tips.style.display='none';
    },1000);
  }
  render(){
    return(
      <div>
        <h4 style={{'text-align':'center'}}>人员新增</h4>
        <hr/>
        <form ref='addForm' className="addForm">
          <div>
            <label for="staffAddName" style={{'display':'block'}}>姓名</label>
            <input type="text" ref="addName" id="staffAddName" placeholder="Your Name"/>
          </div>
          <div>
            <label for="staffAddAge" style={{'display':'block'}}>年龄</label>
            <input type="text" ref="addAge" id="staffAddAge" placeholder="Your Age"/>
          </div>
          <div>
            <label for="staffAddSex" style={{'display':'block'}}>性别</label>
            <select ref="addSex" id="staffAddSex">
              <option value="男">男</option>
              <option value="女">女</option>
            </select>
          </div>
          <div>
            <label for="staffAddId" style={{'display':'block'}}>身份</label>
            <select ref="addId" id="staffAddId">
              <option value="主任">主任</option>
              <option value="老师">老师</option>
              <option value="学生">学生</option>
              <option value="实习">实习</option>
            </select>
          </div>
          <div>
            <label for="staffAddDescrip" style={{'display':'block'}}>个人描述</label>
            <textarea id="staffAddDescrip" ref="addDescrip"></textarea>
          </div>
          <p ref="tips" className="tips">提交成功</p>
          <p ref='tipsUnDone' className='tips'>请录入完整的人员信息</p>
          <p ref='tipsUnAge' className='tips'>请录入正确的年龄</p>
          <div>
            <button onClick={this.handleAddClick}>提交</button>
          </div>
        </form>
      </div>
    )
  }
}

export default StaffFooter;