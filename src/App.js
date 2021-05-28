import React from 'react'
import randomColor from 'randomcolor';
import './App.css'

class App extends React.Component{
  constructor(){
    super();
    this.state={
    color:"",
    
    }
  }
updateColorHandler=()=>{
  var newColor=randomColor()
  this.setState({color:newColor})
}


  render(){
    const {color}=this.state;
    return(
      <div className="container" style={{background:color}}>  
      <h1 className="content">Background Color:{this.state.color}</h1>
      <button onClick={this.updateColorHandler}>Click Me</button>
      </div>
    ) 
  }
}
export default App;