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
        
        //get body element
        let this.body = this.view.getElement(1, 'body')
        
        this.createLines()
    }
    
    createRuler(){
        //create ruler line
        let ruler = this.view.createElement('div')
        let rulerAttr = {'class':'markings'}
        this.view.setAttributes(ruler, rulerAttr)
        this.view.appendChild(this.body, ruler)
    }

    createLines(){
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
