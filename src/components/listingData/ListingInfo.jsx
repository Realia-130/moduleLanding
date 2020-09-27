/* eslint-disable react/prop-types */
import React from 'react';
// import { PropTypes } from 'prop-types';
import ListingSpecs from './ListingSpecs.jsx';
import ListingPrice from './ListingPrice.jsx'

function ListingInfo({ listingData }) {
  return (
    <div>
      <ListingSpecs specs={listingData} />
      <ListingPrice prices={listingData} />
    </div>
  );
}

export default ListingInfo;
