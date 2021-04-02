var createdDate = new Date(2021, 02);

var modDate = new Date(document.lastModified);
var modDay = modDate.getDate();
var modMonth = modDate.getMonth();
var modYear = modDate.getFullYear();

var created = "&copy; Chris Wilton " + createdDate.getFullYear();
var modified = "Last modified: " + modDay + "-" + modMonth + "-" + modYear;

var copyrightSpan = document.getElementById('copyright');
var modifiedSpan = document.getElementById('modified');

copyrightSpan.innerHTML = created;
modifiedSpan.innerText = modified