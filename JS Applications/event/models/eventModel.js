import {post, get, put, del} from "../scripts/requester.js";
import {appKey} from "../scripts/storage.js";

export function create(data) {
    return post(`appdata/${appKey}/events`,data);
}

export async function getAllEvents() {
    return await get(`appdata/${appKey}/events`)
}

export async function getEvent(id) {
    return await get(`appdata/${appKey}/events/${id}`);
}

export async function edit(id, data) {
    return await put(`appdata/${appKey}/events/${id}`, data);
}

export function close(id) {
    return del(`appdata/${appKey}/events/${id}`);
}