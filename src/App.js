import React from "react";
import Headers from "./com/Header";
import Footer from "./com/Footer";
import Main from "./com/Main";

class App extends React.Component{
  render(){
    return(
      <div>
      <Headers />
      <Main />
      <Footer/>
     
      </div>
    )
  }
}
export default App;