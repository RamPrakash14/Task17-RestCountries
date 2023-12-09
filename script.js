const h1 = document.createElement("h1");
h1.setAttribute("class", "text-center");
h1.setAttribute("id", "title");
h1.innerHTML = "Rest Countries";
const div = document.getElementById("div");
div.appendChild(h1);
fetch("https://restcountries.com/v3.1/all")
  .then((data) => data.json())
  .then((countries) => {
    console.log(countries);

    countries.forEach((country) => {
      const division = document.createElement("div");
      division.setAttribute("class", "row");
      division.innerHTML = `<div class="col-sm-6 col-md-4 col-lg-4 col-xl-4">
                                      <div class="card h-100">
                                          <div class="card-header">${country.name.common}</div>
                                          <img src="${country.flags?.png}" class="card-img-top">
                                          <div class="card-body">
                                              <div class="card-text">Region: ${country.region}</div>
                                              <div class="card-text">Native Name: ${country.name.nativeName?.eng?.official}</div>
                                              <div class="card-text">Population: ${country.population}</div>
                                              <div class="card-text">Capital: ${country.capital}</div>
                                              <div class="card-text">Latlng: ${country.latlng}</div>
                                              <div class="card-text">Flag: ${country.flags?.png}</div>
                                              <div class="card-text">Name: ${country.name.common}</div>
                                              <div class="card-text">Country codes: ${country.cca3}</div>
                                          </div>
                                          <button class="btn btn-primary" onclick="fetchWeather(${country.latlng[0]}, ${country.latlng[1]})">click for weather</button>;
                                      </div>
                                  </div>
                                  <br />`;
      div.appendChild(division);
    });
  })
  .catch((error) => console.log(error));

// Function to fetch weather data from OpenWeatherMap
function fetchWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${"15bcb194fddb6bad258e49becff0a29a"}&units=metric`
  )
    .then((response) => response.json())
    .then((weatherData) => {
      alert(`Current temperature: ${weatherData.main.temp}°C`);
    })
    .catch((error) => {
      console.log(error);
    });
}