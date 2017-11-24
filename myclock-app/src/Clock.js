import React,{Component} from 'react';

class Clock extends Component{
  constructor(props){
    super(props);
    this.state={date:new Date()};
  }

  componentDidMount(){
    this.timerID=setInterval(
      ()=>{
      this.tick()
    },1000);
  }

  tick() {
    this.setState({
      date:new Date()
    })
  }
  componentWillUnmount(){
    clearInterval(this.timerID);
  }
  render(){
    return(
      <h1>{this.state.date.toLocaleTimeString()}</h1>
    )
  }
}

export default Clock;