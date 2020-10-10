/* eslint-disable import/extensions */
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import ListingInfo from './components/listingData/ListingInfo.jsx';
import Banner from './components/photoComponents/Banner.jsx';
import PhotoComponent from './components/photoComponents/PhotoComponent.jsx';
import Modal from './components/photoComponents/Modal.jsx';
import axios from 'axios';
const { Landing, GrayOut, Norm } = require('./AppStyle');
const { Pink, Teal } = require('./components/photoComponents/PhotoStyles');




function Photos() {

  const [Wrapper, setWrapper] = useState(Norm);
  const [showModal, setShowModal] = useState(false);
  const [listingData, setListingData] = useState({});
  const [ready, setReady] = useState(false);
  const [isSaved, setSaved] = useState(false);
  const [heart, setHeart] = useState(<i className="far fa-heart " />)


  useEffect(() => {

    async function fetchData() {
      const params = { listingId: Math.floor(Math.random() * 100) }
      // const params = { listingId: 57 }
      const res = await axios.get('http://localhost:3001/api/listing', { params })
        .then(({ data }) => {
          setListingData(data[0])
          setSaved(data[0].listing_is_saved)
          data[0].listing_is_saved ? setHeart(<Pink><i className="fas fa-heart " /></Pink>) : setHeart(<Teal><i className="far fa-heart " /></Teal>)
          setReady(true);
          return data[0];
        })
        .catch((err) => {
          console.error(err);
          return err;
        })

    }

    fetchData().then(() => {


    })
  }, [])

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
    }).then(() => {
      setSaved(!isSaved);
      isSaved ? setHeart(<Teal><i className="far fa-heart " /></Teal>) : setHeart(<Pink><i className="fas fa-heart " /></Pink>);
    }).catch((error) => { console.error(error) });
  }
  return (
    <>

      {
        !ready ? <div></div> :

          <div>
            {showModal ? <Modal info={listingData.listing_data} photos={listingData.listing_photos} setModal={callBack} saved={handleSave} isSaved={isSaved} heart={heart} /> : null
            }
            <Wrapper>
              <Landing onClick={(e) => {
                if (e.target.innerText !== ' Save') {
                  showModal ? setWrapper(Norm) : setWrapper(GrayOut);
                  setShowModal(!showModal);
                }
              }}>
                <Banner data={listingData} saved={handleSave} isSaved={isSaved} heart={heart} />
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
