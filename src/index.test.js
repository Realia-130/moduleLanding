/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16.3';
import PhotoComponent from './components/photoComponents/PhotoComponent.jsx';
import Banner from './components/photoComponents/Banner.jsx';
import ListingInfo from './components/listingData/ListingInfo.jsx';
import ListingPrice from './components/listingData/ListingPrice.jsx';
import ListingSpecs from './components/listingData/ListingSpecs.jsx';

const data = require('./sampleData');

configure({ adapter: new Adapter() });

it('Loads Photo Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PhotoComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Loads Banner Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Banner data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Loads Listing Info Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListingInfo listingData={data.listing_data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Loads Listing Price Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListingPrice prices={data.listing_data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it('Loads Listing Specs  Component without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListingSpecs specs={data.listing_data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
