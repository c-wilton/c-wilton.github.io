class Content {
    /**
     * Class description
     */

    #pages;
    #var1;

    constructor() {
        this.#pages = "";
    }

    fetchJson(){
        /** extract objects from json file */
        
        //get file from address and store in 'res'
        fetch("https://c-wilton.github.io/band/assets/content.json")
        .then( (res) => {
            //convert res to a json file and store in 'json'
            res.json()
            .then( (json) => {
                //send json file to setJson method
                this.setJson(json);
            })
            .catch(error => console.log(error.message));
        })
        .catch(error => console.log(error.message));
    }

    setJson(json){
        this.#pages = json;
    }

    getContent(){
        /** getContent description */
        console.log("pages: ");
        console.log(this.#pages);
        
        return "Hello";
    }

    async meth1() {
        try{
            console.log("meth1: ")
            //get file
            var result = await fetch("https://c-wilton.github.io/band/assets/content.json");
            //convert file
            var jsonFile = await result.json();
            //console.log(jsonFile);
            this.#var1 = jsonFile
            console.log(this.#var1);
            return jsonFile;
        }catch(e) {
            console.log("Didnt work");
            console.log(e);
        }

        console.log("end meth1: ")
    }
        
} 