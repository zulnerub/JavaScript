import { get, post, put, del} from "../requester.js.js";
import { appKey } from "../storage.js.js";

export function create(data) {
    return post(`appdata/${appKey}/soft`,data);
}

export async function getAllIdeas() {
    return await get(`appdata/${appKey}/soft`)
}

export async function getIdea(id) {
    return await get(`appdata/${appKey}/soft/${id}`);
}

export async function edit(id, data) {
    return await put(`appdata/${appKey}/soft/${id}`, data);
}

export function remove(id) {
    return del(`appdata/${appKey}/soft/${id}`);
}