/* gameStats object to store correct guesses, incorrect guesses, and non-guesses */

var gameStats = {
	currCorrect: 0,
	currIncorrect: 0,
	currNoGuess: 0,
	currQuestion: {},
	currTime: 10,
	questionsLeft: 10,
	totalQuestions: 40
}


/* trivia object to store trivia questions--number, correct answer, possible answers, asked (true/false), image source and sound */

/* ALL TRIVIA QUESTIONS AND IMAGES GRABBED FROM:

http://www.playbuzz.com/teehunter10/ultimate-walking-dead-quiz 

NO CODE TAKEN, JUST QUESTIONS/ANSWERS, AND MOST IMAGE CAPTURES */

var trivia = {
	question1: {
		question: "Which Saint is Father Gabriel's Church Named After?",
		answer: "St. Sarah",
		possible: ["St. Sarah","St. Christopher","St. Matthew","St. Peter"],
		asked: false,
		image: "assets/images/trivia/question1.png",
		sound: ""
	},
	question2: {
		question: "What was the first name of Michonne's son?",
		answer: "Andre",
		possible: ["Jason","Andre","Marcus","Anthony"],
		asked: false,
		image: "assets/images/trivia/question2.png",
		sound: ""
	},
	question3: {
		question: "Who did Rick handcuff to the roof?",
		answer: "Merle",
		possible: ["T-Dog","Merle","Daryl","Glenn"],
		asked: false,
		image: "assets/images/trivia/question3.png",
		sound: ""
	},
	question4: {
		question: "Who said: 'End of the world don't mean shit when you got a tank.'?",
		answer: "Mitch",
		possible: ["Martinez","Mitch","The Governor","Merle"],
		asked: false,
		image: "assets/images/trivia/question4.png",
		sound: ""
	},
	question5: {
		question: "Who did Carl shoot to prevent them from turning into a walker?",
		answer: "Lori",
		possible: ["Bob","Merle","Lori","Andrea"],
		asked: false,
		image: "assets/images/trivia/question5.png",
		sound: ""
	},
	question6: {
		question: "The hostage exchange for Beth and Carol took place in which hospital?",
		answer: "Grady Memorial Hospital",
		possible: ["Piedmont Atlanta Hospital","Atlanta Medical Center","Emory University Hospital", "Grady Memorial Hospital"],
		asked: false,
		image: "assets/images/trivia/question6.png",
		sound: ""
	},
	question7: {
		question: "What does Rick use to kill his first walker?",
		answer: "A baseball bat",
		possible: ["A baseball bat","A knife","A revolver","A rifle"],
		asked: false,
		image: "assets/images/trivia/question7.png",
		sound: ""
	},
	question8: {
		question: "What is the first thing Daryl says in the series?",
		answer: "Son of a bitch!",
		possible: ["Where's Carol?","Son of a bitch!","I ain't no bitch!","Damn it!"],
		asked: false,
		image: "assets/images/trivia/question8.png",
		sound: ""
	},
	question9: {
		question: "Who beat up Ed, Carol's abusive husband?",
		answer: "Shane",
		possible: ["Rick","Daryl","Dale","Shane"],
		asked: false,
		image: "assets/images/trivia/question9.png",
		sound: ""
	},
	question10: {
		question: "Who kills Beth?",
		answer: "Dawn",
		possible: ["Dawn","Daryl","Maggie","Carol"],
		asked: false,
		image: "assets/images/trivia/question10.png",
		sound: ""
	},
	question11: {
		question: "What county did Rick work in as a Sheriff?",
		answer: "King County",
		possible: ["King County","Jones County","Prince County","Hart County"],
		asked: false,
		image: "assets/images/trivia/question11.png",
		sound: ""
	},
	question12: {
		question: "Who is the voice on the radio in the tank (Season 1)?",
		answer: "Glenn",
		possible: ["Glenn","Morgan","Shane","Dale"],
		asked: false,
		image: "assets/images/trivia/question12.png",
		sound: ""
	},
	question13: {
		question: "What was Shane's last name?",
		answer: "Walsh",
		possible: ["Greene","Jones","Thompson","Walsh"],
		asked: false,
		image: "assets/images/trivia/question13.png",
		sound: ""
	},
	question14: {
		question: "Who shoots Glenn in the Season 5 finale?",
		answer: "Nicholas",
		possible: ["Gabriel","Carl","Morgan","Nicholas"],
		asked: false,
		image: "assets/images/trivia/question14.png",
		sound: ""
	},
	question15: {
		question: "What was Andrea's job before the outbreak?",
		answer: "Civil Rights Lawyer",
		possible: ["Police Officer","Civil Rights Lawyer","Accountant","Pharmacist"],
		asked: false,
		image: "assets/images/trivia/question15.png",
		sound: ""
	},
	question16: {
		question: "What was Glenn's job before the outbreak?",
		answer: "Pizza Delivery Boy",
		possible: ["Pizza Delivery Boy","Student","Mailman","Javascript Programmer"],
		asked: false,
		image: "assets/images/trivia/question16.png",
		sound: ""
	},
	question17: {
		question: "Who killed Hershel?",
		answer: "The Governor",
		possible: ["Carl","Michonne","The Governor","Carol"],
		asked: false,
		image: "assets/images/trivia/question17.png",
		sound: ""
	},
	question18: {
		question: "Where does Shane think the group should go instead of the CDC?",
		answer: "An army base",
		possible: ["A bunker","A farm","An army base","A prison"],
		asked: false,
		image: "assets/images/trivia/question18.png",
		sound: ""
	},
	question19: {
		question: "What does Daryl say before he shoots Dale?",
		answer: "Sorry, brother",
		possible: ["Nothing","Rest in peace","Sorry, brother","Bye, bud"],
		asked: false,
		image: "assets/images/trivia/question19.png",
		sound: ""
	},
	question20: {
		question: "What was the name of Carol's daughter?",
		answer: "Sophia",
		possible: ["Stephanie","Sophia","Sarah","Sammie"],
		asked: false,
		image: "assets/images/trivia/question20.png",
		sound: ""
	},
	question21: {
		question: "Who kills Shane?",
		answer: "Rick",
		possible: ["Carl","Rick & Carl","Rick","A walker"],
		asked: false,
		image: "assets/images/trivia/question21.png",
		sound: ""
	},
	question22: {
		question: "Who shot Carl?",
		answer: "Otis",
		possible: ["Otis","The Governor","Negan","Dawn"],
		asked: false,
		image: "assets/images/trivia/question22.png",
		sound: ""
	},
	question23: {
		question: "How many matches does Rick light in the hospital stairway? (Season 1)",
		answer: "Three",
		possible: ["Two","Three","Four","Five"],
		asked: false,
		image: "assets/images/trivia/question23.png",
		sound: ""
	},
	question24: {
		question: "'I don't want to be afraid of being alive.' Who said it?",
		answer: "Maggie",
		possible: ["Carl","Beth","Carol","Maggie"],
		asked: false,
		image: "assets/images/trivia/question24.png",
		sound: ""
	},
	question25: {
		question: "What two characters from the Walking Dead TV Show do not appear in the comic books?",
		answer: "Daryl and Merle",
		possible: ["Daryl and Merle","Tyreese and Sasha","Glenn and Maggie","Deanna and Aaron"],
		asked: false,
		image: "assets/images/trivia/question25.png",
		sound: ""
	},
	question26: {
		question: "Who does Rick kill in the Season 5 finale?",
		answer: "Pete",
		possible: ["Aaron","Morgan","Pete","The Governor"],
		asked: false,
		image: "assets/images/trivia/question26.png",
		sound: ""
	},
	question27: {
		question: "Who said 'We are the walking dead'?",
		answer: "Rick",
		possible: ["Rick","Daryl","Glenn","Shane"],
		asked: false,
		image: "assets/images/trivia/question27.png",
		sound: ""
	},
	question28: {
		question: "What number did Shane have on his chain?",
		answer: "22",
		possible: ["12","18","34","22"],
		asked: false,
		image: "assets/images/trivia/question28.png",
		sound: ""
	},
	question29: {
		question: "What was Hershel's occupation before the zombie apocalypse?",
		answer: "Veterinarian",
		possible: ["Pastor","Horse Trader","Farmer","Veterinarian"],
		asked: false,
		image: "assets/images/trivia/question29.png",
		sound: ""
	},
	question30: {
		question: "Michonne saves whose life at the end of Season 2?",
		answer: "Andrea",
		possible: ["Andrea","Carl","Daryl","Lori"],
		asked: false,
		image: "assets/images/trivia/question30.png",
		sound: ""
	},
	question31: {
		question: "In which US state do all the episodes take place?",
		answer: "Georgia",
		possible: ["Florida","Georgia","Louisiana","Kentucky"],
		asked: false,
		image: "assets/images/trivia/question31.png",
		sound: ""
	},
	question32: {
		question: "Eric gave Aaron a license plate for his collection from which state?",
		answer: "Alaska",
		possible: ["Alaska","Illinois","Michigan","Ohio"],
		asked: false,
		image: "assets/images/trivia/question32.png",
		sound: ""
	},
	question33: {
		question: "What's the name of the community Noah's family lived in?",
		answer: "Shirewilt Estates",
		possible: ["Society Estates","Shirewilt Estates","Terminus","Wiltshire Estates"],
		asked: false,
		image: "assets/images/trivia/question33.png",
		sound: ""
	},
	question34: {
		question: "Which country does Dr. Jenner from the CDC think may have a cure? (Season 1)",
		answer: "France",
		possible: ["Germany","China","France","Canada"],
		asked: false,
		image: "assets/images/trivia/question34.png",
		sound: ""
	},
	question35: {
		question: "After the battle at the prison the group gets split up. Where do they reunite?",
		answer: "Terminus",
		possible: ["D.C.","The highway","Terminus","Atlanta"],
		asked: false,
		image: "assets/images/trivia/question35.png",
		sound: ""
	},
	question36: {
		question: "The Governor is the leader of which town?",
		answer: "Woodbury",
		possible: ["Atlanta","Savannah","Macon","Woodbury"],
		asked: false,
		image: "assets/images/trivia/question36.png",
		sound: ""
	},
	question37: {
		question: "Who does Rick first meet?",
		answer: "Morgan",
		possible: ["Daryl","Glenn","Morgan","Shane"],
		asked: false,
		image: "assets/images/trivia/question37.png",
		sound: ""
	},
	question38: {
		question: "Who is Milton?",
		answer: "The Scientist from Woodbury",
		possible: ["Andrea's Lover","The Governor's Brother","The Scientist from Woodbury","The Weapons Expert from Woodbury"],
		asked: false,
		image: "assets/images/trivia/question38.png",
		sound: ""
	},
	question39: {
		question: "What's the name of Tyreese's girlfriend?",
		answer: "Karen",
		possible: ["Emilia","Karen","Kirsty","Mary"],
		asked: false,
		image: "assets/images/trivia/question39.png",
		sound: ""
	},
	question40: {
		question: "Who was the first person to call the zombies Walkers?",
		answer: "Morgan",
		possible: ["Andrea","Rick","Shane","Morgan"],
		asked: false,
		image: "assets/images/trivia/question40.png",
		sound: ""
	},
	
	

}

