class LocationModel {
  /** Gets the location of the device */
  
  #latitude
  #longitude
  #location
  #altitude
  
  constructor() {
    /** sets the location to default values, then attempts to retrieve device location */
    console.log('New Location model')
    this.setLocation()
    this.getGeoLocation()
  }
  
  setLocation(){
    /** Sets the location to default values */
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
    /** @return the location */
    console.log('getLocation')
    return this.#location
  }
  
  success(position) {
    /** if geolocation was a success, get the device location
        * @param position the device location
    */
    
    /* get device location */
    console.log("Location Success")
    const latitude  = position.coords.latitude;
    const longitude = position.coords.longitude;
    const altitude = position.coords.altitude;
    
    this.#latitude = latitude;
    this.#longitude = longitude;
    this.#altitude = altitude;
    this.#location = {latitude: this.#latitude, longitude: this.#longitude, altitude: this.#altitude};
    
    /* print the location to the console */
    let place = 'latitude: ' + this.#latitude + ': longitude: ' + this.#longitude
    
    console.log('place: ', place)
    console.log('altitude', this.#altitude)
  }
  
  error() {
    /** display message if geolocation failed */
    console.log("Location error")
  }
  
  getGeoLocation() {
    /** Attempt to get the device location */
    console.log('getGeoLocation')
    if(!navigator.geolocation) {
      /* display message if geolocationis not supported */
      console.log("Location not supported")
    } else {
      /* if geolocation is supported, get the device location */
      navigator.geolocation.getCurrentPosition(this.success, this.error);
    } 
  }
  
}

/* loc = new LocationModel() */
