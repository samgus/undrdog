export function searchForMembers(searchQuery, location) {
    
    const request = {
        query: searchQuery + " restaurant",
        fields: ['name', 'formatted_address', 'place_id', 'photos'],
    }
    const service = new window.google.maps.places.PlacesService(document.createElement('div'));

    return new Promise((resolve, reject) => {
        service.findPlaceFromQuery(request, function(result, status){ 
            if (status === window.google.maps.places.PlacesServiceStatus.OK){
                console.log("success!", result)
                resolve(result)
            }
        })
    })
}

export function getUrl() {

}

export function createMember() {

}

export function memberExists() {

}

// API key : AIzaSyAsR6Qh9xei93zKLrjfRtz6wj4_Y5cwMmg