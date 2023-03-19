import { WeatherDto } from "./weatherDto";

export default class Weather {
  static apiKey = "f29a957b5cdc26753a48e3fe93196b8f";

  static async fetchWeatherForLocation(latitude, longitude) {
    const openWeatherMapApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Weather.apiKey}&units=metric`;
    const response = await fetch(openWeatherMapApi, { mode: "cors" });
    const weatherData = await response.json();
    console.log(weatherData);
    return this.mapResponseToDto(weatherData);
  }

  static mapResponseToDto(response) {
    const weatherDto = new WeatherDto();
    weatherDto.weatherDescription = response.weather[0].description;
    weatherDto.weatherState = response.weather[0].main;
    weatherDto.temperature = response.main.temp;
    weatherDto.feelsLikeTemperature = response.main.feels_like;
    weatherDto.humidity = response.main.humidity;
    weatherDto.pressure = response.main.pressure;
    weatherDto.visibility = response.visibility;
    weatherDto.windSpeed = response.wind.speed;
    weatherDto.cityName = response.name;
    return weatherDto;
  }
}
