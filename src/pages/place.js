import React, {useState, useEffect} from 'react';
import { getMemberByPlaceId } from '../api/members';
import { useParams } from 'react-router-dom';
const Place = () => {
    const [place, setPlace] = useState({})
    const {placeId} = useParams()
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
    </div>
  );
};

export default Place;