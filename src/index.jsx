/* eslint-disable import/extensions */
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import App from './App.jsx';
import ListingInfo from './components/listingData/ListingInfo.jsx';
import Banner from './components/photoComponents/Banner.jsx';
import PhotoComponent from './components/photoComponents/PhotoComponent.jsx';
import Modal from './components/photoComponents/Modal.jsx';

const data = {
  listing_data: {
    address: '75021 Stehr Burg',
    city: 'West Francishaven',
    state: 'TX',
    zipCode: '52412',
    neighborhood: 'Buckinghamshire',
    bed_count: 6,
    bath_count: 5.5,
    sqft: 2400,
    starting_price: '$465,000',
    current_price: '$425,000',
  },
  listing_photos: [
    'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img01.jpg',
    'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img02.jpg',
    'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img03.jpg',
    'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img04.jpg',
    'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img05.jpg',
    'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img06.jpg',
    'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img07.jpg',
    'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img08.jpg',
    'https://realialistings.s3-us-west-1.amazonaws.com/listing1/img09.jpg'
  ],
  _id: '5f6ee48b3e8a69e3cefcd4bc',
  listing_id: 58,
  listing_type: 'For Sale',
  listing_is_saved: false,
  listing_is_new: true,
  __v: 0,
};

function App() {
  const Landing = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    cursor: pointer;
    z-index: 50;
  `;
  const GrayOut = styled.div`
    filter: grayscale(80%) blur(10px);
    margin: auto;
    width: 1000px;
    height: 100%;
`;
  const Norm = styled.div`
  margin: auto;
  width: 1000px;
`;

  const [Wrapper, setWrapper] = useState(Norm);
  const [showModal, setShowModal] = useState(data.listing_is_saved);

  return (
    <div>
      { showModal ? <Modal info={data.listing_data} photos={data.listing_photos} /> : null}
      <Wrapper>
        <Landing onClick={(e) => {
          if (e.target.innerText !== ' Save') {
            showModal ? setWrapper(Norm) : setWrapper(GrayOut);
            setShowModal(!showModal);
          }
        }}>
          <Banner data={data} />
          <PhotoComponent photos={data.listing_photos} />
        </Landing>
        <ListingInfo listingData={data.listing_data} />
      </Wrapper>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
