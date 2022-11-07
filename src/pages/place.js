import React, {useState, useEffect} from 'react';
import { getMemberByPlaceId } from '../api/members';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/review-form/review-form.component';
import ReviewList from '../components/review-list/review-list.component';

const Place = () => {
    const [place, setPlace] = useState({})
    const { placeId } = useParams()
    useEffect(() => {
      getMemberByPlaceId(placeId).then(function(member){
        setPlace(member)
      })
    }, [])
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
      <h1>{place.name}</h1>
      <p>{place.formattedAddress}</p>
      <div className="reviews-section">
        <ReviewList placeId={placeId} />
        <ReviewForm placeId={placeId} />
      </div>
    </div>
  );
};

export default Place;