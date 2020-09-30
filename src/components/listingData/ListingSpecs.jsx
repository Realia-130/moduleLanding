/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

function ListingSpecs({ specs }) {
  function Address() { return <div>{`${specs.address}`}</div>; }
  function Location() {
    return <div>{`${specs.city}, ${specs.state} ${specs.zipCode}`}</div>;
  }
  function Stats() { return <div>{`${specs.bed_count}Beds ${specs.bath_count}Baths ${specs.sqft}sqft`}</div>; }

  const WrapperState = styled.div`
    font-weight: 500;
    font-size: 26px;
    letter-spacing: 1px;
  `;
  const Neighborhood = styled.span`
    color: #187882;
    font-weight: 400;
    `;

  const Float = styled.div`
    float: left;
    margin-right: 5px;
    font-weight: 400;
  `;

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
