/* eslint-disable no-console */
const mongoose = require('mongoose');

const model = require('./listingSchema');

mongoose.connect('mongodb://localhost/listings', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const seedListings = (callback, newListing) => {
  const listing = new model.Listing({
    // eslint-disable-next-line no-underscore-dangle
    listing_id: newListing.listing_id,
    listing_photos: [],
    listing_type: newListing.listing_type,
    listing_is_saved: false,
    listing_is_new: newListing.listing_is_new,
    listing_data: {
      address: newListing.listing_data.address,
      city: newListing.listing_data.city,
      state: newListing.listing_data.state,
      neighborhood: newListing.listing_data.neighborhood,
      bed_count: newListing.listing_data.bed_count,
      bath_count: newListing.listing_data.bath_count,
      sqft: newListing.listing_data.sqft,
      starting_price: newListing.listing_data.starting_price,
      current_price: newListing.listing_data.current_price,
    },
  });
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
  model.Listing.find(id)
    .then((results) => callback(null, results))
    .catch((error) => callback(error));
};

const scheduleTour = (callback, tourInfo) => {
  //  temp until schema setup
  callback(tourInfo);
};

const updateSave = (callback, listingId, newValue) => {
  // eslint-disable-next-line max-len
  model.Listing.updateOne({ listing_id: listingId }, { listing_is_saved: newValue }, (error, result) => {
    if (error) {
      callback(error);
    } else {
      callback(null, result);
    }
  });
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
