/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
import ListingSpecs from './ListingSpecs.jsx';
import ListingPrice from './ListingPrice.jsx';

const { ListingWrapper } = require('./ListingStyle');

function ListingInfo({ listingData }) {
  return (
    <div>
      <ListingWrapper>
        <ListingSpecs specs={listingData} />
      </ListingWrapper>
      <ListingWrapper>
        <ListingPrice prices={listingData} />
      </ListingWrapper>
    </div>
  );
}

export default ListingInfo;
