// delete this
var game;

let GameData = {
	questions: [{
		// note: questions are taken from quiz at http://www.playbuzz.com/katelynw11/how-well-do-you-know-harry-potter
		question: "Who's birthday party did Harry, Ron, and Hermione go to in The Chamber of Secrets?",
		answers: [
			"Nearly Headless Nick",
			"Draco Malfoy",
			"Albus Dumbledore",
			"Dobby"
		],
		correctAnswer: "Nearly Headless Nick"

	}, {
		question: "What patronus does Luna Lovegood have?",
		answers: [
			"Lion",
			"Horse",
			"Stag",
			"Rabbit"
		],
		correctAnswer: "Rabbit"
	}, {
		question: "Who was the quidditch commentator in Harry's first years at Hogwarts?",
		answers: [
			"Dean Thomas",
			"Terry Boot",
			"Angelina Johnson",
			"Lee Jordan"
		],
		correctAnswer:

			"Lee Jordan"
	}, {
		question: "Who disguised himself as Mad Eye Moody in The Goblet of Fire?",
		answers: [
			"Barty Crouch Jr.",
			"Vincent Crabbe",
			"Severus Snape",
			"Ernie McMillian"
		],
		correctAnswer: "Barty Crouch Jr."

	}, {
		question: "What organization did Hermione start in her 4th year?",
		answers: [
			"Wizards Against the Dark Arts",
			"Dumbledore's Army",
			"Witches for Equal Rights",
			"Society for the Promotion of Elfish Welfare"
		],
		correctAnswer: "Society for the Promotion of Elfish Welfare"
	}, {
		question: "Which wand belongs to Harry?",
		answers: [
			"Holly",
			"Blackthorn",
			"Walnut",
			"Elder"
		],
		correctAnswer: "Holly"

	}, {
		question: "What potion did Harry take in order to get Slughorn's memories?",
		answers: [
			"Alihotsy Draught",
			"Felix Felicis",
			"Essence of Dittany",
			"Polyjuice Potion"
		],
		correctAnswer: "Felix Felicis"

	}, {
		question: "Who did Hermione take to Slughorn's Christmas party?",
		answers: [
			"Cormac McLaggen",
			"Ron Weasley",
			"Dean Thomas",
			"Neville Longbottom"
		],
		correctAnswer: "Cormac McLaggen"

	}, {
		question: "Who was the first to be stunned by the Basilisk?",
		answers: [
			"Hermione Granger",
			"Colin Creevey",
			"Mrs. Norris",
			"Ginny Weasley"
		],
		correctAnswer:

			"Mrs. Norris"
	}, {
		question: "Who ended up giving Harry permission to go to Hogsmeade?",
		answers: [
			"Albus Dumbledore",
			"Vernon Dursley",
			"Minerva McGonagall",
			"Sirius Black"
		],
		correctAnswer:

			"Sirius Black"
	}, {
		question: "What did Dumbledore leave for Hermione in his will?",
		answers: ["An enchanted purse",
			"The Tales of Beedle the Bard",
			"A bezoar",
			"A lighter"
		],
		correctAnswer: "The Tales of Beedle the Bard"

	}, {
		question: "Who found Harry, Ron, and Hermione in the woods in The Deathly Hallows?",
		answers: [
			"Snatchers",
			"Fenrir Greyback",
			"Voldemort",
			"Lucius Malfoy"
		],
		correctAnswer: "Fenrir Greyback"

	}, {
		question: "How did Harry survive underwater in the Triwizard Tournament?",
		answers: [
			"Bubble-head charm",
			"Gillyweed",
			"Transfiguration",
			"Gills charm"
		],
		correctAnswer: "Gillyweed"
	}, {
		question: "Who did Ron turn into when Harry, Ron, and Hermione snuck into the Ministry of Magic in The Deathly Hallows?",
		answers: [
			"Dirk Cresswell",
			"Albert Runcorn",
			"Reginald Cattermole",
			"Mundungus Fletcher"
		],
		correctAnswer:

			"Reginald Cattermole"
	}, {
		question: "What spell is used to save Hermione from the troll in The Sorcerer's Stone?",
		answers: [
			"Confundus",
			"Stupify",
			"Wingardium Leviosa",
			"Petrificus Totalus"
		],
		correctAnswer: "Wingardium Leviosa"
	}, {
		question: "What magazine does Luna's father publish?",
		answers: [
			"The Practical Potioneer",
			"The Daily Prophet",
			"The Quibbler",
			"Challenges in Charming"
		],
		correctAnswer: "The Quibbler"
	}, {
		question: "What was Harry's first broomstick?",
		answers: [
			"Thunderbolt",
			"Nimbus 2000",
			"Firebolt",
			"Cleansweep Two"
		],
		correctAnswer: "Nimbus 2000"
	}, {
		question: "How did Harry spend his first detention?",
		answers: [
			"Going into the Forbidden Forest",
			"Writing an essay",
			"Signing autographs",
			"Cleaning trophies"
		],
		correctAnswer: "Going into the Forbidden Forest"
	}, {
		question: "What happened to Neville's parents so that they couldn't remember their son?",
		answers: [
			"They lost their memories in an apperation accident",
			"The Confundus Charm was used on them",
			"They didn't lose their memories",
			"The Cruciatus Curse was used on them"
		],
		correctAnswer: "The Cruciatus Curse was used on them"
	}, {
		question: "Who is Harry's godson?",
		answers: [
			"Hugo Weasley",
			"Lorcan Scamander",
			"Teddy Lupin",
			"Victoire Weasley"
		],
		correctAnswer: "Teddy Lupin"
	}, {
		question: "What school did the Dursley's say they sent Harry to?",
		answers: [
			"Walworth Academy",
			"St. Grogory's Primary School",
			"Smeltings Academy",
			"St. Brutus' Secure Centre for Incurably Criminal Boys"
		],
		correctAnswer:

			"St. Brutus' Secure Centre for Incurably Criminal Boys"
	}, {
		question: "What crime was Hagrid committed of in his time at Hogwarts?",
		answers: [
			"Casting a spell on a professor",
			"Going into the Forbidden Forest",
			"Opening the Chamber of Secrets",
			"Killing a girl"
		],
		correctAnswer: "Opening the Chamber of Secrets"
	}, {
		question: "What does R.A.B. stand for?",
		answers: [
			"Rats and Bats",
			"Regulus Arcturus Black",
			"Rebellion Against Buckbeak",
			"Regulation of Action Bubotuber"
		],
		correctAnswer: "Regulus Arcturus Black"
	}, {
		question: "What was the name of the female elf Dobby liked?",
		answers: [
			"Winky",
			"Minka",
			"Orist",
			"Oona"
		],
		correctAnswer: "Winky"
	}, {
		question: "What is Harry's youngest son's name?",
		answers: [
			"Sirius",
			"Albus",
			"Remus",
			"James"
		],
		correctAnswer: "Albus"
	}]

}



