import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./Footer.module.css";
import Logo from "../../assets/Logo/Logo.svg";
import { Link } from "react-scroll";
import insta from "../../assets/Icon/instagram.png";
import twitter from "../../assets/Icon/twitter.png";
import fb from "../../assets/Icon/facebook.png";

const Footer = () => {
  return (
    <div className={classes.footer_bg}>
      <Container>
        <Row className={classes.row}>
          <Col lg={6}>
            <div className={classes.info}>
              <div className={classes.image_div}>
                <Link
                  to="hero"
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  <img
                    className={classes.navbar_brand}
                    src={Logo}
                    alt="logo"
                  ></img>
                </Link>
              </div>
              <div className={classes.content_div}>
                <p>
                  Solution for easy and flexible getting meals for the household.You can trust us
                  anywhere through this platform
                </p>
                <p>&copy;2022 Made with <i className="bi bi-heart-fill"></i> by&nbsp;
            <Link to={{ pathname: "https://github.com/Eniola-Codes" }} target="_blank" className={classes.eniola_codes}>
              EniolaCodes
            </Link></p>
              </div>
            </div>
          </Col>

          <Col lg={3}>
            <div className={classes.about}>
              <h3>About</h3>
              <p>Our Company</p>
              <p>Career</p>
              <p>Investors Relations</p>
              <p>Social Impact</p>
            </div>
          </Col>

          <Col lg={3}>
            <div className={classes.social}>
              <h3>Social</h3>
              <p>
                <img
                  src={insta}
                  alt="instagram"
                  className={classes.social_icon}
                ></img>
              </p>
              <p>
                <img
                  src={twitter}
                  alt="twitter"
                  className={classes.social_icon}
                ></img>
              </p>
              <p>
                <img
                  src={fb}
                  alt="facebook"
                  className={classes.social_icon}
                ></img>
              </p>
            </div>
          </Col>

          <p className={classes.mobile_copy}>
          &copy;2022 Made with <i className="bi bi-heart-fill"></i> by&nbsp;
            <Link to={{ pathname: "https://github.com/Eniola-Codes" }} target="_blank" className={classes.eniola_codes}>
              EniolaCodes
            </Link>
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
