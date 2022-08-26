import React from 'react';
import { Container , Row, Col} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import classes from './HeroFiveSection.module.css';
import mobileImage from '../../assets/image/mobile.webp';
import playStore from '../../assets/image/playstore.png';
import appStore from '../../assets/image/appstore.png';


const HeroFiveSection = () =>
{
    return (
        <section id='mobile-app'>
        <Container>
      <Row
        className={`${classes.row} mx-auto`}
        data-aos="fade-up"
        data-aos-easing="ease-out"
        data-aos-duration="700"
      >
        <Col sm={12}>
          <div className={classes.header_div}>
            <h2>Get our mobile app</h2>
            <p>Enjoy better experience</p>
          </div>
        </Col>
      </Row>

      <Row className={`${classes.row_content} mx-auto`}>
          <Col lg={6}>
              <div className={classes.text_div}>
                  <p className={classes.text_content}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netusLorem ipsum dolor sit amet.<b/> Consectetur adipiscing elit. Fames ut dictumst urna, lorem nibh. Pretium leo hendrerit interdum netus. Fames ut dictumst urna, lorem nibh.

                  </p>
                  <div className={classes.action_div}>
                        <img className={classes.download_badge} src={appStore} alt='ipone app badge'></img>
                        <img className={`${classes.download_badge2} ms-3`} src={playStore} alt='google app badge'></img>
                  </div>
              </div>
          </Col>
          <Col lg={6}>
            <div className={classes.image_div}>
            <img className={classes.image} src={mobileImage} alt='about'></img>
            </div>
          </Col>
      </Row>

      </Container>
      </section>
    )
}

export default HeroFiveSection;