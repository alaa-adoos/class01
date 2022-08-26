
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row,Col,Container } from "react-bootstrap";
import Data from "./data.json"
import '../index.css';

class HornedBeast extends React.Component {
  constructor(props){
    super(props);
    this.state={
      numOfFavorites:""
    }
  }
  incrementNumOfFavorites =()=>{
this.setState({
  numOfFavorites:this.state.numOfFavorites+"❤️"
})
  }
    render(){
      

      return(
        <div>


 <Col>
    <Card style={{ width: '18rem' }} onClick={()=>this.props.myFunction(this.props.title)}>
      <Card.Body>
      <Card.Title style={{color:'blue'}}>{this.props.title}</Card.Title>
      <Card.Img variant="top" src={this.props.src} style={{width:'10rem',height:'15rem'}} onClick={this.incrementNumOfFavorites}/>
      <Card.Text>
        {this.props.description}
      </Card.Text>
      <Card.Text style={{color:'red'}}>
        Favorites:{this.state.numOfFavorites}
      </Card.Text>
    </Card.Body>
  
       
</Card>
</Col>


</div>

      )
      }
  }
  
export default HornedBeast;
