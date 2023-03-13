export default class Weather {
  static apiKey = "f29a957b5cdc26753a48e3fe93196b8f";

  static async fetchWeatherForLocation(latitude, longitude) {
    const openWeatherMapApi = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${Weather.apiKey}`;
    const response = await fetch(openWeatherMapApi, { mode: "cors" });
    const weatherData = await response.json();
    console.log(weatherData);
  }
}
