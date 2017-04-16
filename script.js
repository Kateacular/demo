

//var secondLetter = document.getElementById("letterTwo");
//var chosenMonth = document.getElementById('month');
//var chosenColor = document.getElementById('myColor');


//find the code that eliminates characters for data - also numbers?
//var invalidChoices = [1,2,3,4,5,6,7,8,9,0];

//local storage:
//to set: localStorage.setItem('key', value);
//to get: localStorage.getItem('key');


var firstLetter;
var secondLetter;
var chosenMonth;
var chosenColor;

var userLetOne;
var userLetTwo;
var userMonth;
var userColor;

var wordOne;
var wordTwo;

var myChoices =[];

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

//based on chosenColor
var red =["Bake cookies for someone.","Bring someone a souvenir within the week."];
var orange = ["Write at least 5 positive sticky notes for strangers","Send a personal message to everyone you know that has a birthday today."];
var yellow =["Leave quarters at a laundromat.","Donate at least 5 items of clothing."];
var green=["Bring reusable bags to the grocery store","Switch to paperless mail.","Drink out of reusable cups."];
var blue=["Write a handwritten letter and send it.","For every person you meet in the service industry today, say something kind to them."];
var violet=["Donate used books to a library or senior center.","Compliment a stranger."];
var black=["Write a positive comment on a website or blog","On your next break, go outside and don't bring your tech."];
var white=["Give a gift card to someone just because.","Start a piggy bank for a cause."];

$(document).ready(function() {

$ (function getAdjFirst(){
wordOne =localStorage.getItem('one');
	for (var x in firstAdj) {
	//console.log(firstAdj[wordOne]);
    //console.log("testing adjective 1 call");
	}
});

$ (function getAdjSecond(){
wordTwo =localStorage.getItem('two');
	for (var x in secondAdj) {
	//console.log(secondAdj[wordTwo]);
   // console.log("testing adjective 2 call");
	}
});


$(function getNoun(){
var chosenMonth =localStorage.getItem('mos');
	if (chosenMonth == "Jan") {
	userMonth = january[Math.floor(Math.random() * january.length)];
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
	else {
	alert("No Month Selected");
	}
//var wordOne = "Checking Variable Recall";
alert(userMonth);
});

$ (function storeInsult() {
	console.log("storingInsult");
var userInsult = (firstAdj[wordOne])+" "+(secondAdj[wordTwo])+" "+userMonth;
localStorage.setItem('fullInsult',userInsult);
});


$ (function getInsult() {
	console.log("calling insult function");
var sickBurn =localStorage.getItem('fullInsult');
console.log(sickBurn);
});

$ ('#submit').click(function() {
	firstLetter = $('input[name=francis]').val();
	localStorage.setItem('one', firstLetter);
	secondLetter = $('input[name=sally]').val();
	localStorage.setItem('two', secondLetter);
	chosenMonth = $('option:selected').val();
	localStorage.setItem('mos', chosenMonth);
	if ((firstLetter === " ") || (firstLetter ==="") || (secondLetter === " ") || (secondLetter === "")) {
		console.log("space or blank entered");
	alert ("Please enter a letter.");
	//set button to false
	}
	// else if (firstLetter == invalidChoices ) {
	// alert ("Letters only, please.");
	// }
	else {
		//alert (firstLetter + secondLetter + chosenMonth);
		console.log(firstLetter + secondLetter + chosenMonth);
		getAdjFirst();
		getAdjSecond();
		storeInsult();
	}
});
	
$ ('#submitTwo').click(function() {
	//chosenColor = $('input[name=colorChoice]').val();
	chosenColor = $('option:selected').val();
	localStorage.setItem('col', chosenColor);
		console.log(chosenColor);
		alert (chosenColor);
	});




//end of the document ready, punctuation below is end of the section
});