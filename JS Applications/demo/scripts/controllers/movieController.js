import {checkContext, getTemplate} from "../helper.js";
import {getData} from "../storage.js";
import {create, getAllMovies, getMovie, edit} from "../../models/movieModel.js";


export function getCreate(context) {
    getTemplate('movies/addMovie.hbs', context);
}

export function postCreate(context) {
    let data = {
        ...context.params,
        creator: JSON.parse(getData('userInfo')).username
    };
    data.genres = [...JSON.stringify(data.genres).split(" ")]
    console.log(data.genres)

    create(data)
        .then(() => {
            context.redirect('#/home');
        })
        .catch(console.log)
}

export async function getCinema(context) {
    let newContext = checkContext(context);
    let movies = await getAllMovies();
    newContext.movies = movies.sort((a, b) => b.tickets - a.tickets);
    getTemplate('movies/allMovies.hbs', context);
}

export async function buyTicket(context) {
    let newContext = checkContext(context);
    let movie = await getMovie(context.params.id);
    console.log(movie);
    movie.tickets--;

    Object.keys(movie).forEach(key => {
        newContext[key] = movie[key];
    });
    edit(context.params.id, movie)
        .then(() => {
            newContext.redirect(`#/cinema`);
        })
}

export async function getDetails(context) {
    let newContext = checkContext(context);
    let movie = await getMovie(context.params.id);
    Object.keys(movie).forEach(key => {
        newContext[key] = movie[key];
    });
    newContext.isCreator = newContext.username === movie.creator;
    getTemplate('movies/detailsMovie.hbs', context);
}

export async function getMyMovies(context) {
    let newContext = checkContext(context);
    let movies = await getAllMovies();
    newContext.movies = movies.filter(movie => movie.creator === newContext.username);
    getTemplate('movies/myMovies.hbs', newContext);
}