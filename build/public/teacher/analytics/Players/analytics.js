var analyticsRoot = "../../../../../analytics/individual_students/"

function init() {
	getData();
	createElem(analyticsRoot+"Bill.png","Bill")
	createElem(analyticsRoot+"Bill.png","Guy")
}
function rdirPlayers() {
	window.location.replace("../Class/analytics.html")
}
function getData() {
	var jsonDir = "../../../../../pseudo_data/players.json";
	var jsonData;
	$.getJSON(jsonDir,function(json) {
		jsonData = json;
	});
	console.log(jsonData.data[0].name);
}
function createElem(src, name) {
	var elem = document.createElement("div");
	elem.setAttribute("class","gridObject");
	elem.setAttribute("id",name);
	var img = document.createElement("IMG");
	img.src = src;
	document.getElementById("gridContainer").appendChild(elem);
	document.getElementById(name).appendChild(img);
	document.getElementById(name).append(name);
}