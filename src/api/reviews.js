export async function createReview(review) {
    const response = await fetch('http://localhost:8080/review', {
        method: 'post',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(review)
    })
    const result = await response.json()
    return result;
}

export async function getReviewsByPlaceId(placeId) {
    const response = await fetch('http://localhost:8080/review?placeId=' + placeId, {
        method: 'get',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        }
    })
    const result = await response.json()
    return result
}