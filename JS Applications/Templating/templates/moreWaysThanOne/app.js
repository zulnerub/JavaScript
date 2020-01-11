import { contacts } from "./contacts.js";



async function main() {
    const template = await fetch("./contact-card.handlebars")
        .then(x => x.text());

    document.all.contacts.innerHTML = contacts.map(contact => {
        let res = template;
        Object.keys(contact)
            .forEach(x => {
                res = res.replace(`{{${x}}}`, contact[x])
            });
        return res;
    }).join("");
}

main();