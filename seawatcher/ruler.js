class Ruler {
  
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
    this.#intervals.push(3)
  }
  
  getDistance(){
    distance = this.#distances[0]
    return distance
  }
  
  getInterval(){
    interval = this.#intervals[0]
    return interval
  }
  
  calcIntervals() {
    distance = 450
    totalHeight = this.#personHeight + this.#altitude
    visualHorizon = 3838 * (totalHeight ** 0.5)
    interval =  (this.#armLength*totalHeight) * (visualHorizon-distance) / ( (totalHeight**2) + (visualHorizon*distance) )
    return interval
  }
}


rule = new Ruler()
console.log(rule.getDistance())
console.log(rule.getInterval())
