// delete this
var game;

const normalAnswerButtonClasss = "btn-outline-primary";
const correctAnswerButtonClass = "btn-success";
const incorrectAnswerButtonClass = "btn-warning"
const unselectedAnswerButtonClass = "btn-primary-outline"

const QuestionOutcomeEnum = {
	CORRECT: "Correct",
	INCORRECT: "Incorrect",
	INCOMPLETE: "Incomplete"
}


const maxQuestions = 2;

function randomUpToN(n) {
	// does not return n, but numbers between 0 and n-1
	return (Math.floor(Math.random() * n));
}

function swapArrayElements(arr, i, j) {
	// swaps  the elements i and j or arr. Does  not return anything. It alters input array.
	if (i !== j) {
		let t = arr[i];
		arr[i] = arr[j];
		arr[j] = t;
	}
}

function shuffleArray(arr) {
	// returns a shuffled version of the array. Does not alter the input array
	// Tries to implement the Knuth Shuffle.

	// clone the array
	var outputArr = arr.slice(0);
	let n = arr.length;
	for (let i = 0; i < n - 1; i++) {
		let j = randomUpToN(n - i);
		// swap element i with the element at (i+j). max i+j value is i + (n-i) - 1 = n - 1

		swapArrayElements(outputArr, i, i + j)
		// console.log(outputArr)
	}
	return outputArr;
}

let arr = Array.from(Array(20 - 0).keys()).map(element => element + 0);
// console.log(shuffleArray(arr));





