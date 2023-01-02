export async function signup(userInfo) {
    const response = await fetch('http://localhost:8080/signup', {
        method: 'post',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(userInfo),
        credentials: 'include'
    })
    const result = await response.json()
    return result;
}

export async function login(userInfo) {
    const response = await fetch('http://localhost:8080/login', {
        method: 'post',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(userInfo),
        credentials: 'include'
    })
    const result = await response.json()
    return result;
}

export async function getUserById(userId) {
    const response = await fetch('http://localhost:8080/user/'+userId, {
        method: 'get',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        credentials: 'include'
    })
    const result = await response.json()
    return result;
}

export async function updateUserById(userId, userInfo) {
    const response = await fetch('http://localhost:8080/user/' + userId, {
        method: 'put',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(userInfo),
        credentials: 'include'
    })
    const result = await response.json()
    return result;
}

export async function getLoggedInUser() {
    const response = await fetch('http://localhost:8080/loggedInUser', {
        method: 'get',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        credentials: 'include'
    })
    const result = await response.json()
    return result;
}

export async function logout() {
    const response = await fetch('http://localhost:8080/logout', {
        method: 'put',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        credentials: 'include'
    })
    const result = await response.json()
    return result.success;
}