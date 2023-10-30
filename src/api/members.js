export function searchForMembers(searchQuery, location) {
    
    const request = {
        query: searchQuery + " restaurant",
    }
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));

    return new Promise((resolve, reject) => {
        service.textSearch(request, function(result, status){ 
            if (status === window.google.maps.places.PlacesServiceStatus.OK){
                console.log("success!", result)
                resolve(result)
            }
        })
    })
}

export function getUrl() {

}

export async function createMember(member) {    
    return new Promise((resolve) => {
        const service = new window.google.maps.places.PlacesService(document.createElement('div'));
        service.getDetails({
            placeId: member.place_id
         }, async function(place, status) {
            let photos = []
            let website;
            let openingHours = []
            let phoneNumber;
            let icon;
            if (status === window.google.maps.places.PlacesServiceStatus.OK) {
              if(place) {
                console.log("place", place);
                if (place.photos) {
                    photos = place.photos.slice(0,5).map((photo) => {
                        return photo.getUrl()
                    })
                }
                if (place.website) {
                    website = place.website
                }
                if (place.opening_hours) {
                    if (place.opening_hours.weekday_text) {
                        openingHours = place.opening_hours.weekday_text
                    }
                }
                if (place.international_phone_number) {
                    phoneNumber = place.international_phone_number
                }
                if (place.icon) {
                    icon = place.icon
                }
               }
            }

            const response = await fetch(`${process.env.REACT_APP_API_URL}/place`, {
                method: 'post',
                mode: 'cors',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    placeId: member.place_id,
                    name: member.name,
                    lat: member.geometry.location.lat(),
                    long: member.geometry.location.lng(),
                    formattedAddress: member.formatted_address,
                    photos,
                    website,
                    openingHours,
                    phoneNumber,
                    icon,
                })
            })
            const result = await response.json()
            resolve(result)
         });
    })
    
}
export async function getMemberByPlaceId(placeId) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/place/` + placeId, {
        method: 'get',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        }
    })
    const result = await response.json()
    return result.place
}
// Google Maps API KEY
// API key : AIzaSyAsR6Qh9xei93zKLrjfRtz6wj4_Y5cwMmg