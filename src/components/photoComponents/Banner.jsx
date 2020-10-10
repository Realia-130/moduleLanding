/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const { BannerWrapper } = require('./PhotoStyles');
const { SaveBTN } = require('./PhotoStyles');
const { Border } = require('./PhotoStyles');
const { New } = require('./PhotoStyles');
const { Pink } = require('./PhotoStyles');

function Banner({ data, saved, isSaved }) {
  console.log(data.listing_is_saved)
  const [isNew] = useState(data.listing_is_new);
  const [heart, setHeart] = useState(<i className="far fa-heart " />)

  function savedCall() {
    saved();
  }
  useEffect(() => {
    isSaved ? setHeart(<Pink><i className="fas fa-heart " /></Pink>) : setHeart(<i className="far fa-heart " />)

  }, [isSaved])

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
