import React, {useState, useEffect} from 'react';
import { getMemberByPlaceId } from '../api/members';
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/review-form/review-form.component';
import ReviewList from '../components/review-list/review-list.component';
import { useModal } from '../contexts/modal.context';

const Place = () => {
    const { setModal } = useModal();
    const [place, setPlace] = useState({})
    const [overallRating, setOverallRating] = useState(null);
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
          justifyContent: 'flex-start',
          height: '90vh',
          marginTop: "78px",
          padding: "20px",
          backgroundColor: 'rgb(250,250,250)'
        }}
      >
        <div className="place-info-container">
          <h1>{place.name}</h1>
          <p>{place.formattedAddress}</p>
          {overallRating && <h2>Overall Rating: {overallRating}</h2>}
          <div className="create-review-btn" onClick={() => {
              setModal({
                modal: "review-form",
                children: <ReviewForm placeId={placeId}  placeName={place.name}/>,
                show: true
              });
            }}>+</div>
          </div>
        <div className="reviews-section">
          <ReviewList placeId={placeId} setOverallRating={setOverallRating} />
          
        </div>
      </div>
   
  );
};

export default Place;