const app_state = { count: 0 };

const routesParams = {};

const routes = {};

function Page1(page, temp) {
    document.querySelector("title").innerHTML = "Page 1";
    document.all
        .content
        .innerHTML = `Link1 was pressed => page: ${page} | temp: ${temp}`;
}

function Page2() {
    document.querySelector("title").innerHTML = "Page 2";
    document.all
        .content
        .innerHTML = 'Link2 was pressed!';
}

function createPath(path, callback){
    const processedPath = path.split(":");
    const  realPath = processedPath.splice(0, 1);

    routes[realPath] = callback;
    routesParams[realPath] = processedPath;
}

createPath("/link1:page:temp", Page1);
createPath("/link2", Page2);

function clickHandler(e){
    if (e.target.dataset.myLink === '1'){
        e.preventDefault();
        router(e.target.href);
    }
}

document.addEventListener('click', clickHandler);

window.addEventListener("popstate", function (e) {
    router(location.href, true);
});

window.addEventListener("load", function (e) {
    router(location.href);
});

function router(href, isBack) {
    if (!isBack){
        history.pushState({count: app_state.count++}, "", href);
    }
    const q = [...new URLSearchParams(location.search).entries()]
        .filter(x => routesParams[location.pathname].indexOf(x[0]) > -1)
        .map(x => x[1]);

    if (typeof routes[location.pathname] === "function"){
        routes[location.pathname](...q);
    }
}