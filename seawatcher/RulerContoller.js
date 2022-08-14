class Controller {
  constructor(view, rulerModel) {
    this.view = view
    this.rulerModel = rulerModel
    this.createRuler()
    this.retrieveRulerData()
  }
  
  createRuler() {
    let aCamera = this.view.getElement(1, "camera")
    
    //create horizon line
    let aEntity = this.view.createElement("a-entity")
    let aEntityAttr = {"line": this.setLine(-1.5, 2, -3, 1.5, 2, -3, 'green')}   
    this.view.setAttributes(aEntity, aEntityAttr)
    this.view.appendChild(aCamera, aEntity)
    
    //create ruler line
    aEntity = this.view.createElement("a-entity")
    aEntityAttr = {}
    
    let lineIds = ['line', 'line__2']
    //for(i<lineIds.length)
    let line = this.setLine(-1.3, -1.7, -3, -1, -1.7, -3, 'red')
    aEntityAttr[ lineIds[0] ] = line
    
    //add all lines to aEntity
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
  
  setLine(x1, y1, z1, x2, y2, z2, color) {
    let lineStart = 'start: ' + x1 + ' ' + y1 + ' ' + z1 + '; '
    let lineEnd = 'end: ' + x2 + ' ' + y2 + ' ' + z2 + '; '
    let lineColor = 'color: ' + color
    let line = lineStart + lineEnd + lineColor
    console.log(line)
    return line
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
