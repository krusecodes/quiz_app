let questionNumber = 0;
let score = 0;

function generateQuestion() {
  if (questionNumber < STORE.length) {
    return `<div class="questionForm-${questionNumber}">
      <form class="quiz-form">
      <fieldset>
      <legend>${STORE[questionNumber].question}</legend>
      <label class="answerOption">
      <input type="radio" value="${
      STORE[questionNumber].answer[0]
      }" name="answer" required>
      <span>${STORE[questionNumber].answer[0]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${
      STORE[questionNumber].answer[1]
      }" name="answer" required>
      <span>${STORE[questionNumber].answer[1]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${
      STORE[questionNumber].answer[2]
      }" name="answer" required>
      <span>${STORE[questionNumber].answer[2]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${
      STORE[questionNumber].answer[3]
      }" name="answer" required>
      <span>${STORE[questionNumber].answer[3]}</span>
      </label>
      <input type="submit" id="submitButton" value="Submit" />
      <ul>
        <li>Questions: ${questionNumber + 1}/5</li>
        <li>Correct: ${score}</li>
      </ul>
      </fieldset>
      </form>
      </div>`;
  } else {
    renderResults();
    restartQuiz();
    $(".questionNumber").text(5);
  }
}

function changeQuestionNumber() {
  console.log(questionNumber);
  // questionNumber++;
  console.log(questionNumber);
  $(".questionNumber").text(questionNumber+1);
  console.log(questionNumber);
}

function startQuiz() {
  // questionNumber++;
  $(".startButton").click(function (event) {
    event.preventDefault();
    $(".beginQuiz").remove();
    $(".questionForm").css("display", "block");
    renderQuestion();
  });
}

function renderQuestion() {
  $(".questionForm").html(generateQuestion());
  userSelectAnswer();
}
///////////////////////////////////////////////////////////////////
//   function userSelectAnswer () {
//     $('.questionForm').click(function(event){
//       event.preventDefault();
//       let selected = $('input:checked');
//       let answer = selected.val();
//       let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
//       if (answer === correctAnswer) {
//         selected.parent().addClass('correct');
//         ifAnswerIsCorrect();
//       } else {
//         selected.parent().addClass('wrong');
//         ifAnswerIsWrong();
//       }
//     });
//   }
//   function ifAnswerIsCorrect () {
//     userAnswerFeedbackCorrect();
//     score++;
//   }
//   function ifAnswerIsWrong () {
//     userAnswerFeedbackWrong();
//   }
//   function userAnswerFeedbackCorrect () {
//     let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
//     $('.questionForm').html(`<div class="correctFeedback">
//     <form>
//     <fieldset>
//     <legend><img src="https://static.thenounproject.com/png/474922-200.png" alt="thumbs up" type="thumb-icon"></legend>
//     <h2>Correct!</h2>
//     <button type="button" class="button">Next Question</button>
//     <ul>
//         <li>Questions: ${questionNumber}/5</li>
//         <li> Correct: ${score}</li>
//     </ul>
//   </fieldset></form></div>`);
//   }
//  function  userAnswerFeedbackWrong() {
//   let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
//   $('.questionForm').html(`<div class="correctFeedback">
//   <form>
//   <fieldset>
//   <legend><img src="https://static.thenounproject.com/png/1101097-200.png" alt="thumbs up" type="thumb-icon"></legend>
//   <h2>Wrong answer! The correct answer is, <span>"${correctAnswer}"</span></h2>
//   <button type="button" class="button">Next Question</button>
//   <ul>
//       <li>Questions: ${questionNumber}/5</li>
//       <li> Correct: ${score}</li>
//   </ul>
// </fieldset>
// </form>
// </div>`);
// }
/////////////////////////////////////////////////////////////////
function generateQuiz() {
  startQuiz();
  // nextQuest();
}

function correctQuizAnswer() {
  score++;
  return `<div class="correctAnswer-${questionNumber}">
  <form>
  <fieldset>
    <legend>Correct!</legend>
    <button type="button" class="nextButton">Next Question</button>
    <ul>
        <li>Questions: ${questionNumber + 1}/5</li>
        <li> Correct: ${score}</li>
    </ul>
  </fieldset>
</form>
</div>`;
}

function wrongQuizAnswer() {
  let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
  return `<div class="wrongAnswer"> 
  <form>
  <fieldset>
    <legend>Wrong Answer</legend>
    <h2>The correct answer is: <span>"${correctAnswer}"</span></h2>
    <button type="button" class="nextButton">Next Question</button>
    <ul>
        <li>Questions: ${questionNumber + 1}/5</li>
        <li> Correct: ${score}</li>
    </ul>
  </fieldset>
</form>
</div>`;
}

function userSelectAnswer() {
  let inputArrays = $(".answerOption").find("input[type=radio]");
  console.log(inputArrays);
  $("#submitButton").click(function (event) {
    console.log("selectAnswer");
    event.preventDefault();
    let selected = $("input:checked");
    let answer = selected.val();
    let correctAnswer = `${STORE[questionNumber].correctAnswer}`;
    if (answer === correctAnswer) {
      $(".quiz-form").html(correctQuizAnswer());
      // score++;
    } else {
      console.log("supsup");
      $(".quiz-form").html(wrongQuizAnswer());
    }
    renderNextQuestion();
    questionNumber++;
  });
}

function renderNextQuestion() {
  console.log("cooolll");
  $(".nextButton").click(function (event) {
    event.preventDefault();
    renderQuestion();
    // userSelectAnswer();
    generateQuestion();
    changeQuestionNumber();
  });
}

function renderResults(){
  if (score = 5){
    $('.questionForm').html(`<div class="resultsFeedback">
    <h2>You're on fire!</h2>
    <p>You got ${score} / 5</p><p>You're ready to swim with the fishes!</p>
    <button class="restartButton">Restart Quiz</button>
    </div>`);
  }
  else {
    $('.questionForm').html(`<div class="resultsFeedback">
    <h2>Almost There</h2>
    <p>You got ${score} / 5</p><p>You're ready to swim with the fishes!</p>
    <button class="restartButton">Restart Quiz</button>
    </div>`);
  }
}

function restartQuiz() {
  console.log("cooolll");
  $(".restartButton").click(function (event) {
    location.reload();
  });
}

function ifAnswerIsCorrect() {
  userAnswerFeedbackCorrect();
  updateScore();
}
function ifAnswerIsWrong() {
  userAnswerFeedbackWrong();
}
$(generateQuiz);