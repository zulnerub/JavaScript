function solve() {
    let input = document.getElementById("expressionOutput");
    let result = document.getElementById("resultOutput");

    Array.from(document.querySelector(".keys").children)
        .map(x => x.addEventListener("click", function () {
            if (x.value === "="){
                let output = "";
                try {
                        output =
                            eval(input.innerText.replace("x", "*"));
                }catch (e) {
                    output = NaN;
                }
                result.innerText = output;
                console.log(result.innerText);
            }else{
                Number(x.value) ? input.textContent += x.value : input.textContent += ` ${x.textContent} `;
            }
        }, false));

    document.querySelector(".clear").addEventListener("click", function () {
        input.textContent = "";
        result.textContent = "";
        console.log(result.textContent);
        console.log(input.textContent);
    });

}