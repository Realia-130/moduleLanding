/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

function ListingSpecs({ specs }) {
  function Address() { return <div>{`${specs.address}`}</div>; }
  function Location() { return <div>{`${specs.city}, ${specs.state}, ${specs.neighborhood}`}</div>; }
  function Stats() { return <div>{`${specs.bed}Beds ${specs.bath}Baths ${specs.sqft}sqft`}</div>; }

  return (
    <div>
      <Address />
      <Location />
      <Stats />
    </div>
  );
}

export default ListingSpecs;
