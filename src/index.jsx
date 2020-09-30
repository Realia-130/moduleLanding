/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
// import App from './App.jsx';
import ListingInfo from './components/listingData/ListingInfo.jsx';
import Banner from './components/photoComponents/Banner.jsx';
import PhotoComponent from './components/photoComponents/PhotoComponent.jsx';

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
  listing_photos: [],
  _id: '5f6ee48b3e8a69e3cefcd4bc',
  listing_id: 58,
  listing_type: 'For Sale',
  listing_is_saved: false,
  listing_is_new: true,
  __v: 0,
};

function App() {
  const Photos = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  `;
  return (
    <div>
      <Photos>
        <Banner data={data} />
        <PhotoComponent />
      </Photos>
      <ListingInfo listingData={data.listing_data} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
