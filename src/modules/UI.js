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
    document.getElementById("temperature").innerText =
      weatherDto.temperature + "℃";
    document.getElementById("feelsLikeTemperature").innerText =
      "feels like " + weatherDto.feelsLikeTemperature + "℃";
    document.getElementById("humidity").innerText =
      "humidity " + weatherDto.humidity + "%";
    document.getElementById("pressure").innerText =
      "pressure " + weatherDto.pressure + " hPa";
    document.getElementById("visibility").innerText =
      "visibility " + weatherDto.visibility + " m";
    document.getElementById("windSpeed").innerText =
      "wind speed " + weatherDto.windSpeed + " m/s";
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
