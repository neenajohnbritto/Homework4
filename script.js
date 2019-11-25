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

var score = 0;


var mainContainer = document.querySelector(".mainContainer");
var startQuiz = document.querySelector("#startQuiz");
var timer = document.querySelector("#timer");
var quizHeader = document.querySelector(".quizHeader");
var quizDescription = document.querySelector("#quizDescription");
var viewHighScores = document.querySelector("#viewHighScores");

var secondsLeft = questions.length * 15;
var index = 0;

viewHighScores.addEventListener("click", function() {
  console.log("Am viewHighScores!!!")
  quizHeader.remove();
  quizDescription.remove();
  startQuiz.remove();
  displayHighScores();
});

startQuiz.addEventListener("click", function() {
  console.log("Am here!!!")
  quizHeader.remove();
  quizDescription.remove();
  startQuiz.remove();

  nextQuestion();
   
  var interval = setInterval(function() {
      if (secondsLeft === 0) {
        clearInterval(interval);
        console.log('BOOM');
        clearQuestion();
        displayResult();
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
    

    if(result === "Correct"){
      score = score + (100 / questions.length);
    }
    else{
      score = score - 5;
      secondsLeft = secondsLeft - 5;
    }
    //clearQuestion();    
}


function clearQuestion(){
  $("h5").remove();
  $("ol").remove();
}


function nextQuestion(){
  var h5 = document.createElement("h5");
  mainContainer.appendChild(h5);
  h5.setAttribute("id", "questionTag");
  
  var liOne = document.createElement("ol");
  mainContainer.appendChild(liOne);
  
  h5.textContent = questions[index].title;
  var correctAnswer = questions[index].answer;
    
for (let i = 0; i < questions[index].choices.length; i++) {
  console.log(questions[index].choices[i]);
  var liOne = document.createElement("ol");
  mainContainer.appendChild(liOne);
  var buttonC = document.createElement("button");
  buttonC.setAttribute("id", "button" + i);
  liOne.appendChild(buttonC);
  buttonC.textContent = questions[index].choices[i];
}

$("button").on("click", function(){
  var selectedAnswer = this.textContent;
  console.log(selectedAnswer);
  verifyAnswer(selectedAnswer, correctAnswer);
  setTimeout(function(){ 
    console.log("index: " , index);
    index ++;
    if(index < questions.length){
      clearQuestion();
      nextQuestion();
      console.log("index: " , index);
    }
    else{
      clearQuestion();
      displayResult();
      
    }
  }, 1000);
  });
}

function displayResult(){

  var h4 = document.createElement("h4");
  mainContainer.appendChild(h4);
  h4.textContent = "All Done!";
  
  var h5 = document.createElement("h5");
  mainContainer.appendChild(h5);
  h5.textContent = "Your Score is: " + score;

  var form = document.createElement("form");
  mainContainer.appendChild(form);
  form.textContent = "Enter initial to save your score: ";
  form.setAttribute("id", "form1");
  document.getElementById("form1").innerHTML="<input type='text' value='' id='initials'>";
  
  var button = document.createElement("button");
  mainContainer.appendChild(button);
  button.setAttribute("id", "buttonSave");
  button.textContent = "Save Scores";
  
  //var addScores = document.getElementById("addScores");
  $("#buttonSave").on("click", function() {
    var initials = document.getElementById("initials").value;
    
    console.log(initials);
    localStorage.setItem(initials, score);

    h4.remove();
    h5.remove();
    form.remove();
    button.remove();
    displayHighScores();
    });

}

function displayHighScores(){
  

  var h4 = document.createElement("h4");
  mainContainer.appendChild(h4);
  h4.textContent = "High Scores";

  var keys = Object.keys(localStorage);
  

  for(var i=0; i<keys.length; i++){
    var p = document.createElement("p");
    mainContainer.appendChild(p);
    p.textContent = keys[i] + "   " + window.localStorage.getItem(keys[i]);
  }

  var button = document.createElement("button");
  mainContainer.appendChild(button);
  button.setAttribute("id", "buttonGoBack");
  button.textContent = "Go Back";

  var button = document.createElement("button");
  mainContainer.appendChild(button);
  button.setAttribute("id", "buttonClearScores");
  button.textContent = "Clear Scores";

  $("#buttonGoBack").on("click", function() {
    location.reload();
  });

  $("#buttonClearScores").on("click", function() {
    window.localStorage.clear();
    $("h4").remove();
    $("p").remove();
    $("button").remove();
    displayHighScores();
  });


}






