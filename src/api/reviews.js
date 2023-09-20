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

export async function getReviewsByPlaceId(placeId, count, page, filter) {
    const response = await fetch(`http://localhost:8080/review?placeId=${placeId}&count=${count}&page=${page}&filter=${filter}`, {
        method: 'get',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        }
    })
    const result = await response.json()
    return result
}

export async function getReviewsByUserId(userId, count, page, filter) {
    const response = await fetch(`http://localhost:8080/review?userId=${userId}&count=${count}&page=${page}&filter=${filter}`, {
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

export async function getReviewCountByUserId(userId, placeId) {
    const response = await fetch(`http://localhost:8080/review-count?userId=${userId}${placeId ? "&placeId=" + placeId : ""}`, {
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

export async function getReviewCountByPlaceId(placeId) {
    const response = await fetch(`http://localhost:8080/review-count?placeId=${placeId}`, {
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