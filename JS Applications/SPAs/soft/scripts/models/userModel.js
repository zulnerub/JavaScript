import {post} from "../requester.js.js";
import {appKey} from "../storage.js.js";

export function register(data) {
    return post(`user/${appKey}`, data);
}

export function login(data) {
    return post(`user/${appKey}/login`, data);
}

export function logout() {
    return post(`user/${appKey}/_logout`);
}