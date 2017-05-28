var currPin = getParameterByName("pin")
var currName = getParameterByName("nme")

if(currPin===null)
{
	currPin = "000000";
}
if(currName===null)
{
	currName = "Student";
}

function init() {
	connectToServer(currPin,currName);
	setQuestion("Question 1: What is the color blue?");
}


function connectToServer(pin, nme) {
	document.getElementById("currPin").innerHTML = pin;
	document.getElementById("currName").innerHTML = nme;
}

function setQuestion(ques) {
	document.getElementById("questionText").innerHTML = ques;
	document.getElementById("quesText").innerHTML = ques;
}

function setAnswer(num, ans) {
	if(num==1) {
		document.getElementById("ques1").innerHTML = ans;
	}
	else if(num==2) {
		document.getElementById("ques2").innerHTML = ans;
	}
	else if(num==3) {
		document.getElementById("ques3").innerHTML = ans;
	}
	else {
		document.getElementById("ques4").innerHTML = ans;
	}
}

function setPlace(place) {
	document.getElementById("currPlace").innerHTML = "#"+place;
}

function selectQues(num) {
	showOverlay(num);
}

function showOverlay(num) {
	if(num == 1) {
		document.getElementById("overlay").style.background = "linear-gradient( to top right, rgba(255,117,64,1) 0%, rgba(251,140,0 ,1) 100%)"
	} else if(num == 2) {
		document.getElementById("overlay").style.background = "linear-gradient( to top right, rgba(53,71,171,1) 0%, rgba(3,155,229 ,1) 50%)"
	} else if(num == 3) {
		document.getElementById("overlay").style.background = "linear-gradient( to top right,rgba(156,204,101 ,1) 0%, rgba(38,198,218 ,1) 50%)"
	} else {
		document.getElementById("overlay").style.background = "linear-gradient( to bottom right,rgba(63,81,181,1) 0%, rgba(171,71,188 ,1) 70%)"
	}
	document.getElementById("overlay").style.width="100%";
	document.getElementById("overlayContainer").innerHTML = "Loading . . ."
}

function closeOverlay() {
	document.getElementById("overlay").style.width="0%";
	document.getElementById("overlayContainer").innerHTML = ""
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}