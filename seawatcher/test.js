/* import {distance} from './test1.js'; */
function geoFindMe() {
    /** Retrieve device location and calculate the distance to a pre-defined location 
    */
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
      
    mapLink.href = '';
    mapLink.textContent = '';
      
    function getDistance(pos1, pos2, alt1){
        /** 
        * Prints the distance between 2 positions 
        * @param pos1 the first position
        * @param pos2 the second position
        * @param alt the altitude of the first position
        */
        result = document.getElementById('distance');
        lat1 = pos1.lat;
        long1 = pos1.long;
        lat2 = pos2.lat;
        long2 = pos2.long;
        
        /* call a method to calculate the distance */
        dist = distance(lat1, long1, lat2, long2, 'K')
        distInM = dist * 1000
        /* dist = 0; */
        
        /* print the message on the page */
        message = 'New Look: lat1: ' + lat1 + ' long1: ' + long1 + ' alt: ' + alt + '\n';
        message += 'Fat cat: lat2: ' + lat2 + ' long2: ' + long2 + '\n';
        message += 'distance: ' + dist + 'km \n';
        message += 'distance: ' + distInM + ' meters';
        message += 'google maps distance: 41.148 meters';
        result.innerText = message;
    }
    
    function addElement(){
        /** create a <p> element to the document body */
        const para = document.createElement('p');
        para.setAttribute('id', 'distance');
        para.innerText = 'This is a paragraph';
        document.body.appendChild(para);
    }
    
    function success(position) {
        /** if geolocation was a success, get the device location
        * @param position the device location
        */
        
        /* get device location */
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        const altitude = position.coords.altitude;
        
        /* print location to maplink element and link to a map */
        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
        
        /* declare a second position and store both in a dictionary */
        position1 = {lat: latitude, long: longitude};
        testLat = 53.225589;
        testLong = -4.127876;
        position2 = {lat: testLat, long: testLong};
        
        /* call a method to get the distance between two locations */
        addElement();
        getDistance(position1, position2, altitude);
    }
      
    function error() {
        /** display message if geolocation failed */
        status.textContent = 'Unable to retrieve your location';
    }
      
    if(!navigator.geolocation) {
        /** display message if geolocationis not supported */
        status.textContent = 'Geolocation is not supported by your browser';
    } else {
        /** if geolocation is supported, get the device location */
        status.textContent = 'Locating…';
        navigator.geolocation.getCurrentPosition(success, error);
    }
    
}

document.querySelector('#find-me').addEventListener('click', geoFindMe);
  
