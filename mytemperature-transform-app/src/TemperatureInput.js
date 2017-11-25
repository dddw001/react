import React,{Component} from 'react';

const scaleNames={
  c:'celsius',
  f:'fahenheit'
}
class TemperatureInput extends Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
  }

  handleChange(e){
    this.props.onTemperatureChange(e.target.value);
  }
  render(){
    return(
      <fieldset>
        <legend>{scaleNames[this.props.scale]}：</legend>
        <input type="text" value={this.props.temperature} 
        onChange={this.handleChange}/>
      </fieldset>
    )
  }
}

export default TemperatureInput;