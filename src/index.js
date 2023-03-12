const apiKey = "f29a957b5cdc26753a48e3fe93196b8f";
async function fetchWeatherForLocation(latitude, longitude) {
  const openWeatherMapApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
  const response = await fetch(openWeatherMapApi, { mode: "cors" });
  const weatherData = await response.json();
  console.log(weatherData);
}

fetchWeatherForLocation(50.0334592, 21.9840512);
