import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const { SaveBTN } = require('./PhotoStyles');
const { Pink } = require('./PhotoStyles');
const { ModalWrapper, LowerBannerWrapper, UpperBannerWrapper, Carousel, Exit, ArrowBtnLT, ArrowBtnRT } = require('./ModalStyles');

function Modal({ info, photos, setModal, saved, isSaved }) {
  const totalPhotos = photos.length - 1;
  const [currentImg, setCurrentImg] = useState(0);

  useEffect(() => {
    isSaved ? setHeart(<Pink><i className="fas fa-heart " /></Pink>) : setHeart(<i className="far fa-heart " />);
  }, [isSaved]);

  function Left() {
    currentImg === 0 ? setCurrentImg(totalPhotos) : setCurrentImg(currentImg - 1);
  }

  function Right() {
    currentImg === totalPhotos ? setCurrentImg(0) : setCurrentImg(currentImg + 1);
  }

  function Content() {
    return (
      <Carousel>
        <ArrowBtnLT onClick={Left}>
          <i className="fas fa-chevron-left" />
        </ArrowBtnLT>
        <img width="800px" height="500px" object-fit="contain" src={`${photos[currentImg]}`} alt="sampleData" />
        <ArrowBtnRT onClick={Right}>
          <i className="fas fa-chevron-right" />
        </ArrowBtnRT>
      </Carousel>
    );
  }
  const [heart, setHeart] = useState(<i className="far fa-heart " />)

  function savedCall() {
    saved();
    isSaved ? setHeart(<Pink><i className="fas fa-heart " /></Pink>) : setHeart(<i className="far fa-heart " />)
  }

  function UpperBanner() {
    return (
      <UpperBannerWrapper>
        <SaveBTN onClick={() => {
          savedCall();
        }}>{heart} Save</SaveBTN>
        <Exit><i className="fas fa-times fa-2x" onClick={setModal} /></Exit>
      </UpperBannerWrapper >
    );
  }

  function LowerBanner() {
    return (
      <LowerBannerWrapper>
        <div>
          {`${currentImg + 1}/${totalPhotos + 1}`}
        </div>
        <div>{`${info.address} | ${info.current_price} | ${info.bed_count} Beds ${info.bath_count} Baths `}</div>
      </LowerBannerWrapper>
    )
  }

  return (
    <ModalWrapper>
      <UpperBanner />
      <Content />
      <LowerBanner />
    </ModalWrapper>
  );
}

export default Modal;
