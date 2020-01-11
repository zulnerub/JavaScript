import {get, post, del, put} from "../scripts/requester.js";
import {appKey} from "../scripts/storage.js";


export async function getAllMovies() {
    return await get(`appdata/${appKey}/movies`)
}

export function create(data) {
    return post(`appdata/${appKey}/movies`, data);
}

export async function getMovie(id) {
    return await get(`appdata/${appKey}/movies/${id}`);
}

export async function edit(id, movie) {
    return await put(`appdata/${appKey}/movies/${id}`, movie);
}

