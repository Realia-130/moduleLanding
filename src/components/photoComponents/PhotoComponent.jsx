import React from 'react';
import styled from 'styled-components';
// import { Grid, Row } from './Grid';

const img1 = 'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img01.jpg';
const img2 = 'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img02.jpg';
const img3 = 'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img03.jpg';

function PhotoComponent() {
  const PhotoPreview = styled.div`
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
    max-width: 992px;
    max-height: 490px;
    margin: 0;
    padding: 0;
    z-index: -1;
    border-radius: 8px;
  `;

  const Secondary = styled.div`
    overflow: hidden;
    display:flex;
    flex-direction: column;
  `;
  const Img = styled.img`
    margin-right: 5px;
    object-fit: cover;
    width: 744px;
    height: 490px;
    display: block;
    z-index: -1;
  `;
  const Img2 = styled.img`
    margin-bottom: 5px;
    object-fit: cover:
    display: block;
    width: 248px;
    height: 245px;
    z-index: -1;
  `;
  const Img3 = styled.img`
    object-fit: cover;
    display: block;
    width: 248px;
    height: 245px;
    z-index: -1;
  `;
  return (
    <PhotoPreview>
      <Img src={`${img1}`} />
      <Secondary>
        <Img2 src={`${img2}`} />
        <Img3 src={`${img3}`} />
      </Secondary>
    </PhotoPreview>
  );
}

export default PhotoComponent;
