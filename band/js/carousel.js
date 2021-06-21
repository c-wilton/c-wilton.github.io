/* declare variables for carousel elements */
var images = document.getElementById('carousel-image');
var caption = document.getElementById('carousel-caption');
var prev = document.getElementById('prev-button');
var next = document.getElementById('next-button');

/* extract objects from json file */
//get a file from this address
fetch("https://c-wilton.github.io/band/assets/images.json")
.then(function(res) {
    //convert contents of file to json
    res.json().then(function(json) {
        
        /* json object contains two arrays:
            a gallery array and a carousel array
        */

        /* after the json objects from the file have been loaded, 
            go to the setupCarousel func to load the elements onto the webpage
        */
        setupCarousel(json);
    });
});

//function to set up carousel interaction
function setupCarousel(json) {

    //declare an index counter
    var currentIndex = 0;
    //count the number of elements n the carousel array 
    var imageCount = json.home.length;

    //create a variable to hold an img tag
    var image = document.createElement('img');
            
    //set attributes for the img tag
    setAttributes(json, image, currentIndex);
    
    //add the image to the 'carousel-image' element
    images.appendChild(image);

    
    //create an "onclick" event listener to the previous button
    prev.addEventListener('click', function() {
        if (currentIndex !== 0) {
            //decrement index
            --currentIndex;
            
            //set the new atributes for the img tag            
            setAttributes(json, image, currentIndex);
        }
    });

    //create an "onclick" event listener to the previous button
    next.addEventListener('click', function() {
        if (currentIndex !== (imageCount - 1) ) {
            //increment index
            ++currentIndex;
            
            //set the new atributes for the img tag
            setAttributes(json, image, currentIndex);
        }
    });

}

function setAttributes(json, element, currentIndex){
    //get the description and image of the element in carousel array
    var currentDescription = json.home[currentIndex].description;
    var currentImage = json.home[currentIndex].image;

    //set the attributes for the current image
    element.setAttribute('src', currentImage);
    element.setAttribute('alt', currentDescription);
    element.setAttribute('title', currentDescription);
    element.style.width = 100 + '%';

    /*
    //set the buttons centered vertically
    prev.style.margin = 'auto';
    next.style.margin = 'auto';
    */

    //update the caption description
    caption.innerText = currentDescription;
}
