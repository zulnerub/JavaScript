function withCache(fn) {
    fn.cache = new Map();
    return function () {
        let key = JSON.stringify(arguments);
        if (!fn.cache.has(key)){
            fn.cache.set(key, fn(...arguments))
        }
        return fn.cache.get(key);
    }
}

function handleError(x) {
    if (!x.ok){ throw new Error(x.statusText)}
    return x;
}

function deserializeData(x) {
    return x.json();
}

function fetchData(hError = handleError, dData, url) {
    return fetch(url)
        .then(hError)
        .then(deserializeData)
        .then(dData)
        .catch(console.error);
}

const rootUrl = `https://blog-apps-c12bf.firebaseio.com/`;
const mkUrl = x => `${rootUrl}${x}/.json`;

const cachedFetch = withCache(fetchData.bind(window, undefined, undefined));
const getPosts = () => cachedFetch(mkUrl("posts"));
const getPost = id => cachedFetch(mkUrl(`posts/${id}`));
const getComments = () => cachedFetch(mkUrl('comments'));


async function displayPosts(posts) {
    let fragment = document.createDocumentFragment();
    Object.keys(posts).forEach(x => {
        let option = document.createElement('option');
        option.value = x;
        option.innerHTML = posts[x].title;
        fragment.appendChild(option);
    });
    html.select().innerHTML = "";
    html.select().appendChild(fragment);

}

function displayComments(comments, post) {
    html.comments().innerHTML = "";
    Object.keys(comments)
        .filter(x => comments[x].postId === post.id)
        .map(x => comments[x])
        .map(x => {
            let li = document.createElement('li');
            li.innerHTML = x.text;
            return li;
        })
        .forEach(x => {
            html.comments().appendChild(x);
        });
}

function displayPost(comments, post) {
    displayComments(comments, post);
    Object.keys(post).forEach(x => {
        if (typeof html[x] === "function") {
            html[x]().innerHTML = post[x];
        }
    });
}

const actions ={
    btnLoadPosts: async () => {
       await displayPosts(await getPosts());
    },
    btnViewPost: async () => {
        const post = await getPost(html.select().value);
        const comments = await getComments();
        displayPost(comments, post);
    }
};

function handleEvent(e) {
    if (typeof actions[e.target.id] === "function"){
        actions[e.target.id]();
    }
}

const html = {
    select: () => document.getElementById('posts'),
    title: () => document.getElementById('post-title'),
    body: () => document.getElementById('post-body'),
    comments: () => document.getElementById('post-comments')
};

function attachEvents() {
    document.addEventListener("click", handleEvent);
}

attachEvents();