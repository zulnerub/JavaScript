import {checkContext, getTemplate} from "../helper.js";
import {getAllMovies} from "../../models/movieModel.js";


export async function getHome(context) {
    let newContext = checkContext(context);
    let movies = await getAllMovies();
    newContext.movies = movies.sort((a, b) => b.tickets - a.tickets);
    getTemplate('home.hbs', newContext);
}