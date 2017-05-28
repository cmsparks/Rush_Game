var analyticsRoot = "../../../../../analytics/individual_students/"

function init() {
	for(i = 0; i ) {
	createElem(analyticsRoot+i+".png",i)
	}
}
function rdirPlayers() {
	window.location.replace("../Class/analytics.html")
}
function createElem(src, name) {
	var elem = document.createElement("div");
	elem.setAttribute("class","gridObject");
	elem.setAttribute("id",name);
	var img = document.createElement("IMG");
	img.src = src;
	document.getElementById("gridContainer").appendChild(elem);
	document.getElementById(name).appendChild(img);
}