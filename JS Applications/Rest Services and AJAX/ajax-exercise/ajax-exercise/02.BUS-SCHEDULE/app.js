function solve() {
    const departFrom = document.getElementById('depart');
    const arriveIn = document.getElementById('arrive');
    const infoSpan = document.getElementsByClassName('info')[0];

    let curId = 'deqweqpot';
    let curName;

    function depart() {
        fetch(`https://judgetests.firebaseio.com/schedule/${curId}.json `)
            .then(res => res.json())
            .then(data => {
                departSuccess(data);
            })
            .catch(err => {
                infoSpan.textContent = `Wring stop ID!`;
                console.log(err)
            })
    }

    function arrive() {
        infoSpan.textContent = `Arriving at ${curName}`;
        departFrom.disabled = false;
        arriveIn.disabled = true;
    }

    function departSuccess(data){
        const { name, next} = data;

        curId = next;
        curName = name;

        departFrom.disabled = true;
        arriveIn.disabled = false;

        infoSpan.textContent = `Next stop ${curName}`;

    }



    return {
        depart,
        arrive
    };
}

let result = solve();