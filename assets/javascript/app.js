$(document).ready(function() {

var Thatsright = 0;
var youreWrong = 0;
var questions = [{
		question: "1. Who directed DeadPool?",
		guesses: ["Josh Whedon", "Tim Miller", "George Lucas"],
		answer: 1,
		order: "questionone"
	},
	{
		question: "2. What is DeadPool's favorite food?",
		guesses: ["pizza", "chimichangas", "burgers"],
		answer: 1,
		order: "questiontwo"
	},
	{
		question: "3. What is the only thing that stayed with DeadPool through his torture?",
		guesses: ["his sense of smell", "his sense of humor", "his good looks"],
		answer: 1,
		order: "questionThree"
	},
	{
		question: "4. Do the X-men hate DeadPool?",
		guesses: ["Yes", "No", "Maybe"],
		answer: 0,
		order: "questionFour"
	},
	{
		question: "5. Who played Wade Wilson in the DeadPool movie?",
		guesses: ["Ryan Reynolds", "Jeff Bridges", "Nick Fury"],
		answer: 0,
		order: "questionFive"
	},
	{
		question: "6. Was DeadPool the first rated-R marvel movie?",
		guesses: ["no", "maybe", "yes"],
		answer: 2,
		order: "questionSix"
	},
	{
		question: "7. How does DeadPool recieve his mutant powers?",
		guesses: ["magic elixer", "born with it", "torture experimentation"],
		answer: 2,
		order: "questionSeven"
	},
	{
		question: "8. Who is Ajax in the DeadPool movie?",
		guesses: ["main villian", "his side kick", "not a character"],
		answer: 0,
		order: "questionEight"
	},
	{
		question: "9. What is the weapon of choice for DeadPool?",
		guesses: ["knives", "guns", "dual swords"],
		answer: 2,
		order: "questionNine"
	},
	{
		question: "10.What was wades job before he became DeadPool?",
		guesses: ["super hero", "pizza boy", "merc for hire"],
		answer: 2,
		order: "questionTen"
	},
	{
		question: "11. How many X-men appear in the movie DeadPool?",
		guesses: ["one", "two", "three"],
		answer: 1,
		order: "questionEleven"
	}];

deadpoolquestions(questions);

	function deadpoolquestions(questions) {
		for(var i = 0; i < questions.length; i++){
			generateQs(questions[i]);
			generateGuesses(questions[i].guesses, i);
		};
		displayButton();
	};

	function displayButton(){
		$("#submit").append("<input type='submit' value='submit' id='button'>");
	};

	function generateQs(questions) {
		$(".questionsappearhere").append("<div class='questiontext'>" + questions.question + "</div>");
	};

	function generateGuesses(guesses, questionIndex) {
		for(var i = 0; i < guesses.length; i++) {
		$(".questionsappearhere").append(`<input type='radio' name=${questions[questionIndex].order} value=${i}>${guesses[i]} </input> `);
		}
	};

	$("#submit").on("click", function(){
		clearInterval(timer);
		calculateScore();
		printscore();
	});

	function calculateScore() {
		$.each(questions, function(key, value) {
			var values = $(`input[name=${value.order}]:checked`).val()
			if (values == value.answer) {
				Thatsright++;
			} else {
				youreWrong++;
			};
		});
	};

	function printscore() {
		$(".questionsappearhere").html("<h1 class='yup'> AWWW, IM SO PROUD OF YOU!! - " + Thatsright + "</h1> <h1 class='yup'> HAHA, ITS LIKE YOU DONT EVEN KNOW ME!! - " + youreWrong + "</h1>");
		$("#submit").empty();
	};

	var seconds = 90;
	var timer = setInterval(timerworks, 1000)

	function timerworks() {
		displayThetimer();
		if (seconds !== 0) {
			seconds -= 1;
		}
		if (seconds == 0) {
		clearInterval(timer);
		calculateScore();
		printscore();
		}
	};

	function displayThetimer() {
		$("#countdown").html(seconds);
	};
	});