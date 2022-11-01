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
    let rulerData = this.retrieveRulerData()
    this.createRuler(rulerData)
    
  }
  
  createRuler(rulerData) {
    /** creates a ruler using a-frame 
        @param rulerData dictionary containing distances and intervals
    */
    
    //get camera entity
    let aCamera = this.view.getElement(1, "camera")
    
    //create ruler entity
    let aEntity = this.view.createElement("a-entity")
    
    /*
    //create pre-defined lines
    let aEntityAttr = setManualAttributes()
    this.view.setAttributes(aEntity, aEntityAttr)
    */
    
    //get the positions for lines and annotations
    console.log('rulerData: ', rulerData)
    let markingsYOffset = rulerData['intervals']
    let positions = this.setLinePosition(markingsYOffset)
    console.log('line positions:' , positions)
    
    //let lines = positions['lines']
    //let annotations = positions['annotations']
    //console.log('lines: ', lines)
    //console.log('annotations: ', annotations)
    
    //create lines
    let aEntityAttr = this.createLines(positions['lines'])
    this.view.setAttributes(aEntity, aEntityAttr)
    
    //add lines to aCamera
    this.view.appendChild(aCamera, aEntity)
    
    //create new a-entity to add horizon text
    //TODO get position from line
    console.log(positions['lines'][0])
    aEntity = this.view.createElement("a-text")
    aEntityAttr = {'id': 'text',
                   'value': 'Horizon', 
                   'scale': '1 1 1',
                   'position': '1.5 2 -3'
                   }
    this.view.setAttributes(aEntity, aEntityAttr)
    this.view.appendChild(aCamera, aEntity)
    
    
    //create new a-entity to add annotations to ruler markings
    this.createAnnotations(positions['annotations'], rulerData['distances'], aEntity, aEntityAttr, aCamera)
    
  }
  
  setLinePosition(markingsYOffset) {
    let xOrigin = -1.5;   let yOrigin = 2;   let z = -3;
    let xEnd = 1.5;       let yEnd = -2;
    let rulerXOffset = 0.5
    let markingXOffset = 0.2
    
    //let horVal = {startx:xOrigin, starty:yOrigin, startZ:z, endX:xEnd, endY:xOrigin, endZ:z, color:'green'}
    //let rulerLengthVal = {startx:xOrigin+rulerXOffset, starty:yOrigin, startZ:z, endX:yEnd, endY:yEnd, endZ:z, color:'red'}
    
    //create line for all markings, plus ruler length line, plus horizon line
    let lines = []  
    let annotations = []
    for(let i=0; i<(markingsYOffset.length + 2); i++){
      let x1; let y1; let z1; let x2; let y2; let z2; let color;
      let textStart='start'; let textEnd='end'; let textColor='color'
      if(i==0){                     //Horizon line
        x1=xOrigin,                 y1=yOrigin,                     z1=z, 
        x2=xEnd,                    y2=yOrigin,                     z2=z
        color='green'
      }
      else if(i==1){                //Ruler length line
        x1=xOrigin+rulerXOffset,    y1=yOrigin,                     z1=z, 
        x2=xOrigin+rulerXOffset,    y2=yEnd,                        z2=z
        color='red'
      }
      else{                         //markings line
        x1=xOrigin+markingXOffset,  y1=yOrigin-markingsYOffset[i-2],  z1=z, 
        x2=xOrigin+rulerXOffset,    y2=yOrigin-markingsYOffset[i-2],  z2=z
        color='red'
        annotations[i-2] = {'x':xOrigin-0.2, 'y':y1, 'z':z}
      }
      
      let lineStart = 'start: ' + x1 + ' ' + y1 + ' ' + z1 + '; '
      let lineEnd = 'end: ' + x2 + ' ' + y2 + ' ' + z2 + '; '
      let lineColor = 'color: ' + color
      lines[i] = lineStart + lineEnd + lineColor
    }
    return {'lines':lines, 'annotations':annotations}
  }
  
  createLines(lines) {
    let aEntityAttr={}; let textLine='';
    for(let i=0; i<lines.length; i++){
      if(i==0){ textLine = 'line'}
      else{     textLine = 'line__'+(i+1)}
      aEntityAttr[textLine] = lines[i]
    }
    return aEntityAttr
  }
  
  createAnnotations(annotations, distances, aEntity, aEntityAttr, aCamera) {
    for(let i=0; i<annotations.length; i++)
    {
      aEntity = this.view.createElement("a-text")
    
      let markingPosition = '' + annotations[i]['x'] + ' ' + annotations[i]['y'] + ' ' +  annotations[i]['z']
      
      aEntityAttr = {'id': 'text',
                     'value': distances[i], 
                     'scale': '0.75 0.75 0.75',
                     'position': markingPosition
                     }
      console.log('aEntityAttr: ', aEntityAttr)
      this.view.setAttributes(aEntity, aEntityAttr)
      this.view.appendChild(aCamera, aEntity)
    }
  }
  
  
  setManualAttributes() {
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
    
    return aEntityAttr
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
    
    /*
    this.distances = this.rulerModel.getDistances()
    this.intervals = this.rulerModel.getIntervals()
    console.log('distances: ', this.distances)
    console.log('intervals: ', this.intervals)
    */
    
    let distances = this.rulerModel.getDistances()
    let intervals = this.rulerModel.getIntervals()
    let rulerData = {'distances': distances, 'intervals':intervals}
    //console.log('rulerData: ', rulerData)
    
    return rulerData
  }
  
  getLocation(){
    let position = this.locationModel.getLocation()
    console.log('RulerController\n', 'latitude: ', position.latitude, '\tlongitude: ', position.longitude, '\taltitude: ', position.altitude,)
  }
}

controller = new RulerContoller(new View(), new RulerModel(), new LocationModel() )