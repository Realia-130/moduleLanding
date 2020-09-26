const express = require('express');
const bodyParser = require('body-parser');
// const model = require('../database/listingSchema');
const db = require('../database/index');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

//  getListings endpoint to get all listings
app.get('/api/listings', (req, res) => {
  db.getAllListings((error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

//  getListing endpoint to get a single listing
app.get('/api/listing', (req, res) => {
  db.getListing((error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  }, { listing_id: 98 });
});

//  seeding database endpoint
app.post('/seeding', (req, res) => {
  const newListing = req.body;
  db.seedListings((error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(201).send(results);
    }
  }, newListing);
});

//  schedule tour endpoint
app.post('/api/tours', (req, res) => {
  db.scheduleTour((error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(201).send(results);
    }
  }, req.body);
});

//  save listing to updated listing as being saved
app.put('/api/update_saved', (req, res) => {
  const { listingId } = req.body;
  const { newValue } = req.body;
  db.updateSave((error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  }, listingId, newValue);
});

//  remove listing from db
app.delete('/api/remove_listing', (req, res) => {
  const { listingId } = req.body;
  db.removeListing((error, result) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(result);
    }
  }, listingId);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`listening on port:${port}`);
});
