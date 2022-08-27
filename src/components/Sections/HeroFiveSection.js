import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroFiveSection.module.css";
import mobileImage from "../../assets/image/mobile.webp";
import playStore from "../../assets/image/playstore.png";
import appStore from "../../assets/image/appstore.png";

const HeroFiveSection = () => {
  //Structure % layout of the get our mobile app
  return (
    <section id="mobile-app">
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Get our mobile app</h2>
              <p>Enjoy better experience</p>
            </div>
          </Col>
        </Row>

        <Row className={`${classes.row_content} mx-auto`}>
          <Col
            lg={6}
            data-aos="fade-right"
            data-aos-easing="ease-out"
            data-aos-duration="700"
          >
            <div className={classes.text_div}>
              <p className={classes.text_content}>
                With our app, you never have to settle for unhealthy, expensive
                takeaway food again. From spicy noodles to fresh salads, we'll
                deliver anywhere in your city. Get tasty meals in just 30
                minutes. It's simple. We make it easy for you to make smart
                business decisions fast. Whether you have a busy schedule or
                just enjoy home-cooked food,
              </p>
              <div className={classes.action_div}>
                <img
                  className={classes.download_badge}
                  src={appStore}
                  alt="ipone app badge"
                ></img>
                <img
                  className={`${classes.download_badge2} ms-3`}
                  src={playStore}
                  alt="google app badge"
                ></img>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            data-aos="fade-left"
            data-aos-easing="ease-out"
            data-aos-duration="700"
          >
            <div className={classes.image_div}>
              <img
                className={classes.image}
                src={mobileImage}
                alt="about"
              ></img>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  //END
};

export default HeroFiveSection;
