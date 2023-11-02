class View {
  /** creates, gets and sets element on a webpage */
  
  constructor() {
    /** Create an a-scene element to the body and add a-camera and a-text entities to the a-scene */
    
    //get the body element
    this.body = document.getElementById('body')
  }
  
  createElement(tag) {
    /** Create a html element
      * @param tag the html tag of the element to be created
      * @returns element the html element created
      */
    const element = document.createElement(tag)
    return element
  }
  
  setAttributes(element, attributes) {
    /** Sets the attritbutes of a html element
      * @param element the html element which attributes are to be set
      * @param attributes the attributes of the html element in a dictionary
      * @returns element the html element created
      */
    for(var attribute in attributes) {
      element.setAttribute(attribute, attributes[attribute]);
    }
  }
  
  appendChild(parent, child) {
    /** appends a html element to another html element
      * @parent the parent html element to which the child html element will be appended to
      * child the child hmtl element which is to be appended
      */
    parent.append(child)
  }

  getElement(opt, selector) {
    /** gets a html element of the webpage
      * @param opt indicates which method to get the method to use. 0 to use querySelector, 1 to use getELementById, 2 to select by tagname
      * @param selector the string name to be searched for 
      * @returns element the html element found or null
      */
    
    //search for element depending on which option was sent
    let element = null
    if(opt==0){
      //css element (gets the first element which matches the selector
      element = document.querySelector(selector)
    }
    else if(opt==1){
      //id element
      element = document.getElementById(selector)
    }
    else if(opt==2){
      //tag element (gets first element with the tag nane)
      element = document.getElementsByTagName[0]
    }
    
    //return the html element found
    return element
  }
}
