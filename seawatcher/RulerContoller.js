class Controller {
  constructor(view, rulerModel) {
    this.view = view
    this.rulerModel = rulerModel
    createRuler()
  }
  
  createRuler() {
    let aCamera = this.view.getElement(1, "camera")
    
    let aEntity = this.view.createElement("a-entity")
    let aEntityAttr = {"line": "start: -1.5 2 -3; end: 1.5 2 -3; color: green"}   
    this.view.setAttributes(aEntity, aEntityAttr)
    this.view.appendChild(aCamera, aEntity)
    
    /*
    <a-entity line="start: -1 -2 -3; end: -1 2 -3; color: red" 
                  line__2="start: -1.3 -1.7 -3; end: -1 -1.7 -3; color: red"
                  line__3="start: -1.3 -1.5 -3; end: -1 -1.5 -3; color: red"
                  line__4="start: -1.3 -1 -3; end: -1 -1 -3; color: red"
                  line__5="start: -1.3 0 -3; end: -1 0 -3; color: red"
                  line__6="start: -1.3 1 -3; end: -1 1 -3; color: red"
                  line__7="start: -1.3 2 -3; end: -1 2 -3; color: red">
        </a-entity>
    */
  }
}

/*
function createRuler() {
  const camera = document.getElementById("camera");
  let el = document.createElement("a-entity");
  camera.append(el)
}

createRuler()
*/

controller = new Controller(new View(), new RulerModel() )
