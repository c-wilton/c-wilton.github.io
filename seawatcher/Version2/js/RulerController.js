class RulerContoller {
    /** Gets data from the ...Model classes.
      * Uses the View class to load this data to manipulate the elements on the webpage 
      */
    
    constructor(view/*, rulerModel, locationModel, deviceModel*/) {
        /** Initialises the model and view and create a ruler */
        this.view = view
        /*
        this.rulerModel = rulerModel
        this.locationModel = locationModel
        this.deviceModel = deviceModel
        */
        this.createLines()
    }

    createLines(){
        
        //get body element
        let body = this.view.getElement(1, 'body')
        
        //create ruler line
        let markings = this.view.createElement('div')
        let markingsAttr = {'class':'markings'}
        this.view.setAttributes(markings, markingsAttr)
        this.view.appendChild(body, markings)
        
        //create marking
        let aEntity = this.view.createElement('div')
        let aEntityAttr = {'class':'line-2'}
        this.view.setAttributes(aEntity, aEntityAttr)
        this.view.appendChild(markings, aEntity)
        
        //
        aEntity = this.view.createElement('div')
        aEntityAttr = {'class':'line-1'}
        this.view.setAttributes(aEntity, aEntityAttr)
        this.view.appendChild(markings, aEntity)
        
        //this.view.appendChild(body, aEntity)
    }
}  

controller = new RulerContoller(new View()/*, new RulerModel(), new LocationModel(), new DeviceModel()*/ )
