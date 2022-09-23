test.html was created first to test the functionality of Geolocation and calculating the distance between two points. 
This page will attempt to retrieve the device's location (test.js). 
If successful, it will calculate the distance between the device location and another pre-defined location (test1.js).
The information calculated and then loaded onto the webpage after the button is clicked, with a link to show a map of the device location.

seawatcher.html uses xr and a-frame to load the user's camera view onto the screen, with a ruler layered on top.
It is loaded uing a Model VIew Controller method. 

test2.js was used first to test the functionality of a-frame, and then to attempt to link it with data from geolocation.

View.js creates, sets and loads the elements of the seawatcher.html page

LocationModel.js holds all data regarding the device location. It initialises using pre-defeined default values, then uses Geolocation.

RulerModel.js holds all the data which converts cm on the screen to meters on the camera view. 
It uses pre-defined default values for device altitude, user's arm length and user's height.

It was found that the ruler altertered size depending on the size of the screen. 
DeviceModel.js was created to retrieve the size of the screen and to see if there was a correlation to accomodate for this.
It prints the findings to the console.

RulerController retrieves data from the RulerModel and uses the view.js to load the a-frame ruler onto the camera view.

NOTE: 
Not all elements are linked yet, for example, the ruler markings are loaded manually and are not yet loaded using the data from the rulerModel.
But have implemented it with this in mind, by the use of functions and the MVC method.  
