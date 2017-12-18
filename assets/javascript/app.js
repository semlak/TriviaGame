// delete this
var game;
const timePerQuestion = 10;
const maxQuestions = 5;

let GameData = {
	questions: [{
		// note: questions are taken from quiz at http://www.playbuzz.com/katelynw11/how-well-do-you-know-harry-potter
		questionText: "Who's birthday party did Harry, Ron, and Hermione go to in The Chamber of Secrets?",
		answers: [
			"Nearly Headless Nick",
			"Draco Malfoy",
			"Albus Dumbledore",
			"Dobby"
		],
		correctAnswer: "Nearly Headless Nick"

	}, {
		questionText: "What patronus does Luna Lovegood have?",
		answers: [
			"Lion",
			"Horse",
			"Stag",
			"Rabbit"
		],
		correctAnswer: "Rabbit"
	}, {
		questionText: "Who was the quidditch commentator in Harry's first years at Hogwarts?",
		answers: [
			"Dean Thomas",
			"Terry Boot",
			"Angelina Johnson",
			"Lee Jordan"
		],
		correctAnswer:

			"Lee Jordan"
	}, {
		questionText: "Who disguised himself as Mad Eye Moody in The Goblet of Fire?",
		answers: [
			"Barty Crouch Jr.",
			"Vincent Crabbe",
			"Severus Snape",
			"Ernie McMillian"
		],
		correctAnswer: "Barty Crouch Jr."

	}, {
		questionText: "What organization did Hermione start in her 4th year?",
		answers: [
			"Wizards Against the Dark Arts",
			"Dumbledore's Army",
			"Witches for Equal Rights",
			"Society for the Promotion of Elfish Welfare"
		],
		correctAnswer: "Society for the Promotion of Elfish Welfare"
	}, {
		questionText: "Which wand belongs to Harry?",
		answers: [
			"Holly",
			"Blackthorn",
			"Walnut",
			"Elder"
		],
		correctAnswer: "Holly"

	}, {
		questionText: "What potion did Harry take in order to get Slughorn's memories?",
		answers: [
			"Alihotsy Draught",
			"Felix Felicis",
			"Essence of Dittany",
			"Polyjuice Potion"
		],
		correctAnswer: "Felix Felicis"

	}, {
		questionText: "Who did Hermione take to Slughorn's Christmas party?",
		answers: [
			"Cormac McLaggen",
			"Ron Weasley",
			"Dean Thomas",
			"Neville Longbottom"
		],
		correctAnswer: "Cormac McLaggen"

	}, {
		questionText: "Who was the first to be stunned by the Basilisk?",
		answers: [
			"Hermione Granger",
			"Colin Creevey",
			"Mrs. Norris",
			"Ginny Weasley"
		],
		correctAnswer:

			"Mrs. Norris"
	}, {
		questionText: "Who ended up giving Harry permission to go to Hogsmeade?",
		answers: [
			"Albus Dumbledore",
			"Vernon Dursley",
			"Minerva McGonagall",
			"Sirius Black"
		],
		correctAnswer:

			"Sirius Black"
	}, {
		questionText: "What did Dumbledore leave for Hermione in his will?",
		answers: ["An enchanted purse",
			"The Tales of Beedle the Bard",
			"A bezoar",
			"A lighter"
		],
		correctAnswer: "The Tales of Beedle the Bard"

	}, {
		questionText: "Who found Harry, Ron, and Hermione in the woods in The Deathly Hallows?",
		answers: [
			"Snatchers",
			"Fenrir Greyback",
			"Voldemort",
			"Lucius Malfoy"
		],
		correctAnswer: "Fenrir Greyback"

	}, {
		questionText: "How did Harry survive underwater in the Triwizard Tournament?",
		answers: [
			"Bubble-head charm",
			"Gillyweed",
			"Transfiguration",
			"Gills charm"
		],
		correctAnswer: "Gillyweed"
	}, {
		questionText: "Who did Ron turn into when Harry, Ron, and Hermione snuck into the Ministry of Magic in The Deathly Hallows?",
		answers: [
			"Dirk Cresswell",
			"Albert Runcorn",
			"Reginald Cattermole",
			"Mundungus Fletcher"
		],
		correctAnswer:

			"Reginald Cattermole"
	}, {
		questionText: "What spell is used to save Hermione from the troll in The Sorcerer's Stone?",
		answers: [
			"Confundus",
			"Stupify",
			"Wingardium Leviosa",
			"Petrificus Totalus"
		],
		correctAnswer: "Wingardium Leviosa"
	}, {
		questionText: "What magazine does Luna's father publish?",
		answers: [
			"The Practical Potioneer",
			"The Daily Prophet",
			"The Quibbler",
			"Challenges in Charming"
		],
		correctAnswer: "The Quibbler"
	}, {
		questionText: "What was Harry's first broomstick?",
		answers: [
			"Thunderbolt",
			"Nimbus 2000",
			"Firebolt",
			"Cleansweep Two"
		],
		correctAnswer: "Nimbus 2000"
	}, {
		questionText: "How did Harry spend his first detention?",
		answers: [
			"Going into the Forbidden Forest",
			"Writing an essay",
			"Signing autographs",
			"Cleaning trophies"
		],
		correctAnswer: "Going into the Forbidden Forest"
	}, {
		questionText: "What happened to Neville's parents so that they couldn't remember their son?",
		answers: [
			"They lost their memories in an apperation accident",
			"The Confundus Charm was used on them",
			"They didn't lose their memories",
			"The Cruciatus Curse was used on them"
		],
		correctAnswer: "The Cruciatus Curse was used on them"
	}, {
		questionText: "Who is Harry's godson?",
		answers: [
			"Hugo Weasley",
			"Lorcan Scamander",
			"Teddy Lupin",
			"Victoire Weasley"
		],
		correctAnswer: "Teddy Lupin"
	}, {
		questionText: "What school did the Dursley's say they sent Harry to?",
		answers: [
			"Walworth Academy",
			"St. Grogory's Primary School",
			"Smeltings Academy",
			"St. Brutus' Secure Centre for Incurably Criminal Boys"
		],
		correctAnswer:

			"St. Brutus' Secure Centre for Incurably Criminal Boys"
	}, {
		questionText: "What crime was Hagrid committed of in his time at Hogwarts?",
		answers: [
			"Casting a spell on a professor",
			"Going into the Forbidden Forest",
			"Opening the Chamber of Secrets",
			"Killing a girl"
		],
		correctAnswer: "Opening the Chamber of Secrets"
	}, {
		questionText: "What does R.A.B. stand for?",
		answers: [
			"Rats and Bats",
			"Regulus Arcturus Black",
			"Rebellion Against Buckbeak",
			"Regulation of Action Bubotuber"
		],
		correctAnswer: "Regulus Arcturus Black"
	}, {
		questionText: "What was the name of the female elf Dobby liked?",
		answers: [
			"Winky",
			"Minka",
			"Orist",
			"Oona"
		],
		correctAnswer: "Winky"
	}, {
		questionText: "What is Harry's youngest son's name?",
		answers: [
			"Sirius",
			"Albus",
			"Remus",
			"James"
		],
		correctAnswer: "Albus"
	}],
	timePerQuestion: timePerQuestion
}

