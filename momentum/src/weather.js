const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "673f2e0bde5dd11b0eb62c2727f58a91";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=imperial`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = `@ ${data.name}`;
      weather.innerText = `${data.weather[0].main} | ${data.main.temp}°F`;
    });
}
function onGeoError() {
  alert("Can't find your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);