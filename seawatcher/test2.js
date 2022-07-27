function geoFindMe() {
    
    const atext = document.querySelector('a-text');
    
    function success(position) {
        console.log("Location Success")
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        atext.value = '';
        atext.value = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
        atext.gps-entity-place = "latitude: ${latitude}; longitude:  ${latitude};"
    }
      
    function error() {
        atext.value = 'Unable to retrieve your location';
    }
      
    if(!navigator.geolocation) {
        atext.value = 'Geolocation is not supported by your browser';
    } else {
        atext.value = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
    
}

/*
document.querySelector('#find-me').addEventListener('click', geoFindMe);
*/
window.onload = () => { geoFindMe() };
