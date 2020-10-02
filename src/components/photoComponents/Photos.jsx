import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const sampleData = [
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img01.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img02.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img03.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img04.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img05.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img06.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img07.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img08.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img09.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img10.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img11.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img12.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img13.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img14.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img15.jpg',
  'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img16.jpg',
];

const ModalWrapper = styled.div`
  padding: 15px;
  width: 80%;
  height: 550px;
  max-height: 550px;
  margin: 0 auto;
  background: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  z-index: 200;
  position: absolute;
`;

const LowerBannerWrapper = styled.div`
  color: white;
  /* background: black; */
  width: 720px;
  display: flex;
  flex-direction: columns;
  align-items: left;
  justify-content: space-between;
`;
const UpperBannerWrapper = styled.div`
  font-size: 15px;
  width: 720px;
  /* background: purple; */
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
`;
const Carousel = styled.div`

  width: 100%;
  height: 90%;
  /* background: black; */
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;

`;

const ArrowBtnLT = styled.button`
  outline: none;
  border: none;
  border-radius: 25px;
  width: 48px;
  height: 48px;
  background: grey;
  color: white;
  padding: 1px;
  position: absolute;
  top: 200px;
  left: 5%;
  z-index: 10;
`;
const ArrowBtnRT = styled.button`
  outline: none;
  border: none;
  border-radius: 25px;
  width: 48px;
  height: 48px;
  background: grey;
  color: white;
  padding: 1px;
  color: white;
  position: absolute;
  top: 200px;
  left: 90%;
  z-index: 10;
`;
function Photos({ info }) {
  const totalPhotos = sampleData.length - 1;
  const [currentImg, setCurrentImg] = useState(0);
  const [showModal, setShowModal] = useState(true);

  function Left() {
    currentImg === 0 ? setCurrentImg(totalPhotos) : setCurrentImg(currentImg - 1);
  }
  function Right() {
    currentImg === totalPhotos ? setCurrentImg(0) : setCurrentImg(currentImg + 1);
  }
  function Modal() {
    return (
      <Carousel>
        <ArrowBtnLT onClick={Left}>
          <i class="fas fa-chevron-left" />
        </ArrowBtnLT>
        <img width="auto" height="80%" object-fit="contain" src={`${sampleData[currentImg]}`} alt="sampleData" />
        <ArrowBtnRT onClick={Right}>
          <i class="fas fa-chevron-right" />
        </ArrowBtnRT>
      </Carousel>
    );
  }

  function UpperBanner() {
    return (
      <UpperBannerWrapper>
        <button><i class="far fa-heart fa-2x" /> Save</button>
      </UpperBannerWrapper>
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
      <Modal />
      <LowerBanner />
    </ModalWrapper>

  );
}

export default Photos;



/*
    <div>
      <button onClick={() => {
        setShowModal(!showModal);
        setCurrentImg(0);
      }}>Show Modal</button>
      {showModal ?
        : null}
    </div>


*/