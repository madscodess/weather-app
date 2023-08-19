
const searchButton = document.querySelector('#searchButton');
const form = document.querySelector('#searchInput');

const current = document.querySelector('#currentTemperature');
const highlightsDiv = document.getElementById('highlights')

searchButton.addEventListener("click", function(e){
  e.preventDefault()
  const inputCity = form.value;
  console.log("working");
  console.log(inputCity);

  //set API key & url with input.city 
  let apiKey = "bb9c326b337a705c684adf14dac0abf6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&units=metric&appid=${apiKey}`;

//get data using axios request 
const getCityData = async (errors) => {
    try{
        const response = await axios.get(`${apiUrl}`);
        const cityData = response.data;
        console.log(`GET: Here's the list of weather in ${inputCity}`, cityData);
 
        //current temperature
        //change numbers to two digits 
        const currentTemp = String(cityData.main.temp).substring(0, 2);
        console.log(currentTemp);
        current.append(`${currentTemp}°C`); 
    
        
   

        //max temperature
        //change numbers to one digit 
        const maxTemp = String(cityData.main.temp_max).substring(0, 2);
        console.log(Number(maxTemp));
       
        //Min temperature
        //change numbers to one digit 
        const minTemp = String(cityData.main.temp_min).substring(0, 2);
        console.log(Number(minTemp));

        highlightsDiv.append(
            `<div class="max-temperature" Maximum Temperature: ${maxTemp}°C </div>`,
         `${minTemp}°C `); 

    }
    catch (e) {
            console.log(errors);
    }
}

return getCityData();

});

