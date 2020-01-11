function deleteByEmail() {
    const input = document.getElementsByName('email');
    const table = document.getElementsByTagName('td');

    for (let el of table){
        console.log(input.value.toString());
        console.log(el.innerHTML);
        if (el.innerHTML === input.value.toString()){
            el.parentElement.remove();
        }
    }

}