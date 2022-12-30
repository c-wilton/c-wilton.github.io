class LocationModel {
  /** Gets the location of the device */
  
  #latitude
  #longitude
  #location
  #altitude
  
  constructor() {
    /** sets the location to default values, then attempts to retrieve device location */
    console.log('New Location model')
    /* set default location */
    this.setLocation(53.225589, -4.127876, 20)
    /* get Geolocation */
    this.getGeoLocation()
  }
  
  setLocation(lat, long, alt){
    /** Sets the location to passed in values 
      * @param lat a latitude of a location
      * @param long a longitude of a location
      * @param alt an altitude of a location
    */
    if(this.checkVar(lat)){ this.#latitude = lat }
    if(this.checkVar(long)){ this.#longitude = long }
    if(this.checkVar(alt)){ this.#altitude = alt } 
    //console.log('!lat', !lat)
    
    this.#location = {latitude: this.#latitude, longitude: this.#longitude, altitude: this.#altitude};
    console.log('lat: ', this.#latitude, '; long: ', this.#longitude, 'alt: ', this.#altitude, '; loc: ', this.#location)
  }
  
  checkVar(item){
    /** Returns true if var is not null
      * @param item a variable or object which needs checking
      * @returns notNull a boolean indicating if the item is not null
    */
    let notNull = false
    if(item != null){ notNull = true }
    console.log(item, ' ', notNull)
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
    
    /* print the location to the console */
    let place = 'latitude: ' + latitude + '; longitude: ' + longitude + '; altitude: ' + altitude
    console.log('place: ', place)
    console.log('altitude', altitude)
      
    return place
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
      
      //geolocation is async
      let isSet = false
      
      let position = navigator.geolocation.getCurrentPosition(this.success, this.error);
      
      let counter = 0
      console.log('getGeo pos: ', position)
      while(position == null){
        console.log('getGeo pos: ', position)
        window.setTimeout(this.checkFlag, 5000, position)
        if(counter >= 10){
          break
        }
        counter += 1
      }
      
      /*
      isSet = checkFlag(position)
      console.log('step1: isSet: ', isSet) 
      console.log('getGeo pos: ', position)
      console.log('type: ', position != null)
      
      //while position == null -> wait
      //if position != null -> let lat, long, alt = pos lat long alt; setLocation(lat, long, alt)
      window.setTimeout(this.checkFlag, 50000)
      */
      console.log('step1: isSet: ', isSet) 
      console.log('getGeo pos: ', position)
      
      
    } 
  }
  
  checkFlag(pos){
    console.log(pos)
    /*
    position = pos
    isSet = flag
    if(position == null){
      console.log('null')
      window.setTimeout(checkFlag, 5000, position)
    } else {
      console.log('isSet: ', isSet)
    }
    */
    //if(this.#isSet == false){
      //window.setTimeout(checkFlag, 5000)
      //window.timeout(checkFlag, 1000)
    //}
  }
  
}

/* loc = new LocationModel() */
