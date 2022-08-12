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
    this.#intervals = []
    //this.#intervals.push(3)
    console.log('Setting internvals \nDistances')
    
    for (var i=0; i<this.#distances.length; i++){
     console.log('distance ', i, ': ', this.#distances[i])
    }
  }
  
  getDistance(){
    let distance = this.#distances[0]
    return distance
  }
  
  getInterval(){
    let interval = this.#intervals[0]
    return interval
  }
  
  calcIntervals() {
    let distance = 450
    let totalHeight = this.#personHeight + this.#altitude
    let visualHorizon = 3838 * (totalHeight ** 0.5)
    let interval =  (this.#armLength*totalHeight) * (visualHorizon-distance) / ( (totalHeight**2) + (visualHorizon*distance) )
    
    console.log('/nCalculated intervals:')
    for(var i=0; i<this.#distances.length; i++){
      let d = this.#distances[i]
      let calcInterval =  (this.#armLength*totalHeight) * (visualHorizon-d) / ( (totalHeight**2) + (visualHorizon*d) )
      this.intervals[i] = calcInterval
      console.log('d: ', d, '; i: ', calcInterval)
    }
    
    for(var i=0; i<this.#intervals.length; i++){
      console.log('calcInt[', i, ']: ', this.#intervals[i]
    }
    
    return interval
  }
}


rule = new RulerModel()
console.log('distance', rule.getDistance())
console.log('interval', rule.getInterval())
console.log('calcIntervals()', rule.calcIntervals())
