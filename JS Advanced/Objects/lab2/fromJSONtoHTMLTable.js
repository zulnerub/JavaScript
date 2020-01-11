function solve(input) {
    let arr = JSON.parse(input);
    let elements = {};

    arr.forEach(e => {
        elements += e;
    });

    let result = "<table>\n    <tr>";
    Object.keys(arr[0]).forEach( e => {
        result += `<th>${e}</th>`;
    });

    result += `</tr>\n`;
    arr.forEach(e => {
        result += `    <tr>`;
        Object.keys(e).forEach( key => {
            if (!Number(e[key])){
                result += `<td>${escapeHTML(e[key])}</td>`;
            }else{
                result += `<td>${e[key]}</td>`;
            }
        });
        result += `</tr>\n`;
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

let test1 = ['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'];
let test0 = ['[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]'];

solve(test1);
//solve(test0);