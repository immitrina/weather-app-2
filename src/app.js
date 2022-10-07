function displayTemperature(response) {
  let tempElement = document.querySelector("#temperature");
  let locationElement = document.querySelector("#location");
  let descriptionElement = document.querySelector("#description");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  locationElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
}

let apiKey = "6048019de1a84df24f7d81b812b1b98f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
