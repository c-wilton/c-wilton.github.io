class Content {
    /**
     * Class description
     */

    #pages;

    constructor() {
        /** constructor description */

        /* extract objects from json file */

        /*
        //get a file from this address
        fetch("https://c-wilton.github.io/band/assets/content.json")
        .then(function (res) {
            //convert contents of file to json
            res.json().then(function (json) {
                // json object contains two arrays: a gallery array and a carousel array

                // after the json objects from the file have been loaded, go to the setupCarousel func to load the elements onto the webpage
                this.setContent(json);
            });
        });
        */
    }

    static getFetchRequest() {
        return fetch("https://c-wilton.github.io/band/assets/content.json")
        .then( response => response.json)
        .catch( error => console.log(error.message) );
    }

    getJson(){
        console.log("getJson: ");
        
        //get file from address and store in 'res'
        fetch("https://c-wilton.github.io/band/assets/content.json")
        .then(function (res) {
            //convert contents to a json file and store in 'json'
            console.log("fetch json: ");

            res.json()
            .then(function(json){
                console.log("convert json: ");
                console.log(json);
                this.setJson(json);
            })
            .catch(error => console.log("convert error: ", error.message));

        })
        .catch(error => console.log("fetch error: ", error.message));
    }

    setJson(json){
        //var sectionCount = json.home.length;
        var sectionCount = 0
        
        let main = document.getElementsByTagName('main')[0];
        let content = "setJson: ";
        main.innerHTML += content + " " + sectionCount;
        console.log("setJson: ");
        console.log(json);
    }

    setContent() {
        /** setContent description */
        //this.#pages = json;
        let main = document.getElementsByTagName('main')[0];
        let content = "content setcontent";
        main.innerHTML += content;
        console.log("content setcontent")

        let json = Content.getFetchRequest()["home"];
        console.log(json);
        main.innerHTML += json;
    }

    getContent(){
        /** getConten description */
        return "Hello";
    }
        
} 