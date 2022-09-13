var readlineSync = require('readline-sync');
const chalk = require('chalk');

function welcome() {
  var userName = readlineSync.question("What's your name? ");
  console.log("Welcome " + userName + " to HARRY POTTER Quiz? ")
}

var score = 0;

var highScore = [{
  name: "Sunil",
  score: 8
},
{
  name: "Vikas",
  score: 6
}
]


var questions = [{
  question: "What is the name of Harry Potter's owl?\n1) Hedwig\n2) Scrabbers\n3) Fluffy\n4) Crookshanks\n",
  answer: "1",
}, {
  question: "What is Harry’s Patronus?\n1) Otter\n2) Phoenix\n3) Stag\n4) Horse\n",
  answer: "3",
}, {
  question: "What does the Imperius Curse do?\n1) Turns the person into a pig\n2) Kills\n3) Tortures\n4) Controls\n",
  answer: "4",
}, {
  question: "Who poses as Mad-Eye Moody, Harry's 4th year Defense Against the Dark Arts professor?\n1) Voldemort\n2) Sirius Black\n3) Barty Crouch, Jr.\n4) Peter Pettigrew\n",
  answer: "3",
}, {
  question: "Who kills Professor Dumbledore?\n1) Severus Snape\n2) Draco Malfoy\n3) Fenrir Greyback\n4) Bellatrix Lestrange\n",
  answer: "1",
}, {
  question: "How does Harry catch his first snitch?\n1) In his mouth \n2) In his hat\n3) With his feet\n4) With his broom\n",
  answer: "1",
}, {
  question: "According to the Sorting Hat what qualities does Ravenclaw possess?\n1) Daring and nerve\n2) Patience and loyalty \n3) Cunning and deceit\n4) Wit and learning\n",
  answer: "4",
}, {
  question: "How did Hermione take extra lessons her third year?\n1) The time turner\n2) Weekend classes \n3) She made a clone\n4) The pensieve\n",
  answer: "1",
}, {
  question: "What is Dumbledore buried with?\n1) The resurrection stone\n2) The sword of gryffindor \n3) Fawkes the phoenix\n4) The elder wand\n",
  answer: "4",
}, {
  question: "What type of dragon did Harry face in his first Tri-Wizard Tournament task?\n1) A hungarian horntail\n2) A swedish short-snout \n3) A common welsh green\n4) A chinese fireball\n",
  answer: "1",
}]

// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question)

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Right!"))
    score = score + 1
  } else {
    console.log(chalk.red("Wrong!"))
  }
  console.log(chalk.blue("Current score : " + score))
  console.log("------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i]
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function displayScores() {
  console.log(chalk.magenta("Yay, you scored: " + score))

  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScore.map(score => console.log(score.name + ":" + score.score))
}

welcome()
game()
displayScores()

