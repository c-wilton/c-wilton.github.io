class Model {
    /** Contains data needed for a the ruler 
        * intervals relates to the distance between the ruler markings in cm.
        * distances relates to the annotations for the markkings and is in meters.
        * intervals and distances are stored in an array where the annotation for a marking at interval[x] is stored at distance[x]
        * armLength is to hold the arm length of the user in cm.
        * personHeight is to hold the height of the user in meters.
        * altitude is the height of the user above sea level in meters.
        */
    
    #pages
    #jsonFile

    /* RULER MODEL */
    #distances
    #intervals
    #lengths
    
    #armLength
    #personHeight
    #altitude
    #eyeHeight

    constructor() {
        /** Set armLength, personHeight and altitude to pre-defined values.
         * call other methods to set the values for distances and intervals.
         */
        
        //get contents from json file
        let content = new Content();
        content.fetchJson();
        this.#pages = content.getContent();
        console.log("Model: ");
        console.log(this.#pages);
        this.meth2()
        
        /* RULER MODEL */
        this.#armLength = 70
        this.#personHeight = 1.675
        this.#altitude = 18.325
        this.#eyeHeight = this.#personHeight + this.#altitude
        //this.setDistances()
        //this.setIntervals()
        
    }

    async meth2(){
        console.log("call meth1: ");
        try{ this.#jsonFile = content.meth1(); }catch(err) { console.log(err)}

        console.log(this.#jsonFile);

    }

    setPageName(url){
        /* method descripition */

        //get current page between path and .html
        let path = "https://c-wilton.github.io/band/";
        let pageEnd = ".html";
        this.page = url.substring(path.length, url.length-pageEnd.length);
        //this.page = url;
    }

    getPageContent(){
        /** method description */
        let pageName = this.page
        //let pageContent = this.#pages.pageName;
        
        //return page content
        return pageName;
    }
    
    /** RULER MODEL */
    setEyeHeight(deviceHeight){
        this.#eyeHeight = deviceHeight
        this.setIntervals()
    }
    
    setRatio(ratio, rulerDataIntervals) {
        
        this.#intervals = null
        console.log('setRatio(): ', this.#intervals)
        this.#intervals = new Array(this.#distances.length)
        console.log('setRatio(): ', this.#intervals)
        
        console.log('resetting intervals with ratio', ratio)
        console.log('setRatio rulerDataIntervals: ', rulerDataIntervals)
        
        for(var i=0; i<this.#intervals.length; i++){
        //console.log('rulerDataIntervals[', i, ']: ', rulerDataIntervals[i] )
        let temp = rulerDataIntervals[i] * ratio
        this.#intervals[i] = temp
        //console.log('temp: ', temp, ' calcInt[', i, ']: ', this.#intervals[i] )
        }
        
        /*
        for(var i=0; i<this.#intervals.length; i++){
        console.log('calcInt[', i, ']: ', this.#intervals[i] )
        }
        */
        
        console.log('setRatio intervals: ', this.#intervals)
        
    }
    
    setDistances() {
        /** Sets the distances to pre-defined values */
        //this.#distances = [100, 200, 300, 500, 1000, 5000, 10000]
        this.#distances = [100, 200, 300, 500, 700, 1000, 1500, 2000, 3000, 5000, 10000]
    }
    
    setIntervals() {
        /** Creates an array to store the intervals and calls the method to set them */
        this.#intervals = null
        console.log('setIntervals(): ', this.#intervals)
        this.#intervals = new Array(this.#distances.length)
        console.log('setIntervals(): ', this.#intervals)
        //console.log('Setting internvals')
        
        console.log('setIntervals eyeHeight: ', this.#eyeHeight)
        
        this.calcIntervals()
        
        console.log('setIntervals intervals: ', this.#intervals)
        
    }
    
    getDistances(){
        /** @returns distances as an array */
        
        //print distances
        /*
        for(var i=0; i<this.#distances.length; i++){
        console.log('distance[', i, ']: ', this.#distances[i] )
        }
        */
        
        return this.#distances
    }
    
    getIntervals(){
        /** @returns intervals as an array */
        /*
        //print intervals
        for(var i=0; i<this.#intervals.length; i++){
        console.log('calcInt[', i, ']: ', this.#intervals[i] )
        }
        */
        return this.#intervals
    }
    
    calcIntervals() {
        /** Uses the range finder technique to calculate the intervals for each element in distances */
        
        //calculate total height and visual horizon needed for the calculation
        let totalHeight = this.#eyeHeight
        let visualHorizon = 3838 * (totalHeight ** 0.5)
        
        //formula to calculate an itnerval
        //interval[x] =  (this.#armLength*totalHeight) * (visualHorizon-distance[x]) / ( (totalHeight**2) + (visualHorizon*distance[x]) )
        
        //calculate the intervals for each element in distances
        for(var i=0; i<this.#distances.length; i++){
        let d = this.#distances[i]
        let calcInterval =  (this.#armLength*totalHeight) * (visualHorizon-d) / ( (totalHeight**2) + (visualHorizon*d) )
        this.#intervals[i] = calcInterval
        //console.log('d: ', d, '; i: ', calcInterval)
        }
        
    }
  
}

