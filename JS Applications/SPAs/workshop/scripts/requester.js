const baseUrl = 'https://baas.kinvey.com';
const appKey = 'kid_rk0j0lOhr';
const appSecret = 'dc66ef87767741f9b4fb74b190d602cb';

function createAuthorization(type) {
    return type === 'Basic'
        ? `Basic ${btoa(`${appKey}:${appSecret}`)}`
        : `Kinvey ${sessionStorage.getItem('authtoken')}`
}

function makeHeaders(httpMethod, data, type) {
    const headers = {
        method: httpMethod,
        headers: {
            'Authorization': createAuthorization(type),
            'Content-Type': 'application/json'
        }
    };

    if(httpMethod === 'POST' || httpMethod === 'PUT'){
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

function deserializeData(x) {
    if (x.status === 204){
        return x;
    }
    return x.json();
}

function fetchData(kinveyModule, endpoint, headers) {
    const url = `${baseUrl}/${kinveyModule}/${appKey}/${endpoint}`;

    return fetch(url, headers)
        .then(handleError)
        .then(deserializeData)
}

export function get(kinveyModule, endpoint, type) {
    const headers = makeHeaders('GET', type);

    return fetchData(kinveyModule, endpoint, headers);
}

export function post(kinveyModule, endpoint, data, type) {
    const headers = makeHeaders('POST', data, type);

    return fetchData(kinveyModule, endpoint, headers);
}

export function put(kinveyModule, endpoint, data, type) {
    const headers = makeHeaders('PUT', data, type);

    return fetchData(kinveyModule, endpoint, headers);
}

export function del(kinveyModule, endpoint, type) {
    const headers = makeHeaders('DELETE', type);

    return fetchData(kinveyModule, endpoint, headers);
}