
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
    }
   
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
let questions = document.getElementById('questions')
let answers = document.getElementById('answers')

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

const displayQuestions = (arr) => {
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


// var questionIndex = 0;
//








// // Declared variables
// var score = 0;
// var questionIndex = 0;

// // Start working code 
// // Declared variables
// var timer = document.querySelector("#timer");
// var timer = document.querySelector("#startTime");
// var questionsDiv = document.querySelector("#questionsDiv");
// var wrapper = document.querySelector("#wrapper");

// // Seconds left is 15 seconds per question:
// var secondsLeft = 76;
// // Holds interval time
// var holdInterval = 0;
// // Holds penalty time
// var penalty = 10;
// // Creates new element
// var ulCreate = document.createElement("ul");

// // Triggers timer on button, shows user a display on the screen
// timer.addEventListener("click", function () {
//     // We are checking zero because its originally set to zero
//     if (holdInterval === 0) {
//         holdInterval = setInterval(function () {
//             secondsLeft--;
//             timer.textContent = "Time: " + secondsLeft;

//             if (secondsLeft <= 0) {
//                 clearInterval(holdInterval);
//                 allDone();
//                 timer.textContent = "Time's up!";
//             }
//         }, 1000);
//     }
//     render(questionIndex);
// });

// // Renders questions and choices to page: 
// function render(questionIndex) {
//     // Clears existing data 
//     questionsDiv.innerHTML = "";
//     ulCreate.innerHTML = "";
//     // For loops to loop through all info in array
//     for (var i = 0; i < questions.length; i++) {
//         // Appends question title only
//         var userQuestion = questions[questionIndex].title;
//         var userChoices = questions[questionIndex].choices;
//         questionsDiv.textContent = userQuestion;
//     }
//     // New for each for question choices
//     userChoices.forEach(function (newItem) {
//         var listItem = document.createElement("li");
//         listItem.textContent = newItem;
//         questionsDiv.appendChild(ulCreate);
//         ulCreate.appendChild(listItem);
//         listItem.addEventListener("click", (compare));
//     })
// }
// // Event to compare choices with answer
// function compare(event) {
//     var element = event.target;

//     if (element.matches("li")) {

//         var createDiv = document.createElement("div");
//         createDiv.setAttribute("id", "createDiv");
//         // Correct condition 
//         if (element.textContent == questions[questionIndex].answer) {
//             score++;
//             createDiv.textContent = "Correct! The answer is:  " + questions[questionIndex].answer;
//             // Correct condition 
//         } else {
//             // Will deduct -5 seconds off secondsLeft for wrong answers
//             secondsLeft = secondsLeft - penalty;
//             createDiv.textContent = "Wrong! The correct answer is:  " + questions[questionIndex].answer;
//         }

//     }
//     // Question Index determines number question user is on
//     questionIndex++;

//     if (questionIndex >= questions.length) {
//         // All done will append last page with user stats
//         allDone();
//         createDiv.textContent = "End of quiz!" + " " + "You got  " + score + "/" + questions.length + " Correct!";
//     } else {
//         render(questionIndex);
//     }
//     questionsDiv.appendChild(createDiv);

// }
// // All done will append last page
// function allDone() {
//     questionsDiv.innerHTML = "";
//     timer.innerHTML = "";

//     // Heading:
//     var createH1 = document.createElement("h1");
//     createH1.setAttribute("id", "createH1");
//     createH1.textContent = "All Done!"

//     questionsDiv.appendChild(createH1);

//     // Paragraph
//     var createP = document.createElement("p");
//     createP.setAttribute("id", "createP");

//     questionsDiv.appendChild(createP);

//     // Calculates time remaining and replaces it with score
//     if (secondsLeft >= 0) {
//         var timeRemaining = secondsLeft;
//         var createP2 = document.createElement("p");
//         clearInterval(holdInterval);
//         createP.textContent = "Your final score is: " + timeRemaining;

//         questionsDiv.appendChild(createP2);
//     }

//     // Label
//     var createLabel = document.createElement("label");
//     createLabel.setAttribute("id", "createLabel");
//     createLabel.textContent = "Enter your initials: ";

//     questionsDiv.appendChild(createLabel);

//     // input
//     var createInput = document.createElement("input");
//     createInput.setAttribute("type", "text");
//     createInput.setAttribute("id", "initials");
//     createInput.textContent = "";

//     questionsDiv.appendChild(createInput);

//     // submit
//     var createSubmit = document.createElement("button");
//     createSubmit.setAttribute("type", "submit");
//     createSubmit.setAttribute("id", "Submit");
//     createSubmit.textContent = "Submit";

//     questionsDiv.appendChild(createSubmit);

//     // Event listener to capture initials and local storage for initials and score
//     createSubmit.addEventListener("click", function () {
//         var initials = createInput.value;

//         if (initials === null) {

//             console.log("No value entered!");

//         } else {
//             var finalScore = {
//                 initials: initials,
//                 score: timeRemaining
//             }
//             console.log(finalScore);
//             var allScores = localStorage.getItem("allScores");
//             if (allScores === null) {
//                 allScores = [];
//             } else {
//                 allScores = JSON.parse(allScores);
//             }
//             allScores.push(finalScore);
//             var newScore = JSON.stringify(allScores);
//             localStorage.setItem("allScores", newScore);
//             // Travels to final page
//             window.location.replace("./HighScores.html");
//         }
//     });

// }











