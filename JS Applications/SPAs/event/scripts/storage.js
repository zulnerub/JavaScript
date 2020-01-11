export const appKey = "kid_HJsSoLaaS";
export const appSecret = "11a788cfbd90443c9a22bd0ae9c6438d";


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