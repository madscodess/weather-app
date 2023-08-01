
const searchButton = document.querySelector('#searchButton');
const form = document.querySelector('#searchInput');


searchButton.addEventListener("click", function(e){
  e.preventDefault()
  const inputCity = form.value;
  console.log("working");
  console.log(inputCity);

  //set API key & url with input.city 
  let apiKey = "bb9c326b337a705c684adf14dac0abf6";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}`;

//get data using axios request 
const getCityData = async () => {
    try{
        const response = await axios.get(`${apiUrl}`);
        const cityData = response.data;
        console.log(`GET: Here's the list of weather`, cityData);
        return cityData
    }
    catch (e) {
            console.e(errors);
    }
}

return getCityData();

});



  
//   const inputVal = input.value;
  
//   const getCityData = async () => {
//     try{
//         const response = await axios.get(`${apiUrl}`);
//         const cityData = response.data;
//         console.log(`GET: Here's the list of weather`, cityData);
//     }






// //search 
// //THIS CHANGE TO SUBMIT??
// searchButton.addEventListener('click', function() {
//     // get the search input value
//     const searchTerm = searchInput.value;
//     const api = `Searching for "https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=bb9c326b337a705c684adf14dac0abf6 ${searchTerm}"...`
//     // do something with the search term (e.g. redirect to a search results page)
//   //https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=bb9c326b337a705c684adf14dac0abf6
//     console.log(api);
//   });
      
