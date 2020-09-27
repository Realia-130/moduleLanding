import React, { useState, useEffect } from 'react';

function ListingPrice({ prices }) {
  const [displayStarting, setStarting] = useState(true);

  useEffect(() => {
    if (prices.current_price === prices.starting_price) {
      setStarting(false);
    }
  }, []);

  function Starting() { return <div>{`${prices.starting_price}`}</div>; }
  function Current() { return <div>{`${prices.current_price}`}</div>; }

  return (
    <div>
      <Current />
      {displayStarting ? <Starting /> : null}
    </div>
  );
}

export default ListingPrice;
