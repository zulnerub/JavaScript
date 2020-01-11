
function growingWord() {
    let word = document.querySelector(`#exercise p`);
    const colorMap = ["rgb(91, 136, 189)", "rgb(164, 0, 20)", "rgb(143,248,151)"];

    if (word === null){
        throw new Error("No words for you");
    }

    let fontSize = window
        .getComputedStyle(word)
        .fontSize
        .replace("px", "");



    word.style.color =
        (colorMap.findIndex(x => x === word.style.color) === 2) ? colorMap[0]
        : colorMap[colorMap.findIndex(x => x === word.style.color) + 1];

    word.style.fontSize = (fontSize === "0" ? "2" : fontSize * 2) + "px";
}



