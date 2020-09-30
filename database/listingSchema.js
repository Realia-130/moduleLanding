const mongoose = require('mongoose');

const { Schema } = mongoose;

const listingSchema = new Schema({
  listing_id: Number,
  listing_photos: Array,
  listing_type: String,
  listing_is_saved: Boolean,
  listing_is_new: Boolean,
  listing_data: {
    address: String,
    city: String,
    state: String,
    zipCode: String,
    neighborhood: String,
    bed_count: Number,
    bath_count: Number,
    sqft: Number,
    starting_price: Number,
    current_price: Number,
  },
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports.Listing = Listing;
