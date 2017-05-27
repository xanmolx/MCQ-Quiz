var choice1 = document.querySelector("#choice1");
var choice2 = document.querySelector("#choice2");
var choice3 = document.querySelector("#choice3");
var choice4 = document.querySelector("#choice4");
var next = document.querySelector("#next");
var question = document.querySelector("#question")

var butt1 = document.querySelector("#butt1");
var butt2 = document.querySelector("#butt2");
var butt3 = document.querySelector("#butt3");
var butt4 = document.querySelector("#butt4");

choice1.addEventListener("click", function(){
	butt1.style.border="1px solid red";
})

choice2.addEventListener("click", function(){
	butt2.style.border="1px solid red";
})

choice3.addEventListener("click", function(){
	butt3.style.border="1px solid green";
})

choice4.addEventListener("click", function(){
	butt4.style.border="1px solid red";
})

next.addEventListener("click", function(){
	question.textContent="The people of Essos speak Dothraki, but what does this word translate to?";
	choice1.textContent="Horse Warrior";
	choice2.textContent="Horse Lord";
	choice3.textContent="We Ride";
	choice4.textContent="FuckOff";
	next.textContent="ThankYou";
	next.style.border=0;
	butt1.style.border="1px solid white";
	butt2.style.border="1px solid white";
	butt3.style.border="1px solid white";
	butt4.style.border="1px solid white";
	




})