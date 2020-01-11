function toggle(id){
    document.getElementById(`info_${id}`).style.display =
        document.getElementById(`info_${id}`)
            .style.display === 'none' ? 'block' : 'none';
}


(() => {

    renderMonkeys();

    async function renderMonkeys() {
        const source = await fetch('./monkTpl.hbs')
            .then(res => res.text());

        const template = Handlebars.compile(source);

        const context = { monkeys: window.monkeys };

        const monkeysHtml = template(context);

        document.getElementsByClassName("monkeys")[0].innerHTML = monkeysHtml;
    }



})();