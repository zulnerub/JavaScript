import {post} from "../scripts/requester.js.js";
import {appKey} from "../scripts/storage.js.js";

export function register(data) {
    return post(`user/${appKey}`,data);
}

export function logout() {
    return post(`user/${appKey}/_logout`);
}

export function login(data) {
    return post(`user/${appKey}/login`, data);
}