import { contacts } from "./contacts.js";

const HB = window.Handlebars;

async function main() {
    const contactCard = await fetch("./contact-card.handlebars")
        .then(x => x.text());

    const contactCards = await fetch("./contact-cards.hbs")
        .then(x => x.text());

    HB.registerPartial('contact', contactCard);
    const allContacts = HB.compile(contactCards);

    document.body.insertAdjacentHTML("beforeend", allContacts({contacts}));

    document.addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON"){
            let c = document.getElementById(`contact_${e.target.dataset.id}`);
            c.style.display = c.style.display === "none" ? "block" : "none";
        }
    })
}

main();