class View {
  constructor() {
    
  }
  
  createElement(tag) {
    const element = document.createElement(tag)
    return element
  }

  getElement(selector) {
    const element = document.querySelector(selector)
    return element
  }
}
