
/****
 * 
 * Create an array of questions and answers
 * split the assignment in 3 sections
 * 1st questions
 * 2nd final score
 * 3rd highscores
 * 
 * TIMER
 *
 * 
 */

// Variables for Application
var quizContent = [
    q1 = {
        question: "1. What language do you use to build the structure of an application?",
        answer: "HTML",
        choices: ['HTML', 'CSS', 'JavaScript', 'Python'],
    },
    q2 = {
        question: "2. What does API stand for?",
        answer: "Application Programming Interface",
        choices: ['Applied Product Information', 'Assessment of Profit Initiatives', 'Application Programming Interface', 'Apple Pie and Ice Cream']
    },
    q3 = {
        question: "3. What is the Version Control system included on your computer to help keep all iterations of a project?",
        answer: "git",
        choices: ["MDN", "git", "VS Code", "DevTools"]
    },

]
    

// variables on top bar of page (remain constant on page)
let highscores = []
let timer = document.getElementById('timer')

let quizTime = 60;
timer.textContent = 'Time: '+ quizTime 
let secondsLeft;

// landing page
let welcomePage = document.getElementById('welcomePage')

// quiz page
let quizPage = document.getElementById('quizPage')
let startQuiz = document.getElementById('startQuiz')
let questionTextElm = document.getElementById('question-text')
let answersTextElm = document.getElementById('answer-text')
var previousButton = document.getElementById('prev')
var nextButton = document.getElementById('next')

let gameOn = false;
let numberCorrect;
let numberIncorrect;

let questionsOrder;
let questionIndex

let highscorePage = document.getElementById('highscorePage')

let finalScore;

let pages =[welcomePage, highscorePage, quizPage]

// function to keep other pages hidden when a page is displayed
const hidePages = () => {
    for (let i = 0; i < pages.length; i++) {
        let page = pages[i];
        if(!page.classList.contains('hidden')){
            page.classList.add('hidden')
        }
        
    }
}

// function to start quiz
const startGame = () => {
   //start at question 1
    questionIndex = 0

   //run hide pages function to hide landing page 
    hidePages()

   //remove hidden class from quiz page 
    quizPage.classList.remove('hidden')

   //starting score
    numberCorrect = 0;
    numberIncorrect = 0

    secondsLeft = quizTime
    gameOn = true

    questionsOrder = displayQuestions(quizContent)
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

// event listener to start the quiz
startQuiz.addEventListener('click', startGame)

var displayQuestions = (arr) => {

    let arrIndex = []
    arr.map((el, i) => {
        arrIndex.push(i)
    })
    return arrIndex
}

const updateQuestions = (array, index) => {
    questions.textContent = array[index].question
    let answ = [];
    let button;

    // create an array of answers
    //loop throudgh such array
    //inside the loop create the LI and BUTTON elements
    //append the data to those elements
    // append those elements onto the HTML
}






