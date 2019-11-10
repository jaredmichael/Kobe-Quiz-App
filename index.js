const STORE = [
    {
      question: 'Kobe attended this highschool',
      answers: ['Oak Hill Academy', 'Scripps Ranch', 'Lower Merion', 'St. Vincent St. Mary'],
      correctAnswer: 'Lower Merion',
    },
    {
      question: 'This NBA team drafted Kobe',
      answers: ['Charlotte Hornets', 'Boston Celtics', 'New Orleans Hornets', 'Los Angeles Lakers'],
      correctAnswer: 'Charlotte Hornets',
    },
    {
      question: 'Kobe\'s middle name is',
      answers: ['Beef', 'Vino', 'Bean', 'Mamba'],
      correctAnswer: 'Bean',
    },
    {
      question: 'Kobe grew up in this country',
      answers: ['USA', 'Spain', 'France', 'Italy'],
      correctAnswer: 'Italy',
    },
    {
      question: 'Kobe has won this many rings',
      answers: ['3', '4', '5', '6'],
      correctAnswer: '5',
    },
    {
      question: 'Kobe wore these two numbers in LA',
      answers: ['8 & 23', '9 & 24', '8 & 33', '8 & 24'],
      correctAnswer: '8 & 24',
    },
    {
      question: 'Kobe scored 81 pts on this team',
      answers: ['Hawks', 'Raptors', 'Celtics', 'Knicks'],
      correctAnswer: 'Raptors',
    },
    {
      question: 'Kobe was sponsored by these 3 brands',
      answers: ['Fila | Jordan | Nike', 'Adidas | Jordan | Nike', 'Converse | Adidas | Nike', 'Nike | Reebok | Adidas'],
      correctAnswer: 'Adidas | Jordan | Nike',
    },
    {
      question: 'This is not true of Kobe',
      answers: ['1st ever guard drafted from highschool', '2x NBA Regular Season MVP', 'scored more pts than Michael Jordan', 'most career assists among the 30k pts club'],
      correctAnswer: '2x NBA Regular Season MVP',
    },
    {
      question: 'Kobe won this award after retirement',
      answers: ['Grammy', 'Golden Globe', 'Academy Award', 'Nobel Prize'],
      correctAnswer: 'Academy Award',
    }
  ];
  
  let shotsTaken = 0;
  let score = 0;
  
  //Questions Pages
  //build question from STORE
  function generateQuestion() {
    if (shotsTaken < STORE.length) {
      return `<div class="question-${shotsTaken}">
      <h1>${STORE[shotsTaken].question}</h1>
      <form>
      <fieldset>
      <legend>Choose wisely</legend>
      <label class="answerOption">
      <input type="radio" value="${STORE[shotsTaken].answers[0]}" name="answer" required>
      <span>${STORE[shotsTaken].answers[0]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${STORE[shotsTaken].answers[1]}" name="answer" required>
      <span>${STORE[shotsTaken].answers[1]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${STORE[shotsTaken].answers[2]}" name="answer" required>
      <span>${STORE[shotsTaken].answers[2]}</span>
      </label>
      <label class="answerOption">
      <input type="radio" value="${STORE[shotsTaken].answers[3]}" name="answer" required>
      <span>${STORE[shotsTaken].answers[3]}</span>
      </label>
      </br>
      <button type="submit" class="submitButton">Submit</button>
      </fieldset>
      </form>
      </div>`;
    } else {
      renderResults();
      restartQuiz();
      $('.shotsTaken').text(10)
    }
  }
  
  //render stats
  //update question number
  function updateQuestionNumber() {
    shotsTaken++;
    $('.shotsTaken').text(shotsTaken + 1);
  }
  
  //update score
  function updateScore() {
    score++;
  }
  
  //Start Page
  //on startButton click | hide start div | render quizForm div 
  function startQuiz() {
    console.log('startQuiz ran');
    $('.start').on('click', '.startButton', function (event) {
      $('.quizForm').css('display', 'block');
      $('.start').css('display', 'none');
      $('.shotsTaken').text(1);
    });
  }
  
  //render question
  function renderQuestion() {
    $('.quizForm').html(generateQuestion());
  }
  
  
  //user selects answer on submit click | render feedback
  function answerSubmit() {
    $('main').on('submit', 'form', function (event) {
      event.preventDefault();
      let selected = $('input:checked');
      let answer = selected.val();
      let correctAnswer = `${STORE[shotsTaken].correctAnswer}`;
      if (answer === correctAnswer)  {
        selected.parent().addClass('correct');
        ifAnswerCorrect();
      } else {
        selected.parent().addClass('wrong');
        ifAnswerWrong();
      }
    });
  }
  
  function ifAnswerCorrect () {
    feedbackCorrect();
    newScore();
  }
  
  function ifAnswerWrong () {
    feedbackWrong();
  }
  
  //feedback for correct answer
  function feedbackCorrect() {
    let correctAnswer = `${STORE[shotsTaken].correctAnswer}`;
    $('.quizForm').html(`<div class="correctFeedback"><h1><b>Slam Dunk!</b></h1>
    <iframe src="https://giphy.com/embed/12Tob44HkDJty8" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></br>
    <button type=button class="nextButton">Next Shot</button></div>`);
  }
  
  //feedback for wrong answer
  function feedbackWrong () {
    let correctAnswer = `${STORE[shotsTaken].correctAnswer}`;
    $('.quizForm').html(`<div class="correctFeedback"><h1><b>Rejection!</b></h1><br>
    <iframe src="https://giphy.com/embed/wV0Zk8pjujsL6" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></br>
    <h2>The correct answer is <span>"${correctAnswer}"</span></h2>
    <button type=button class="nextButton">Next Shot</button></div>`);
  }
  
  //update score
  function newScore() {
    updateScore();
    $('.score').text(score);
  }
  
  //feedback for quiz pass or fail results
  function renderResults () {
    if (score >= 8) {
      $('.quizForm').html(`<div class="results correctFeedback"><h1>Mama, there goes that man!</h1>
      <iframe src="https://giphy.com/embed/xT9DPDoWMicL4nU3NC" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <h2>You got ${score} / 10</br>You're a certified kobe stan</h2><button class="restartButton">Restart Quiz</button></div>`);
    } else {
      $('.quizForm').html(`<div class="results correctFeedback"><h1>You don't know Kobe!</h1>
      <iframe src="https://giphy.com/embed/RCHqP8egdST28" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
      <h2>You got ${score} / 10</br>Get back to practice and fine tune your technique</h2><button class="restartButton">Restart Quiz</button></div>`);
    }
  }
  
  //render next question
  function renderNextQuestion() {
    $('main').on('click', '.nextButton', function (event) {
      updateQuestionNumber();
      renderQuestion();
    });
  }
  
  //restart quiz on restart click | reloads to start page
  function restartQuiz() {
    $('main').on('click', '.restartButton', function (event) {
      location.reload();
    });
  }
  
  function buildQuiz() {
    startQuiz();
    renderQuestion();
    answerSubmit();
    renderNextQuestion();
  }
  
  $(buildQuiz);
  
  