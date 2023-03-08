// Обработчик события DOMContentLoaded гарантирует, что код начнет выполняться только после загрузки всей HTML-структуры страницы
document.addEventListener("DOMContentLoaded", function() {
// ------------------------Модальные окна для Бергер-меню, Регистрации и входа -------------------------------------------------------
// Получаем ссылки на элементы модальных окон
var modal_nav = document.getElementById("myModal");
var registerModal = document.getElementById("registerModal");
var BurgerModal = document.getElementById("BurgerModal"); // Получаем ссылки на элементы кнопок открытия модальных окон

var openModalBtn = document.getElementById("openModal");
var openRegisterModalBtn = document.getElementById("openRegisterModal");
var openBurger = document.getElementById("openBurger"); 
// Получаем ссылки на элементы кнопок закрытия модальных окон

var closeBtns = document.getElementsByClassName("close"); 




openModalBtn.onclick = function () {
  modal_nav.style.display = "block";
}; 


openBurger.onclick = function() {
  BurgerModal.style.display = "block";
  var openRegisterBurger = BurgerModal.querySelector('.registration');

  openRegisterBurger.onclick = function() {
    modal_nav.style.display = "block";
    BurgerModal.style.display = "none";
  }

  document.querySelector('.btn-burger').onclick = function() {
    openBurger.classList.remove('show');
    document.body.classList.remove('scroll-lock');
    document.querySelector('.nav_burger').classList.add('openBurger');
    BurgerModal.style.display = "none";
  }
};

openRegisterModalBtn.onclick = function () {
  registerModal.style.display = "block";
};

var _loop = function _loop(i) {
  closeBtns[i].onclick = function () {
    closeBtns[i].closest(".modal_nav,.nav_burger").style.display = "none";
  };
};

for (var i = 0; i < closeBtns.length; i++) {
  _loop(i);
} // Обработчик нажатия на любое место вне модальных окон - закрываем их


window.addEventListener('click', function (event) {
  if (event.target == modal_nav) {
    modal_nav.style.display = "none";
  } else if (event.target == registerModal) {
    registerModal.style.display = "none";
  }else if (event.target == BurgerModal) {
    BurgerModal.style.display = "none";
  }
});
// ----------------Test------------------------------



const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answers');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const next = document.getElementById('next');

let currentQuiz = 0;
let score = 0;

loadQuiz();






function loadQuiz(){
  deselectAnswers();
  nextQuestion();
  const currentQuizData = quizData[currentQuiz];

  questionElement.innerText = currentQuizData.question;
  
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
// ------------------Счетчик вопросов----------------------------------------

// Начальное значение счетчика вопросов
let currentQuestion = 1;
const questionCounter = document.getElementById('question-number');
questionCounter.innerText = currentQuestion;
function nextQuestion() {
  currentQuestion++;
  questionCounter.innerText = currentQuestion;
}

// -------------------------------------------------------------
function deselectAnswers(){
  answerElements.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
  let answer;

  answerElements.forEach(answerEl => {
      if(answerEl.checked){
          answer = answerEl.id;
      }
  });

  return answer;
}

next.addEventListener('click', () => {
  const answer = getSelected();

  if(answer){
      if(answer === quizData[currentQuiz].correct){
          score++;
      }
      nextQuestion(); // кнопка счетчика
      currentQuiz++;

      if(currentQuiz < quizData.length){
          loadQuiz();
      }
      else {
        quiz.innerHTML = `<div class="quiz__result">
          <h2 style="color: #ffffff; font-size: 28px; margin-bottom: 20px;">Вы ответили правильно на <span class="True__answers-test">${score}</span> из ${quizData.length} вопросов</h2> 
   
          <a href='Test.html'>
          <button style="background-color: #007bff; color: #fff; font-size: 16px; padding: 10px 20px; border: none; border-radius: 4px; cursor: pointer;">Завершить тест</button>
          </a>
        </div>`;
      }
  }
});
function loadQuiz() {
  deselectAnswers();

  // Shuffle quiz data array to randomize the questions
  quizData.sort(() => Math.random() - 0.5);

  const currentQuizData = quizData[currentQuiz];

  // Shuffle the answer options for the current question
  const shuffledAnswers = shuffleArray([
    currentQuizData.a,
    currentQuizData.b,
    currentQuizData.c,
    currentQuizData.d,
  ]);

  questionElement.innerText = currentQuizData.question;
  a_text.innerText = shuffledAnswers[0];
  b_text.innerText = shuffledAnswers[1];
  c_text.innerText = shuffledAnswers[2];
  d_text.innerText = currentQuizData.d;
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



});
// ------------------------------------------------------------------------------------------------
// -------------------jQuery------------
