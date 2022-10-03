class DeviceModel {
  
  constructor(){
    let height = this.getDeviceHeight()
  }
  
  getDeviceHeight(){
    /* get device height */
    /* Three different ways which retrieves height. Try all methods */
    let deviceHeight = window.screen.availHeight
    let usableHeight = window.screen.height
    let docHeight = document.body.clientHeight
    
    /* both device and usable height test with window set to different heights
      Device height remained at 804 and usable height remained at 900 */
    console.log('device height: ', deviceHeight)
    console.log('usable height: ', usableHeight)
    
    /* doc height changed as the window height was changed */
    console.log('doc height:', docHeight)
    
    /* doc height was recorded at three different sizes (113, 441, 237).
      The size of the window was approximately measured with a ruler (2.3, 8.6, 4.6)
      Ratio calculated at all three heights, gave average at about 50. 
      therefore docheight/50 = height in cms
      */
    console.log('113/2.3: ', 113/2.3)
    console.log('441/:8.6 ', 441/8.6)
    console.log('237/4.6', 237/4.6)
    
    /* use formula to test, and heights at different doc heights approximately match result */
    console.log('docHeight of ', docHeight, ' = ', docHeight/50, ' in cm: ')
    
    /* reformat formula calculate needed docHeight given cm */
    console.log(4.6, 'cm = docHeight of ', 4.6 * 50)
    
    return docHeight
  }
}

device = new DeviceModel()
