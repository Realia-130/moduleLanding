/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
const { BannerWrapper } = require('./PhotoStyles');
const { SaveBTN } = require('./PhotoStyles');
const { Border } = require('./PhotoStyles');
const { New } = require('./PhotoStyles');

function Banner({ data, saved, isSaved, heart }) {
  const [isNew] = useState(data.listing_is_new);
  function savedCall() {
    saved();
  }

  return (
    <BannerWrapper>
      <Border>FOR SALE</Border>
      {isNew ? <New>NEW</New> : null}
      <SaveBTN
        type="SaveBTN"
        onClick={() => {
          savedCall();
        }}
      >
        {heart} Save
      </SaveBTN>
    </BannerWrapper>
  );
}

export default Banner;
