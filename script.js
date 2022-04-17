var score = 0;

const quizData = [{
  question: "From the following which one has the highest life expectancy ?",
  a: "USA",
  b: "United Kingdom",
  c: "France",
  d: "Hong Kong",
  correct: "d",
},
  {
    question: "Which language has the more native speakers ?",
    a: "English",
    b: "Spanish",
    c: "Turkish",
    d: "French",
    correct: "b",
  },
  {
    question: "Which is the only body part that is fully-grown from birth? ?",
    a: "Eyes",
    b: "Brain",
    c: "Heart",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "How many hearts does an octopus have?",
    a: "2",
    b: "3",
    c: "1",
    d: "4",
    correct: "b",
  },
  {
    question: "What planet is closest to the sun? ",
    a: "Mercury",
    b: "Earth",
    c: "Mars",
    d: "Pluto",
    correct: "a",
  },
  {
    question: "How many dots appear on a pair of dice? ",
    a: "40",
    b: "35",
    c: "44",
    d: "42",
    correct: "d",
  },
  {
    question: "Compared to their body weight, what animal is the strongest ?",
    a: "cow",
    b: "Elephant",
    c: "Ant",
    d: "Dung Beetle",
    correct: "d",
  },
  {
    question: "What country has the most islands?",
    a: "France",
    b: "sweden",
    c: "germen",
    d: "Uk",
    correct: "b",
  },
  {
    question: "What is the only continent with land in all four hemispheres?",
    a: "Asia",
    b: "Europe",
    c: "Africa",
    d: "Latin America",
    correct: "c",
  },
  {
    question: "On what continent would you find the world’s largest desert?",
    a: "Africa",
    b: "Antartica",
    c: "North America",
    d: "Australia",
    correct: "b",
  },
  {
    question: "What is the capital of Ireland ?",
    a: "Duplin",
    b: "Bones Aires",
    c: "paris",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "What is the capital of Canada",
    a: "Tokyo",
    b: "Ottawa",
    c: "Canbbera",
    d: "Rome",
    correct: "b",
  },
  {
    question: "What country drinks the most coffee ?",
    a: "Brazil",
    b: "Germen",
    c: "Finland",
    d: "Portugal",
    correct: "c",
  },
  {
    question: "What is the national sport of Japan?",
    a: "Running",
    b: "Swimming",
    c: "Football",
    d: "Sumo Wrestling",
    correct: "d",
  },
  {
    question: "What is the largest Spanish speaking city in the world? ",
    a: "Barcelona",
    b: "Spain",
    c: "Mexico City",
    d: "Cartagena",
    correct: "c",
  },];
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const nextButton = document.getElementById("submit");

let currentQuiz = 0;

loadQuiz();

// Function that loads question
function loadQuiz() {
  // First Deselect Default Option
  deselectAnswer();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question; // Main Question
  a_text.innerText = currentQuizData.a; // Option a
  b_text.innerText = currentQuizData.b; // Option b
  c_text.innerText = currentQuizData.c; // Option c
  d_text.innerText = currentQuizData.d; // Option d
}

// Deselection Default Option
function deselectAnswer() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

// Get Selected Option
const getSelected = () => {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
};

nextButton.addEventListener("click", () => {
  // Check to see the answer
  const answer = getSelected();

  if (answer) {
    if (answer == quizData[currentQuiz].correct) {
      score++;
    }
  }
  // Increment Upon Click
  currentQuiz++;

  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `
    <h3>You answered ${score} out of ${quizData.length} correctly.</h3>
    <button onclick="location.reload()">Retake Quiz!</button>`;
  }
});
function fed(){
  alert('Thank you for your feedback!')
}