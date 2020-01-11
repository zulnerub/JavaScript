

function attachEvents() {

    const elements = {
        $catch:{
            $angler: () => document.querySelector('#addForm input.angler'),
            $weight: () => document.querySelector('#addForm input.weight'),
            $species: () => document.querySelector('#addForm input.species'),
            $location: () => document.querySelector('#addForm input.location'),
            $bait: () => document.querySelector('#addForm input.bait'),
            $captureTime: () => document.querySelector('#addForm input.captureTime')
        },
        $addBtn: () => document.querySelector('#addForm button.add'),
        $loadBtn: () => document.querySelector('aside button.load'),
        $catches: () => document.getElementById('catches'),
        $exampleCatch: () => document.querySelector('div.catch')
    };

    elements.$addBtn().addEventListener('click', addCatch);
    elements.$loadBtn().addEventListener('click', loadCatches);

    function addCatch() {
        const angler = elements.$catch.$angler().value;
        const weight = elements.$catch.$weight().value;
        const species = elements.$catch.$species().value;
        const location = elements.$catch.$location().value;
        const bait = elements.$catch.$bait().value;
        const captureTime = elements.$catch.$captureTime().value;

        catches.post({angler, weight, species, location, bait, captureTime})
            .catch(err => console.log(err))
    }

    function loadCatches() {

        catches.get()
            .then(showAllCatches)
            .catch(err => console.log(err));

        function showAllCatches(allCatches) {
            while (elements.$catches().childElementCount > 1){
                elements.$catches().lastChild.remove();
            }
            Object.keys(allCatches).forEach(id => {
                    const copy = elements.$exampleCatch().cloneNode(true);
                    copy.setAttribute('data-id', id);
                    copy.style.display = "block";

                    Object.keys(elements.$catch)
                        .map(c => c.slice(1))
                        .forEach(key => {
                            copy.querySelector(`input.${key}`).value = allCatches[id][key];
                        });

                    elements.$catches().appendChild(copy);
                });

                [...document.querySelectorAll('button.delete')]
                    .forEach(btn => btn.addEventListener('click', e => {
                        const id = e.currentTarget.parentNode.getAttribute('data-id');
                        catches.del(id)
                            .then(loadCatches);
                    }));

            [...document.querySelectorAll('button.update')]
                .forEach(btn => btn.addEventListener('click', e => {
                    const id = e.currentTarget.parentNode.getAttribute('data-id');


                    const angler = e.target.parentElement.querySelector(`.angler`).value;
                    const weight = e.target.parentElement.querySelector(`.weight`).value;
                    const species = e.target.parentElement.querySelector(`.species`).value;
                    const location = e.target.parentElement.querySelector(`.location`).value;
                    const bait = e.target.parentElement.querySelector(`.bait`).value;
                    const captureTime = e.target.parentElement.querySelector(`.captureTime`).value;

                    catches.put(id,{angler, weight, species, location, bait, captureTime})
                        .then(loadCatches)
                        .catch(err => console.log(err));

                }));

        }
    }
}

attachEvents();

