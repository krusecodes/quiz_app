let questionNumber = 1;
let score = 0;

function generateQuestion () {
  console.log("hello");
  if (questionNumber < STORE.length) {
      return `<div class="questionForm-${questionNumber}">
      <form class="quiz-form">
      <fieldset>
      <legend>${STORE[questionNumber].question}</legend>
      <label class="answerOption">
      <input type="radio" value="${STORE[questionNumber].answer[0]}" name="answer" required>
      <span>${STORE[questionNumber].answer[0]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${STORE[questionNumber].answer[1]}" name="answer" required>
      <span>${STORE[questionNumber].answer[1]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${STORE[questionNumber].answer[2]}" name="answer" required>
      <span>${STORE[questionNumber].answer[2]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${STORE[questionNumber].answer[3]}" name="answer" required>
      <span>${STORE[questionNumber].answer[3]}</span>
      </label>
      <button type="submit" class="startButton">Submit</button>
      <ul>
        <li>Questions: ${questionNumber}/5</li>
        <li>Correct: ${score}</li>
      </ul> 
      </fieldset>
      </form>
      </div>`;
      questionNumber++
  } else {
      renderResults();
      restartQuiz();
      $('.questionNumber').text(5)
    }
  }

function startQuiz() {
    $('.startButton').click(function(event) {
      console.log(startQuiz);
      event.preventDefault();
      $('.beginQuiz').remove();
      $('.questionForm').css('display', 'block');
      renderQuestion ();
  });
  }

  function renderQuestion () {
    $('.questionForm').html(generateQuestion());
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
  function userSelectAnswer () {
    $(".questionform").on("submit", function (event) {
    event.preventDefault();
    let selected = $("input:checked");
    let answer = selected.val();
    let correctAnswer = `${STORE[qNum].correctAnswer}`;
    if (answer === correctAnswer) {
      return (<div class="correctAnswer-${questionNumber}"> 
      <form>
      <fieldset>
        <legend>Correct!</legend>
        <button type="button" class="button">Next Question</button>
        <ul>
            <li>Questions: ${score}/5</li>
            <li> Correct: ${questionNumber}</li>
        </ul>
      </fieldset>
    </form>
    </div>)
    score++
    } else {
      return (<div class='wrongAnswer-1'> 
      <form>
      <fieldset>
        <legend>Wrong Answer</legend>
        <h2>The correct answer is<span>${correctAnswer}</span></h2>
        <button type="button" class="button">Next Question</button>
        <ul>
            <li>Questions: ${score}/5</li>
            <li> Correct: ${questionNumber}</li>
        </ul>
      </fieldset>
    </form>
    </div>)
    }
  });
}


function ifAnswerIsCorrect () {
  userAnswerFeedbackCorrect();
  updateScore();
}

function ifAnswerIsWrong () {
  userAnswerFeedbackWrong();
}


$(startQuiz)