import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput.js';
import BoilWill from './BoilWill.js';



function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}



class App extends Component {
  constructor(props){
    super(props);
    this.handleCelsiusChange=this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange=this.handleFahrenheitChange.bind(this);
    this.state={
      temperature:'',
      scale:'c'
    };
  }

  handleCelsiusChange(temperature){
    this.setState({scale:'c',temperature});
  }
  handleFahrenheitChange(temperature){
    this.setState({scale:'f',temperature});
  }
  render() {
    const temperature = this.state.temperature;
    const celsius=this.state.scale==="f"?tryConvert(temperature,toCelsius):temperature;
    const fahrenheit=this.state.scale==="c"?tryConvert(temperature,toFahrenheit):temperature;
    return (
      <div className="App">
        <TemperatureInput 
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput 
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}/>
        <BoilWill celsius={parseFloat(celsius)}/>
      </div>
    );
  }
}

export default App;
