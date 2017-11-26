/**
 * 只有当用户点击某条目的详情时，这个组件才会显示出来
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
class StaffDetail extends Component{
  handleEdit(){
    let item = {};
    let editTabel = ReactDOM.findDOMNode(this.refs.editTabel);
    let sex = editTabel.querySelector('#staffEditSex');
    console.log(sex);
    let id = editTabel.querySelector('#staffEditId');
		
		item.name = editTabel.querySelector('#staffEditName').value.trim();
		item.age = editTabel.querySelector('#staffEditAge').value.trim();
		item.descrip = editTabel.querySelector('#staffEditDescrip').value.trim();
		item.sex = sex.options[sex.selectedIndex].value;
		item.id = id.options[id.selectedIndex].value;
		item.key = this.props.staffDetail.key;
		
		/*
		 *表单验证
		 */
		if(item.name=='' || item.age=='' || item.descrip=='') {
			let tips = React.findDOMNode(this.refs.DtipsUnDone);
			tips.style.display = 'block';
			setTimeout(function(){
				tips.style.display = 'none';
			}, 1000);
			return;
		}
		//非负整数
        let numReg = /^\d+$/;
		if(!numReg.test(item.age) || parseInt(item.age)>150) {
			let tips = React.findDOMNode(this.refs.DtipsUnAge);
			tips.style.display = 'block';
			setTimeout(function(){
				tips.style.display = 'none';
			}, 1000);
			return;
		}
		
		this.props.editDetail(item);
		
		//此处应在返回修改成功信息后确认
		let tips = ReactDOM.findDOMNode(this.refs.Dtips);
		tips.style.display = 'block';
		setTimeout(function(){
            tips.style.display = 'none';
		}, 1000);
    this.props.closeDetail();
  }

  handleClose(){
    this.props.closeDetail();
  }

  componentDidUpdate(){
    if(this.props.staffDetail==null){

    }
    else
    {
      let selSex=ReactDOM.findDOMNode(this.refs.selSex);
      for(let i=0; i<selSex.options.length; i++){
				if(selSex.options[i].value == this.props.staffDetail.info.sex){
				  selSex.options[i].selected = 'selected';
				  break;
				}
			}
			let selId = ReactDOM.findDOMNode(this.refs.selId);
			for(let i=0; i<selId.options.length; i++) {
				if(selId.options[i].value == this.props.staffDetail.info.id){
				  selId.options[i].selected = 'selected';
				  break;
				}
			}
    }
  }
  render(){
    let staffDetail=this.props.staffDetail;
    if(!staffDetail){
      return null;
    }
    return(
      <div className='overLay' ref="detail">
        <h4>点击'完成'保存修改,点击'关闭'放弃修改并退出</h4>
        <hr/>
        <table ref='editTabel'>
          <tbody>
            <tr>
              <th>姓名</th>
              <td><input type="text" id='staffEditName' defaultValue={staffDetail.info.name}/></td>
            </tr>
            <tr>
              <th>年龄</th>
              <td><input type="text" id='staffEditAge' defaultValue={staffDetail.info.age}/></td>
            </tr>
            <tr>
              <th>性别</th>
              <td>
                <select id="staffEditSex" ref='selSex'>
                  <option value="男">男</option>
                  <option value="女">女</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>身份</th>
              <td>
                <select id="staffEditId" ref='selId'>
                  <option value="主任">主任</option>
                  <option value="老师">老师</option>
                  <option value="学生">学生</option>
                  <option value="实习">实习</option>
                </select>
              </td>
            </tr>
            <tr>
              <th>个人描述</th>
              <td>
                <textarea  id="staffEditDescrip" defaultValue={staffDetail.info.descrip}></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <p ref='Dtips' className='tips'>修改成功</p>
        <p ref='DtipsUnDone' className='tips'>请录入完整信息</p>
        <p ref='DtipsUnAge' className='tips'>请录入正确的年龄</p>
        <button onClick={this.handleEdit.bind(this)}>完成</button>
        <button onClick={this.handleClose.bind(this)}>关闭</button>
      </div>
    )
  }
}

export default StaffDetail;