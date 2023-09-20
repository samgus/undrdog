import cx from "classnames";
import React, {useState, useEffect} from 'react';
import { getMemberByPlaceId } from '../api/members';
import { getReviewCountByUserId } from "../api/reviews";
import { useParams } from 'react-router-dom';
import ReviewForm from '../components/review-form-new/review-form-new.component';
import ReviewList from '../components/review-list/review-list.component';
import { useModal } from '../contexts/modal.context';
import { useAuth } from '../contexts/auth.context';
import Rating from '@mui/material/Rating';
import { GoogleMap, MarkerF } from '@react-google-maps/api';

import check from "../images/check-grey.svg"
import "../styles/place.scss";

const containerStyle = {
  width: '100%',
  height: '100%',
};

const Place = () => {
  const { setModal, setShowModal } = useModal();
  const { currentUser } = useAuth();
  const [place, setPlace] = useState(null)
  const [showAllOpeningHours, setShowAllOpeningHours] = useState(false)
  const [overallRating, setOverallRating] = useState(null);
  const [reviewCount, setReviewCount] = useState(0)
  const [userCanReview, setUserCanReview] = useState(false)
  const [filter, setFilter] = useState('recent')
    const { placeId } = useParams()
    useEffect(() => {
      getMemberByPlaceId(placeId).then(function(member){
        console.log("member", member)
        setPlace(member)
      })
    }, [])
    console.log(place)


    useEffect(() => {
      if (currentUser && placeId) {
        getReviewCountByUserId(currentUser._id, placeId).then((reviewCount) => {
          setUserCanReview(reviewCount.count === 0)
        })
      } else {
        setUserCanReview(true)
      }
    
    }, [currentUser])

    // const parseOpeningHours = (openingHours) => {
    //   console.log(openingHours)
    //   const today = new Date();
    //   const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    //   const currentDay = dayOfWeek[today.getDay()];


    //   const matchingOpeningHours = openingHours.find((openingHour) => {
    //     return currentDay === openingHour.split(":")[0].trim()
    //   });

    //   const startEndTime = matchingOpeningHours.split(currentDay+":")[1].trim().split("–")
    //   if (startEndTime.indexOf("Closed") > -1) {
    //     return [false, "Closed"]
    //   }
    //   const isAMOpening = startEndTime[0].indexOf('AM') > -1;
    //   const isAMClosing= startEndTime[1].indexOf('AM') > -1;
    //   let hoursOpening, hoursClosing
    //   let minutesOpening, minutesClosing
      
    //   // get opening hours
    //   if (isAMOpening) {
    //     const hoursMinutesSplit = startEndTime[0].split('AM')[0].trim().split(':')
    //     hoursOpening = parseInt(hoursMinutesSplit[0])
    //     minutesOpening = parseInt(hoursMinutesSplit[1])
    //   } else {
    //     const hoursMinutesSplit = startEndTime[0].trim().split(':')
    //     hoursOpening = parseInt(hoursMinutesSplit[0]) + 12
    //     minutesOpening = parseInt(hoursMinutesSplit[1])
    //   }

    //   let useNextDay = false;
    //   if (isAMClosing) {

    //     const hoursMinutesSplit = startEndTime[1].split('AM')[0].trim().split(':')
    //     useNextDay = true 
    //     hoursClosing = parseInt(hoursMinutesSplit[0])
    //     minutesClosing = parseInt(hoursMinutesSplit[1])
    //   } else {
    //     const hoursMinutesSplit = startEndTime[1].split('PM')[0].trim().split(':')
    //     hoursClosing = parseInt(hoursMinutesSplit[0]) + 12
    //     minutesClosing = parseInt(hoursMinutesSplit[1])
    //   }


    //   // get closing hours

    //   const dateOpening = new Date();
    //   dateOpening.setHours(hoursOpening)
    //   dateOpening.setMinutes(minutesOpening)
    //   let dateClosing = new Date()
    //   if (useNextDay) {
    //       dateClosing.setDate(dateClosing.getDate() + 1)
    //   }
    //   dateClosing.setHours(hoursClosing)
    //   dateClosing.setMinutes(minutesClosing)

    //   const isOpen = (today.getTime() > dateOpening.getTime()) && (today.getTime() < dateClosing.getTime())

    //   return [isOpen, matchingOpeningHours.slice(matchingOpeningHours.indexOf(':')+1)]
    // }
  
  const getTodayOpeningHours = (openingHours) => {
    const today = new Date();
    const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const currentDay = dayOfWeek[today.getDay()];
    return  openingHours.find((openingHour) => {
          return currentDay === openingHour.split(":")[0].trim()
      });
  }
  let todayOpeningHours = null
  if (place?.openingHours && place?.openingHours.length > 0) {
    todayOpeningHours = getTodayOpeningHours(place?.openingHours)
  }

  const writeAReview = () => {
    if (!userCanReview) {
      setModal({
        modal: "success-modal",
        children: <div className={"success-review-modal"}>
          <img src={check} />
          <span>You have already left a review</span>
          <label>Thank you!</label>
          <button onClick={() => {
             setModal({
              modal: "success-modal",
              show: false
            });
          }}>Done</button>
        </div>,
        show: true
      });
    } else if (currentUser) {
      setModal({
        modal: "review-form",
        children: <ReviewForm placeId={placeId}  placeName={place?.name} edit={false} />,
        show: true
      });
    } else {
      // opens up the sign in modal
      setShowModal(true)
    }
  }

  return (
      <div
        style={{
          display: 'flex',
          flexDirection: "column",
          alignItems: "start",
          marginTop: "78px",
          padding: "80px 150px",
          backgroundColor: '#fff'
        }}
      >
        <div
        style={{
          display: 'flex',
          alignItems: "start",
          width: "100%"
        }}>

        <div className="place-info-container" >
          <div className="place-info-container__header">
            <h1>{place?.name}</h1>
            {place?.formattedAddress && <p className="place-info-container__address">{place?.formattedAddress}</p>}
            {(overallRating) ? <h2>
              Overall Rating: <span className="place-info-container__overall">{overallRating}</span>
            </h2> : <h2>Overall Rating: N/A</h2>}
          </div>
          <div className="place-info-container__body">
          {place?.phoneNumber && <span className="place-info-container__body-row"><b>Phone:</b> {place?.phoneNumber}</span>}
          {place?.website && <span className="place-info-container__body-row"><b>Website:</b> <a target="_blank" href={place?.website}>{place?.website}</a></span>}
          {/* {place?.openingHours && <span className="place-info-container__body-row"><b>openingHours:</b> {place?.phoneNumber}</span>} */}
          {place?.openingHours && place?.openingHours.length > 0 && <div className="place-info-container__opening-hours">
              {todayOpeningHours && <span className="place-info-container__body-row" style={{cursor: "pointer"}}onClick={() => {
                setShowAllOpeningHours(!showAllOpeningHours)
              }}><b>Opening Hours:</b> {todayOpeningHours}</span>}
              
              {showAllOpeningHours && place?.openingHours.map((opening) => {
                  return <p>{opening}</p>
              })}
          </div>}
          {place?.photos && <div className="place-info-container__body-photos">
                {place?.photos.map((photo) => {
                  return <img src={photo} />
                })}
                <div className="place-info-container__body-photos-shadow"></div>
          </div>}
          </div>

          
          </div>
       
          
          
          <div className="map-container flex align-center justify-center">
          {place && <GoogleMap
            mapContainerStyle={containerStyle}
            center={{
              lat: place.location.coordinates[1],
              lng: place.location.coordinates[0]
            }}
            zoom={18}
          >
            <MarkerF
              position={{
                lat: place.location.coordinates[1],
                lng: place.location.coordinates[0]
              }}
            />
          </GoogleMap>}
          </div>
          </div>
          <div className="place__review-container">
            <div className="place__review-container-header">
              <h2 className="place__subtitle">Worker Reviews</h2>
              <select className="place__filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="recent">Most Recent</option>
                <option value="highest-rated">Highest Rated</option>
                <option value="lowest-rated">Lowest Rated</option>
              </select>
            </div>
            <div className="place__review-container-body">
              <div className="place__write-review-container">
                
                {/* <div className={cx({
              'create-review-btn': true
            })} onClick={() => {
              if (currentUser) {
                setModal({
                  modal: "review-form",
                  children: <ReviewForm placeId={placeId}  placeName={place?.name} edit={false} />,
                  show: true
                });
              } else {
                // opens up the sign in modal
                setShowModal(true)
              }
            }}>{(!currentUser) ? "Sign in to " : ''}Leave Review</div>
            <div className="reviews-section">
            <ReviewList placeId={placeId} setOverallRating={setOverallRating} setReviewCount={setReviewCount} />
            
            </div> */}
                <div className="overall-review-container" data-aos="fade-in" data-aos-duration="1500">
                  <span>{(overallRating) ? overallRating : "0.0"}</span>
                  {!!overallRating &&  <Rating readOnly defaultValue={parseFloat(parseFloat(overallRating).toFixed(1))} precision={0.1}  />}
                  {!overallRating && <Rating readOnly defaultValue={0} precision={0.1}  />}
                  <label>{reviewCount} reviews</label>
                </div>
                {reviewCount > 0 && <div className={cx({
                  'write-review-btn': true
                })} data-aos="fade-in" data-aos-duration="1500" onClick={writeAReview()}>Write a Review</div>}
              </div>
              <div className="place__review-list" >
                <ReviewList writeAReview={writeAReview} filter={filter} placeId={placeId}  placeName={place?.name}  setOverallRating={setOverallRating} setReviewCount={setReviewCount} />
              </div>
            </div>
          </div>
          
          
      </div>
   
  );
};

export default Place;