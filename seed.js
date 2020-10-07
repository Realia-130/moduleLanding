const faker = require('faker');
const axios = require('axios');
const { s3, urlList } = require('./awsData');
const Promise = require('bluebird');

function createListing(id, list) {
  let room = Math.floor(Math.random() * 7);
  room = room < 2 ? 2 : room;

  const getRest = (rooms) => {
    const total = Math.floor(Math.random() * (rooms)) + 0.5;
    const halfBath = Math.floor(Math.random() * 1);
    return total < 1 ? 1.5 : total + (halfBath ? 0.5 : 0);
  };

  const SQFT = (rooms) => {
    let sqft = Math.floor(Math.random() * (rooms * 10));
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

  let newListing = {
    _id: id,
    listing_id: id,
    listing_photo: list,
    listing_type: 'For Sale',
    listing_is_saved: false,
    listing_is_new: listingStatus,
    listing_data: {
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zipCode: faker.address.zipCode(),
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
  let BucketParams = {
    Bucket: 'realialistings',
    Delimiter: '/',
    Prefix: `listing${index}/`,
  }
  s3.listObjects(BucketParams, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      axios({
        method: 'post',
        url: 'http://localhost:3001/seeding',
        data: createListing(index, urlList(data.Contents)),
      }).then(() => {
        console.log(index, 'completed')
      })
        .catch((err) => console.log(err));
    }
  })


}