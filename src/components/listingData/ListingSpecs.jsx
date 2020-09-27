/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function ListingSpecs({ specs }) {
  function Address() { return <div>{`${specs.address}`}</div>; }
  function Location() { return <div>{`${specs.city}, ${specs.state}, ${specs.neighborhood}`}</div>; }
  function Stats() { return <div>{`${specs.bed_count}Beds ${specs.bath_count}Baths ${specs.sqft}sqft`}</div>; }

  return (
    <div>
      <Address />
      <Location />
      <Stats />
    </div>
  );
}

export default ListingSpecs;
