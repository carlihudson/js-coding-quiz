// variables by HTML
// start button
let startQuiz = document.getElementById('startQuiz');

// landing page
let welcomePage = document.getElementById('welcomePage');
let hs = document.getElementById('hs');

// timer
let timer = document.getElementById('timer');

// quiz container
let quizContainer = document.getElementById('quizPage');
let questions = document.getElementById('questions');
let answers = document.getElementById('answers');

// high scores 
let highscorePage = document.getElementById('highscorePage');

// footer navigation
// let footer = document.getElementById('nav');
// let previous = document.getElementById('prev');
// let next = document.getElementById('next')


// array with quiz questions
var quizContent = [
    {
        question: "1. What language do you use to build the structure of an application?",
        answer: "HTML",
        choices: ['HTML', 'CSS', 'JavaScript', 'Python'],
    },
    {
        question: "2. What does API stand for?",
        answer: "Application Programming Interface",
        choices: ['Applied Product Information', 'Assessment of Profit Initiatives', 'Application Programming Interface', 'Apple Pie and Ice Cream']
    },
    {
        question: "3. What is the Version Control system included on your computer to help keep all iterations of a project?",
        answer: "git",
        choices: ["MDN", "git", "VS Code", "DevTools"]
    },
    {
        question: "4. What is a tool included in your browser that can help in development and debugging?",
        answer: "Console Log",
        choices: ["GitHub", "Console Log", "Command Line", "Flexbox"]
    },
    {
        question: "5. What does CSS stand for?",
        answer: "Cascading Style Sheet",
        choices: ["Coding Syntax Software", "Cognitive Static Structure", "Creating Software Slickly", "Cascading Style Sheets"]
    }
   
]

let quizTime = 61;
timer.textContent = 'Time: '+ quizTime 
let secondsLeft;
let penalty = 5;

let gameOn = false;
let score;

let questionsOrder;
let questionIndex;

// function to start quiz
function startGame() {
   //start at question 1
    questionIndex = 0

    //hide landing page
    welcomePage.classList.add('hidden')

   //remove hidden class from quiz page and top
    quizPage.classList.remove('hidden')
    timer.classList.remove('hidden')
    hs.classList.remove('hidden')
    // footer.classList.remove('hidden')


   //starting score
    score = 0

    secondsLeft = quizTime
    gameOn = true

  // reassigning questionsOrder value to be indexes of questions (quizContent array)
    questionsOrder = displayQuestions(quizContent)
    updateQuestions(quizContent, questionsOrder[questionIndex])

    let countDown = setInterval(() => {
        secondsLeft--;
        timer.textContent = 'Time: ' + secondsLeft;

        if(secondsLeft < 0 || !gameOn){
            clearInterval(countDown)
            secondsLeft = quizTime;
            timer.textContent = ("Time's Up!")

            if(gameOn){
                finalScore = 0;
                // run the highscore method
            }
        }
        
    }, 1000);
}

  // function that grabs index of questions and stores in array
function displayQuestions(quizContent) {
    // this is the array with the index in questionsOrder
    let arrIndex = []
    // el is content, i is index
    // .map is being used to push the indexes into the arrIndex (which started blank)
    quizContent.map((el, i) => {
        arrIndex.push(i)
    })
    return arrIndex
}

// first parameter is all of the questions, second parameter is the index of the questionsOrder index
function updateQuestions(array, index) {
    questions.textContent = array[index].question
   

    let answerChoices = array[index].choices;
    for(var i = 0; i < answerChoices.length; i++) {
        var choiceButtons = document.createElement('button');
        choiceButtons.setAttribute('value', answerChoices[i]);
        choiceButtons.textContent = answerChoices[i];
        choiceButtons.setAttribute('class', "answchoice")
        answers.appendChild(choiceButtons)

        choiceButtons.addEventListener('click', answering);

    }


}

function answering(event) {
    var userSelection = event.target;
    console.log(userSelection.innerHTML);

    if(userSelection.innerHTML === quizContent[questionIndex].answer) {
        score = score + 5
        // something that indicates that they're correct
    }
    else {
        secondsLeft = secondsLeft - penalty
        // incorrect! the correct answer is answerChoices.answer
    }
    console.log(score)

    questionIndex++;

    // also need a way to move forward through the question index when an answer is selected. I have previous and next buttons I can use but they're currently commented out
}


function hspage() {
    quizPage.classList.add('hidden')
    highscorePage.classList.remove('hidden')
}

startQuiz.addEventListener('click', startGame)
hs.addEventListener('click', hspage)


