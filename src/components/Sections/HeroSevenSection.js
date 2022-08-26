import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import classes from './HeroSevenSection.module.css'
import TheButton from '../Ui/TheButton';
import Input from '../Ui/Input';


const HeroSevenSection = () =>
{

    return (
        <section id='subscribe'>
        <Container>
            <Row className={classes.row}>
                <Col xs={12}>
                <div className={classes.header_div}>
              <h2>Subscribe to our Newsletter</h2>
              <p>Enter your Email address to get daily offers and news</p>
            </div>
                </Col>
            </Row>
            <Row className={classes.row_content}>
            <div className={classes.input_group}>
            <Input type='email' name='email' placeholder='Enter your Email' className={`${classes.input} me-2`}></Input>
            <TheButton className={classes.button}>Subscribe</TheButton>
            </div>
            </Row>
        </Container>
        </section>
    )
}

export default HeroSevenSection;