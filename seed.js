/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
/* eslint-disable radix */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
const faker = require('faker');
const axios = require('axios');

function createListing(id) {
  let room = Math.floor(Math.random() * 7);
  room = room < 2 ? 2 : room;

  const getRest = (rooms) => {
    const total = Math.floor(Math.random() * (rooms)) + 0.5;
    const halfBath = Math.floor(Math.random() * 1);
    return total < 1 ? 1.5 : total + (halfBath ? 0.5 : 0);
  };

  const SQFT = (rooms) => {
    let sqft = Math.floor(Math.random() * (rooms * 10));
    // eslint-disable-next-line no-return-assign
    sqft *= 100;
    sqft < 1000 ? (sqft += 1000) : sqft;

    return sqft;
  };

  const DATE = (startDate) => {
    // const date = new Date();
    const month = startDate.getMonth() + 1;
    const day = startDate.getDate();
    const year = startDate.getFullYear();

    const fullDate = `${year}${month}${day}`;

    return parseInt(fullDate);
  };

  const isNew = () => {
    let result = false;
    const gen = Math.floor(Math.random() * 15);

    if (gen > 10) {
      result = true;
    }
    return result;
  };

  const listingStatus = isNew();
  const startPrice = Math.floor(Math.random() * 45) * 15000;
  const currentPrice = listingStatus ? startPrice : (startPrice - ((Math.floor(Math.random() * 5) + 1) * 10000));
  const newListing = {
    listing_id: id,
    listing_photo: [],
    listing_type: 'For Sale',
    listing_is_saved: false,
    listing_is_new: listingStatus,
    listing_data: {
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipCode: faker.zipCode(),
      neighborhood: faker.address.county(),
      bed_count: room,
      bath_count: getRest(room),
      sqft: SQFT(room),
      starting_price: startPrice,
      current_price: currentPrice,
    },
  };

  return newListing;
}

for (let index = 1; index <= 100; index += 1) {
  axios({
    method: 'post',
    url: 'http://localhost:3001/seeding',
    data: createListing(index),
  })
    .then(() => { })
    .catch((err) => console.log(err));
}
