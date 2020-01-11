function nextArticle(strArray) {
    let contentTab = document.getElementById("content");
    let input = strArray;

    return function () {
        if (input.length > 0){
            let newArticle = document.createElement("article");
            newArticle.textContent = input[0];
            input = input.slice(1);
            contentTab.appendChild(newArticle);
        }

    }
}