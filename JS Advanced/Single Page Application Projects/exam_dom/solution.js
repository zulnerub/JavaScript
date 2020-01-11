function solve() {
    let itemName = document.querySelector("#add-new > input[type=text]:nth-child(2)");
    let itemQty = document.querySelector("#add-new > input[type=text]:nth-child(3)");
    let itemPrice = document.querySelector("#add-new > input[type=text]:nth-child(4)");
    let addBtn = Array.from(document.getElementsByTagName("button"))[1];
    let availableProductsUl = document.querySelector("#products > ul");
    let filterBtn = document.querySelector("#products > div > button");
    let inputFilter = document.getElementById('filter');
    let myProductsUl = document.querySelector("#myProducts > ul");
    let totalPrice = Array.from(document.getElementsByTagName("h1"))[1];
    let buyAllBtn = document.querySelector("#myProducts > button");

    addBtn.addEventListener("click", function (e) {
        e.preventDefault();
            let item = document.createElement('li');
                let spanName = document.createElement('span');
                spanName.innerHTML = itemName.value;
                let strongAvail = document.createElement("strong");
                strongAvail.innerHTML = `Available: ${itemQty.value}`;
                let divInLi = document.createElement("div");
                    let strongPrice = document.createElement("strong");
                    strongPrice.innerHTML = Number(itemPrice.value).toFixed(2);
                    let btnClientToBuy = document.createElement("button");
                    btnClientToBuy.innerHTML = "Add to Client's List";

                    btnClientToBuy.addEventListener("click", buyListItem);

                    divInLi.appendChild(strongPrice);
                    divInLi.appendChild(btnClientToBuy);

                    item.appendChild(spanName);
                    item.appendChild(strongAvail);
                    item.appendChild(divInLi);

                    availableProductsUl.appendChild(item);

    });

    filterBtn.addEventListener("click", filterItems);

    buyAllBtn.addEventListener("click", function (e) {
        Array.from(myProductsUl.children).forEach(ch => myProductsUl.removeChild(ch));
        totalPrice.innerHTML = `Total Price: 0.00`;
    });

    function filterItems(e) {
        let items = Array.from(availableProductsUl.children);


        items.forEach(item => {
            let name = item.firstChild.textContent.toLowerCase();
            let toMatch = inputFilter.value.toLowerCase();
            if (!name.includes(toMatch)){
                item.style.display = "none";
            }
        })
    }

    function buyListItem(e){
        let itemQty = Number(e.target.parentNode.parentNode.children[1].innerHTML.split(" ")[1]);

        if (itemQty - 1 > 0){
            e.target.parentNode.parentNode.children[1].innerHTML = `Available: ${itemQty - 1}`;

            let clientItem = document.createElement("li");
            clientItem.innerHTML = `${e.target.parentNode.parentNode.children[0].innerHTML}`;
            let strongPriceClItem = document.createElement("strong");
            strongPriceClItem.innerHTML = `${e.target.parentNode.parentNode.children[2].children[0].innerHTML}`;

            clientItem.appendChild(strongPriceClItem);

            myProductsUl.appendChild(clientItem);

            let sum = Number(totalPrice.textContent.split(" ")[2]);
            sum += Number(e.target.previousSibling.textContent);
            totalPrice.innerHTML = `Total Price: ${sum.toFixed(2)}`;


        }else if (itemQty - 1 === 0){
            e.target.parentNode.parentNode.children[1].innerHTML = `Available: ${itemQty - 1}`;

            let clientItem = document.createElement("li");
            clientItem.innerHTML = `${e.target.parentNode.parentNode.children[0].innerHTML}`;
            let strongPriceClItem = document.createElement("strong");
            strongPriceClItem.innerHTML = `${e.target.parentNode.parentNode.children[2].children[0].innerHTML}`;

            clientItem.appendChild(strongPriceClItem);

            myProductsUl.appendChild(clientItem);

            e.target.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
            let sum = Number(totalPrice.textContent.split(" ")[2]);
            sum += Number(e.target.previousSibling.textContent);
            totalPrice.innerHTML = `Total Price: ${sum.toFixed(2)}`;
        }

    }

}

