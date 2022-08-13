import React from "react";
import { Row, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroFourSection.module.css";

const HeroFourSection = () => {
  return (
    <Container>
      <Row className={`${classes.row} mx-auto`}></Row>
    </Container>
  );
};

export default HeroFourSection;
