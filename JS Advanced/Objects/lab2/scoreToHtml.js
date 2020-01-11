function solve(input) {
    let data = JSON.parse(input);
    let obj = {};

    data.forEach(e => {
        obj += e;
    });



    let result = "<table>\n    <tr>";


    Object.keys(data[0]).forEach( e => {
        result += `<th>${e}</th>`;
    });


    result += `</tr>\n`;
    data.forEach(e => {
        console.log(e)
        result += `    <tr><td>${escapeHTML(e.name)}</td><td>${e.score}</td></tr>\n`;
    });
    result += `</table>`;

    console.log(result);

    function escapeHTML(str) {
        "use strict";
        str = str.replace(/&/g, "&amp;")
            .replace(/>/g, "&gt;")
            .replace(/</g, "&lt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
        return str;
    }

}

let test0 = '[{"name":"Pesho","score":479}, ' +
'{"name":"Gosho","score":205}]';

solve(test0);