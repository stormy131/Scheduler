export default function request(url, method = 'GET', data = {}) {
    return fetch(url, {
        method,
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(result => result.json())
        .catch(err => console.error(err));
}
