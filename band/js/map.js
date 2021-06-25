//window.onload = getMyLocation();
var ourCoords = {latitude: 47.624851, longitude: -122.52099};
var map;

getMyLocation();

function getMyLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLoation);
    } else {
        alert("Oops, no geolocation support");
    }
}

function displayLoation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var div = document.getElementById("location");
    div.innerHTML = "lat: " + latitude + " long: " + longitude;

    var km = computeCoords(position.coords, ourCoords);
    var distance = document.getElementById("distance");
    distance.innerHTML = "distance: " + km + "km";

    //showMap(position.coords);
    //initMap();
    createMap();
}

function computeCoords(startCoords, destCoords) {
    var startLatRads = degreeToRadians(startCoords.latitude);
    var startLongRads = degreeToRadians(startCoords.longitude);
    var destLatRads = degreeToRadians(destCoords.latitude);
    var destLongRads = degreeToRadians(destCoords.longitude);

    var radius = 6371; //radius of the earth in km
    var distance = Math.acos(
            Math.sin(startLatRads) * Math.sin(destLatRads) + 
            Math.cos(startLatRads) * Math.cos(destLatRads) * 
            Math.cos(startLongRads - destLongRads)
        ) * radius;

    return distance;
}

function degreeToRadians(degrees) {
    var radians = (degrees * Math.PI)/180;
    return radians;
}

function showMap(coords) {
    var googleCoords = new google.maps.LatLng(coords.latitude, coords.longitude);

    var mapOptions = {
        zoom: 10,
        center: googleCoords, 
        mapTypeId: google.maps.mapTypeId.ROADMAP
    };
}

let myMap;

function initMap() {
    myMap = new google.maps.Map(
        document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
}

function createMap() {
    let img_url = "https://maps.googleapis.com/maps/api/staticmap?center=" +
            "-34.397,150.644"+"&zoom=14&size=400x300&sensor=false&key=AIzaSyBRVyfspaq-IUxBNhIxCcqMoRj-4MX_Ihc";
    
    document.getElementById("map").innerHTML = "<img src='"+img_url+"'>";
}