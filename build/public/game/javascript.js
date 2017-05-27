var currPin = getParameterByName('pin');
var currNme = getParameterByName('nme');

function init() {
	connectToServer(currPin,currNme);
}

function connectToServer(pin, nme) {
	document.getElementById("currPin").innerHTML = pin;
	document.getElementById("currName").innerHTML = nme;
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
}

// Get parameters from the URL
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}