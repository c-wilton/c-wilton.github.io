var images = document.getElementById('carouselImages');
var caption = document.getElementById('carouselCaption');
var prev = document.getElementById('carouselPrev');
var next = document.getElementById('carouselNext');


/* // lab 8
fetch("https://s3-us-west-2.amazonaws.com/s.cdpn.io/471256/gallery.json")
.then(function(res) {
    res.json().then(function(json) {
        json.forEach(function(el, i) {
            
            var image = document.createElement('img');
            
            image.setAttribute('src', el.url);
            image.setAttribute('alt', el.caption);
            image.setAttribute('title', el.caption);
            
            images.appendChild(image);

        });

        //after json have been loaded, setup the carousel
        setupCarousel(json);
    });
});


//function to set up carousel interaction
function setupCarousel(json) {

    // var imageCount = 9;
    var imageCount = images.childElementCount;
    var currentImage = 1;
    // var imageWidth = images.getElementsByTagName('img')[0].clientWidth; 
    var imageWidth = 500;

    prev.addEventListener('click', function() {
        if (currentImage != 1) {
            --currentImage;
            images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
        }

        caption.innerText = json[currentImage - 1].caption;

    });

    next.addEventListener('click', function() {
        if (currentImage != imageCount) {
            ++currentImage;
            images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
        }

        caption.innerText = json[currentImage - 1].caption;

    });

    caption.innerText = json[currentImage - 1].caption;

} */



//my gallery 
fetch("https://c-wilton.github.io/assets/images.json")
.then(function(res) {
    res.json().then(function(json) {
        json.carosel.forEach(function(el, i) {
            
            var image = document.createElement('img');
            
            image.setAttribute('src', el.image);
            image.setAttribute('alt', el.description);
            image.setAttribute('title', el.description);

            images.appendChild(image);

        });

        //after json have been loaded, setup the carousel
        setupCarousel(json);
    });
});


//function to set up carousel interaction
function setupCarousel(json) {

    // var imageCount = 9; 
    var imageCount = images.childElementCount;
    var currentImage = 1;
    var imageWidth = images.getElementsByTagName('img')[0].clientWidth;
    // var imageWidth = 500;

    prev.addEventListener('click', function() {
        if (currentImage != 1) {
            --currentImage;
            images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
        }

        caption.innerText = json.carosel[currentImage - 1].description;

    });

    next.addEventListener('click', function() {
        if (currentImage != imageCount) {
            ++currentImage;
            images.style.left = imageWidth - (currentImage * imageWidth) + 'px';
        }

        caption.innerText = json.carosel[currentImage - 1].description;

    });

    caption.innerText = json.carosel[currentImage - 1].description;

}



