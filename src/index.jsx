import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.jsx';
import ListingInfo from './components/listingData/ListingInfo.jsx';

const data = {
  listing_data: {
    address: '75021 Stehr Burg',
    city: 'West Francishaven',
    state: 'TX',
    neighborhood: 'Buckinghamshire',
    bed_count: 6,
    bath_count: 5.5,
    sqft: 2400,
    starting_price: 465000,
    current_price: 425000,
  },
  listing_photos: [],
  _id: '5f6ee48b3e8a69e3cefcd4bc',
  listing_id: 58,
  listing_type: 'For Sale',
  listing_is_saved: false,
  listing_is_new: false,
  __v: 0,
};

ReactDOM.render(<ListingInfo listingData={data.listing_data} />, document.getElementById('root'));
