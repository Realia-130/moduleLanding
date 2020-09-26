app.get('/api/listing', (req, res) => {
  const { listingId } = req.body;
  db.getListing((error, results) => {
    if (error) {
      res.status(400).send(error);
    } else {
      res.status(200).send(results);
    }
  }, listingId);
});





out put via postman

[
    {
        "listing_data": {
            "address": "57366 Delaney Estate",
            "city": "Lubowitzstad",
            "state": "LA",
            "neighborhood": "Avon",
            "bed_count": 3,
            "bath_count": 2.5,
            "sqft": 1300,
            "starting_price": 135000,
            "current_price": 85000
        },
        "listing_photos": [],
        "_id": "5f6ea90a4657d8b62ea4ef69",
        "listing_id": 100,
        "listing_type": "For Sale",
        "listing_is_saved": false,
        "listing_is_new": false,
        "__v": 0
    }
]
