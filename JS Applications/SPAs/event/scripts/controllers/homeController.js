import {getTemplate, checkContext} from "../helper.js.js";
import {getAllEvents} from "../../models/eventModel.js.js";

export async function getHome(context) {
    let newContext = checkContext(context);
    let events = await getAllEvents();
    newContext.events = events.sort((a, b) => b.peopleInterestedIn - a.peopleInterestedIn);
    getTemplate('home.hbs', newContext);
}