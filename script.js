
//local storage:
//to set: localStorage.setItem('key', value);
//to get: localStorage.getItem('key');
var firstLetter;
var secondLetter;
var chosenMonth;
var chosenHue;
var chosenColor;

var userLetOne;
var userLetTwo;
var userMonth;
var userColor;
var userMood;

var wordOne;
var wordTwo;

var sickBurn;

var randomAct;

var firstCondition = false;
var secondCondition = false;
var thirdCondition = false;


//JSON Messages

//based on firstLetter
//JSON format:
//var object = {key as string : value}
var firstAdj = {
					a: "Artless",
					b: "Beslubbering",
					c: "Churlish",
					d: "Dankish",
					e: "Errant",
					f: "Frothy",
					g: "Gorbellied",
					h: "Impertinent",
					i: "Infectious",
					j: "Jarring",
					k: "Loggerheaded",
					l: "Lumpish",
					m: "Mewling",
					n: "Paunchy",
					o: "Pribbling",
					p: "Puny",
					q: "Quibbling",
					r: "Rank",
					s: "Spleeny",
					t: "Tottering",
					u: "Unmuzzled",
					v: "Venomed",
					w: "Weedy",
					x: "Wayward",
					y: "Yeasty",
					z: "Clouted"
				};	

//based on secondLetter
var secondAdj = {
					a: "Beef-Witted",
					b: "Boil-Brained",
					c: "Clapper-Clawed",
					d: "Dread-Bolted",
					e: "Earth-Vexing",
					f: "Flap-Mouthed",
					g: "Guts-Griping",
					h: "Hasty-Witted",
					i: "Idle-Headed",
					j: "Ill-Breeding",
					k: "Knotty-Pated",
					l: "Milk-Livered",
					m: "Motley-Minded",
					n: "Plume-Plucked",
					o: "Onion-Eyed",
					p: "Pottle-Deep",
					q: "Pox-Marked",
					r: "Rump-Fed",
					s: "Sheep-Biting",
					t: "Toad-Spotted",
					u: "Unchin-Snouted",
					v: "Tardy-Gaited",
					w: "Weather-Bitten",
					x: "Tickle-Brained",
					y: "Rough-Hewn",
					z: "Swag-Bellied"
				};

//based on chosenMonth
var january = [ "Apple-John", "Baggage"];
var february = [ "Barnacle", "Bladder"];
var march = ["Coxcomb", "Codpiece"];
var april = ["Dewberry", "Death-token"];
var may = ["Foot-Licker", "Flap-Dragon"];
var june = ["Harpy", "Lewdster"];					
var july = ["Maggot-Pie","Miscreant"];
var august = ["Moldwarp","Nut-Hook"];
var september = ["Pigeon-egg", "Pignut"];
var october = ["Puttock","Ratsbane"];
var november = ["Scut","Skakinsmate"];
var december = ["Strumpet","Varlot"];

// "Jan"

// var month = {
// 	jan: [ "Apple-John", "Baggage"],
// 	key: value
// };

// randomNoun(month.jan);

//based on chosenColor
var red =["Bake cookies for someone.","Bring someone a souvenir within the week."];
var orange = ["Write at least 5 positive sticky notes for strangers","Send a personal message to everyone you know that has a birthday today."];
var yellow =["Leave quarters at a laundromat.","Donate at least 5 items of clothing."];
var green=["Bring reusable bags to the grocery store.","Switch to paperless mail.","This week, drink out of reusable cups only."];
var blue=["Write a handwritten letter and send it.","For every person you meet in the service industry today, say something kind to them."];
var violet=["Donate used books to a library or senior center.","Compliment a stranger."];
var black=["Write a positive comment on a website or blog","On your next break, go outside and don't bring your tech."];
var white=["Give a gift card to someone just because.","Start a piggy bank for a cause."];


