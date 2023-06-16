const webPage = document.getElementById("page")
const label = document.getElementById("label")
const getWeather = document.getElementById("btn")
const input = document.getElementById("input")
const currentWeather = document.getElementById("weather")
const locate = document.getElementById("locate")
const kel = document.getElementById("kel")
const far = document.getElementById("far")
const cel = document.getElementById("cel")
const conditions = document.getElementById("conditions")
const back = document.getElementById("back")

let page = [
    { // This will be for page 1 with no data visible
        label:"ZIP Code",
        input:"",
        getWeather:"Get Weather",
        currentWeather:"",
        back:""
    },
    { // This will be for page 2 with data visible and no buttons
        label:"",
        input:"",
        getWeather:"",
        currentWeather:"",
        back:""
    }
];

// Sets page number to 1
let currentPage = 0;

function nextPage() {
    currentPage++;
}

function prevPage() {
    currentPage--;
}

// Effects what elements are displayed on each page
function changeState() {
    if (currentPage === 0) {
    label.style.visibility = 'visible'
    input.style.visibility = 'visible'
    getWeather.style.visibility = 'visible'
    currentWeather.style.visibility = 'hidden'
    back.style.visibility = 'hidden'
}
    else if (currentPage === 1) {
        label.style.visibility = 'hidden'
    input.style.visibility = 'hidden'
    getWeather.style.visibility = 'hidden'
    currentWeather.style.visibility = 'visible'
    back.style.visibility = 'visible'
    }
}

function getWeatherData() {

axios .get('https://api.openweathermap.org/data/2.5/weather?zip=40701,us&appid=4ae6e899c88552da0e4cb0abb5724071')
.then((response) => {
    //handle success
    console.log(response);
})
.catch((error) => {
    //handle error
    console.log(error);
})

.finally(function () {

});
}

Btn.addEventListener('click', getWeatherData)
back.addEventListener('click', prevPage)