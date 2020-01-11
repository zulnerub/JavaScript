const catches = function () {

    const baseUrl = "https://fisher-game.firebaseio.com/catches/";

    const get = () => {
        return fetch(baseUrl + '.json').then(res => res.json());
    };

    const post = (data) => {
        return fetch(baseUrl + '.json', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
    };

    const del = (id) => {
        return fetch(baseUrl + `${id}.json`, {
            method: 'DELETE'
        }).catch(console.err)
    };

    const put = (id, data) => {
        return fetch(baseUrl + `${id}.json`, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };



    return {
        get,
        post,
        put,
        del
    }
}();