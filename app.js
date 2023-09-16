
const searchButton = document.querySelector('#searchButton');
const form = document.querySelector('#searchInput');

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

//to update via the user input
searchButton.addEventListener("click", function(e){
  e.preventDefault()
  const inputCity = form.value;

  let apiKey = "bb9c326b337a705c684adf14dac0abf6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}`;
  
  //display containers
  weatherContainer.style.display = "flex";
  highlights.style.display = "flex";
  
//get data using axios request 
const getCityWeather = async (errors) => {
    try{
        const response = await axios.get(`${apiUrl}`);
        const cityData = response.data;
        console.log(`GET: Here's the list of weather in ${inputCity}`, cityData);
        console.log(cityData.cod);


function displayWeather(){
        //update image
        let icon = cityData.weather[0].icon;
        image.src = `/icons/${icon}.png`;

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

    function errorCode(){
        if (cityData.cod === '404') {
            console.log(cityData.cod);
            console.log("error code");
            return;
        }
    }
    errorCode();

}
catch (e) {
    console.log(cityData.cod);
        console.log(errors);

} }

getCityWeather();

});
