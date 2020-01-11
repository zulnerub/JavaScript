const username = "Simo";
const password = "simo";

const baseUrl = 'https://baas.kinvey.com';
const appKey = 'kid_rk0j0lOhr';
const appSecret = 'dc66ef87767741f9b4fb74b190d602cb';

function makeHeaders(httpMethod, data) {
    const headers = {
        method: httpMethod,
        headers: {
            "Authorization": `Basic ${btoa(`${username}:${password}`)}`,
            "Content-Type": "application/json"
        }
    };

    if (httpMethod === "POST"){
        headers.body = JSON.stringify(data);
    }

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

export function post(kinveyModule, endpoint, data) {
    const headers = makeHeaders('POST', data);

    return fetchData(kinveyModule, endpoint, headers);
}