$(document).ready(function() {

//Submit Buttons Disabled by Default
//enable buttons by removing the second value, ex: 
// when criteria is met --- $("form").keyup(function(){
//run this  ---- 	$("input[type=submit]").removeAttr('disabled');
							// });

function disableButton() {
	console.log("No Buttons for YOU!");
	$('#submitOne').attr('disabled','disabled');
	$('#submitTwo').attr('disabled','disabled');
} 
disableButton();

function enableButton() {
	console.log("Checking conditions, enabling button.");
	if ((firstCondition === true) && (secondCondition === true) && (thirdCondition === true)) {
		$("#submitOne").removeAttr('disabled');
	}

}	



function getAdjFirst(){
wordOne = localStorage.getItem('one');
	for (var x in firstAdj) {
		//console.log("Insult word, next line:");
	userLetOne = (firstAdj[wordOne]);
	//console.log((firstAdj[wordOne]));
    //console.log("testing adjective 1 call");
	}
}

function getAdjSecond(){
wordTwo = localStorage.getItem('two');
	for (var x in secondAdj) {
	userLetTwo = (secondAdj[wordTwo]);
//console.log("testing adjective 2 call");
	}
}

//Robb notes
// function randomNoun(arr) {
// 	random = Math.floor(Math.random() * arr.length);
// 	return  random;
// }

function getNoun(){
chosenMonth = localStorage.getItem('mos');
	if (chosenMonth == "Jan") {
	userMonth = january[Math.floor(Math.random() * february.length)];
	}
	else if (chosenMonth == "Feb"){
	userMonth = february[Math.floor(Math.random() * february.length)];
	}
	else if (chosenMonth == "Mar"){
	userMonth = march[Math.floor(Math.random() * march.length)];
	}
	else if (chosenMonth == "Apr"){
	userMonth = april[Math.floor(Math.random() * april.length)];
	}
	else if (chosenMonth == "May"){
	userMonth = may[Math.floor(Math.random() * may.length)];
	}
	else if (chosenMonth == "Jun"){
	userMonth = june[Math.floor(Math.random() * june.length)];
	}
	else if (chosenMonth == "Jul"){
	userMonth = july[Math.floor(Math.random() * july.length)];
	}
	else if (chosenMonth == "Aug"){
	userMonth = august[Math.floor(Math.random() * august.length)];
	}
	else if (chosenMonth == "Sep"){
	userMonth = september[Math.floor(Math.random() * september.length)];
	}
	else if (chosenMonth == "Oct"){
	userMonth = october[Math.floor(Math.random() * october.length)];
	}
	else if (chosenMonth == "Nov"){
	userMonth = november[Math.floor(Math.random() * november.length)];
	}
	else if (chosenMonth == "Dec"){
	userMonth = december[Math.floor(Math.random() * december.length)];
	}
	// else {
	// alert("No Month Selected");
	// }
//var wordOne = "Checking Variable Recall";
//alert(userMonth);
}

function storeInsult() {
	console.log("storingInsult");
	var userInsult = userLetOne+" "+userLetTwo+" "+userMonth;
	alert (userInsult);
	localStorage.setItem('fullInsult',userInsult);
}

//Robb hack version
// var getInsult = function getInsult() {
// 	console.log("calling insult function");
// 	sickBurn = localStorage.getItem('fullInsult');
// 	console.log(sickBurn);
// 	$('#burn').append("Your insult is: " + sickBurn);
// 	//alert(sickBurn);
// }();

//0riginal version
function getInsult() {
	console.log("Pulling the Insult");
sickBurn = localStorage.getItem('fullInsult');
$('#burn').html("Your custom insult is: " +sickBurn);

}getInsult();






//This function pulls the seleced color from local storage, then applies a random assignment to it based on the color value, then stores the assignment in local storage. 
function getAct(){
	chosenColor =localStorage.getItem('col');
	console.log("pulled color from storage");
	console.log(chosenColor);
	if (chosenColor == 'Red') {
	userMood = red[Math.floor(Math.random() * red.length)];
	}
	else if (chosenColor == 'Orange'){
	userMood = orange[Math.floor(Math.random() * orange.length)];
	}
	else if (chosenColor == 'Yellow'){
	userMood = yellow[Math.floor(Math.random() * yellow.length)];
	}
	else if (chosenColor == 'Green'){
	userMood = green[Math.floor(Math.random() * green.length)];
	}
	else if (chosenColor == 'Blue'){
	userMood = blue[Math.floor(Math.random() * blue.length)];
	}
	else if (chosenColor == 'Violet'){
	userMood = violet[Math.floor(Math.random() * violet.length)];
	}
	else if (chosenColor == 'Black'){
	userMood = black[Math.floor(Math.random() * black.length)];
	}
	else if (chosenColor == 'White'){
	userMood = white[Math.floor(Math.random() * white.length)];
	}
	else{
	console.log("unselected mood color");	
	}
localStorage.setItem('mood', userMood);
// randomAct = localStorage.getItem('mood');
// console.log(randomAct);
// $("#kindness").html("Your random act of kindness is:\n" + randomAct);
} 


//Buttons and click events

//This function checks for validity of entry one, and pushes it to local storage.
$ ('#letterOne').keyup(function() {
	var inputLetter = $('input[name=francis]').val();
	var myRegex = /^[a-zA-Z]+$/;
	if (myRegex.test(inputLetter)) {
		//console.log ("is running letter check one"+inputLetter);
		firstLetter = inputLetter.toLowerCase();	
		localStorage.setItem('one', firstLetter);
		firstCondition = true;
		//getAdjFirst();
	}
	else if ((inputLetter === " ") || (inputLetter ==="")) {
		alert ("Don't skip this step!");
	}	
	else{
		$('#field1').trigger('reset');
		alert ("Letters only, please.");
	}
	enableButton();
});


//This function checks for validity of entry two, and pushes it to local storage. 
$ ('#letterTwo').keyup(function() {
	var inputLetter = $('input[name=sally]').val();
	var myRegex = /^[a-zA-Z]+$/;
	if (myRegex.test(inputLetter)) {
		console.log ("is running letter check two"+inputLetter);
		secondLetter = inputLetter.toLowerCase();	
		localStorage.setItem('two', secondLetter);
		secondCondition = true;
		//getAdjSecond();
	//console.log(secondLetter);
	}
	else if ((inputLetter === " ") || (inputLetter ==="")) {
		alert ("Don't skip this step!");
	}	
	else{
		$('#field2').trigger('reset');
		alert ("Letters only, please.");
	}
	enableButton();
});

//this function checks for content of entry three and pushes it to local storage.

$ ("#month").on('change',function() {
   		var clickedMonth = $('option:selected').val();
		localStorage.setItem('mos', clickedMonth);
		console.log(clickedMonth);
		thirdCondition = true;
		//getNoun();
		enableButton();
});

//This function enables button two
$ ("#myColor").on('change',function() {
	$("#submitTwo").removeAttr('disabled');
	var clickedColor = $('option:selected').val();
	localStorage.setItem('col', clickedColor);
		//getAct();

});

//This function runs the insult generator when the first submit button is clicked.
$('#submitOne').unbind("click").click(function() {
	console.log("#submitOne is being called");
    window.location.href = 'page1.html';
		console.log(firstLetter + secondLetter + chosenMonth);
		getAdjFirst();
		getAdjSecond();
		getNoun();
		storeInsult();
		getInsult();
	return false;	
});

//This function runs the random Act generator when the second submit button is clicked.

$('#submitTwo').click(function() {
	//chosenColor = $('input[name=colorChoice]').val();
	// chosenHue = $('option:selected').val();
	// localStorage.setItem('col', chosenHue);
	//getAct();
	//randomAct = localStorage.getItem('mood');
	console.log("pulling act of kindness from storage");
	console.log(randomAct);
		window.location.href = 'page2.html';
		display();
	//return false;
	});

var display = function display() {
	console.log("running display function");
	getAct();
	randomAct = localStorage.getItem('mood');
	$("#kindness").append("Your random act of kindness is:\n" + randomAct);
}; display();



$('#submitThree').on("DOMNodeInserted", function() {
	console.log("piiizaaaaaaaaa");
	// getInsult();
});

// var run = function() {
// 	disableButton();
// }();

//end of the document ready, punctuation below is end of the section
});