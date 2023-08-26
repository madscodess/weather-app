
const searchButton = document.querySelector('#searchButton');
const form = document.querySelector('#searchInput');

let current = document.querySelector('#currentTemperature');
let humidity = document.querySelector('p#humidity');
let maxTempDiv = document.querySelector('p#max-temperature');
let minTempDiv = document.querySelector('p#min-temperature');
let sunrise = document.querySelector('#sunrise');
let sunset = document.querySelector('#sunset');
//const highlightsDiv = document.getElementById('highlights');


//current weather in Manchester as homepage 
let apiKey = "bb9c326b337a705c684adf14dac0abf6";
const inputCity = 'manchester';
let apiManchester = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}`;
console.log(inputCity);

window.addEventListener("load", function(e){
      e.preventDefault()
    const getManchesterData = async (errors) => {
        try {
            const response = await axios.get(`${apiManchester}`);
            const cityData = response.data;
            console.log(cityData);
            console.log(`GET: Here's the list of weather in ${inputCity}`, cityData);
     

             //current temperature
            //change numbers to two digits 
            let currentTemp = String(cityData.main.temp).substring(0, 2);
            console.log(currentTemp);
            current.append(`${currentTemp}°C`);

            //humidity percentage 
            //change numbers to two digits 
            humidity.append(`${(cityData.main.humidity)}%`); 
            console.log(humidity);

            //max temperature
            //change numbers to one digit 
            let maxTemp = String(cityData.main.temp_max).substring(0, 2);
            console.log(Number(maxTemp));
            maxTempDiv.append(`${maxTemp}°C`);
       
            //Min temperature
            //change numbers to one digit 
            let minTemp = String(cityData.main.temp_min).substring(0, 2);
            console.log(Number(minTemp));
            minTempDiv.append(`${minTemp}°C`);

            //sunrise 
        
            sunrise.append(cityData.sys.sunrise);
            sunset.append(cityData.sys.sunset);
        }
        catch (e) {
                console.log(errors);
        }
    }
        return getManchesterData();
});

  


//to update via the user input
searchButton.addEventListener("click", function(e){
  e.preventDefault()
  const inputCity = form.value;

  //set API key & url with input.city 
  //let apiKey = "bb9c326b337a705c684adf14dac0abf6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}`;

//get data using axios request 
const getCityData = async (errors) => {
    try{
        const response = await axios.get(`${apiUrl}`);
        const cityData = response.data;
        console.log(`GET: Here's the list of weather in ${inputCity}`, cityData);
 
        //current temperature
        //change numbers to two digits 
        let currentTemp = String(cityData.main.temp).substring(0, 2);
        console.log(currentTemp);
        current.append(`${currentTemp}°C`);    

        //max temperature
        //change numbers to one digit 
        let maxTemp = String(cityData.main.temp_max).substring(0, 2);
        console.log(Number(maxTemp));
       
        //Min temperature
        //change numbers to one digit 
        let minTemp = String(cityData.main.temp_min).substring(0, 2);
        console.log(Number(minTemp));


    }
    catch (e) {
            console.log(errors);
    }
}

return getCityData();

});

