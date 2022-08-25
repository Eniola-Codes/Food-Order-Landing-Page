import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import classes from './HeroSixSection.module.css'

const HeroSixSection = () => 
{
    
    return (
        <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col sm={12}>
            <div className={classes.header_div}>
              <h2>Testimonials</h2>
              <p>This is what our client are saying</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_content}>
            
        <Col lg={4}>
                <div className={`${classes.text_div} px-2`}>
                    <h4 className={classes.header_text}>Paul James</h4>
                    <p className={classes.text_location}>Lagos state</p>
                    <p className={classes.text_content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
                </div>
        </Col>


        <Col lg={4}>
        <div className={`${classes.text_div} px-2`}>
                    <h4 className={classes.header_text}>Mercy jude</h4>
                    <p className={classes.text_location}>kogi state</p>
                    <p className={classes.text_content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
                </div>
        </Col>


        <Col lg={4}>
        <div className={`${classes.text_div} px-2`}>
                    <h4 className={classes.header_text}>Lara  one</h4>
                    <p className={classes.text_location}>Imo state</p>
                    <p className={classes.text_content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus</p>
                </div>

        </Col>
        </Row>
        </Container>


    )
}

export default HeroSixSection;