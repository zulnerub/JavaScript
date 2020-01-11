function getInfo() {
    const stopIdInput = document.getElementById('stopId');
    const stopNameDiv = document.getElementById('stopName');
    const busContainer = document.getElementById('buses');

    const busesUrl = `https://judgetests.firebaseio.com/businfo/${stopIdInput.value}.json`;

    busContainer.innerText = "";
    stopNameDiv.innerText = "";
    fetch(busesUrl)
        .then(res => res.json())
        .then(data => {
            const { name, buses } = data;
            stopNameDiv.innerText = name;
            Object.entries(buses).forEach(([ busId, busTime]) => {
                let curBus = document.createElement('li');
                curBus.innerText = `Bus ${busId} arrives in ${busTime}`;
                busContainer.appendChild(curBus);
            })
        })
        .catch((err) => {
            stopNameDiv.innerText = "Error";
        });

}