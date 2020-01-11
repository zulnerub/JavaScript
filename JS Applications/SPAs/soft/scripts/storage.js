export const appKey = "kid_SkUY9neCr";
export const appSecret = "8fa2f6e7011b42dd868c079b518b2755";


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