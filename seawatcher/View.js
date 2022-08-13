class View {
  constructor() {
    //set ascene with camera
    this.body = document.getElementById('body')
    this.aScene = this.createElement('a-scene')
    let aSceneAttributes = {"vr-mode-ui": "enabled: false", "arjs": "sourceType: webcam; videoTexture: true; debugUIEnabled: false;"}
    this.setAttributes(this.aScene, aSceneAttributes)
    this.aText = this.createElement('a-text')
    let aTextAttributes = {"id":"text", "value": "This content will always face you.", "look-at": "[gps-camera]", "scale": "120 120 120", "gps-entity-place": "latitude: 53.22597071349516; longitude: -4.127555930547311;"}
    this.setAttributes(this.aText, aTextAttributes)
    this.aCamera = this.createElement('a-camera')
    let aCameraAttributes = {"id": "camera", "gps-camera": "", "rotation-reader": ""}
    this.setAttributes(this.aCamera, aCameraAttributes)
    
    this.body.append(this.aScene)
    this.aScene.append(this.aText, this.aCamera)
  }
  
  createElement(tag) {
    const element = document.createElement(tag)
    return element
  }
  
  setAttributes(element, attributes) {
    for(var attribute in attributes) {
      element.setAttribute(attribute, attributes[attribute]);
    }
  }

  getElement(opt, selector) {
    let element = null
    if(opt==0){
      //css element
      element = document.querySelector(selector)
    }
    else if(opt==1){
      //id element
      element = document.getElementById(selector)
    }
    else if(opt==2){
      //tag element
    }
    
    return element
  }
}

//view = new View()
