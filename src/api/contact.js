export async function emailContact(body) {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/contact-submit`, {
        method: 'POST',
        body
    })
    const result = await response.json()
    return result;
}