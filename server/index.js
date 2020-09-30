const express = require('express');
const bodyParser = require('body-parser');
// const model = require('../database/listingSchema');
const db = require('../database/index');

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/api/listings', (req, res) => {
  db.getAllListings((error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  });
});

app.get('/api/listing', (req, res) => {
  const { listingId } = req.query;
  db.getListing((error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  }, listingId);
});

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

app.post('/api/tours', (req, res) => {
  db.scheduleTour((error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(201).send(results);
    }
  }, req.body);
});

app.put('/api/update_saved', (req, res) => {
  const { listingId } = req.query;
  const { newValue } = req.query;
  db.updateSave((error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  }, listingId, newValue);
});

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
  console.log(`listening on port:${port}`);
});
