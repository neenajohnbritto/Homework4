var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";
var words = poem.split(" ");

var mainEl = document.getElementById("main");
var readEl = document.getElementById("read");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");


var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
  {
    title: "String values can be enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "quotes"
  },
  {
    title: "Arrays in Javascript can be used to store ____.",
    choices: ["strings", "numbers", "objects", "All the above"],
    answer: "All the above"
  },

];

var isAnswerValidated = false;


var mainContainer = document.querySelector(".mainContainer");
var startQuiz = document.querySelector("#startQuiz");
var timer = document.querySelector("#timer");
var quizHeader = document.querySelector(".quizHeader");
var quizDescription = document.querySelector("#quizDescription");

var secondsLeft = questions.length * 15;

startQuiz.addEventListener("click", function() {
  console.log("Am here!!!")
  quizHeader.remove();
  quizDescription.remove();
  startQuiz.remove();
  
  for(var i=0; i< 1; i++){
    console.log("Now here");
    var h5 = document.createElement("h5");
    h5.textContent = questions[i].title;
    mainContainer.appendChild(h5);
    h5.setAttribute("id", "questionTag");
  
    var liOne = document.createElement("ol");
    mainContainer.appendChild(liOne);
    var buttonOne = document.createElement("button");
    buttonOne.textContent = questions[i].choices[0];
    liOne.appendChild(buttonOne);
  
    var liTwo = document.createElement("ol");
    mainContainer.appendChild(liTwo);
    var buttonTwo = document.createElement("button");
    buttonTwo.textContent = questions[i].choices[1];
    liTwo.appendChild(buttonTwo);
  
    var liThree = document.createElement("ol");
    mainContainer.appendChild(liThree);
    var buttonThree = document.createElement("button");
    buttonThree.textContent = questions[i].choices[2];
    liThree.appendChild(buttonThree);
  
    var liFour = document.createElement("ol");
    mainContainer.appendChild(liFour);
    var buttonFour = document.createElement("button");
    buttonFour.textContent = questions[i].choices[3];
    liFour.appendChild(buttonFour);

   

    var answerButtons = document.getElementsByTagName("button");
    for(var j=0; j<answerButtons.length;j++){
      var selectedAnswer = questions[i].choices[j];
      var correctAnswer = questions[i].answer;
      answerButtons[j].onclick = function() { 
        verifyAnswer(selectedAnswer, correctAnswer);
      };
      
      
    }
    if(isAnswerValidated){
      clearQuestion();
    }
    
    
  
    
  }
 //Start Timer and run up to 75 seconds 
 
    var interval = setInterval(function() {
      

      
      

      
      if (secondsLeft === 0) {
        clearInterval(interval)
        console.log('BOOM')
      }
      timer.textContent = "Time : " + secondsLeft;
      secondsLeft--;
    }, 1000)
 //Loop through questions
 //Calculate Score


});

function verifyAnswer(selectedAns, correctAns){
  console.log("Inside Verify Answer. selectedAns: " + selectedAns + " correctAns: " + correctAns);
  var result = "";
  if(selectedAns === correctAns){
    console.log("Correct");
    result = "Correct";
  }
  else{
    console.log("Wrong");
    result = "Wrong";
  }
  var liFive = document.createElement("ol");
    mainContainer.appendChild(liFive);
    var pOne = document.createElement("p");
    pOne.textContent = result;
    liFive.appendChild(pOne);
    isAnswerValidated = true;

    
}

function clearQuestion(){
  var allOls = document.getElementsByTagName("ol");
  var allH5s = document.getElementsByTagName("h5");
  for(var i=0; i < allOls.length; i++){
    allOls[i].remove();
  }
  allH5s[0].remove();
  isAnswerValidated = false;
}


// var i = 0;

// var wordsPerMillisecond = prompt("How many words per millisecond would you like to read?");

// function prepareRead() {
//   var timeLeft = 2;

//   var timeInterval = setInterval(function() {
//     timerEl.textContent = timeLeft + " seconds remaining";
//     timeLeft--;

//     if (timeLeft === 0) {
//       timerEl.textContent = "";
//       speedRead();
//       clearInterval(timeInterval);
//     }

//   }, 1000);
// }


// function speedRead() {
//   mainEl.append(bodyEl);

//   var poemInterval = setInterval(function() {
//     if (words[i] === undefined) {
//       clearInterval(poemInterval);
//     } else {
//       mainEl.textContent = words[i];
//       i++;
//     }

//   }, wordsPerMillisecond);
// }

// prepareRead();


