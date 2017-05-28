var count = 2;
var finalInputs=[];

function newQues(){
var inputs = document.getElementsByTagName("input");
	for(var i = 0, max= inputs.length-2;i<max;i++){
		 finalInputs[i]=inputs[i].value;
	}
	console.log(finalInputs);

	var challenge = document.createElement("input");
    challenge.name="challenge"+ count;
    challenge.placeholder= "Question " +count+
    " ";
    var questNumArea = document.createElement("p");
    var oneNum = document.createElement("p");
    var twoNum = document.createElement("p");
    var threeNum = document.createElement("p");
    var fourNum = document.createElement("p");
    var tagNum = document.createElement("p");
    var br = document.createElement("br");

    var questNumText = document.createTextNode("Question "+count+":");//
    var oneText = document.createTextNode("Correct Answer: ");
    var twoText = document.createTextNode("Answer 2: ");
    var threeText = document.createTextNode("Answer 3: ");
    var fourText = document.createTextNode("Answer 4: ");
    var tagText = document.createTextNode("Tags: ");

    questNumArea.appendChild(questNumText);
    oneNum.appendChild(oneText);
    twoNum.appendChild(twoText);
    threeNum.appendChild(threeText);
    fourNum.appendChild(fourText);
    tagNum.appendChild(tagText);

	var ansOne = document.createElement("input");
	ansOne.name = count+"ans"+1;
	 ansOne.placeholder= "Answer one";

	var ansTwo = document.createElement("input");
	ansTwo.name = count+"ans"+2;
	ansTwo.placeholder= "Answer two";

	var ansThree = document.createElement("input");
	ansThree.name = count+"ans"+3;
	ansThree.placeholder= "Answer three";

	var ansFour = document.createElement("input");
	ansFour.name = count+"ans"+4;
	ansFour.placeholder= "Answer four";

	var ansTag = document.createElement("input");
	ansTag.name = count+"ans";
	ansTag.placeholder= "e.g. science, logs, rocks, etc";

	oneNum.appendChild(ansOne);
	twoNum.appendChild(ansTwo);
	threeNum.appendChild(ansThree);
	fourNum.appendChild(ansFour);
	tagNum.appendChild(ansTag);

	var formPlate = document.getElementById("form");
	

	formPlate.appendChild(questNumArea);
	formPlate.appendChild(challenge);
	formPlate.appendChild(oneNum);
	formPlate.appendChild(twoNum);
	formPlate.appendChild(threeNum);
	formPlate.appendChild(fourNum);
	formPlate.appendChild(tagNum);
	formPlate.appendChild(br);

	var element = document.getElementById("newQuestionHere");
	element.appendChild(formPlate);

	document.body.innerHTML +=" ";

	count++;

for(var cat =0, max = finalInputs.length; cat<max; cat++){
	 inputs[cat].value=finalInputs[cat];
	}
}
///////////////////////////////////////////
function finish(){
  // alert('test')
	console.log("finishing");
	var everythingDictionary = {};
	var questionDictionary = {};
	var choicesDictionary = {};
	var correctDictionary = {};
	var choicesArray = [];
	var correctArray = [];
	var finalArray = [];
	var finalDictionary = {};
	var inputs = document.getElementsByTagName("input");
	if(inputs.length<7){
		console.log("please enter at least two questions");
		alert("Please enter at least two questions");
	}
	else{
		console.log("question number ok");
	for (var i=0, max=inputs.length; i < max-2; i++) { //Currently subtracting two because there are two buttons on the end, this may need to change later.
     // Do something with the element here
     //If mod 5=0; it's the question
     //If mod 5=1; it's the correct answer
     //Else its an incorrect answer
     	//console.log(inputs[i].value);
     	
     	if(i%5===0){
     		questionDictionary = {};
     		choicesDictionary = {};
     		correctDictionary = {};
     		choicesArray = [];
     		correctArray = [];
     		everythingDictionary = {};
     		questionDictionary["Name"] = inputs[i].value;
     		//console.log(questionDictionary);
     	}
     	else if(i%5===1){
     		choicesArray[0] = inputs[i].value;
     		correctArray[0] = inputs[i].value;
     		correctDictionary["correct_choices"] = correctArray;
     		//console.log(correctDictionary);
     	}
     	else if(i%5===2){
     		//choicesDictionary.push
     		choicesArray[1] = inputs[i].value;
     	}
     	else if(i%5===3){
     		choicesArray[2] = inputs[i].value;
     	}
     	else{
     		choicesArray[3] = inputs[i].value;
     		choicesDictionary["choices"] = choicesArray;
     		console.log(questionDictionary);
     		console.log(correctDictionary);
     		console.log(choicesDictionary);
     		var temp = Object.assign({},questionDictionary,correctDictionary);
     		everythingDictionary = Object.assign({},temp,choicesDictionary);
     		var len = finalArray.length;
     		finalArray[len] = everythingDictionary;
     		console.log(finalArray); 
     		//json = JSON.stringify(everythingDictionary);
     	}
	}//end for loop
	finalDictionary["data"]=finalArray;
	// json = JSON.stringify(everythingDictionary);
  // alert('eafasdfasjklads;jfiias')
	socket = io()  
  console.log(1)
	socket.emit('questions', finalDictionary)


	// alert("Done");
	//var name = Document.-->
}
}
