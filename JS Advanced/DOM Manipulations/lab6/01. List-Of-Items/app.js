function addItem() {
    const list = document.getElementById('items');
    const input = document.getElementById('newItemText');

    let listItem = document.createElement('li');
    listItem.innerHTML = input.value;

    list.appendChild(listItem);
}