function displayTemperature(response) {
  let tempElement = document.querySelector("#temperature");
  let locationElement = document.querySelector("#location");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  tempElement.innerHTML = Math.round(response.data.main.temp);
  locationElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "6048019de1a84df24f7d81b812b1b98f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=imperial`;

axios.get(apiUrl).then(displayTemperature);
