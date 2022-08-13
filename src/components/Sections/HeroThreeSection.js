import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroThreeSection.module.css";
import Input from "../Ui/Input";
import TheButton from "../Ui/TheButton";
import dish1 from "../../assets/image/dish1.png";
import dish2 from "../../assets/image/dish2.png";
import dish3 from "../../assets/image/dish3.png";

const HeroThreeSection = () => {
  return (
    <section>
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          bdata-aos="fade-up"
          data-aos-easing="ease-out"
          data-aos-duration="700"
        >
          <Col sm={12}>
            <div className={classes.header_div}>
              <h2>Our daily dishes</h2>
              <p>Check out recommended dishes of your choice</p>
            </div>
          </Col>
        </Row>
        <Row className={classes.row_dish}>
          <Col
            lg={4}
            className={classes.dish_col}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
          >
            <div className={classes.dish_content}>
              <div className={classes.dish_image_div}>
                <img src={dish1} alt="Dish" />
              </div>
              <div className={classes.dish_text_div}>
                <p>Yam and egg sauce</p>
              </div>
              <div className={classes.dish_price_div}>
                <p className="my-auto">₦1200</p>
                <Input />
                <TheButton>
                  <i className="bi bi-plus"></i> Add
                </TheButton>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            className={`${classes.dish_col} ${classes.dish_col_mid}`}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
          >
            <div className={classes.dish_content}>
              <div className={classes.dish_image_div}>
                <img src={dish2} alt="Dish" />
              </div>
              <div className={classes.dish_text_div}>
                <p>Yam and egg sauce</p>
              </div>
              <div className={classes.dish_price_div}>
                <p className="my-auto">₦1200</p>
                <Input />
                <TheButton>
                  <i className="bi bi-plus"></i> Add
                </TheButton>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            className={classes.dish_col}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
          >
            <div className={classes.dish_content}>
              <div className={classes.dish_image_div}>
                <img src={dish3} alt="Dish" />
              </div>
              <div className={classes.dish_text_div}>
                <p>Yam and egg sauce</p>
              </div>
              <div className={classes.dish_price_div}>
                <p className="my-auto">₦1200</p>
                <Input />
                <TheButton>
                  <i className="bi bi-plus"></i> Add
                </TheButton>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col
            lg={4}
            className={classes.dish_col}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
          >
            <div className={classes.dish_content}>
              <div className={classes.dish_image_div}>
                <img src={dish1} alt="Dish" />
              </div>
              <div className={classes.dish_text_div}>
                <p>Yam and egg sauce</p>
              </div>
              <div className={classes.dish_price_div}>
                <p className="my-auto">₦1200</p>
                <Input />
                <TheButton>
                  <i className="bi bi-plus"></i> Add
                </TheButton>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            className={`${classes.dish_col} ${classes.dish_col_mid}`}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
          >
            <div className={classes.dish_content}>
              <div className={classes.dish_image_div}>
                <img src={dish2} alt="Dish" />
              </div>
              <div className={classes.dish_text_div}>
                <p>Yam and egg sauce</p>
              </div>
              <div className={classes.dish_price_div}>
                <p className="my-auto">₦1200</p>
                <Input />
                <TheButton>
                  <i className="bi bi-plus"></i> Add
                </TheButton>
              </div>
            </div>
          </Col>
          <Col
            lg={4}
            className={classes.dish_col}
            data-aos="fade-up"
            data-aos-easing="ease-out"
            data-aos-duration="700"
          >
            <div className={classes.dish_content}>
              <div className={classes.dish_image_div}>
                <img src={dish3} alt="Dish" />
              </div>
              <div className={classes.dish_text_div}>
                <p>Yam and egg sauce</p>
              </div>
              <div className={classes.dish_price_div}>
                <p className="my-auto">₦1200</p>
                <Input />
                <TheButton>
                  <i className="bi bi-plus"></i> Add
                </TheButton>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroThreeSection;
