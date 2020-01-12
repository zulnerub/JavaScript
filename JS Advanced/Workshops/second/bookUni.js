function solve() {
    const [ titleInput, yearInput, priceInput] = Array.from(document.querySelectorAll("form > input"));
    const addBook = document.querySelector("button");
    const profit = Array.from(document.querySelectorAll("h1"))[1];
    const [ oldShelf, newShelf ] = Array.from(document.getElementsByClassName("bookShelf"));
    let totalSum = 0;

    addBook.addEventListener("click", function(e){
        e.preventDefault();
        const title = titleInput.value;
        const year = yearInput.value;
        const price = priceInput.value;

        if (title !== "" && year > 0 && price > 0){
            if (year >= 2000){
                createBook(false, title, year, price, newShelf);
            }else{
                createBook(true, title, year, price, oldShelf);
            }
        }
    });

    function createBook(isOld, title, year, price, shelf){
        price = Number(isOld ? price * 0.85 : price);
        const bookElement = document.createElement('div');
        const p = document.createElement('p');
        const buyBtn = document.createElement('button');

        bookElement.classList.add("book");
        p.textContent = `${title} [${year}]`;
        buyBtn.textContent = `Buy it only for ${price.toFixed(2)} BGN`;

        buyBtn.addEventListener("click", function () {
           totalSum = Number(totalSum + price);
           this.parentNode.parentNode
               .removeChild(this.parentNode);
           profit.textContent = `Total Store Profit: ${totalSum.toFixed(2)} BGN`;
        });

        bookElement.appendChild(p);
        bookElement.appendChild(buyBtn);

        if (!isOld){
            const moveBtn = document.createElement('button');
            moveBtn.textContent = `Move to old section`;
            bookElement.appendChild(moveBtn);

            moveBtn.addEventListener("click", function () {
                this.parentNode.parentNode
                    .removeChild(this.parentNode);
                createBook(true, title, year, price, oldShelf);
            })
        }

        shelf.appendChild(bookElement);
    }
}