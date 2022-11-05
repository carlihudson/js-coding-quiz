var title = document.querySelector(".title");


// // Selects element by class
// var timeEl = document.querySelector(".time");

// // Selects element by id
// var mainEl = document.getElementById("main");

// var secondsLeft = 10;

// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       sendMessage();
//     }

//   }, 1000);
// }

// // Function to create and append colorsplosion image
// function sendMessage() {
//   timeEl.textContent = " ";
//   var imgEl = document.createElement("img");
//   imgEl.setAttribute("src", "images/image_1.jpg");
//   mainEl.appendChild(imgEl);

// }

// setTime();

var quiz = {
    content: [
        {
            question: "What language do you use to build the structure of an application?",
            answer: "HTML",
            choices: ['HTML', 'CSS', 'JavaScript', 'Python'],
        },
        {
            question: "What does API stand for?",
            answer: "Application Programming Interface",
            choices: ['Applied Product Information', 'Assessment of Profit Initiatives', 'Application Programming Interface', 'Apple Pie and Ice Cream']
        },
        {
            question: "What does 'Version Control' mean?",
            answer: "A markup language",
            choices: ['A programming language', 'A markup language', 'idk']
        },
        {
            question: "What is html?",
            answer: "A markup language",
            choices: ['A programming language', 'A markup language', 'idk']
        }
    ]
}
