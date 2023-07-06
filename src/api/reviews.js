export async function createReview(review) {
    const response = await fetch('http://localhost:8080/review', {
        method: 'post',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(review),
        credentials: 'include'
    })
    const result = await response.json()
    return result;
}

export async function editReview(reviewId, review) {
    const response = await fetch(`http://localhost:8080/review/${reviewId}`, {
        method: 'put',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(review),
        credentials: 'include'
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

export async function getReviewsByUserId(userId) {
    const response = await fetch('http://localhost:8080/review?userId=' + userId, {
        method: 'get',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        credentials: 'include'
    })
    const result = await response.json()
    return result
}

export async function updateReview(mongoId, updateBody) {
    const response = await fetch(`http://localhost:8080/review/${mongoId}`, {
        method: 'put',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(updateBody),
        credentials: 'include'
    })
    const result = await response.json()
    return result;
}