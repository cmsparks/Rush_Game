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

	oneNum.appendChild(ansOne);
	twoNum.appendChild(ansTwo);
	threeNum.appendChild(ansThree);
	fourNum.appendChild(ansFour);

	var formPlate = document.getElementById("form");
	

	formPlate.appendChild(questNumArea);
	formPlate.appendChild(challenge);
	formPlate.appendChild(oneNum);
	formPlate.appendChild(twoNum);
	formPlate.appendChild(threeNum);
	formPlate.appendChild(fourNum);
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
	var questionCounter=1;
	var everythingDictionary = {};
	var questionDictionary = {};
	var choicesDictionary = {};
	var correctDictionary = {};
	var inputs = document.getElementsByTagName("input");
	for (var i=0, max=inputs.length; i < max-2; i++) { //Currently subtracting two because there are two buttons on the end, this may need to change later.
     // Do something with the element here
     //If mod 5=0; it's the question
     //If mod 5=1; it's the correct answer
     //Else its an incorrect answer
     	//console.log(inputs[i].value);
     	
     	if(i%5===0){
     		questionDictionary["Name"] = inputs[i].value;
     		//console.log(questionDictionary);
     	}
     	else if(i%5===1){
     		correctDictionary["correct_choices"] = inputs[i].value;
     		choicesDictionary["choiceOne"] = inputs[i].value;
     		//console.log(correctDictionary);
     	}
     	else if(i%5===2){
     		//choicesDictionary.push
     		choicesDictionary["choiceTwo"] = inputs[i].value;
     	}
     	else if(i%5===3){
     		choicesDictionary["choiceThree"] = inputs[i].value;
     	}
     	else{
     		choicesDictionary["choiceFour"] = inputs[i].value;
     		console.log(questionDictionary);
     		console.log(correctDictionary);
     		console.log(choicesDictionary);
     		var temp = Object.assign({},questionDictionary,correctDictionary);
     		tempEverythingDictionary = Object.assign({},temp,choicesDictionary);
     		console.log(tempEverythingDictionary); 
     		questionCounter++;
     	}
	}



	//socket = io()
	//socket.emit('questions', questions)


	//alert("Done");
	//var name = Document.-->

}