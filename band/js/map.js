window.onload = getMyLocation();

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
}