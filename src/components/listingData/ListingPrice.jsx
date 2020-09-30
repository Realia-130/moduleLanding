import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  font-weight: 500;
  font-size: 26px;
`;
const LineThrough = styled.div`
  text-decoration-line: line-through;
`;


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
      <Wrapper><Current /></Wrapper>
      <LineThrough>{displayStarting ? <Starting /> : null}</LineThrough>
    </div>
  );
}

export default ListingPrice;