// function createPermutation(min, max) {

// }


let TriviaGame = class {
	constructor() {
		this.gameQuestions = GameData.questions;
		this.resetGame();
	}

	resetGame() {
		// this restarts the game

		// for this app, I think I can create a new game class. Maybe?
		clearInterval(this.referenceToQuestionTimer);
		this.score = 0;
		this.missedQuestions = [];
		this.correctQuestions = [];
		this.incompleteQuestions = [];
		this.gameInProgress = false;
		this.currentQuestion = -1
		this.allowUserInput = false;
		this.startGame();
		this.secondsLeft = GameData.timePerQuestion;
	}

	showGameEnd() {
		console.log("Answers Correct: ", this.correctQuestions.length);
		// $("#question-card").hide();
		$("#question-card").slideUp();

	}



	showGame() {
		//initialize stuff. then show next question (first question)
		this.addQuestionCard();
		this.addScoreCard();
		this.showNextQuestion();
	}
	startGame() {
		var me = this;
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
		clearInterval(me.referenceToQuestionTimer);
		if (me.allowUserInput === false) {
			// user has alread clicked before
			return;
		}
		// to prevent user from clicking again after answer is clicked, don't listen to do anything on additional clicks
		me.allowUserInput = false;

		let answerIndex = $(this).val();
		let questionItem = me.gameQuestions[me.currentQuestion];
		// wait a bit before showing result to keep user in suspense
		setTimeout(function() {
			if (questionItem.answers[answerIndex] === questionItem.correctAnswer) {
				// user answer was correct.
				console.log("correct answer");
				me.correctQuestions.push(me.currentQuestion);

			}
			else {
				console.log("incorrect answer");
				me.missedQuestions.push(me.currentQuestion);

			}
			setTimeout(function() {
				me.showNextQuestion();
			}, 0);
		}, 300);

		// console.log(this.val());
		// console.log(t.val());
	}

	showNextQuestion() {
		let me = this;
		this.currentQuestion++;
		console.log("getting question with index", me.currentQuestion);
		let question = me.gameQuestions[me.currentQuestion]
		this.secondsLeft = GameData.timePerQuestion;
		if (this.currentQuestion >= this.gameQuestions.length || this.currentQuestion >= maxQuestions) {
			// game over. show gameEndScreen
			this.showGameEnd();
			return;
		}
		let questionCard = $("#question-card");


		setTimeout(function() {
			$("#question-card-header").text("Question " + (me.currentQuestion + 1))
			$("#question-text").text(question.questionText)
			let answerList = $("<ul>", {
				id: "answer-list",
				class: "awesome"
			});
			question.answers.forEach((answer, i) => {
				var answerLI = $("<li>", {
					class: "answer-option",
					// text: answer,
					value: i
				}).append($("<div>", {
					class: "btn btn-primary",
					text: answer,
					value: i
				}));
				answerList.append(answerLI);

				// would like to move this to add listeners to the single class of answer options rather  than individual elements
				answerLI.click({
					game: me
				}, me.answerClicked)


			});
			// answersCard.append();

			$("#answers-card").empty().append(answerList);
			// $("#answers-card").append(answerList);
			$("#seconds-left").text(me.secondsLeft);
			$("#number-correct").text(me.correctQuestions.length);
			$("#number-missed").text(me.missedQuestions.length);
			$("#number-incomplete").text(me.incompleteQuestions.length);
			questionCard.show();

			me.allowUserInput = true;
			me.questionTimer();

		}, 0);

	}

	addQuestionCard() {
		let me = this;

		let questionCard = $("#question-card");
		// questionCard.fadeOut("slow", function() {
		questionCard.empty();
		let cardHeader = $("<div>", {
			class: "card-header",
			text: "Question",
			id: "question-card-header"
		});
		var cardBody = $("<div>", {
			class: "card-body"
		}).append($("<p>", {
			class: 'card-text',
			html: "Questions are loading...",
			id: "question-text"
		}));
		var answersCard = $("<div>", {
			class: "card",
			id: "answers-card",
			text: "Answers are loading..."
		});
		cardBody.append(answersCard);

		let cardFooter = $("<div>", {
			class: 'card-footer'
		}).append($("<small>", {
			// class: 'text-muted',
			html: "Time: <span id='seconds-left'>" + me.secondsLeft + "</span> seconds left"
		}));

		// questionCard.append(cardHeader, cardBody, cardFooter).fadeIn("fast");
		questionCard.append(cardHeader, cardBody, cardFooter);
		// })

	}

	addScoreCard() {
		let me = this;

		let scoreCard = $("#score-card");
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
				me.incompleteQuestions.push(me.currentQuestion);
				me.showNextQuestion();
			}
			else {
				console.log("updating seconds left")
				$("#seconds-left").text(me.secondsLeft)
				me.secondsLeft--;
			}
		}, 1000);

	}

}


$(document).ready(function() {
	game = new TriviaGame();

})