import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import './MainLayout.scss';
import WelcomeComp from "../welcome/WelcomeComp";
import IntroducingComp from "../introducing/IntroducingComp";
import TeamComp from "../team/TeamComp";

const MainLayout = () => {
  return (
    <Container fluid className="main-layout">
      <Row id="home" className="main-layout-banner">
        <BannerComp/>
      </Row>
      <Row id="welcome">
        <WelcomeComp/>
      </Row>
      <Row id="introducing">
        <IntroducingComp/>
      </Row>
      <Row id="team">
        <TeamComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;