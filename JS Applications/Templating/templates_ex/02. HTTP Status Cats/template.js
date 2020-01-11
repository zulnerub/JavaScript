function display(id) {
     const catCurrent = document.getElementById(`cat_${id}`);
     if (catCurrent.style.display === 'none'){
          catCurrent.style.display = 'inline';
          document.getElementById(id).innerText = "Hide status code";
     }else{
          catCurrent.style.display = 'none';
          document.getElementById(id).innerText = "Show status code";
     }
}


(() => {
     renderCatTemplate();

     async function renderCatTemplate() {
         const source = await fetch("./liTemplate.hbs")
             .then(res => res.text());
         const template = Handlebars.compile(source);
         const context = { cats: window.cats };
         const catsHtml = template(context);
         document.getElementById('allCats')
             .innerHTML = catsHtml;
     }
})();
