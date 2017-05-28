var count = 2;
function newQues(){
	
	//document.getElementById("1ans1").value = "Fifth Avenue, New York City";

	//alert("Running the correct version!");

	var challenge = document.createElement("input");
    challenge.name="challenge"+count;
    //var qText = "Question "+count;

    var questNumArea = document.createElement("p");//
    var oneNum = document.createElement("p");
    var twoNum = document.createElement("p");
    var threeNum = document.createElement("p");
    var fourNum = document.createElement("p");
    var br = document.createElement("br");
    var questNumText = document.createTextNode("Question "+count+":");//
    var oneText = document.createTextNode("Answer 1:");
    var twoText = document.createTextNode("Answer 2:");
    var threeText = document.createTextNode("Answer 3:");
    var fourText = document.createTextNode("Answer 4:");
    questNumArea.appendChild(questNumText);
    oneNum.appendChild(oneText);
    twoNum.appendChild(twoText);
    threeNum.appendChild(threeText);
    fourNum.appendChild(fourText);

	var ansOne = document.createElement("input");
	ansOne.name = count+"ans"+1;
	ansOne.value = "This is a test";

	var ansTwo = document.createElement("input");
	ansTwo.name = count+"ans"+2;

	var ansThree = document.createElement("input");
	ansThree.name = count+"ans"+3;

	var ansFour = document.createElement("input");
	ansFour.name = count+"ans"+4;
	var formPlate = document.getElementById("form");
	

	formPlate.appendChild(questNumArea);//
	formPlate.appendChild(challenge);
	//formPlate.appendChild(br);
	formPlate.appendChild(oneNum);
	formPlate.appendChild(ansOne);
	formPlate.appendChild(twoNum);
	formPlate.appendChild(ansTwo);
	//formPlate.appendChild(br);
	formPlate.appendChild(threeNum);
	formPlate.appendChild(ansThree);
	formPlate.appendChild(fourNum);
	formPlate.appendChild(ansFour);
	formPlate.appendChild(br);

	var element = document.getElementById("newQuestionHere");
	element.appendChild(formPlate);

	


	document.body.innerHTML +=" ";

	//document.getElementById("newQuestionHere").innerHTML = "what does this do";-->
	count++;
}

function finish(){
	
	socket = io()
	socket.emit('questions', questions)


	alert("Done");
	//var name = Document.-->

}