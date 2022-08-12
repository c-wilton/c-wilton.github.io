class View {
  constructor() {
    this.body = Document.getElementById('body')
    this.aScene = createElement('a-scene')
    let aSceneAttributes = {"vr-mode-ui": "enabled: false", "arjs": "sourceType: webcam; videoTexture: true; debugUIEnabled: false;"}
    this.setAttributes(this.aScene, aSceneAttributes)
    this.aText = createElement('a-text')
    let aTextAttributes = {"id":"text", "value": "This content will always face you.", "look-at": "[gps-camera]", "scale": "120 120 120", "gps-entity-place": "latitude: 53.22597071349516; longitude: -4.127555930547311;"}
    this.setAttributes(this.aText, aTextAttributes)
    this.aCamera = createElement('a-camera')
    let aCameraAttributes = {"id": "camera", "gps-camera": "", "rotation-reader": ""}
    this.setAttributes(this.aCamera, aCameraAttributes)
    
    this.body.append(this.aScene)
    this.aScene.append(aText, aCamera)
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

  getElement(selector) {
    const element = document.querySelector(selector)
    return element
  }
}

view = new View()
