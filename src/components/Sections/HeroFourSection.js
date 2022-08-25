import React from "react";
import { Row, Container, Col } from "react-bootstrap";
import TheButton from "../Ui/TheButton";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroFourSection.module.css";
import aboutImage from '../../assets/image/about-image.png';

const HeroFourSection = () => {
  //Rendering hero for section (currently building this)
  return (
    <Container>
      <Row className={`${classes.row} mx-auto`}>
          <Col lg={6}>
              <div className={classes.text_div}>
                  <h2 className={classes.text_header}>
                    About us
                  </h2>
                  <p className={classes.text_content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netusLorem ipsum dolor sit amet.<b/> Consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus. Fames ut dictumst urna, lorem nibh.

                  </p>
                  <div className={classes.button_div}>
                    <TheButton>See more</TheButton>
                  </div>
              </div>
          </Col>
          <Col lg={6}>
            <div className={classes.image_div}>
            <img className={classes.image} src={aboutImage} alt='about'></img>
            </div>
          </Col>
      </Row>
    </Container>
  );
  //END
};

export default HeroFourSection;
