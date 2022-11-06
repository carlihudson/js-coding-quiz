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

let gameOn = false;

let questionsOrder;
let questionIndex

// function to start quiz
const startGame = () => {
   //start at question 1
    questionIndex = 0

    //hide landing page
    welcomePage.classList.add('hidden')

   //remove hidden class from quiz page and top
    quizPage.classList.remove('hidden')
    timer.classList.remove('hidden')
    hs.classList.remove('hidden')


   //starting score
    numberCorrect = 0;
    numberIncorrect = 0

    secondsLeft = quizTime
    gameOn = true

  // reassigning questions order value to be indexes of questions (quizContent array)
    questionsOrder = displayQuestions(quizContent)
    console.log(questionsOrder)
    updateQuestions(quizContent, questionsOrder[questionIndex])

    let countDown = setInterval(() => {
        secondsLeft--;
        timer.textContent = 'Time: ' + secondsLeft;

        if(secondsLeft < 0 || !gameOn){
            clearInterval(countDown)
            secondsLeft = quizTime;

            if(gameOn){
                finalScore = 0;
                // run the highscore method
            }
        }
        
    }, 1000);
}

  // grabs index of questions and stores in array
function displayQuestions(quizContent) {
    // this is the array with the index in questionsOrder
    let arrIndex = []
    // el is content, i is index
    // .map is being used to push the indexes into the arrIndex (which started blank)
    quizContent.map((el, i) => {
        console.log(el)
        arrIndex.push(i)
    })
    return arrIndex
}

// first parameter is all of my questions, second parameter is the index of the questionsOrder index
function updateQuestions(array, index) {
    questions.textContent = array[index].question
    console.log(array[index].question)
   

    let answerChoices = array[index].choices;
    console.log(answerChoices)
    for(var i = 0; i <= answerChoices.length; i++) {
        var choiceButtons = document.createElement('button');
        answers.textContent = answerChoices[index];
        document.answers(append)

       
    }

  

 
}



    // loop throudgh such array
    // inside the loop create the LI and BUTTON elements
    // append the data to those elements
    // append those elements onto the HTML
// }


//     for(var i = 0; i <= choicesIndex.choices.length; i++) {
//         var answerChoices = document.createElement('li');
//         answerChoices.setAttribute("button", "");
//         answers.append(answerChoices)

//     }

// }


function hspage() {
    quizPage.classList.add('hidden')
    highscorePage.classList.remove('hidden')
}

startQuiz.addEventListener('click', startGame)
hs.addEventListener('click', hspage)