/* Create a function to initialize the game*/

function gameInit() {

	var audioElement = document.createElement("audio");
	audioElement.setAttribute("id","gameAudio");

	setTimeout(function() {
		$("#splash").fadeTo(1000,0.2);
		$("#header").attr("src","assets/images/header.png");
		$("#header").fadeTo(1500,1.0);

		setTimeout(function() {
			buildPage();

		}, 1000)

	}, 2000);

	var musicTimeout = setTimeout(function() {
		audioElement.setAttribute("src", "assets/sounds/theme_short.mp3");
		audioElement.volume = 0.1;
		audioElement.play();
	}, 2650);

}

/* Create main page content for questions */

function buildPage() {


	/* Create theme audio file links*/
	var audioElement = document.createElement("audio");
	audioElement.setAttribute("id","gameAudio");

	/* Declare variables used in building page layout */
	var pageDiv = $("<div>").attr("id","mainPage").addClass("col-xs-12");
	var imgDiv = $("<img>").attr("src","assets/images/paper.png");
	var footerRow = $("<div>").addClass("row").attr("id","footerRow");
	var footerDiv = $("<div>").attr("id","footer").addClass("col-xs-12");
	var footerImg = $("<img>").attr("src","assets/images/footer.png");
	var handsDiv = $("<div>").attr("id","hands");
	var handsImg = $("<img>").attr("src","assets/images/hands.png");
	var timerDiv = $("<div>").attr("id","timer").addClass("col-xs-12");

	/* Remove the zombie face splash */
	setTimeout(function() {
		$("#splash").remove();
	}, 1000);

	/* Constructs the layout of the main page */
	setTimeout(function() {
		/* Swaps zombie face with paper image for Q/A element*/
		$("#content").append(imgDiv);
		$("#content").append(pageDiv);

		getReady();

		/* Builds the pseudo-footer image*/
		$(footerDiv).append(footerImg).append(timerDiv);
		$(footerRow).append(footerDiv);
		$("#wrapper").append(footerRow);

		/* Builds and appends the zombie hands element*/
		$(handsDiv).append(handsImg);
		$(footerRow).append(handsDiv);

		/* Sets zombie audio, as well as animating the hands up from behind the footer */
		audioElement.setAttribute("src", "assets/sounds/zombies.mp3");
		audioElement.volume = 0.2;
		audioElement.play();

		$(handsDiv).animate({top: "-155px"},3000);

	}, 2000);
}

