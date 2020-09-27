/* eslint-disable react/prop-types */
import React from 'react';
// import { PropTypes } from 'prop-types';
import ListingSpecs from './ListingSpecs.jsx';
import ListingPrice from './ListingPrice.jsx'

function ListingInfo({ listingData }) {
  const prices = {
    currentPrice: listingData.current_price,
    startingPrice: listingData.starting_price,
  };
  const specs = {
    address: listingData.address,
    city: listingData.city,
    state: listingData.state,
    neighborhood: listingData.neighborhood,
    bed: listingData.bed_count,
    bath: listingData.bath_count,
    sqft: listingData.sqft,
  };

  return (
    <div>
      <ListingSpecs specs={specs} />
      <ListingPrice prices={prices} />
    </div>
  );
}

export default ListingInfo;
