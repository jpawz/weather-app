import Weather from "./weather";
import Location from "./location";

export default class UI {
  static async initialize() {
    const location = await Location.getLocation();
    const { latitude, longitude } = location;
    const weatherData = await Weather.fetchWeatherForLocation(
      latitude,
      longitude
    );
    UI.updateWeatherData(weatherData);
    UI.setBackgroundImage();
  }

  static updateWeatherData(weatherDto) {
    document.getElementById("weatherState").innerText = weatherDto.weatherState;
    document.getElementById("cityName").innerText = weatherDto.cityName;
    document.getElementById("temperature").innerText = weatherDto.temperature;
    document.getElementById("feelsLikeTemperature").innerText =
      weatherDto.feelsLikeTemperature;
    document.getElementById("humidity").innerText = weatherDto.humidity;
    document.getElementById("pressure").innerText = weatherDto.pressure;
    document.getElementById("visibility").innerText = weatherDto.visibility;
    document.getElementById("windSpeed").innerText = weatherDto.windSpeed;
  }

  static setBackgroundImage(weatherDescription) {
    let image;
    switch (weatherDescription) {
      case "clear sky":
        image = "clear_sky.jpg";
        break;
      case "few clouds":
      case "scattered clouds":
      case "broken clouds":
        image = "clouds.jpg";
        break;
      case "shower rain":
      case "rain":
        image = "rain.jpg";
        break;
      case "thunderstorm":
        image = "thunderstorm.jpg";
        break;
      case "snow":
        image = "snow.jpg";
        break;
      case "mist":
        image = "mist.jpg";
        break;
      default:
        image = "clear_sky.jpg";
    }
    document.body.style.cssText = `
    background: url("img/${image}") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    `;
  }
}
