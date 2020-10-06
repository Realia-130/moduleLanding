/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const { BannerWrapper } = require('./PhotoStyles');
const { SaveBTN } = require('./PhotoStyles');
const { Border } = require('./PhotoStyles');
const { New } = require('./PhotoStyles');
const { Pink } = require('./PhotoStyles');
//  needs access to isSaved isNew and photos
function Banner({ data }) {
  const [isNew] = useState(data.listing_is_new);
  const [isSaved, setSaved] = useState(data.listing_is_saved);// change to data.listing_is_saved
  const [heart, setHeart] = useState(<i class="far fa-heart " />)

  function savedCall() {
    axios({
      method: 'PUT',
      url: 'http://localhost:3001/api/update_saved',
      params: {
        listingId: data.listing_id,
        newValue: !isSaved,
      },
    })
      .then(setSaved(!isSaved));
    isSaved ? setHeart(<Pink><i class="fas fa-heart " /></Pink>) : setHeart(<i class="far fa-heart " />)
  }

  return (
    <BannerWrapper>
      <Border>FOR SALE</Border>
      {isNew ? <New>NEW</New> : null}
      <SaveBTN
        type="SaveBTN"
        onClick={savedCall}
      >
        {heart} Save
      </SaveBTN>
    </BannerWrapper>
  );
}

export default Banner;
