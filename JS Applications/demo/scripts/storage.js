export const appKey = "kid_BJ1zIelRH";
export const appSecret = "33548ece663b43de8a2b2b4410213789";


function saveData(key, data) {
    localStorage.setItem(key + appKey, JSON.stringify(data));
}

export function getData(key) {
    return localStorage.getItem(key + appKey);
}

export function saveUser(data) {
    saveData("userInfo", data);
    saveData("authToken", data._kmd.authtoken);
}

export function removeUser() {
    localStorage.clear();
}