class LocationModel {
  
  #latitude
  #longitude
  #location
  
  constructor() {
    setLocation()
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
}
