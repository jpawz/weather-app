import Weather from "./weather";

export default class UI {
  static initialize() {
    UI.initInputs();
  }

  static initInputs() {
    const button = document.getElementById("button");
    button.addEventListener("click", () => {
      const latitude = document.getElementById("latitude").value;
      const longitude = document.getElementById("longitude").value;
      Weather.fetchWeatherForLocation(latitude, longitude).then(
        UI.updateWeatherData
      );
    });
  }

  static updateWeatherData(weatherDto) {
    document.getElementById("temperature").innerText = weatherDto.temperature;
    document.getElementById("feelsLikeTemperature").innerText =
      weatherDto.feelsLikeTemperature;
    document.getElementById("humidity").innerText = weatherDto.humidity;
    document.getElementById("pressure").innerText = weatherDto.pressure;
    document.getElementById("visibility").innerText = weatherDto.visibility;
    document.getElementById("windSpeed").innerText = weatherDto.windSpeed;
    document.getElementById("description").innerText =
      weatherDto.weatherDescription;
    document.getElementById("weatherState").innerText = weatherDto.weatherState;
  }
}
