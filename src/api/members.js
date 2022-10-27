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
    console.log(member)
    const response = await fetch('http://localhost:8080/place', {
        method: 'post',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            placeId: member.place_id,
            name: member.name,
            formattedAddress: member.formatted_address
        })
    })
    const result = await response.json()
    console.log(result)
}

export async function getMemberByPlaceId(placeId) {
    const response = await fetch('http://localhost:8080/place/' + placeId, {
        method: 'get',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        }
    })
    const result = await response.json()
    return result.place
}

// API key : AIzaSyAsR6Qh9xei93zKLrjfRtz6wj4_Y5cwMmg