/* eslint-disable no-console */
const mongoose = require('mongoose');

const model = require('./listingSchema');

mongoose.connect('mongodb://localhost/listings', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const seedListings = (callback, newListing) => {
  let listing = new model.Listing();
  listing = Object.assign(listing, newListing);

  listing.save()
    .then(() => callback(null, 'saved'))
    .catch((error) => callback(error));
};

const getAllListings = (callback) => {
  model.Listing.find()
    .then((results) => callback(null, results))
    .catch((error) => callback(error));
};

const getListing = (callback, id) => {
  model.Listing.find({ listing_id: id })
    .then((results) => callback(null, results))
    .catch((error) => callback(error));
};

const scheduleTour = (callback, tourInfo) => {
  callback(tourInfo);
};

const updateSave = (callback, listingId, newValue) => {
  const errorFunction = (error, result) => {
    if (error) {
      callback(error);
    } else {
      callback(null, result);
    }
  };

  model.Listing.updateOne({ listing_id: listingId }, { listing_is_saved: newValue }, errorFunction);
};

const removeListing = (callback, listingId) => {
  model.Listing.deleteOne({ listing_id: listingId }, (error, result) => {
    if (error) {
      callback(error);
    } else {
      callback(null, result);
    }
  });
};

module.exports = {
  seedListings,
  getAllListings,
  getListing,
  scheduleTour,
  updateSave,
  removeListing,
};
