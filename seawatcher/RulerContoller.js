class RulerContoller {
  /** Gets data from the ...Model classes.
    * Uses the View class to load this data to manipulate the elements on the webpage 
    */
  
  constructor(view, rulerModel, locationModel) {
    /** Initialises the model and view and create a ruler */
    this.view = view
    this.rulerModel = rulerModel
    this.locationModel = locationModel
    this.getLocation()
    this.createRuler()
    this.retrieveRulerData()
  }
  
  createRuler() {
    /** creates a ruler using a-frame */
    
    //get camera entity
    let aCamera = this.view.getElement(1, "camera")
    
    //create ruler entity
    let aEntity = this.view.createElement("a-entity")
    
    let length = 6
    let xOrigin = -1.5;   let yOrigin = 2;   let z = 2;
    let xEnd = 1.5;       let yEnd = -2;
    let rulerXOffset = 0.5
    let markingXOffset = 0.2
    let horVal = {startx:xOrigin, starty:yOrigin, startZ:z, endX:xEnd, endY:xOrigin, endZ:z, color:'green'}
    let rulerLengthVal = {startx:xOrigin+rulerXOffset, starty:yOrigin, startZ:z, endX:yEnd, endY:yEnd, endZ:z, color:'red'}
    
    let lines=[]
    for(let i=0; i<length; i++){
      lines[i]({startx:xOrigin+markingXOffset, starty:yOrigin-1, startZ:z, endX:rulerXOffset, endY:yOrigin-1, endZ:z, color:'red'})
    }
    console.log('lines: ', lines)
    
    //set attributes of a-entity to create lines
    let aEntityAttr = {'line': this.setLine(-1.5, 2, -3, 1.5, 2, -3, 'green'),
                       'text': 'value: Horizon; color: red; ',
                      'line__2': this.setLine(-1, -2, -3, -1, 2, -3, 'red'),
                      'line__3': this.setLine(-1.3, -1.7, -3, -1, -1.7, -3, 'red'),
                      'line__4': this.setLine(-1.3, -1.5, -3, -1, -1.5, -3, 'red'),
                      'line__5': this.setLine(-1.3, -1, -3, -1, -1, -3, 'red'),
                      'line__6': this.setLine(-1.3, 0, -3, -1, 0, -3, 'red'),
                      'line__7': this.setLine(-1.3, 1, -3, -1, 1, -3, 'red'),
                      'line__8': this.setLine(-1.3, 2, -3, -1, 2, -3, 'red')}
    this.view.setAttributes(aEntity, aEntityAttr)
    
    //add all lines to aCamera
    this.view.appendChild(aCamera, aEntity)
    
    //create new a-entity to add text
    aEntity = this.view.createElement("a-text")
    aEntityAttr = {'id': 'text',
                   'value': 'Horizon', 
                   'scale': '1 1 1',
                   'position': '1.5 2 -3'
                   }
    this.view.setAttributes(aEntity, aEntityAttr)
    this.view.appendChild(aCamera, aEntity)
    
    //<a-text id="text" value="This content will always face you." look-at="[gps-camera]" scale="120 120 120" gps-entity-place="latitude: 53.22597071349516; longitude:  -4.127555930547311;"></a-text>
      
    
  }
  
  setLine(x1, y1, z1, x2, y2, z2, color) {
    /** set the attributes for the a-entity lines 
      * @param x1 the x position for the start of the line
      * @param y1 the y position for the start of the line
      * @param x2 the x position for the end of the line
      * @param y2 the y position for the end of the line
      * @param color the color of the line
      @return line the attributes of the line as a string
    */
    let lineStart = 'start: ' + x1 + ' ' + y1 + ' ' + z1 + '; '
    let lineEnd = 'end: ' + x2 + ' ' + y2 + ' ' + z2 + '; '
    let lineColor = 'color: ' + color
    let line = lineStart + lineEnd + lineColor
    console.log(line)
    return line
  }
  
  retrieveRulerData() {
    /** creates a rulerModel.
      * Gets the distances as an array which can be used to annotate the lines on the ruler.
      * Gets the intervals as an array which can be used to set the positions of lines.
      * distances[x] links to intervals[x]
      */
    this.distances = this.rulerModel.getDistances()
    this.intervals = this.rulerModel.getIntervals()
    console.log('distances: ', this.distances)
    console.log('intervals: ', this.intervals)
    
  }
  
  getLocation(){
    let position = this.locationModel.getLocation()
    console.log('RulerController\n', 'latitude: ', position.latitude, '\tlongitude: ', position.longitude, '\taltitude: ', position.altitude,)
  }
}

controller = new RulerContoller(new View(), new RulerModel(), new LocationModel() )
