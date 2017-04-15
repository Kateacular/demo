





var firstLetter;
var secondLetter;
var chosenMonth;
var chosenColor;
//var secondLetter = document.getElementById("letterTwo");
//var chosenMonth = document.getElementById('month');
//var chosenColor = document.getElementById('myColor');


//find the code that eliminates characters for data - also numbers?
//var invalidChoices = [1,2,3,4,5,6,7,8,9,0];

//local storage:
//to set: localStorage.setItem('key', value);
//to get: localStorage.getItem('key');

localStorage.setItem('one', firstLetter);
localStorage.setItem('two', secondLetter);
localStorage.setItem('mos', chosenMonth);
localStorage.setItem('col', chosenColor);

var myChoices =[];

//JSON Messages

//based on firstLetter
var FirstAdj = {
					a: "Artless",
					b: "Beslubbering",
					c: "Churlish",
					d: "Dankish",
					e: "Errant",
					
					};	

//based on secondLetter
var SecondAdj = {
					a: "Beef-Witted",
					b: "Boil-Brained",
					c: "Clapper-Clawed",
					d: "Dread-Bolted",
					e: "Earth-Vexing",
					
					};

//based on chosenMonth
var january =[ "Apple-John", "Baggage"];
var february =[ "Barnacle","Bladder"];
var march = ["Coxcomb","Codpiece"];
var april = ["Dewberry", "Death-token"];
var may = ["Foot-Licker", "Flap-Dragon"];
var june = ["Harpy", "Lewdster"];					
var july = ["Maggot-Pie","Miscreant"];
var august = ["Moldwarp","Nut-Hook"];
var september = ["Pigeon-egg", "Pignut"];
var october = ["Puttock","Ratsbane"];
var november = ["Scut","Skakinsmate"];
var december = ["Strumpet","Varlot"];



$(document).ready(function() {


$ ('#submit').click(function() {
	firstLetter = $('input[name=francis]').val();
	secondLetter = $('input[name=sally]').val();
	chosenMonth = $('option:selected').val();
	if ((firstLetter === " ") || (firstLetter ==="") || (secondLetter === " ") || (secondLetter === "")) {
		console.log("space or blank entered");
	alert ("Please enter a letter.");
	//set button to false
	}
	// else if (firstLetter == invalidChoices ) {
	// alert ("Letters only, please.");
	// }
	else {
		//myChoices.push(firstLetter);
		alert (firstLetter + secondLetter + chosenMonth);
		console.log(firstLetter + secondLetter + chosenMonth);
	}
});
	
$ ('#submitTwo').click(function() {
	//chosenColor = $('input[name=colorChoice]').val();
	chosenColor = $('option:selected').val();
		console.log(chosenColor);
		alert (chosenColor);
		
	});


var getInsult=function() {
	console.log("calling Insult Function");
var wordOne = "Insult Inserted Here";	
//var wordOne =localStorage.getItem('one');
document.write(wordOne);
};









//end of the document ready, punctuation below is end of the section
});