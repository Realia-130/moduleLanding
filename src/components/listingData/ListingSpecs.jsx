/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';

const { Float } = require('./ListingStyle');
const { Neighborhood } = require('./ListingStyle');
const { WrapperState } = require('./ListingStyle');

function ListingSpecs({ specs }) {

  function Address() { return <div>{`${specs.address}`}</div>; }
  function Location() {
    return <div>{`${specs.city}, ${specs.state} ${specs.zipCode}`}</div>;
  }
  function Stats() { return <div> <i class="fas fa-bed" />{` ${specs.bed_count}Beds `} <i class="fas fa-sink" />{` ${specs.bath_count}Baths `}<i class="fas fa-ruler-combined" /> {` ${specs.sqft}sqft`}</div>; }

  return (
    <div>
      <WrapperState>
        <Address />
      </WrapperState>
      <Float>
        <Location />
      </Float>
      <Neighborhood>{`${specs.neighborhood}`}</Neighborhood>
      <Stats />
    </div>
  );
}

export default ListingSpecs;
