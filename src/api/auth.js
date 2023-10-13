export async function signup(userInfo) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/signup`, {
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
    const response = await fetch(`${process.env.REACT_APP_API_URL}/login`, {
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
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user/`+userId, {
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
    const response = await fetch(`${process.env.REACT_APP_API_URL}/user/` + userId, {
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
    const response = await fetch(`${process.env.REACT_APP_API_URL}/loggedInUser`, {
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
    const response = await fetch(`${process.env.REACT_APP_API_URL}/logout`, {
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

export async function forgotPassword(email) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/forgot-password`, {
        method: 'post',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            email
        }),
        credentials: 'include'
    })
    const result = await response.json()
    return result.success;
}

export async function resetPassword(passwordInfo) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/reset-password`, {
        method: 'post',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(passwordInfo),
        credentials: 'include'
    })
    const result = await response.json()
    return result;
}
export async function activateUser(userId) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/reactivate-user?userId=${userId}`, {
        method: 'put',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        credentials: 'include'
    })
    const result = await response.json()
    return result;
}

export async function deactivateUser(userId) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/deactivate-user?userId=${userId}`, {
        method: 'put',
        mode: 'cors',
        headers: {
            "Content-Type": 'application/json'
        },
        credentials: 'include'
    })
    const result = await response.json()
    return result;
}
