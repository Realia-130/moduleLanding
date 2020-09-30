const AWS = require('aws-sdk');

AWS.config.loadFromPath('../config.json');

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const bucketParams = {
  Bucket: 'realialistings',
  Delimiter: '/',
  Prefix: 'listing1/',
};

const urlList = (contents) => {
  let url = [];
  contents.shift();
  url = contents.map((list) => `https://realialistings.s3-us-west-1.amazonaws.com/${list.Key}`);
  return url;
};

s3.listObjects(bucketParams, (err, data) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", urlList(data.Contents));
  }
});
