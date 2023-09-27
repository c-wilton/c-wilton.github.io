function writeModifiedDate(modifiedDate)
{
	var date = new Date(document.lastModified);

	var x = "";
	x += "Last modified by: Chris Wilton ";
	x += date.getDate() + "-";
	x += (date.getMonth()+1) + "-";
	x += date.getFullYear();

	var modifiedDate=document.getElementById('modifiedDate');
	modifiedDate.innerHTML=x;
}
