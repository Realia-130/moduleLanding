/* eslint-disable react/prop-types */
import React, { useState } from 'react';

const { LineThrough } = require('./ListingStyle');
const { ListingPriceWrapper } = require('./ListingStyle');

function ListingPrice({ prices }) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });

  const shouldDisplayStarting = !(prices.current_price === prices.starting_price);
  const [displayStarting] = useState(shouldDisplayStarting);

  function Starting() { return <div>{`${formatter.format(prices.starting_price)}`}</div>; }
  function Current() { return <div>{`${formatter.format(prices.current_price)}`}</div>; }

  return (
    <div>
      <ListingPriceWrapper><Current /></ListingPriceWrapper>
      <LineThrough>{displayStarting ? <Starting /> : null}</LineThrough>
    </div>
  );
}

export default ListingPrice;
