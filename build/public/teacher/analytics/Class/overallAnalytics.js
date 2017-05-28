function init() {
	var data;
	// $.getJSON("hardness_ranking.json", function(json) {
		// data=json;
		data={
			"Who is the Current President of the USA?": "3", 
			"What is the best High School in Chicago": "2", 
			"What is Anton's Last Name?": "1", 
			"How many days in a row has Jeremy worn Pajama Pants?": "1", 
			"Who started Silk Road": "3", 
			"Does France have a Prime Minister or a Presdient?": "1", 
			"Who created Git as a Joke?": "3", 
			"What is a man?": "4", 
			"What is a question?": "2", 
			"When did the United States declare independence from great Britain?": "3"}

		for(var key in data) {
			document.getElementById("questionInfo").innerHTML = document.getElementById("questionInfo").innerHTML+data[key]+" people got \""+key+"\" correct.<br>";
			console.log(key);
			console.log(data[key])
		}
	// })
}
function rdirPlayers() {
	window.location.replace("../Players/analytics.html")
}