let TriviaGame = class {
	constructor() {
		this.gameQuestions = shuffleArray(GameData.questions);
		console.log(this.gameQuestions);
		this.resetGame();
		this.timePerQuestion = GameData.timePerQuestion;

	}

	resetGame() {
		// this restarts the game

		// for this app, I think I can create a new game class. Maybe?
		clearInterval(this.referenceToQuestionTimer);
		this.score = 0;
		this.missedQuestions = 0;
		this.correctQuestions = 0;
		this.incompleteQuestions = 0;


		this.gameInProgress = false;
		this.currentQuestion = -1
		this.allowUserInput = false;
		// because the answers for each question will be random, I want to save the questions asked. Saving in this.askedQuestions
		this.askedQuestions = [];
		this.secondsLeft = this.timePerQuestion;
		this.startGame();

	}

	showGameEnd() {
		let me = this;
		console.log("Answers Correct: ", this.correctQuestions);
		// $("#question-card").hide();
		$(".question-card").slideUp("slow");
		$(".score-card").slideUp("fast", function() {
			me.addGameResultsCard();

		})

	}



	showGame() {
		//initialize stuff. then show next question (first question)
		// this.addQuestionCard();
		// this.updateScoreCard();
		let me = this;
		$("#game-container").slideUp("slow", () => {
			$("#question-card-container, #game-results-container, #score-card-container").empty();
			$("#score-card-container").append(me.createEmptyScoreCard())
			me.showNextQuestion2();
			$("#game-container").slideDown("slow");
		});
	}

	startGame() {
		var me = this;
		me.gameInProgress = true;
		// this.currentQuestion = -1;
		this.showGame();
		console.log(me.gameQuestions);
		$("#restart-button").on("click", {
			game: me
		}, function(event) {
			// debugger;
			// let me = event.data.game;
			me.resetGame();
		})

		return;

	}


	answerClicked(event) {
		// console.log($(this));
		let me = event.data.game;
		$(".answer-option .btn").addClass("nohover disabled")
		$(this).addClass("user-clicked")
		$(".user-clicked").removeClass("nohover disabled");
		// $(".answer-option")
		clearInterval(me.referenceToQuestionTimer);
		if (me.allowUserInput === false) {
			// user has alread clicked before
			return;
		}
		$(".card-footer").text("Checking your answer...");
		// to prevent user from clicking again after answer is clicked, don't listen to do anything on additional clicks
		me.allowUserInput = false;

		// let answerIndex = $(this).val();
		let selectedAnswer = $(this).text();
		// debugger;

		let questionItem = me.askedQuestions[me.currentQuestion];
		questionItem.playerAnswer = selectedAnswer;
		// wait a bit before showing result to keep user in suspense
		setTimeout(function() {
			console.log("questionItem", questionItem);
			// console.log("questionItem.answers[answerIndex]", questionItem.answers[answerIndex], "questionItem.correctAnswer", questionItem.correctAnswer);
			if (questionItem.playerAnswer === questionItem.correctAnswer) {
				// user answer was correct.
				console.log("correct answer");
				$(".card-footer").fadeOut("fast", () => {
					$(".card-footer").html("<strong>Correct</strong><div class='message'>Loading Next Question</div>").fadeIn("fast");
				});
				me.correctQuestions++;
				me.askedQuestions[me.currentQuestion].questionOutcome = QuestionOutcomeEnum.CORRECT;
				console.log(me.askedQuestions);
			}
			else {
				console.log("incorrect answer");
				$(".card-footer").html("<strong>Incorrect</strong>");
				me.missedQuestions++;
				me.askedQuestions[me.currentQuestion].questionOutcome = QuestionOutcomeEnum.INCORRECT;
			}

			$(".answer-option .btn").each((i, item) => {
				// if (item.)
				if (item.innerText === questionItem.correctAnswer) {
					$(item).removeClass(normalAnswerButtonClasss).addClass(correctAnswerButtonClass);
				}
				else if (item.innerText === questionItem.playerAnswer) {
					// since the selected answer was not the correct answer (per the if branch), this was the incorrect answer
					$(item).removeClass(normalAnswerButtonClasss).addClass(incorrectAnswerButtonClass);
				}
				// else if (!me.gameInProgress) {
				else {
					$(item).removeClass(normalAnswerButtonClasss).addClass(normalAnswerButtonClasss + " disabled");

				}

				console.log(item);
			});
			setTimeout(function() {
				me.showNextQuestion2();
			}, 3000);
		}, 1000);

		// console.log(this.val());
		// console.log(t.val());
	}

	showNextQuestion2() {
		let me = this;
		me.currentQuestion++;
		console.log("getting question with index", me.currentQuestion);
		let question = me.gameQuestions[me.currentQuestion];
		me.secondsLeft = me.timePerQuestion;
		if (this.currentQuestion >= this.gameQuestions.length || this.currentQuestion >= maxQuestions) {
			// game over. show gameEndScreen
			me.gameInProgress = false;
			this.showGameEnd();
			return;
		}

		let questionToAsk = {
			questionText: question.questionText,
			answers: shuffleArray(question.answers),
			correctAnswer: question.correctAnswer,
			questionNumber: me.currentQuestion + 1,

			// playerAnswer and outcome will be updated if question is completed
			playerAnswer: "",
			questionOutcome: QuestionOutcomeEnum.INCOMPLETE
		};

		let questionCard = me.createQuestionCard1(questionToAsk);

		me.askedQuestions.push(questionToAsk);
		// answersCard.append();

		// $("#answers-card").empty().append(answerList);
		// $("#answers-card").append(answerList);
		// $("#seconds-left").text(me.secondsLeft);
		// $("#number-correct").text(me.correctQuestions.length);
		// $("#number-missed").text(me.missedQuestions.length);
		// $("#number-incomplete").text(me.incompleteQuestions.length);
		console.log("adding question card", questionCard);
		$("#question-card-container").empty().append(questionCard);
		me.updateScoreCard()
		// questionCard.show();

		me.allowUserInput = true;
		me.questionTimer();
	}

	updateScoreCard() {
		let me = this;
		$("#number-correct").text(me.correctQuestions);
		$("#number-missed").text(me.missedQuestions);
		$("#number-incomplete").text(me.incompleteQuestions);


	}



	createQuestionCard1(question) {
		// let question = me.gameQuestions[me.currentQuestion];
		let me = this;
		console.log(question);
		let questionCard = $("<div>").addClass("question-card card");
		questionCard.append($("<div>").addClass("card-header").html("<h5>Question " + question.questionNumber + " of " + me.gameQuestions.length))
		let questionCardBody = $("<div>").addClass("card-body").append($("<p>").addClass('card-text').text(question.questionText));

		let answerList = $("<ul>").addClass("answer-list");
		question.answers.forEach((answer, i) => {
			let button = $("<div>").addClass("btn").text(answer);
			var answerLI = $("<li>", {
				class: "answer-option",
			});
			if (!me.gameInProgress) {
				button.addClass("nohover");
			}

			if (me.gameInProgress) {
				button.addClass(normalAnswerButtonClasss)
			}
			else if (answer === question.correctAnswer) {
				button.addClass(correctAnswerButtonClass);
			}
			else if (answer === question.playerAnswer) {
				button.addClass(incorrectAnswerButtonClass + " disabled");
			}
			else {
				button.addClass(normalAnswerButtonClasss + " disabled")
			}
			answerList.append(answerLI.append(button));

		});
		questionCardBody.append(answerList);

		let cardFooter = $("<div>").addClass('card-footer').html(
			me.gameInProgress ?
			"Time: <span id='seconds-left'>" + me.secondsLeft + "</span> seconds left" :
			"Your Response was: <strong>" + question.questionOutcome + "</strong>"
		);

		questionCard.append(questionCardBody);
		questionCard.append(cardFooter);
		if (me.gameInProgress) {
			// questionCard.append($("<br>"))
			//questionCard.append($("<div>").addClass("progressbar").html('<div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>'))
			// cardFooter.append($("<div>").html('<div class="progress"><div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div>'))
			// cardFooter.append($("<div>").addClass("progress").html('<div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>'))
			cardFooter.append($("<div>").addClass("progress").append($('<div>').addClass("progress-bar").attr("id", "timer").attr("role", "progressbar").attr("aria-valuenow", "100")))

			// cardFooter.append($("<div>").html('<div class="progress"><div class="progress-bar progress-bar-striped bg-warning" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div></div>'))
			//.attr("aria-valuenow", "100").attr("aria-valuemin", "0").attr("aria-valuemax", "100")))
			// .css("width", "100%")
			//.style("width", "75%").attr("aria-valuenow", "75").attr("aria-valuemin", "0").attr("aria-valuemax", "100")))
			//append($("<div>").addClass("progress-bar progress-bar-primary"))
			// questionCard.append($("<div>").addClass("progress").append($("<div>").addClass("progress-bar").attr("role", "progressbar").attr("aria-valuenow", "50%")));
		}
		return questionCard;
	}


	addGameResultsCard() {
		let me = this;
		let i = 0,
			j = 0,
			k = 0;
		let resultsCard = $("<div>", {
			class: "card game-results-card"
		}).append($("<div>").addClass("card-header").html("<h1>Your Results</h1>"));
		// let cardBody = $("<div>").addClass("card-body").text(me.correctQuestions)
		let cardBody = $("<div>").addClass("card-body").html(
			"<div>Correct: <strong>" + me.correctQuestions + "</strong></div>" +
			"<div>Incorrect: <strong>" + me.missedQuestions + "</strong></div>" +
			"<div>Incomplete: <strong>" + me.incompleteQuestions + "</strong></div>" +
			"<hr><h3>Individual Question Responses</h3>"
		);

		let questionResults = $("<div>").addClass("container");

		me.askedQuestions.forEach(askedQuestion => {
			questionResults.append(me.createQuestionCard1(askedQuestion));
		})
		// cardBody.append(questionResults);
		// cardBody.slideUp("fast", function() {
		$("#game-container").slideUp("slow", () => {
			$("#game-results-container").append(resultsCard.append(cardBody, questionResults));
			$("#game-container").slideDown("slow");
		})



	}

	createEmptyScoreCard() {
		let me = this;

		// let scoreCard = $("#score-card");
		let scoreCard = $("<div>").addClass("card score-card");
		// questionCard.fadeOut("slow", function() {
		// scoreCard.empty();
		let cardHeader = $("<div>", {
			class: "card-header",
			text: "Current Results",
			id: "score-card-header"
		});
		var cardBody = $("<div>", {
			class: "card-body"
		});
		let elements = [{
			id: "number-correct",
			text: "Correct Answers"
		}, {
			id: "number-missed",
			text: "Wrong Answers"
		}, {
			id: "number-incomplete",
			text: "Incomplete Answers"
		}]

		elements.forEach(function(element) {
			cardBody.append($("<div>", {
				class: "card-text",
				html: element.text + ": <strong id=\"" + element.id + "\">0</strong>"
			}))
		})
		// scoreCard.append(cardHeader, cardBody, cardFooter).fadeIn("fast");
		scoreCard.append(cardHeader, cardBody);
		return scoreCard;
		// })
	}


	updateScoreCardOld() {
		let me = this;

		let scoreCard = $(".score-card");
		// questionCard.fadeOut("slow", function() {
		scoreCard.empty();
		let cardHeader = $("<div>", {
			class: "card-header",
			text: "Current Results",
			id: "score-card-header"
		});
		var cardBody = $("<div>", {
			class: "card-body"
		});
		let elements = [{
			id: "number-correct",
			text: "Correct Answers"
		}, {
			id: "number-missed",
			text: "Wrong Answers"
		}, {
			id: "number-incomplete",
			text: "Incomplete Answers"
		}]

		elements.forEach(function(element) {
			cardBody.append($("<p>", {
				class: "card-text",
				html: element.text + ": <span id=\"" + element.id + "\"</span>"
			}))
		})
		// scoreCard.append(cardHeader, cardBody, cardFooter).fadeIn("fast");
		scoreCard.append(cardHeader, cardBody);
		// })
	}

	questionTimer() {
		let me = this;
		me.referenceToQuestionTimer = setInterval(function() {
			if (me.secondsLeft <= 0) {
				clearInterval(me.referenceToQuestionTimer);
				me.incompleteQuestions++;
				me.showNextQuestion2();
			}
			else {
				console.log("updating seconds left")
				$("#seconds-left").text(me.secondsLeft)
				if (me.secondsLeft < 6) {
					$(".progress-bar").addClass("bg-danger");
				}
				let percent = .667;
				let widthChange = (percent * $(".progress-bar").parent().width()) + "px"
				$(".progress-bar").animate({
					"width": "-=" + widthChange
				}, 10000, "linear", function() {
					console.log("updating progress bar");
				})
				me.secondsLeft--;
			}
		}, 1000);
		// $("#question-card-container .card-footer").height($("#question-card-container .card-footer").outerHeight())
		// let percent = .15;
		// let widthChange = (percent * $(".progress-bar").parent().width()) + "px"

		// console.log("\n\n\n\n\n\n", me, me.timePerQuestion);
		// $(".progress-bar").animate({
		// 	"width": 0
		// }, ((me.timePerQuestion - 1) * 1000), function() {
		// 	console.log("updating progress bar");
		// })
		// $(".progress-bar").each(function() {
		// 	var progressBar = $(".progress-bar");
		// 	progressBar.each(function(indx) {
		// 		$(this).css("width", $(this).attr("aria-valuenow") + "%");
		// 	});
		// });


	}

}


$(document).ready(function() {
	game = new TriviaGame();

	$(document).on("click", ".answer-option .btn", {
		game: game
	}, game.answerClicked);


})