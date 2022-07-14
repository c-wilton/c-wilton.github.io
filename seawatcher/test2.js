/* import {distance} from './test1.js'; */
function geoFindMe() {
    
    const atext = document.querySelector('a-text');
    /*
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
      
    mapLink.href = '';
    mapLink.textContent = '';
    
    
    function getDistance(pos1, pos2){
        result = document.getElementById('distance');
        lat1 = pos1.lat;
        long1 = pos1.long;
        lat2 = pos2.lat;
        long2 = pos2.long;
        dist = distance(lat1, long1, lat2, long2, 'K')
        distInM = dist * 1000
        /* dist = 0; */
        message = 'New Look: lat1: ' + lat1 + ' long1: ' + long1 + '\n';
        message += 'Fat cat: lat2: ' + lat2 + ' long2: ' + long2 + '\n';
        message += 'distance: ' + dist + 'km \n';
        message += 'distance: ' + distInM + ' meters';
        message += 'google maps distance: 41.148 meters';
        result.innerText = message;
    }
    
    
    function addElement(){
        const para = document.createElement('p');
        para.setAttribute('id', 'distance');
        para.innerText = 'This is a paragraph';
        document.body.appendChild(para);
    }
    */

    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        
        atext.value = '';
        /*
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        */
        
        atext.value = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
        
        /*
        position1 = {lat: latitude, long: longitude};
        testLat = 53.225589;
        testLong = -4.127876;
        position2 = {lat: testLat, long: testLong};
        addElement();
        getDistance(position1, position2);
        */
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
