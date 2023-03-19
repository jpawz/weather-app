export default class Location {
  static getCoords = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  static getLocation = async () => {
    try {
      let pos = {};
      let position = await this.getCoords();
      pos.latitude = position.coords.latitude;
      pos.longitude = position.coords.longitude;
      return pos;
    } catch (error) {
      const defaultLocation = { latitude: 52.237049, longitude: 21.017532 };
      return defaultLocation;
    }
  };
}
