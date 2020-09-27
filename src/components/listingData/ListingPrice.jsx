import React, { useState, useEffect } from 'react';

function ListingPrice({ prices }) {
  const [startingPrice] = useState(prices.startingPrice);
  const [currentPrice] = useState(prices.currentPrice);
  const [displayStarting, setStarting] = useState(true);

  useEffect(() => {
    if (currentPrice === startingPrice) {
      setStarting(false);
    }
  }, []);

  function Starting() { return <div>{`${startingPrice}`}</div>; }
  function Current() { return <div>{`${currentPrice}`}</div>; }

  return (
    <div>
      <Current />
      {displayStarting ? <Starting /> : null}
    </div>
  );
}

export default ListingPrice;
