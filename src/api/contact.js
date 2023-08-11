export async function emailContact(body) {
    const response = await fetch('http://localhost:8080/contact-submit', {
        method: 'POST',
        body
    })
    const result = await response.json()
    return result;
}