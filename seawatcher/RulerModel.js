class RulerModel {
  
  #distances
  #intervals
  #lengths
  
  #armLength
  #personHeight
  #altitude
  
  constructor() {
    this.#armLength = 70
    this.#personHeight = 1.675
    this.#altitude = 18.325
    this.setDistances()
    this.setIntervals()
  }
  
  setDistances() {
    this.#distances = [100, 200, 300, 500, 700, 1000, 1500, 2000, 2500, 3000, 4000] 
  }
  
  setIntervals() {
    this.#intervals = new Array(this.#distances.length)
    //console.log('Setting internvals')
    
    this.calcIntervals()
  }
  
  getDistances(){
    /*
    for(var i=0; i<this.#distances.length; i++){
      console.log('distance[', i, ']: ', this.#distances[i] )
    }
    */
    return this.#distances
  }
  
  getIntervals(){
    /*
    for(var i=0; i<this.#intervals.length; i++){
      console.log('calcInt[', i, ']: ', this.#intervals[i] )
    }
    */
    return this.#intervals
  }
  
  calcIntervals() {
    //let distance = 450
    let totalHeight = this.#personHeight + this.#altitude
    let visualHorizon = 3838 * (totalHeight ** 0.5)
    //let interval =  (this.#armLength*totalHeight) * (visualHorizon-distance) / ( (totalHeight**2) + (visualHorizon*distance) )
    
    //console.log('/nCalculated intervals:')
    for(var i=0; i<this.#distances.length; i++){
      let d = this.#distances[i]
      let calcInterval =  (this.#armLength*totalHeight) * (visualHorizon-d) / ( (totalHeight**2) + (visualHorizon*d) )
      this.#intervals[i] = calcInterval
      //console.log('d: ', d, '; i: ', calcInterval)
    }
    
  }
  
}


//ruler = new RulerModel()
//console.log('distance', ruler.getDistances())
//console.log('interval', ruler.getIntervals())
//console.log('calcIntervals()', rule.calcIntervals())
