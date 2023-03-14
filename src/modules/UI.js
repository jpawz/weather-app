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
      Weather.fetchWeatherForLocation(latitude, longitude).then(console.log);
    });
  }
}
