import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import './MainLayout.scss';
import WelcomeComp from "../welcome/WelcomeComp";
import IntroducingComp from "../introducing/IntroducingComp";
import TeamComp from "../team/TeamComp";
import RoadmapComp from "../roadmap/RoadmapComp";
import FAQComp from "../faq/FAQComp";

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
      <Row id="roadmap">
        <RoadmapComp/>
      </Row>
      <Row id="faq">
        <FAQComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;