import React from "react";
import TheButton from "../Ui/TheButton";
import classes from "./HeroSection.module.css";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodImage from "../../assets/image/FoodImage.webp";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row className={`${classes.row} mx-auto`}>
          <Col lg={6} className='p-0'>
            <div className={classes.text__div}>
            <h1>
              Enjoy <span>home made meals</span> far away from home
            </h1>
            <p>
              Helping you enjoy confortable and health food anywhere and anytime on the go
            </p>
            <TheButton>Order now</TheButton>
            </div>
          </Col>
          <Col lg={6} className='p-0'>
            <div className={`ms-auto`}>
            <img className={classes.food__image} src={FoodImage} fluid='true' alt='Food pic'></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
