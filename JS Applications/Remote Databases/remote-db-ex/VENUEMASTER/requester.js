const username = "guest";
const password = "pass";

const baseUrl = 'https://baas.kinvey.com';
const appKey = 'kid_BJ_Ke8hZg';

function makeHeaders(httpMethod) {
    const headers = {
        method: httpMethod,
        headers: {
            "Authorization": `Basic ${btoa(`${username}:${password}`)}`,
            "Content-Type": "application/json"
        }
    };

    return headers;
}

function handleError(e) {
    if (!e.ok){
        throw new Error(e.statusText);
    }

    return e;
}

function serializeData(data) {
    return data.json();
}

function fetchData(kinveyModule, endpoint, headers) {
    const url = `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;

    return fetch(url, headers)
        .then(handleError)
        .then(serializeData);
}

export function get(kinveyModule, endpoint) {
    const headers = makeHeaders('GET');

    return fetchData(kinveyModule, endpoint, headers);
}

export function post(kinveyModule, endpoint) {
    const headers = makeHeaders('POST');

    return fetchData(kinveyModule, endpoint, headers);
}