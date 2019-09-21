//document.getElementById('container').onscroll = function(){

//https://stackoverflow.com/questions/19614069/get-percentage-scrolled-of-an-element-with-jquery
function scrollUpdate(container)
{	 
	var scrollPercentage = 100 * container.scrollTop / (container.scrollHeight-container.clientHeight); 
	//console.log("horizontal_width: ", scrollPercentage);
	return scrollPercentage;
}
