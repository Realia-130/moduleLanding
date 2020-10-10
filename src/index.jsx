/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ListingInfo from './components/listingData/ListingInfo.jsx';
import Banner from './components/photoComponents/Banner.jsx';
import PhotoComponent from './components/photoComponents/PhotoComponent.jsx';
import Modal from './components/photoComponents/Modal.jsx';
import axios from 'axios';
const { Landing, GrayOut, Norm } = require('./AppStyle');



function Photos() {

  const [Wrapper, setWrapper] = useState(Norm);
  const [showModal, setShowModal] = useState(false);
  const [listingData, setListingData] = useState({});
  const [ready, setReady] = useState(false);
  const [isSaved, setSaved] = useState(false);


  useEffect(() => {

    async function fetchData() {
      // const params = { listingId: Math.floor(Math.random() * 100) }
      const params = { listingId: 57 }
      const res = await axios.get('http://localhost:3001/api/listing', { params });
      setListingData(res.data[0])
      setSaved(res.data[0].listing_is_saved)
      setReady(true)
      console.log(isSaved)

      return res.data[0]
    }

    fetchData()
  }, [isSaved])

  const callBack = () => {
    showModal ? setWrapper(Norm) : setWrapper(GrayOut);
    setShowModal(!showModal);
  }

  const handleSave = () => {
    axios({
      url: 'http://localhost:3001/api/update_saved',
      method: 'PUT',
      params: {
        listingId: listingData.listing_id,
        newValue: !isSaved,
      },
    })
      .then(() => { setSaved(!isSaved) })
      .catch((error) => { console.error(error) });
  }
  return (
    <>

      {
        !ready ? <div></div> :

          <div>
            {showModal ? <Modal info={listingData.listing_data} photos={listingData.listing_photos} setModal={callBack} saved={handleSave} isSaved={isSaved} /> : null
            }
            <Wrapper>
              <Landing onClick={(e) => {
                if (e.target.innerText !== ' Save') {
                  showModal ? setWrapper(Norm) : setWrapper(GrayOut);
                  setShowModal(!showModal);
                }
              }}>
                <Banner data={listingData} saved={handleSave} isSaved={isSaved} />
                <PhotoComponent photos={listingData.listing_photos} />
              </Landing>
              <ListingInfo listingData={listingData.listing_data} />
            </Wrapper>
          </div>
      }

    </>
  );
}

ReactDOM.render(<Photos />, document.getElementById('Photos'));