/* Get Ready to Play */

function getReady() {
	setTimeout(function() {
		var questionRow = $("<div>").addClass("row");
		var question = $("<div>").attr("id","question");

		$(questionRow).append(question);
		$("#mainPage").append(questionRow);

		setTimeout(function() {
			getSet();
		}, 2000);

	}, 1000);	
}

/* Get Ready Message and Initialization */

function getSet() {
	$("#question").html("<br><p>You will have 10 seconds to answer each question.</p><br><p>Good luck!</p>");

	setTimeout(function() {
		addGrid();
	}, 2000) 
}

/* Build Content structure for question and answer grid */

function addGrid() {
	var answerRow = $("<div>").addClass("row");

	$("#question").html("");

	$("#mainPage").append(answerRow);
	for (var i = 1; i < 5; i += 1) {
		var qCol = $("<div>").addClass("col-xs-6 answer").attr("id","answer"+i);
		$(answerRow).append(qCol);
	}

	getRandomQuestion();
	addQuestion();
	attachClickListener();

	/* Get Random Question */
	function getRandomQuestion() {

		if(gameStats.questionsLeft > 0) {

			/* It should not have been asked yet */
			var keys = Object.getOwnPropertyNames(trivia);

			/* Get possible questions where asked is false */
			var possQuestions = jQuery.grep(keys, function(question){
				return !trivia[question].asked;
			});

			if(!possQuestions) {
				return false;
			}

			/* Get random number to select possible question */
			randomNum = Math.floor(Math.random() * possQuestions.length);

			/* Set current question variable to random question */
			gameStats.currQuestion = trivia[possQuestions[randomNum]];
			trivia[possQuestions[randomNum]].asked = true;

		} else {
			gameOver();
		}
	}


	/* Add Question Content */
	function addQuestion() {

		var question = trivia.currQuestion;

		$("#question").html(gameStats.currQuestion.question).css("color","#501919");
		$("#timer").html("");

		$("#answer1").html(gameStats.currQuestion.possible[0]).attr("value",gameStats.currQuestion.possible[0]);
		$("#answer2").html(gameStats.currQuestion.possible[1]).attr("value",gameStats.currQuestion.possible[1]);
		$("#answer3").html(gameStats.currQuestion.possible[2]).attr("value",gameStats.currQuestion.possible[2]);
		$("#answer4").html(gameStats.currQuestion.possible[3]).attr("value",gameStats.currQuestion.possible[3]);
		$(".answer").css("display","block").css("background-image","url('assets/images/blood.png')").css("color","white");

		gameStats.questionsLeft--;
		gameStats.totalQuestions--;
	}
	
	function attachClickListener() {
		$(".answer").click(function() {
			answerClicked(this);
		});
	}
	if(gameStats.questionsLeft >= 0) {
		startTimer()
	} else {
		gameOver();
	}
}

