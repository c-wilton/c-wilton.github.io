class LocationModel {
  /** Gets the location of the device */
  
  #latitude
  #longitude
  #location
  #altitude
  #isSet
  
  constructor() {
    /** sets the location to default values, then attempts to retrieve device location */
    console.log('New Location model')
    /* set default location */
    this.setLocation(53.225589, -4.127876, 20)
    /* get Geolocation */
    this.#isSet = false
    this.getGeoLocation()
    this.checkFlag()
    console.log('flag = ', this.#isSet, ' altitude = ', this.#altitude)
  }
  
  setLocation(lat, long, alt){
    /** Sets the location to passed in values */
    if(checkVar(lat)){ this.#latitude = lat }
    if(checkVar(long)){ this.#longitude = long }
    if(checkVar(alt)){ this.#altitude = alt } 
    
    this.#location = {latitude: this.#latitude, longitude: this.#longitude, altitude: this.#altitude};
    console.log('lat: ', this.#latitude, '; long: ', this.#longitude, 'alt: ', this.#altitude, '; loc: ', this.#location)
  }
  
  checkVar(var){
    /** Returns true if var is not null
      * @param var a variable or object which needs checking
      * @returns notNull a boolean indicating if the variable is not null
    */
    notNull = false
    if(var != null){ notNull = true }
    console.log(var, ' ', notNull)
    return notNull
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
    
    /*this.#latitude = latitude;
    this.#longitude = longitude;
    this.#altitude = altitude;
    this.#location = {latitude: this.#latitude, longitude: this.#longitude, altitude: this.#altitude};
    */
    /* this.setLocation(latitude, longitude, altitude) */
    
    /* print the location to the console */
    let place = 'latitude: ' + latitude + ': longitude: ' + longitude
    console.log('place: ', place)
    console.log('altitude', altitude)
      
    
    return place
  }
  
  error() {
    /** display message if geolocation failed */
    console.log("Location error")
    this.#isSet = true
  }
  
  getGeoLocation() {
    /** Attempt to get the device location */
    console.log('getGeoLocation')
    if(!navigator.geolocation) {
      /* display message if geolocationis not supported */
      console.log("Location not supported")
    } else {
      /* if geolocation is supported, get the device location */
      let position = navigator.geolocation.getCurrentPosition(this.success, this.error);
      console.log('getGeo pos: ', position)
      
      //console.log('isSet', isSet)
      //console.log('this.isSet', this.isSet)
      console.log('this.#isSet', this.#isSet)
      this.isSet = true
    
    } 
  }
  
  checkFlag(){
    if(this.#isSet == false){
      //window.setTimeout(checkFlag, 5000)
      //window.timeout(checkFlag, 1000)
    }
  }
  
}

/* loc = new LocationModel() */
