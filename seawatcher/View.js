class View {
  /** creates, gets and sets element on a webpage */
  
  constructor() {
    /** Create an a-scene element to the body and add a-camera and a-text entities to the a-scene */
    
    //get the body element
    this.body = document.getElementById('body')
    
    //create a-scene and set attributes
    this.aScene = this.createElement('a-scene')
    let aSceneAttributes = {"vr-mode-ui": "enabled: false", "arjs": "sourceType: webcam; videoTexture: true; debugUIEnabled: false;"}
    this.setAttributes(this.aScene, aSceneAttributes)
    
    //create a-text and set attributes
    this.aText = this.createElement('a-text')
    let aTextAttributes = {"id":"text", "value": "This content will always face you.", "look-at": "[gps-camera]", "scale": "120 120 120", "gps-entity-place": "latitude: 53.22597071349516; longitude: -4.127555930547311;"}
    this.setAttributes(this.aText, aTextAttributes)
    
    //create a-camera and set attributes
    this.aCamera = this.createElement('a-camera')
    let aCameraAttributes = {"id": "camera", "gps-camera": "", "rotation-reader": ""}
    this.setAttributes(this.aCamera, aCameraAttributes)
    
    //append a-scene to body, and the a-text and a-camera entities to the a-scene
    this.body.append(this.aScene)
    this.aScene.append(this.aText, this.aCamera)
  }
  
  createElement(tag) {
    /** Create a html element
      * @param tag the html tag of the element to be created
      * @returns element the html element created
      */
    const element = document.createElement(tag)
    return element
  }
  
  setAttributes(element, attributes) {
    /** Sets the attritbutes of a html element
      * @param element the html element which attributes are to be set
      * @param attributes the attributes of the html element in a dictionary
      * @returns element the html element created
      */
    for(var attribute in attributes) {
      element.setAttribute(attribute, attributes[attribute]);
    }
  }
  
  appendChild(parent, child) {
    /** appends a html element to another html element
      * @parent the parent html element to which the child html element will be appended to
      * child the child hmtl element which is to be appended
      */
    parent.append(child)
  }

  getElement(opt, selector) {
    /** gets a html element of the webpage
      * @param opt indicates which method to get the method to use. 0 to use querySelector, 1 to use getELementById, 2 to select by tagname
      * @param selector the string name to be searched for 
      * @returns element the html element found or null
      */
    
    //search for element depending on which option was sent
    let element = null
    if(opt==0){
      //css element (gets the first element which matches the selector
      element = document.querySelector(selector)
    }
    else if(opt==1){
      //id element
      element = document.getElementById(selector)
    }
    else if(opt==2){
      //tag element (gets first element with the tag nane)
      element = document.getElementsByTagName[0]
    }
    
    //return the html element found
    return element
  }
}

//view = new View()