/* Create Timer functions */

var intervalId;

/* Starts the timer and sets interval */
function startTimer() {
	gameStats.currTime = 10;
	$("#timer").html(gameStats.currTime);
	intervalId = setInterval(countdown, 1000);
}


/* Runs the countdown and updates html */
function countdown() {
	if (gameStats.currTime < 0) {
		stop();
		gameStats.currTime = 10;
		outOfTime();

	} else {
		$("#timer").html(gameStats.currTime);
		gameStats.currTime--;		
	}
}


/* Clears Interval */
function stop() {
	clearInterval(intervalId);
}


/* Create Click Events */
function answerClicked(answer) {
	playSound("click",0.6)
	var userGuess = $(answer).attr("value");
	$(answer).css("background-image","url('assets/images/blood2.png')").css("color","yellow");
	checkGuess(userGuess);
}

/* Sound Function */
function playSound(file,vol) {
	var audioElement = document.createElement("audio");
	audioElement.setAttribute("id","gameAudio");
	audioElement.setAttribute("src", "assets/sounds/"+file+".mp3");
	audioElement.volume = vol;
	audioElement.play();
}


/* Create function to determine correct answer */
function checkGuess(guess) {
	if(guess === gameStats.currQuestion.answer) {
		gameStats.currCorrect++;
		correctGuess();
		stop();

	} else {
		gameStats.currIncorrect++;
		incorrectGuess();
		stop();
	}
}


