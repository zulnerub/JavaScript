(function () {
    document.getElementById("btnLoadTowns")
        .addEventListener("click", async function (e) {
            const towns = document.getElementById('towns')
                .value.split(", ");

            const source = await fetch('./towns.hbs')
                .then(res => res.text());

            const template = Handlebars.compile(source);
            const context = { towns };
            const html = template(context);

            document.getElementById('root')
                .innerHTML = html;
        })
}());