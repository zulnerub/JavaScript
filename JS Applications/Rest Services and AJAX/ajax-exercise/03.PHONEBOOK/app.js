function attachEvents() {
    const phonebookContainer = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    function loadPhoneBook() {
        phonebookContainer.innerHTML = "";
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`)
            .then(res => res.json())
            .then(data => {
                Object.entries(data)
                    .forEach(([ elId, phoneBookData ]) => {
                        const { phone, person } = phoneBookData;
                        const li = document.createElement('li');
                        li.textContent = `${person}: ${phone}`;
                        const deleteBtn = document.createElement('button');

                        deleteBtn.setAttribute("data-target", elId);
                        deleteBtn.addEventListener("click", deletePhonebook);
                        deleteBtn.textContent = 'Delete';

                        li.appendChild(deleteBtn);
                        phonebookContainer.appendChild(li);
                    });


            })
            .catch(handleError);
    }

    function createPhonebook() {
        const person = personInput.value;
        const phone = phoneInput.value;

        const headers = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ person, phone })
        };

        fetch(`https://phonebook-nakov.firebaseio.com/phonebook.json`, headers)
            //.then((res) => res.json())
            .then(() => {
                personInput.value = '';
                phoneInput.value = '';

                loadPhoneBook();
            })
            .catch(handleError)

    }

    function deletePhonebook() {
        const phonebookId = this.getAttribute('data-target');
        const headers = {
            method: 'DELETE'
        };
        fetch(`https://phonebook-nakov.firebaseio.com/phonebook/${phonebookId}.json`, headers)
            .then(() => {
                loadPhoneBook();
            })
            .catch(handleError)
    }

    function handleError() {
        console.log("Error")
    }

    return {
        loadPhoneBook,
        createPhonebook
    }
}

let result = attachEvents();

