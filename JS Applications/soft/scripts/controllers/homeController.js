import {getTemplate, checkContext } from "../helper.js";
import {getAllIdeas} from "../models/ideaModel.js";

export async function getHome(context) {
    let newContext = checkContext(context);
    let ideas = await getAllIdeas();
    newContext.ideas = ideas;
    getTemplate('home.hbs', newContext);
}