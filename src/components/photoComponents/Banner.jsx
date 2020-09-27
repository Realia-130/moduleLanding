import React, { useState } from 'react';
import axios from 'axios';

//  needs access to isSaved isNew and photos
function Banner({ data }) {
  const [isNew] = useState(data.listing_is_new);
  const [isSaved, setSaved] = useState(false);// change to data.listing_is_saved

  function IsNew() { return <div>NEW</div>; }

  return (
    <div>
      <div>FOR SALE</div>
      {isNew ? <IsNew /> : null}
      <button
        type="button"
        onClick={() => {
          axios({
            method: 'PUT',
            url: 'http://localhost:3001/api/update_saved',
            params: {
              listingId: data.listing_id,
              newValue: !isSaved,
            },
          })
            .then();
          setSaved(!isSaved);
        }}
      >
        Save
      </button>
    </div>
  );
}

export default Banner;
