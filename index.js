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

$(startQuiz)
  
//   function userSelectAnswer () {
//     $('form').on('submit', function (event) {
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