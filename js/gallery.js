
/* declare variables for carousel elements */
var images = document.getElementById('carousel-image');
var caption = document.getElementById('carousel-caption');
var prev = document.getElementById('prev-button');
var next = document.getElementById('next-button');

<div class="carousel">
    <div class="prevButton" id="prev-button">Prev</div>
    <div class="nextButton" id="next-button">Next</div>
    <div class="carouselImage" id="carousel-image">Photo</div>
    <div class="carouselCaption" id="carousel-caption">Caption</div>
</div>

/* extract objects from json file */
//get a file from this address
fetch("https://c-wilton.github.io/assets/images.json")
.then(function(res) {
    //convert contents of file to json
    res.json().then(function(json) {
        
        /* json object contains two arrays:
            a gallery array and a carousel array
        */
        // get each element from the carousel array 
        json.carosel.forEach(function(el, i) {
            
            //create a variable to hold an img tag
            var image = document.createElement('img');
            
            //set attributes for the img tag
            image.setAttribute('src', el.image);
            image.setAttribute('alt', el.description);
            image.setAttribute('title', el.description);

            //add the image to the 'carousel-image' element
            images.appendChild(image);

        });

        /* after the carousel elements from the json file have been loaded, 
            go to the setupCarousel func to load the elements onto the webpage
        */
        setupCarousel(json);
    });
});

//function to set up carousel interaction
function setupCarousel(json) {

    //count the number of elements n the carousel array 
    var imageCount = images.childElementCount;
    //declare a current image counter and set it to one
    var currentImage = 1;
    //get the width of the first image
    var imageWidth = images.getElementsByTagName('img')[0].clientWidth;
    //set the 'carousel-images' element's width to the total width for all the images 
    var imagesWidth = document.getElementsByClassName('carousel-images')[0].style.width = (imageCount * imageWidth) + 'px'; 
    // var imageWidth = 500;

    //create an "onclick" event listener to the previous button
    prev.addEventListener('click', function() {
        if (currentImage != 1) {
            --currentImage;
            images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
        }

        caption.innerText = json.carosel[currentImage - 1].description;

    });

    //create an "onclick" event istener to the next button
    next.addEventListener('click', function() {
        if (currentImage != imageCount) {
            ++currentImage;
            images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
        }

        caption.innerText = json.carosel[currentImage - 1].description;

    });

    caption.innerText = json.carosel[currentImage - 1].description;

}
