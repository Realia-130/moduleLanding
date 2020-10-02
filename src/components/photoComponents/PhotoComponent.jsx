import React, { useState } from 'react';

const { PhotoPreview } = require('./PhotoStyles');
const { Secondary } = require('./PhotoStyles');
const { Img } = require('./PhotoStyles');
const { Img2 } = require('./PhotoStyles');
const { Img3 } = require('./PhotoStyles');

const img1 = 'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img01.jpg';
const img2 = 'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img02.jpg';
const img3 = 'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img03.jpg';

function PhotoComponent() {
  function Modal() {
    setShowModal(!showModal);
  }
  return (
    <div >
      <PhotoPreview >
        <Img src={`${img1}`} />
        <Secondary>
          <Img2 src={`${img2}`} />
          <Img3 src={`${img3}`} />
        </Secondary>
      </PhotoPreview>
    </div>
  );
}

export default PhotoComponent;
