import { contacts } from "./contacts.js";

function compile(str){
    return function (data) {
        return data.map(x => {
            let res = str;
            Object.keys(x)
                .forEach(y => {
                    res = res.replace(`{{${y}}}`, x[y])
                });
            return res;
        }).join("");
    }
}

async function main() {
    const template = await fetch("./contact-card.handlebars")
        .then(x => x.text());

    const templateFn = compile(template);

    document.all.contacts.innerHTML = templateFn(contacts);
    //document.getElementById("contacts").innerHTML = templateFn(contacts);
}

main();