import React from 'react';
import {Row, Col, Container} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import classes from './Footer.module.css';
import Logo from '../../assets/Logo/Logo.svg';

const Footer = () =>
{
    return (
            <Container>
                <Row className={classes.row}>
                    <Col lg={4}>
                        <div className={classes.info}>
                            <img src={Logo} alt='logo'></img>
                        </div>
                    </Col>
                    <Col lg={4}></Col>
                    <Col lg={4}></Col>
                </Row>
            </Container>
    )
}

export default Footer;