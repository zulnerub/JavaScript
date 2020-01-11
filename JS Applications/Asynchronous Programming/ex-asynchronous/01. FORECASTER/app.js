async function attachEvents() {
const url = "https://judgetests.firebaseio.com/";
let locationInput = document.getElementById('location');
const displayDiv = document.getElementById("forecast");
const currentDiv = document.getElementById("current");
const upcomingDiv = document.getElementById("upcoming");
const btnSubmit = document.getElementById("submit");

const conditions = {
    Sunny: "&#x2600;",
    "Partly sunny": "&#x26C5;",
    Overcast: '&#x2601;',
    Rain: '&#x2614;' ,
    Degrees: '&#176;'   
};

btnSubmit.addEventListener("click", getInfo);

async function getInfo(){
    return await fetch(url + "locations.json")
        .then(res => res.json())
        .then(getLocation)
        .then(getCurrent)
        .then(getExtended)
        .catch();
}



function getLocation(data) {
    let match = data.find(city => city.name === locationInput.value);
    if (match){
        return match;
    }else{
        throw new Error("Error");
    }
}

async function getCurrent(data) {
    await fetch(url + "forecast/today/" + data.code + ".json")
       .then(res => res.json())
       .then(buildCurrentForecast)
       .catch(handleError)

    return data;
}

function empty(container) {
    while (container.childElementCount > 1){
        container.removeChild(container.lastChild);
    }
}

function buildCurrentForecast(obj) {
    empty(currentDiv);
    displayDiv.style.display = "block";
    let forecastDiv = document.createElement("div");
    forecastDiv.setAttribute("class", "forecast");

    let symbol = document.createElement("span");
    symbol.setAttribute("class", "condition symbol");
    symbol.innerHTML = conditions[obj.forecast.condition];
    forecastDiv.appendChild(symbol);

    let weather = document.createElement("span");
    weather.setAttribute("class", "condition");

    let city = document.createElement("span");
    city.setAttribute("class", "forecast-data");
    city.innerHTML = obj.name;
    weather.appendChild(city);

    let temp = document.createElement("span");
    temp.setAttribute("class", "forecast-data");
    temp.innerHTML = obj.forecast.low + conditions.Degrees + "/" + obj.forecast.high + conditions.Degrees;
    weather.appendChild(temp);

    let cond = document.createElement("span");
    cond.setAttribute("class", "forecast-data");
    cond.innerHTML = obj.forecast.condition;
    weather.appendChild(cond);

    forecastDiv.appendChild(weather);
    currentDiv.appendChild(forecastDiv);
}

async function getExtended(data) {
    await fetch(url + "forecast/upcoming/" + data.code + ".json")
            .then(res => res.json())
            .then(buildExtendedForecast)
            .catch(handleError)
}

function buildExtendedForecast(data) {
    empty(upcomingDiv);
    let extendedDiv = document.createElement("div");
    extendedDiv.setAttribute("class", "forecast-info");
    data.forecast.forEach(day => {
        let daySpan = document.createElement("span");
        daySpan.setAttribute("class", "upcoming");

        let daySymbol = document.createElement("span");
        daySymbol.setAttribute("class", "symbol");
        daySymbol.innerHTML = conditions[day.condition];
        daySpan.appendChild(daySymbol);

        let dayTemp = document.createElement("span");
        dayTemp.setAttribute("class", "forecast-data");
        dayTemp.innerHTML = day.low + "/" + day.high;
        daySpan.appendChild(dayTemp);

        let dayCond = document.createElement("span");
        dayCond.setAttribute("class", "forecast-data");
        dayCond.innerHTML = day.condition;
        daySpan.appendChild(dayCond);

        extendedDiv.appendChild(daySpan);
    });

    upcomingDiv.appendChild(extendedDiv);
    locationInput.value = "";
}


function handleError() {
    throw new Error("Error");
}

}



attachEvents();