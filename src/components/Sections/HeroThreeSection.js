import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./HeroThreeSection.module.css";
import dish1 from "../../assets/image/dish1.png";
import dish2 from "../../assets/image/dish2.png";
import dish3 from "../../assets/image/dish3.png";
import dish4 from "../../assets/image/dish4.png";
import dish5 from "../../assets/image/dish5.png";
import dish6 from "../../assets/image/dish6.png";

import HeroThreeContent from "../SectionComponents/HeroThreeContent";

const dummyList = [
  {
    id: "d1",
    src: dish1,
    name: "Yam and egg sauce",
    price: "1500",
  },

  {
    id: "d2",
    src: dish2,
    name: "Jellof rice and chicken",
    price: " 3500",
  },

  {
    id: "d3",
    src: dish3,
    name: "Porridge beans",
    price: "2000",
  },
];

const dummyList2 = [
  {
    id: "d4",
    src: dish4,
    name: "Semo and egusi soup",
    price: "5000",
  },

  {
    id: "d5",
    src: dish5,
    name: "Amala and ewedu soup",
    price: "7000",
  },

  {
    id: "d6",
    src: dish6,
    name: "Eba and okra soup",
    price: "3000",
  },
];

const HeroThreeSection = () => {

  const dishList1 = dummyList.map((dish) => (
    <Col
      lg={4}
      className={classes.dish_col}
      data-aos="fade-up"
      data-aos-easing="ease-out"
      data-aos-duration="700"
    >
      <HeroThreeContent
        key={dish.id}
        name={dish.name}
        src={dish.src}
        price={dish.price}
      />
   </Col>
  ));

  const dishList2 = dummyList2.map((dish) => (
    <Col
      lg={4}
      className={classes.dish_col}
      data-aos="fade-up"
      data-aos-easing="ease-out"
      data-aos-duration="700"
    >
      <HeroThreeContent
        key={dish.id}
        name={dish.name}
        src={dish.src}
        price={dish.price}
      />
   </Col>
  ));




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
          {dishList1}
          </Row>

          <Row>
          {dishList2}
          </Row>


      </Container>
    </section>
  );
};

export default HeroThreeSection;
