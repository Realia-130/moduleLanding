/* eslint-disable import/extensions */
/* eslint-disable react/prop-types */
import React from 'react';
// import { PropTypes } from 'prop-types';
import styled from 'styled-components';
import ListingSpecs from './ListingSpecs.jsx';
import ListingPrice from './ListingPrice.jsx';
// const { Button } = require('./style');

const Wrapper = styled.div`
  font-family:  sans-serif;
  font-weight: lighter;
  float: left;
  padding: 20px;
  position: relative;
`;

function ListingInfo({ listingData }) {
  return (
    <div>
      <Wrapper>
        <ListingSpecs specs={listingData} />
      </Wrapper>
      <Wrapper>
        <ListingPrice prices={listingData} />
      </Wrapper>
    </div>
  );
}

export default ListingInfo;
