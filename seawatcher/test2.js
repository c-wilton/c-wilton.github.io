function geoFindMe() {
    
    /*
    const atext = document.querySelector("a-text");
    */
    const atext = document.getElementById("text");
    
    function success(position) {
        console.log("Location Success")
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        atext.value = "";
        atext.value = "Latitude: ${latitude}, Longitude: ${longitude}";
        atext.setAttribute("gps-entity-place", "latitude: ${latitude}; longitude: ${latitude}");
        atext.setAttribute('rotation', '0 180 0');
        console.log(atext.getAttributeNames() )
    }
      
    function error() {
        atext.setAttribute(value, "Unable to retrieve your location");
        console.log("Location error")
    }
      
    if(!navigator.geolocation) {
        atext.setAttribute(value, "Geolocation is not supported by your browser");
        console.log("Location not supported")
    } else {
        atext.value = "Locating…";
        console.log("Starting")
        navigator.geolocation.getCurrentPosition(success, error);
    }
    
}

window.onload = () => { geoFindMe() };
