class Controller {
  constructor(view, rulerModel) {
    this.view = view
    this.rulerModel = rulerModel
    this.createRuler()
    this.retrieveRulerData()
  }
  
  createRuler() {
    let aCamera = this.view.getElement(1, "camera")
    
    let aEntity = this.view.createElement("a-entity")
    let aEntityAttr = {"line": "start: -1.5 2 -3; end: 1.5 2 -3; color: green"}   
    this.view.setAttributes(aEntity, aEntityAttr)
    this.view.appendChild(aCamera, aEntity)
    
    let startx = -1.3
    let endx = -1
    let y = -1.7
    let z = -3
    let color = 'red'
    let lineStart = 'start: ' + startx + ' ' + y + ' ' + z + '; '
    let lineEnd = 'end: ' + endx + ' ' + y + ' ' + z + '; '
    let lineColor = 'color: ' + color
    let line = lineStart + lineEnd + lineColor
    console.log(line)
    
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
  
  retrieveRulerData() {
    this.distances = this.rulerModel.getDistances()
    this.intervals = this.rulerModel.getIntervals()
    console.log('distances: ', this.distances)
    console.log('intervals: ', this.intervals)
    
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
