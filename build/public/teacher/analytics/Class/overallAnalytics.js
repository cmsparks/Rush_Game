function init() {
	var data;
	$.getJSON("hardness_ranking.json", function(json) {
		data=json;
		for(var key in data) {
			document.getElementById("questionInfo").innerHTML = document.getElementById("questionInfo").innerHTML+data[key]+" people got \""+key+"\" correct.<br>";
			console.log(key);
			console.log(data[key])
		}
	})
}
function rdirPlayers() {
	window.location.replace("../Players/analytics.html")
}
