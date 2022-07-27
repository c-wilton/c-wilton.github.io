function geoFindMe() {
    
    const atext = document.querySelector("a-text");
    
    function success(position) {
        console.log("Location Success")
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        atext.setAttribute(value,"");
        atext.setAttribute(value, "Latitude: ${latitude}, Longitude: ${longitude}");
        atext.setAttribute("gps-entity-place", "latitude: ${latitude}; longitude: ${latitude}");
        atext.setAttribute('rotation', '0 180 0');
    }
      
    function error() {
        atext.value = "Unable to retrieve your location";
    }
      
    if(!navigator.geolocation) {
        atext.value = "Geolocation is not supported by your browser";
    } else {
        atext.value = "Locating…";
        navigator.geolocation.getCurrentPosition(success, error);
    }
    
}

window.onload = () => { geoFindMe() };
