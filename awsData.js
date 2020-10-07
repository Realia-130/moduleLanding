const AWS = require('aws-sdk');
const fs = require('fs');

AWS.config.loadFromPath('./config.json');

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

// s3.listObjects(bucketParams, (err, data) => {
//   if (err) {
//     console.log("Error", err);
//   } else {
//     console.log(urlList(data.Contents));
//   }
// });


// for (let folderNum = 1; folderNum <= 100; folderNum += 1) {
//   let uploadPrams = { Bucket: 'realialistings', Key: `listing${folderNum}/`, ACL: 'public-read', Body: `listing${folderNum} imgs` };
//   s3.upload(uploadPrams, function (err, data) {
//     err ? console.log(err) : console.log('Success');
//   })
// }


// const upLoadPhoto = (photo, folder) => {
//   const photoContent = fs.readFileSync(photo);

//   const params = {
//     Bucket: 'realialistings',
//     Prefix: folder,
//     Key: photo,
//     Body: photoContent,
//   };

//   s3.upload(params, (err, data) => {
//     err ? console.log(err) : console.log(`${photo} loaded to ${folder}`)
//   })
// }

module.exports = {
  s3,
  urlList,
}