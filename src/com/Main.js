import React from "react";
import HornedBeast from "./HornedBeast";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Row,Col,Container } from "react-bootstrap";
import '../index.css';
import Data from "./data.json"


let rowData =Data.map(element =>
<HornedBeast
key={element.id}
title={element.title}
img={element.image_url}
description={element.description}

/>

);
class Main extends React.Component{
  
    render() {

        return (
          <>
          <Row xs={1} md={4} className="g-4">
         {rowData}
         </Row>
         </>
        )
         
      }
    }
export default Main;