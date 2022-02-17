import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import IntroducingImg from "../../assets/imgs/introducingImg.png";

import "./IntroducingComp.scss";

const IntroducingComp = () => {
  return (
    <Container fluid className="introducing-comp comp-height">
      <Container className="introducing-comp-container">
        <Row className="introducing-comp-content">
          <Col xl={5} lg={6} md={5} sm={12}
               className="introducing-comp-left d-flex justify-content-center align-items-center">
            <img data-aos="zoom-in" src={IntroducingImg} alt="introducing-samurai-society"/>
          </Col>
          <Col xl={7} lg={6} md={7} sm={12}
               className="introducing-comp-right d-flex justify-content-center align-items-center">
            <div className="content-container">
              <div className="content-title-container">
                <p data-aos="fade-down" className="content-subtitle">INTRODUCING</p>
                <h6 data-aos="fade-up" className="content-title">SAMURAI SOCIETY</h6>
              </div>
              <div className="content-text">
                <p data-aos="fade-up" className="desc">Year 3088 after many years of wars the world has agreed to
                  dismantle all arms and learn the way of the samurai to defend and attack any opposing threat. Our
                  planet is under attack from martian aliens from exoplanet Kepler, they have advanced AI robots and
                  plan on attacking and destroying humans and aliens to claim earth is their own. Humans and animals
                  have evolved and learned advanced fighting skills in preparation and plan to defend themselves from
                  the aliens and robots. Which force will you join and choose wisely otherwise you won't have a home
                  planet! #teamearth or #teamkepler</p>
                <p data-aos="fade-up" className="desc">Entering into the realm of the samurai means joining a family
                  full of investors and NFT enthusiasts who believe in the future of cryptocurrencies and blockchain
                  technology.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default IntroducingComp;