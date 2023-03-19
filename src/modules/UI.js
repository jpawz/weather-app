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
}
