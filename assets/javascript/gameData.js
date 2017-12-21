const timePerQuestion = 10;

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