const webPage = document.getElementById("page")
const label = document.getElementById("label")
const getWeather = document.getElementById("btn")
const input = document.getElementById("input")
const currentWeather = document.getElementById("weather")
const location = document.getElementById("location")
const kel = document.getElementById("kel")
const far = document.getElementById("far")
const cel = document.getElementById("cel")
const conditions = document.getElementById("conditions")
const back = document.getElementById("back")

let page = [
    { // This will be for page 1 with no data visible
        label:"ZIP Code",
        input:"",
        button:"Get Weather",
        currentWeather:"",
        back:""
    },
    { // This will be for page 2 with data visible and no buttons
        label:"",
        input:"",
        button:"",
        currentWeather:"",
        back:""
    }
];

// Sets page number to 1
let currentPage = 0;

