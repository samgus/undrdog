import React, {useState, useEffect} from 'react';
import { getMemberByPlaceId } from '../api/members';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/review-form/review-form.component';
import ReviewList from '../components/review-list/review-list.component';
import { useModal } from '../contexts/modal.context';

import { GoogleMap, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '80%',
  height: '80%',
  marginTop: "10px"
};

const Place = () => {
    const { setModal } = useModal();
    const [place, setPlace] = useState({})
    const [overallRating, setOverallRating] = useState(null);
    const { placeId } = useParams()
    useEffect(() => {
      getMemberByPlaceId(placeId).then(function(member){
        console.log("member", member)
        setPlace(member)
      })
    }, [])
  return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-start',
          height: '90vh',
          marginTop: "78px",
          padding: "20px",
          backgroundColor: 'rgb(250,250,250)'
        }}
      >
        <div className="place-info-container">
          <div className="place-info-container__header">
            <h1>{place.name}</h1>
            <p className="place-info-container__address"><b>{place.formattedAddress}</b></p>
            {overallRating && <h2>Overall Rating: {overallRating}</h2>}
          </div>
          <div className="create-review-btn" onClick={() => {
              setModal({
                modal: "review-form",
                children: <ReviewForm placeId={placeId}  placeName={place.name}/>,
                show: true
              });
            }}><span>+</span> Leave Review</div>
            <div className="reviews-section">
            <ReviewList placeId={placeId} setOverallRating={setOverallRating} />
            
            </div>
          </div>
       
          
          
          <div className="map-container flex align-center justify-center">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={{
              lat: place.lat,
              lng: place.long
            }}
            zoom={18}
          >
            <Marker
              position={{
                lat: place.lat,
                lng: place.long
              }}
            />
          </GoogleMap>
          </div>
          
      </div>
   
  );
};

export default Place;