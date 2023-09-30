const darkModeButton = document.querySelector('#darkModeButton');
const lightModeButton = document.querySelector('#lightModeButton');


const searchButton = document.querySelector('#searchButton');
const input = document.querySelector('#searchInput');
const form =  document.querySelector('#search');
const searchForm =  document.querySelector('div#input-group mb-3');

let weatherContainer = document.querySelector('div#current-temperature-text');
let highlights = document.querySelector('div#highlights');
let current = document.querySelector('#currentTemperature');
let humidity = document.querySelector('p#humidity');
let maxTempDiv = document.querySelector('p#max-temperature');
let minTempDiv = document.querySelector('p#min-temperature');
let sunrise = document.querySelector('#sunrise');
let sunset = document.querySelector('#sunset');
const errorState = document.querySelector('#error-state');
let image = document.querySelector('div#current-temperature-text img');
let currentText = document.querySelector('p#current-text');
let main = document.querySelector('main');
let todaysHighlightBoxes = document.querySelector('div.card-group');



//to update via the user input
searchButton.addEventListener("click", function(e){
  e.preventDefault()
  const inputCity = input.value;

  let apiKey = "bb9c326b337a705c684adf14dac0abf6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}`;
  
  //CSS containers
  weatherContainer.style.display = "flex";
  highlights.style.display = "flex";
  errorState.style.display = "none";
  
//get data using axios request 
const getCityWeather = async (errors) => {
    try{
        const response = await axios.get(`${apiUrl}`);
        const cityData = response.data;
        console.log(`GET: Here's the list of weather in ${inputCity}`, cityData);
        console.log(cityData.cod);


function displayWeather(){

    console.log(currentText);
        currentText.innerText = `Temperature in ${inputCity}:`;
        //update image
        let icon = cityData.weather[0].icon;
        image.src = `/docs/assets/icons/${icon}.png`

        //current temperature
        //change numbers to two digits 
        let currentTemp = String(cityData.main.temp).substring(0, 2);
        current.innerText = `${currentTemp}°C`;

        //humidity percentage 
        humidity.innerText = `${(cityData.main.humidity)}%`; 

 
        //max temperature
        //change numbers to one digit 
        let maxTemp = String(cityData.main.temp_max).substring(0, 2);
        maxTempDiv.innerText = `${maxTemp}°C`;
       
        //Min temperature
        //change numbers to one digit 
        let minTemp = String(cityData.main.temp_min).substring(0, 2);
        minTempDiv.innerText = `${minTemp}°C`;
    }
    displayWeather();

}
catch (e) {
    //error container
        console.log(errors);
        errorState.style.display = "flex";
        weatherContainer.style.display = "none";
        highlights.style.display = "none";
} }

getCityWeather();

});


//dark mode 
// function darkMode() {
//         let element = document.body;
//         element.className = "dark-mode";
//         main.className = "dark-mode";
//         highlights.className = "dark-mode";
//         todaysHighlightBoxes.className = "dark-mode";
//         weatherContainer.className = "dark-mode";
//         form.className = "dark-mode";
//         searchForm.className = "dark-mode";
//         input.className = "dark-mode";
// }

// darkModeButton.addEventListener('click', function(e){
//     e.preventDefault();
//     darkMode();
// });

