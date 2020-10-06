import React, { useState } from 'react';

const { PhotoPreview } = require('./PhotoStyles');
const { Secondary } = require('./PhotoStyles');
const { Img } = require('./PhotoStyles');
const { Img2 } = require('./PhotoStyles');
const { Img3 } = require('./PhotoStyles');

function PhotoComponent({ photos }) {

  return (
    <div >
      <PhotoPreview >
        <Img src={`${photos[0]}`} />
        <Secondary>
          <Img2 src={`${photos[1]}`} />
          <Img3 src={`${photos[2]}`} />
        </Secondary>
      </PhotoPreview>
    </div>
  );
}

export default PhotoComponent;
