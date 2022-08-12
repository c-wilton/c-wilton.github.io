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
    console.log('setLocation')
    let defaultLatitude = 53.225589
    let defaultLongitude = -4.127876
    
    this.#latitude = defaultLatitude
    this.#longitude = defaultLongitude
    
    this.#location = {lat: this.#latitude, long: this.#longitude};
    console.log('lat: ', this.#latitude, '\nlong: ', this.#longitude, '\nloc: ', this.#location)
  }
  
  getLocation(){
    console.log('getLocation')
    return this.#location
  }
  
  success(position) {
    console.log("Location Success")
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    let place = 'latitude: ' + latitude + ': longitude: ' + longitude
    console.log('place: ', place)
  }
  
  error() {
    console.log("Location error")
  }
  
  getGeoLocation() {
    console.log('getGeoLocation')
    if(!navigator.geolocation) {
      console.log("Location not supported")
    } else {
      console.log("Starting")
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    } 
  }
  
}

loc = new LocationModel()