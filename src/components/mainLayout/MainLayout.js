import React from 'react';
import {Container, Row} from "react-bootstrap";
import BannerComp from "../banner/BannerComp";
import './MainLayout.scss';

const MainLayout = () => {
  return (
    <Container fluid className="main-layout">
      <Row className="main-layout-banner">
        <BannerComp/>
      </Row>
    </Container>
  );
};

export default MainLayout;