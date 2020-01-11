function createArticle() {
    let input = document.getElementById("createTitle");
    let textarea = document.getElementById("createContent");
    let articles = document.getElementById("articles");

    if (input === null || textarea === null || articles === null){
        throw new Error("Something is wrong ....");
    }

    let article = document.createElement("article");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");

    article.appendChild((h3));
    article.appendChild((p));

    if (input.value.length > 0 && textarea.value.length > 0){
        articles.appendChild(article);
    }


    h3.innerHTML = input.value;
    p.innerHTML = textarea.value;

    input.value = "";
    textarea.value = "";
}



//document.addEventListener("DOMContentLoaded", x => {
    //document
       // .getElementById("createArticleButton")
       // .addEventListener("click", createArticle);
//});

