function geoFindMe() {
    
    /*
    const atext = document.querySelector("a-text");
    */
    const atext = document.getElementById("text");
    
    function success(position) {
        console.log("Location Success")
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        place = 'latitude: ' + latitude + ': longitude: ' + longitude
        console.log('place: ', place)
        
        /* atext.value = "";
        atext.value = "Latitude: ${latitude}, Longitude: ${longitude}"; 
        atext.setAttribute("gps-entity-place", place);
        atext.setAttribute('value', 'changed')
        */
        
        atext.setAttribute("gps-entity-place", place);
        
        atext.setAttribute('scale', '0.5 0.5 0.5');
        atext.setAttribute('rotation', '0 0 180');
        console.log(atext.getAttributeNames() )
        console.log('id:', atext.getAttribute('id') )
        console.log('value:', atext.getAttribute('value') )
        console.log('look-at:', atext.getAttribute('look-at') )
        console.log('scale:', atext.getAttribute('scale') )
        console.log('gps:', atext.getAttribute('gps-entity-place') )
        console.log('text:', atext.getAttribute('text') )
        console.log('rotation:', atext.getAttribute('rotation') )
    }
      
    function error() {
        atext.setAttribute('value', "Unable to retrieve your location");
        console.log("Location error")
    }
      
    if(!navigator.geolocation) {
        atext.setAttribute('value', "Geolocation is not supported by your browser");
        console.log("Location not supported")
    } else {
        atext.value = "Locating…";
        console.log("Starting")
        navigator.geolocation.getCurrentPosition(success, error);
    }
    
}

window.onload = () => { geoFindMe() };
