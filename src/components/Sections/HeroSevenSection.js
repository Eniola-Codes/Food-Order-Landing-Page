import React, { useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroSevenSection.module.css";
import TheButton from "../Ui/TheButton";
import Input from "../Ui/Input";
import Swal from "sweetalert2";

const HeroSevenSection = () => {
  const emailRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const formValue = emailRef.current.value;

    if (
      formValue.trim().length > 0 &&
      formValue.includes("@") &&
      formValue.includes(".") &&
      !formValue.includes(" ")
    ) {
      Swal.fire({
        title: "Successful!",
        text: "Your email has been added to our list.",
        icon: "success",
      });
      event.target.reset();
    } else {
      Swal.fire({
        title: "OOPS!",
        text: "Please input a valid email address.",
        icon: "error",
      });
    }
  };

  return (
    <section id="subscribe">
      <Container>
        <Row
          className={classes.row}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Subscribe to our Newsletter</h2>
              <p>Enter your Email address to get daily offers and news</p>
            </div>
          </Col>
        </Row>
        <Row
          className={classes.row_content}
          data-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <div className={classes.input_group}>
            <form onSubmit={onSubmitHandler}>
              <Input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className={`${classes.input} me-2`}
                ref={emailRef}
              ></Input>
              <TheButton className={classes.button} type="submit">
                Subscribe
              </TheButton>
            </form>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSevenSection;
