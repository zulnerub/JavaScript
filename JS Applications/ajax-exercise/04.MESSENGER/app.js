function attachEvents() {
    const messagesContainer = document.getElementById('messages');
    const inputAuthor = document.getElementById('author');
    const inputMsg = document.getElementById('content');

    function sendMessage() {
        const author = inputAuthor.value;
        const content = inputMsg.value;

        const headers = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify({author, content})
        };
        fetch('https://simochat-6fa4a.firebaseio.com/.json', headers)
            .then(() => {
                inputAuthor.value = '';
                inputMsg.value = '';
            })
            .catch(errorHandler)
        refresh();
    }

    function refresh() {
        while(messagesContainer.firstChild){
            messagesContainer.removeChild(messagesContainer.firstChild);
        }
        fetch('https://simochat-6fa4a.firebaseio.com/.json')
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(obj => {
                    let li = document.createElement('li');
                    let span = document.createElement('span');
                    let p = document.createElement('p');
                    let delBtn = document.createElement('input');

                    span.innerHTML = `${obj[1].author}`;
                    p.innerHTML = `${obj[1].content}`;
                    delBtn.setAttribute('type', 'button');
                    delBtn.setAttribute('id', `${obj[0]}`);
                    delBtn.setAttribute('value', `Delete`);
                    delBtn.addEventListener('click', delComment);


                    li.appendChild(span);
                    li.appendChild(p);
                    li.appendChild(delBtn);
                    messagesContainer.appendChild(li);
                })
            })
            .catch(errorHandler)
    }

    function delComment(e) {
        let idToRemove = `${e.target.getAttribute('id')}`;
        console.log(idToRemove);
        fetch(`https://simochat-6fa4a.firebaseio.com/${idToRemove}.json`, {
                method: 'DELETE',
                headers: {'content-type': 'application/json'},
                body: JSON.stringify({id: idToRemove})
            }).then(() => {
                console.log(`${e.target.getAttribute('id')}`);
            }).catch(err => {
                console.error(errorHandler(err))
            });
        let toRemove = document.getElementById(idToRemove).parentElement;
        messagesContainer.removeChild(toRemove);
    }

    function errorHandler() {
        console.log('Error!');
    }


    return {
        sendMessage,
        refresh,
        delComment
    }
}

let result = attachEvents();