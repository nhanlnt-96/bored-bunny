import React from "react";
import {Container, Row} from "react-bootstrap";

import "./NFTExplain.scss";
import {nftExplainData} from "../../configs/nftExplainData";

const NftExplain = () => {
  return (
    <Container fluid className="nft-explain comp-height">
      <Container className="nft-explain-container">
        <Row className="nft-explain-title">
          <h6 data-aos="zoom-in" className="title">NFT EXPLAIN</h6>
        </Row>
        <Row className="nft-explain-content">
          {
            nftExplainData.map((val, index) => (
              <div data-aos="fade-up" key={index} className="nft-explain-item">
                <div className={`nft-explain-img ${val.img.length > 1 && "grid-img"}`}>
                  {
                    val.img.map((imgItem, imgItemKey) => (
                      <img key={imgItemKey} src={imgItem} alt="samurai-society"/>
                    ))
                  }
                </div>
                <div className="nft-explain-content d-flex flex-column justify-content-center">
                  <h6 className="nft-name">{val.imgName}</h6>
                  <p className="nft-desc">{val.content}</p>
                </div>
              </div>
            ))
          }
        </Row>
      </Container>
    </Container>
  );
};

export default NftExplain;