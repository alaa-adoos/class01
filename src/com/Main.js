import React from "react";
import HornedBeast from "./HornedBeast";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row,Col,Container } from "react-bootstrap";
import '../index.css';
import SelectedBeast from "./SelectedBeast"



/*let rowData =data.map(element =>
<HornedBeast
key={element.id}
title={element.title}
img={element.image_url}
description={element.description}

/>

);*/
class Main extends React.Component{
  
    render() {

        return (
          <>
         
          <Row xs={1} md={4} className="g-4">
          {this.props.hornedBrastData.map((beast,idx)=>{
            return(
              <HornedBeast 
              key={idx}
              index={idx}
              src={beast.image_url}
              title={beast.title}
              description={beast.description}
              myFunction={this.props.myFunction}/>
            )
          }
          
          )}
         </Row>
         </>
        )
         
      }
    }
export default Main;