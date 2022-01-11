import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import IntroducingImg from '../../assets/imgs/introducingImg.webp';

import './IntroducingComp.scss';

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
                <p data-aos="fade-up" className="desc">We plan to launch a limited amount of NFTS, expand into our own
                  cryptocurrency in
                  which one will be a government token for our future game set to be launched in Q4 2022, and one coin
                  in which holds the investment and the future of our project which will be announced soon, and finally
                  launch our own game which will be in the metaverse, which will also be compatible with IOS and other
                  platforms (TBA).</p>
                <p data-aos="fade-up" className="desc">Entering into the samurai society Community means joining a
                  family full of investors
                  and nft enthusiasts who believe in the future of Cryptocurrencies and the blockchain technology.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default IntroducingComp;