
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
// const inputCity = 'manchester';
// console.log(inputCity);

  //set API key & url 
// let apiKey = "bb9c326b337a705c684adf14dac0abf6";
// let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}`;


// window.addEventListener("load", function(e){
//       e.preventDefault()
//     const getManchesterWeather = async (errors) => {
//         try {
//             const response = await axios.get(`${apiUrl}`);
//             const manchesterData = response.data;
//             //console.log(cityData);
//             console.log(`GET: Here's the list of weather in ${inputCity}`, manchesterData);
     

//              //current temperature
//             //change numbers to two digits 
//             let currentTemp = String(manchesterData.main.temp).substring(0, 2);
//             console.log(currentTemp);
//             current.append(`${currentTemp}°C`);

//             //humidity percentage 
//             //change numbers to two digits 
//             humidity.append(`${(manchesterData.main.humidity)}%`); 
//             console.log(humidity);

//             //max temperature
//             //change numbers to one digit 
//             let maxTemp = String(manchesterData.main.temp_max).substring(0, 2);
//             console.log(Number(maxTemp));
//             maxTempDiv.append(`${maxTemp}°C`);
       
//             //Min temperature
//             //change numbers to one digit 
//             let minTemp = String(manchesterData.main.temp_min).substring(0, 2);
//             console.log(Number(minTemp));
//             minTempDiv.append(`${minTemp}°C`);

//             //sunrise 
        
//             sunrise.append(manchesterData.sys.sunrise);
//             sunset.append(manchesterData.sys.sunset);
//         }
//         catch (e) {
//                 console.log(errors);
//         }
//     }
//         return getManchesterWeather();
// });

  


//to update via the user input
searchButton.addEventListener("click", function(e){
  e.preventDefault()
  const inputCity = form.value;

  let apiKey = "bb9c326b337a705c684adf14dac0abf6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}`;
  

//get data using axios request 
const getCityWeather = async (errors) => {
    try{
        const response = await axios.get(`${apiUrl}`);
        const cityData = response.data;
        console.log(`GET: Here's the list of weather in ${inputCity}`, cityData);
 
        //current temperature
        //change numbers to two digits 
        let currentTemp = String(cityData.main.temp).substring(0, 2);
        console.log(currentTemp);
        current.innerText = `${currentTemp}°C`   
        

        //humidity percentage 
        humidity.innerText = `${(cityData.main.humidity)}%`; 
        console.log(humidity);


        //max temperature
        //change numbers to one digit 
        let maxTemp = String(cityData.main.temp_max).substring(0, 2);
        console.log(Number(maxTemp));
        maxTempDiv.innerText = `${maxTemp}°C`;
       
        //Min temperature
        //change numbers to one digit 
        let minTemp = String(cityData.main.temp_min).substring(0, 2);
        console.log(Number(minTemp));
        minTempDiv.innerText = `${minTemp}°C`;

    }
    catch (e) {
            console.log(errors);
    }
    
}

return getCityWeather();

});


//inputCity("Suprunivka");

// //5 day forecast
// let apiForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${inputCity}&units=metric&appid=${apiKey}`;
// console.log(apiForecast.list);

// window.addEventListener("load", function(e){
//     e.preventDefault()
//   const getManchesterForecast = async (errors) => {
//       try {
//           const response = await axios.get(`${apiForecast}`);
//           const forecastData = response.data;
          
//           const day1 = response.data.list[0];
//           const day2 = response.data.list[1];
//           console.log(forecastData);
//           console.log(`GET: Here's the 5 day forecast in ${inputCity}`, forecastData);
//           console.log(`GET: Here's the 1st day forecast in ${inputCity}`, day1);
//           console.log(`GET: Here's the 1st day forecast in ${inputCity}`, day2);

//       }
//       catch (e) {
//               console.log(errors);
//       }
//   }
//       return getManchesterForecast();
// });


