import React from "react";
import Headers from "./com/Header";
import Footer from "./com/Footer";
import Main from "./com/Main";
import data from "./com/data.json"
import Models from "./com/SelectedBeast";
import "bootstrap/dist/css/bootstrap.min.css";
class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
     selBeast:{},
      show:false
   
    };
  }

  myFunction =(title)=>{
    const selectedBeast=data.find(beast => beast.title===title);
    this.setState({
      show:true,
      selBeast:selectedBeast
    });

    
  };

  handleClose =() =>{
    this.setState({
      show:false,
    });
  };

  render(){
    return(
      <div>
      <Headers />

      <Main hornedBrastData={data} myFunction={this.myFunction} />

      <Footer/>
      <Models 
      showModal={this.state.show} 
      handleClose={this.handleClose} 
      selBeast={this.state.selBeast}
  
      />
      </div>
    );
  }
}
export default App;