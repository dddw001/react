import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import {loadData} from '../../redux/user.redux.js';
import {connect} from 'react-redux';

@withRouter
@connect(
  null,
  {loadData}
)
class AuthRoute extends React.Component{
  componentDidMount(){
    const publicList=['/login','/register'];
    const pathname=this.props.location.pathname;
    //如果数组里面有pathname，则不用获取用户信息了
    if(publicList.indexOf(pathname)>-1){
      return null;
    }
    axios.get('user/info').
    then(res=>{//res是后端返回的所有值
      if(res.status===200){
        if(res.data.code===0){
          //有登陆信息
          this.props.loadData(res.data.data);
        }
        else{
          this.props.history.push('/login');
        }
      }
    })
  }

  render(){
    return null;
  }
}

export default AuthRoute;