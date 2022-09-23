class LocationModel {
  
  #latitude
  #longitude
  #location
  
  constructor() {
    console.log('New Location model')
    this.setLocation()
    this.getGeoLocation()
  }
  
  setLocation(){
    let defaultLatitude = 53.225589
    let defaultLongitude = -4.127876
    let defaultAltitude = 0
    
    this.#latitude = defaultLatitude
    this.#longitude = defaultLongitude
    this.#altitude = defaultAltitude
    
    this.#location = {lat: this.#latitude, long: this.#longitude};
    console.log('Default\n', 'lat: ', this.#latitude, '; long: ', this.#longitude, '; loc: ', this.#location)
  }
  
  getLocation(){
    console.log('getLocation')
    return this.#location
  }
  
  success(position) {
    console.log("Location Success")
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const altitude = position.coords.altitude;
    let place = 'latitude: ' + latitude + ': longitude: ' + longitude
    console.log('place: ', place)
    console.log('altitude', altitude)
  }
  
  error() {
    console.log("Location error")
  }
  
  getGeoLocation() {
    console.log('getGeoLocation')
    if(!navigator.geolocation) {
      console.log("Location not supported")
    } else {
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    } 
  }
  
}

loc = new LocationModel()