let TriviaGame = class {
	constructor() {
		this.score = 0;
		this.missedQuestions = [];
		this.correctQuestions = [];
		this.gameInProgress = false;
		this.currentQuestion = -1;
		this.gameQuestions = GameData.questions;
		this.startGame();

	}

	resetGame() {
		// this restarts the game

		// for this app, I think I can create a new game class. Maybe?
		this.score = 0;
		this.missedQuestions = [];
		this.correctQuestions = [];
		this.gameInProgress = false;
		this.currentQuestion = -1
		this.startGame()
	}

	showGameEnd() {
		console.log("Answers Correct: ", this.correctQuestions.length);
	}

	showNextQuestion() {
		let me = this;
		let question = me.gameQuestions[me.currentQuestion]
		this.currentQuestion++;
		if (this.currentQuestion >= this.gameQuestions.length) {
			// game over. show gameEndScreen
			this.showGameEnd();
			return;
		}
		let questionCard = $("#question-card");
		questionCard.empty();
		let cardHeader = $("<div>", {
			class: "card-header",
			text: "Question " + (me.currentQuestion + 1)
		});
		// let cardImage = $("<img>", {
		// 	class: "card-img-top",
		// 	src: character.image,
		// 	alt: character.name
		// });
		var cardBody = $("<div>", {
			class: "card-body"
		}).append($("<p>", {
			class: 'card-text',
			html: question.question
		}));
		var answersCard = $("<div>", {
			class: "card",
			text: "Answers"
		});
		answersCard.append($("<ul>", {
			id: "answer-list",
			class: "awesome"
		}));
		cardBody.append(answersCard);
		console.log($("#answer-list"));
		$("#answer-list").append($("<li>", {
			text: question.answers[0]
		}))
		question.answers.forEach(answer => {
			var answerLI = $("<li>", {
				class: "answer-option",
				text: answer
			})
			console.log("answerLI", answerLI);
			// var li = $("<li>", {
			// 	text: answer
			// });
			// var answerList = $("#answer-list");
			// var answerList = $("#answer-list");
			setTimeout(function() {
				$("#answer-list").append(answerLI);
			}, 0)
			// console.log("#answer-list", answerList);
			// $("#answer-list").append(answerLI);
			// $("ul").append(answerLI);
			console.log("adding answer", answer);
			// $("#answer-list").append($("<li>", {
			// class: "answer-option",
			// text: answer
			// }))
		});
		// $("answer-list")

		// let maskDiv = ($("<div>", {
		// 	class: 'mask'
		// }))
		// // let flexDiv = ($("<div>",  {class:'mask flex-center', html:"Select " + character.name}))
		// // .append("<p>Select Character</p>"));

		let cardFooter = $("<div>", {
			class: 'card-footer'
		}).append($("<small>", {
			class: 'text-muted',
			html: "Time: <span id='seconds-left'>10</span> seconds left"
		}));

		questionCard.append(cardHeader, cardBody, cardFooter)
		// characterCard.append(cardHeader).append(cardImage).append(flexDiv).append(cardFooter);



	}

	showGame() {
		//initialize stuff. then show next question (first question)

		this.showNextQuestion();
	}
	startGame() {
		let me = this;
		this.currentQuestion = 0;
		this.showGame();
		console.log(me.gameQuestions);

		return;

		this.gameCharacters = this.possibleCharacters.map(characterData => {
			let character = new Character(characterData);
			return character;
		});
		this.humanPlayerSet = false
		this.opponentSet = false
		this.opponentsPlayed = 0

		$("#character-deck").empty();
		this.gameCharacters.forEach((character, i) => {
			// debugger;
			// console.log(character);
			// console.log("image: ", character.name, character.image, character._id)
			let characterCard = $("<div>", {
				class: 'card text-center character-card view overlay hm-blue-light',
				value: i.toString(),
				id: character._id
				// style: "{width: 20rem}"
			});
			let cardHeader = $("<div>", {
				class: "card-header",
				text: character.name
			});
			let cardImage = $("<img>", {
				class: "card-img-top",
				src: character.image,
				alt: character.name
			});
			let cardBody = $("<div>", {
				class: "card-body"
			});
			// cardBody.append($("<p>", {
			// 	class: 'card-text',
			// 	text: character.name
			// }));
			let maskDiv = ($("<div>", {
				class: 'mask'
			}))
			// let flexDiv = ($("<div>",  {class:'mask flex-center', html:"Select " + character.name}))
			// .append("<p>Select Character</p>"));

			let cardFooter = $("<div>", {
				class: 'card-footer'
			}).append($("<small>", {
				class: 'text-muted',
				text: "Health: " + character.healthPoints
			}));

			characterCard.append(cardHeader).append(cardImage).append(cardBody).append(maskDiv).append(cardFooter);
			// characterCard.append(cardHeader).append(cardImage).append(flexDiv).append(cardFooter);
			console.log("card: ", characterCard);
			$("#character-deck").append(characterCard);

			// // get current height off character cards and set height to that to try to force them to stay same height
			// setTimeout(function() {
			// let cardHeight = $("#" + me.gameCharacters[0]._id).height();
			let cardWidth = $("#" + me.gameCharacters[0]._id).width();
			// 	console.log("cardHeight", cardHeight);

			// $(".character-card").height(cardHeight).width(cardWidth);


			// $(".character-card").css("maxWidth", cardWidth);

			// }, 1000);


		});

		// clear the battle characters
		$("#battle-deck").empty();
		this.addCharacterClickListeners();
		setTimeout(function() {
			me.characterDeckHeight = $("#character-deck").outerHeight();
			console.log("set characterDeckHeight", me.characterDeckHeight);
			$("#character-deck").css("minHeight", me.characterDeckHeight);
			$("#battle-deck").css("minHeight", me.characterDeckHeight);


		}, 100);


		// now that character-deck is full, set its  min-height to the current height to keep it from collapsing.


		// disable Attack button (will be enabled after player selects charactetr and opponent)
		$("#attack-button").prop('disabled', true);
		$("#attack-button").attr('aria-disabled', true);

	}

}


$(document).ready(function() {
	game = new TriviaGame();

})