/* Function for out of time */
function outOfTime() {
	gameStats.currNoGuess++;
	noGuess();
}

/* Create a game over function */
function gameOver() {

	/* Changes to the end game text to reflect player score */
	var winText = determineText();

	function determineText() {
		if(gameStats.currCorrect === 10) {
			return "You might be the biggest Walking Dead fan on the planet!"
		} else if(gameStats.currCorrect >= 8) {
			return "You are either a big fan of the show, or a great cheater."
		} else if(gameStats.currCorrect >= 6) {
			return "You are slightly better than average."
		} else if(gameStats.currCorrect === 5) {
			return "You are remarkably average in every way."
		} else if(gameStats.currCorrect >= 3) {
			return "Have you ever even seen The Walking Dead?"
		} else if(gameStats.currCorrect >= 1) {
			return "You are a mountain of shame."
		} else {
			return "OK, you just wanted to see how bad it could get."
		}
	}

	/* Builds the score table and eliminates the timer */
	$(".answer").remove();
	$("#question").html(winText+"<br>Correct:  "+gameStats.currCorrect+" <br>Incorrect:  "+gameStats.currIncorrect+"<br>Unanswered:  "+gameStats.currNoGuess+"<br><br>Press any key to play again!").css("color","#501919");
	$("#timer").html("");


	/* Resets the primary stats, and then re-starts the gameplay loop*/
	document.onkeyup = function() {
		document.onkeyup = function() {};

		gameStats.currCorrect = 0;
		gameStats.currIncorrect = 0;
		gameStats.currNoGuess = 0;
		gameStats.questionsLeft = 10;


		if(gameStats.totalQuestions === 0) {
			for(var question in trivia) {
				trivia[question].asked = false;
			}
		} 
		getSet();
	}
}


/* Creates the image div, and links it to the corresponding image in the gameStats object*/
function appendImg() {
	var imgDiv = $("<div>").attr("id","answerImg").addClass("col-xs-12");
	var image = $("<img>").attr("src",gameStats.currQuestion.image).attr("id","correctImg");

	$(imgDiv).append(image)
	$("#question").append(imgDiv);
}

/* Image and effects for correct guesses */
function correctGuess() {
	$(".answer").remove();
	playSound("correct",0.5);
	$("#question").html("Correct!<br>").css("font-size","36px").css("color","#00902d");
	appendImg();
	$("#timer").html(gameStats.currQuestion.answer);
	setTimeout(function() {
		if(gameStats.questionsLeft === 0) {

			gameOver();

		} else {
			
			addGrid();
		}
	},3000);

}

/* Image and effects for incorrect guesses */
function incorrectGuess() {
	$(".answer").remove();
	playSound("zombies",0.5);
	$("#question").html("Incorrect!<br>").css("font-size","36px").css("color","#cc260a");
	appendImg();
	$("#timer").html(gameStats.currQuestion.answer);
	setTimeout(function() {
		if(gameStats.questionsLeft === 0) {
			gameOver();
		} else {
			addGrid();
		}

	},3000);
}

/* Image and effects for a non-guess */
function noGuess() {
	$(".answer").remove();
	playSound("zombies",0.5);
	$("#question").html("Coward! No answer!<br>").css("font-size","36px").css("color","#cc260a");
	appendImg();
	$("#timer").html(gameStats.currQuestion.answer);
	setTimeout(function() {
		if(gameStats.questionsLeft === 0) {
			gameOver();
		} else {
			addGrid();
		}
	},3000);
} 


/* Moves past the initial splash screen when the user chooses */

document.onkeyup = function() {
	document.onkeyup = function() {};
	gameInit();
}