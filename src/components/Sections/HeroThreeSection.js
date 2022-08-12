import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroThreeSection.module.css";


const HeroThreeSection = () =>
{

    return (
        <Container>

        <Row className={`${classes.row} mx-auto`}>
          <Col sm={12}>
            <div className={classes.header_div}>
              <h2>Why choose us</h2>
              <p>This is what makes our product different</p>
            </div>
          </Col>
        </Row>
</Container>  
    )
}

export default HeroThreeSection;