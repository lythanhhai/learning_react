//import logo from './logo.svg';
import './App.css';
import './css/fileCss.css';
import ColorPicker from './components/ColorPicker';
import IncDec from './components/IncDec';
import Text from './components/Text';
import React, { Component } from 'react';
class App extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      color: "red",
      fontsize : "15px",
    };
    this.receiveColor = this.receiveColor.bind(this);
    this.receiveFont = this.receiveFont.bind(this);
  }
  receiveColor(params)
  {
      console.log(params);
      this.setState({
        color: params
      });
  }
  receiveFont(params)
  {
    //App.jsconsole.log(params);
    var fontsize1 = parseInt(params.substring(0,2),10) + 1; // number
    console.log(fontsize1);
    var fontsize2 = String(fontsize1) + "px";
    console.log(fontsize2);
    this.setState({
       fontsize : fontsize2
    });
  }
  render()
  {
    return (
      <div className="App">
        <ColorPicker  color = { this.state.color } onReceiveColor = { this.receiveColor } />
        <IncDec fontsize = { this.state.fontsize } onReceiveFontsize = { this.receiveFont } />
        <Text color = { this.state.color } fontsize = { this.state.fontsize }/>
      </div>
    );
  }
}


export default App;
