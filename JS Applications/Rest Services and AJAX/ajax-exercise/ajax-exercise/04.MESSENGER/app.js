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
        fetch('https://rest-messanger.firebaseio.com/messanger.json', headers)
            .then(() => {
                inputAuthor.value = '';
                inputMsg.value = '';
            })
            .catch(errorHandler)
    }

    function refresh() {
        fetch('https://rest-messanger.firebaseio.com/messanger.json')
            .then(res => res.json())
            .then(data => {
                Object.entries(data).forEach(obj => {
                    let line = messagesContainer.innerHTML + `${obj[1].author}: ${obj[1].content}\n`;
                    messagesContainer.innerHTML = line;
                })
            })
            .catch(errorHandler)
    }

    function errorHandler() {
        console.log('Error!');
    }


    return {
        sendMessage,
        refresh
    }
}

let result = attachEvents();