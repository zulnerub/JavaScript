import { get, post} from "./requester.js";

const html = {
    'container': () => document.getElementById('venue-info'),
    'getDate': () => document.getElementById('venueDate'),
    'getTemplate': () => document.getElementById('hidden'),
    'getConfirmTemplate': () => document.getElementById('confirmTemplate')
};

const actions = {
    'getVenues': async function () {
        const date = html.getDate();

        try {
            const ids = await post("rpc",`custom/calendar?query=${date.value}`);
            html.container().textContent = "";
            ids.forEach(id => {
               this.getVenue(id);
            });
            date.value = "";
        }catch (e) {
            alert(e);
        }
    },
    'getVenue': async function(id) {
        const venue = await get('appdata', `venues/${id}`);
        let clone = html.getTemplate().cloneNode(true);
        clone.setAttribute('id', `${venue._id}`);
        const moreInfoBtn = clone.getElementsByTagName('input')[0].cloneNode(true);
        clone.style.display = 'block';
        clone.getElementsByClassName('venue-name')[0].textContent = "";
        clone.getElementsByClassName('venue-name')[0].append(moreInfoBtn, `${venue.name}`);
        clone.getElementsByClassName('venue-price')[0].textContent = `${venue.price} lv.`;
        clone.children[0].children[0].addEventListener('click', function () {
            if (clone.getElementsByClassName('venue-details')[0].style.display === 'none'){
                clone.getElementsByClassName('venue-details')[0].style.display = 'block';
            }else {
                clone.getElementsByClassName('venue-details')[0].style.display = 'none';
            }
        });
        clone.getElementsByTagName('input')[1].addEventListener('click', function () {
            const qty = clone.getElementsByClassName('quantity')[0].value;
            const orderName = venue.name;
            const orderPrice = venue.price;
            const _id = venue._id;

            let confirmTemplate = html.getConfirmTemplate().cloneNode(true);
            const confirmBtn = confirmTemplate.children[1].children[3];

            confirmTemplate.children[1].children[0].textContent = orderName;
            confirmTemplate.children[1].children[1].textContent = `${qty} x ${orderPrice}`;
            confirmTemplate.children[1].children[2].textContent = `Total: ${qty * orderPrice} lv`;
            confirmTemplate.style.display = 'block';
            confirmBtn.addEventListener('click', function () {
                actions.confirm(_id, qty);
            });

            html.container().textContent = "";
            html.container().appendChild(confirmTemplate);

        });

        clone.getElementsByTagName('p')[0].textContent = venue.description;
        clone.getElementsByTagName('p')[1].textContent = venue.startingHour;

        html.container().append(clone);

    },
    'confirm': async function(_id, qty) {
        try {
            const confirmed = await post('rps', `custom/purchase?venue=${_id}&qty=${qty}`);
            const p = document.createElement('p');
            p.textContent = "You may print this page as your ticket";

            const fragment = confirmed.html.cloneNode(true);

            html.container().textContent = "";
            html.container().append(p, fragment);
        }catch (e) {
            alert(e);
        }

    }
};

function handleEvent(e) {
    if (typeof actions[e.target.id] === 'function'){
        e.preventDefault();

        actions[e.target.id]();
    }
}

(function attachEvents() {
   document.addEventListener('click', handleEvent);
}());