/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

//  needs access to isSaved isNew and photos
function Banner({ data }) {
  const [isNew] = useState(data.listing_is_new);
  const [isSaved, setSaved] = useState(false);// change to data.listing_is_saved
  const Wrapper = styled.div`
    font-family: sans-serif;
    font-size: 12px;
    display: flex;
    text-align: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: -50;
    left: -50;
    padding: 15px;
  `;
  const SaveBTN = styled.button`
    display: inline-block;
    border: solid .5px lightgrey;
    font-size: 16px;
    padding: 8px 16px;
    min-width: 100px;
    height: 42px;
    margin-left: 650px;
    border-radius: 5px;
    float: right;
  `;
  const Border = styled.span`
    color: #19B15B;
    max-height: 15px;
    border-radius: 5px;
    background-color: white;
    padding: 2px 4px;
    margin-right: 4px;
  `;
  const New = styled.span`
    color: #132286;
    max-height: 15px;
    border-radius: 5px;
    background-color: white;
    padding: 2px 4px;
  `;

  return (
    <Wrapper>
      <Border>FOR SALE</Border>
      {isNew ? <New>NEW</New> : null}
      <SaveBTN
        type="SaveBTN"
        onClick={() => {
          axios({
            method: 'PUT',
            url: 'http://localhost:3001/api/update_saved',
            params: {
              listingId: data.listing_id,
              newValue: !isSaved,
            },
          })
            .then();
          setSaved(!isSaved);
        }}
      >
        Save
      </SaveBTN>
    </Wrapper>
  );
}

export default Banner;
