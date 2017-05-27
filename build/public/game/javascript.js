function connectToServer(pin, nme) {
	
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