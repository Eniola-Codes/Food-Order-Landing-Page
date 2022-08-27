import React, { useState } from "react";
import { Row, Container, Col } from "react-bootstrap";
import TheButton from "../Ui/TheButton";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroFourSection.module.css";
import aboutImage from "../../assets/image/about-image.webp";
import Modal from "../Ui/Modal";

const HeroFourSection = () => {
  const [showModal, setShowModal] = useState(false);

  const aboutModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  //Rendering the About section and the About Modal
  return (
    <>
      {showModal && (
        <Modal>
          <div className={classes.about_modal}>
            <div className={classes.about_header}>
              <h2 className={classes.text_modal_header}>About us</h2>
            </div>
            <div className={classes.about_body}>
              <p className={classes.text_content}>
                I make delicious healthy meals for busy people who want to enjoy
                home made food without the hassle of cooking. Why would you cook
                when you don't have to? The Hot Plate makes it easy to eat your
                favorite home cooked food anywhere you want. You deserve to eat
                great food, whether you're at home or on the go. We'll help you
                find unique meals wherever you are. With our app, you never have
                to settle for unhealthy, expensive takeaway food again.
              </p>
            </div>
            <div className={classes.about_footer}>
              <div className={classes.button_modal_div}>
                <TheButton onClick={closeModal}>Cancel</TheButton>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <section id="about">
        <Container>
          <Row className={`${classes.row} mx-auto`}>
            <Col
              lg={6}
              data-aos="fade-right"
              data-aos-easing="ease-out"
              data-aos-duration="700"
            >
              <div className={classes.text_div}>
                <h2 className={classes.text_header}>About us</h2>
                <p className={classes.text_content}>
                  I make delicious healthy meals for busy people who want to
                  enjoy home made food without the hassle of cooking. Why would
                  you cook when you don't have to? The Hot Plate makes it easy
                  to eat your favorite home cooked food anywhere you want. You
                  deserve to eat great food, whether you're at home or on the
                  go.
                </p>
                <div className={classes.button_div}>
                  <TheButton onClick={aboutModal}>See more</TheButton>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div
                className={classes.image_div}
                data-aos="fade-left"
                data-aos-easing="ease-out"
                data-aos-duration="700"
              >
                <img
                  className={classes.image}
                  src={aboutImage}
                  alt="about"
                ></img>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
  //END
};

export default HeroFourSection;
