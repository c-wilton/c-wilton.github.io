class LocationModel {
  
  #latitude
  #longitude
  #location
  
  constructor() {
    setLocation()
    getGeoLocation()
  }
  
  setLocation(){
    defaultLatitude = 53.225589
    defaultLongitude = -4.127876
    
    this.#latitude = defaultLatitude
    this.#longitude = defaultLongitude
    
    this.#location = {lat: this.#latitude, long: this.#longitude};
  }
  
  getLocation(){
    return this.#location
  }
  
  success(position) {
    console.log("Location Success")
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    place = 'latitude: ' + latitude + ': longitude: ' + longitude
    console.log('place: ', place)
  }
  
  error() {
    console.log("Location error")
  }
  
  getGeoLocation() {
    if(!navigator.geolocation) {
      console.log("Location not supported")
    } else {
      console.log("Starting")
      navigator.geolocation.getCurrentPosition(success, error);
    } 
  }
  
}

loc = new LocationModel()
