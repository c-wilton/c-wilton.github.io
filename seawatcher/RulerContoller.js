class Controller {
  constructor(view, rulerModel) {
    this.view = view
    this.rulerModel = rulerModel
    this.createRuler()
    this.retrieveRulerData()
  }
  
  createRuler() {
    let aCamera = this.view.getElement(1, "camera")
    
    //create ruler entity
    let aEntity = this.view.createElement("a-entity")
    
    //set lines
    let aEntityAttr = {'line': this.setLine(-1.5, 2, -3, 1.5, 2, -3, 'green'),
                       'text': 'Horizon',
                      'line__2': this.setLine(-1, -2, -3, -1, 2, -3, 'red'),
                      'line__3': this.setLine(-1.3, -1.7, -3, -1, -1.7, -3, 'red'),
                      'line__4': this.setLine(-1.3, -1.5, -3, -1, -1.5, -3, 'red'),
                      'line__5': this.setLine(-1.3, -1, -3, -1, -1, -3, 'red'),
                      'line__6': this.setLine(-1.3, 0, -3, -1, 0, -3, 'red'),
                      'line__7': this.setLine(-1.3, 1, -3, -1, 1, -3, 'red'),
                      'line__8': this.setLine(-1.3, 2, -3, -1, 2, -3, 'red')}
    this.view.setAttributes(aEntity, aEntityAttr)
    
    //add all lines to aEntity
    this.view.appendChild(aCamera, aEntity)
    
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
