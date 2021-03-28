/* declare variables for gallery elements */
var frame = document.getElementById('gallery-frame');
var row1 = document.getElementById('row1');
var row2 = document.getElementById('row2');
var row3 = document.getElementById('row3');

/* extract objects from json file */
//get a file from this address
fetch("https://c-wilton.github.io/assets/images.json")
.then(function(res) {
    //convert contents of file to json
    res.json().then(function(json) {
        
        /* json object contains two arrays:
            a gallery array and a carousel array
        */

        /* after the json objects from the file have been loaded, 
            go to the setupCarousel func to load the elements onto the webpage
        */
        setupGallery(json);
    });
});

//function to set up carousel interaction
function setupGallery(json) {

    //declare an index counter
    var currentIndex = 0;
    //count the number of elements n the carousel array 
    var imageCount = json.gallery.length;
    
    for(i=0; i<3; i++) {
        createRow(json, currentIndex, row1);
        currentIndex++;
    }
    for(i=0; i<3; i++) {
        createRow(json, currentIndex, row2);
        currentIndex++;
    }
    for(i=0; i<3; i++) {
        createRow(json, currentIndex, row3);
        currentIndex++;
    }

    
    //update the caption description
    caption.innerText = currentDescription;    
}

function createRow(json, currentIndex, currentRow) {
    //get the description and image of the element in carousel array
    var currentDescription = json.gallery[currentIndex].description;
    var currentImage = json.gallery[currentIndex].image;

    //create a variable to hold an img tag
    var image = document.createElement('img');
    //set the attributes for the current image
    image.setAttribute('src', currentImage);
    image.setAttribute('alt', currentDescription);
    image.setAttribute('title', currentDescription);
    
    //add the image to the 'carousel-image' element
    currentRow.appendChild(image);
}