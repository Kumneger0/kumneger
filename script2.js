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
  

var k = 0;
function show(){
  if(k==quizData.length){
    alert("That's all")
    location.reload();
  }
  else if(k!=quizData.length){
k++;
var questions = document.querySelector("#ques");
var option_a = document.querySelector("#choice-a");
var option_b = document.querySelector("#choice-b");
var option_c = document.querySelector("#choice-c");
var option_d = document.querySelector("#choice-d");
var correct = document.querySelector("#correct");
questions.innerText = quizData[k].question;
option_a.innerText = quizData[k].a;
option_b.innerText = quizData[k].b;
option_c.innerText = quizData[k].c;
option_d.innerText = quizData[k].d;
correct.innerText = quizData[k].correct;
}
}
show();