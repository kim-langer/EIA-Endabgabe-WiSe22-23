/* Interface für die Objekte*/
interface Question {
  text: string;
  answers: string[];
  correctAnswer: string;
  moreinfos: string;
}

//* Das Starten des Quizzes*//

/* eine Variable für das flexible Aufrufen neuer Fragen, unabhängig vom ausgewählten Quiz*/
let currentQuestions: Question[];

/* vom HTML Quiz*/

document.querySelector("#HTMLQuiz").addEventListener("click", function () {
  currentQuestions = questionsHTML;
  let newcontent = document.querySelector("#content")
  /* Die Fragen werden zufällig ausgewählt*/
  const randomFrage = Math.floor(Math.random() * currentQuestions.length);
  newcontent.innerHTML = shownewquestion(currentQuestions[randomFrage]);
  question = currentQuestions[randomFrage];
  currentQuestions.splice(randomFrage, 1);
});

/* vom CSS Quiz*/

document.querySelector("#CSSQuiz").addEventListener("click", function () {
  let newcontent = document.querySelector("#content")
  const randomFrage = Math.floor(Math.random() * questionsHTML.length);
  newcontent.innerHTML = shownewquestion(questionsCSS[randomFrage])
});

/* vom TypeScript Quiz*/

document.querySelector("#TypeScriptQuiz").addEventListener("click", function () {
  let newcontent = document.querySelector("#content")
  const randomFrage = Math.floor(Math.random() * questionsHTML.length);
  newcontent.innerHTML = shownewquestion(questionsTypeScript[randomFrage])
});

/* vom gemischten Quiz*/

document.querySelector("#mixedQuiz").addEventListener("click", function () {
  let newcontent = document.querySelector("#content")
  const randomFrage = Math.floor(Math.random() * questionsHTML.length);
  newcontent.innerHTML = shownewquestion(questionsmixed[randomFrage])
});

/* Quiz-Array für das HTML Quiz*/

let questionsHTML: Question[] = [
  {
    text: "Was heißt HTML?",
    answers: ["Hyper Text Markup Language", "Hyper Titanium Mark Leauge", "Hyper Text Mission Language"],
    correctAnswer: "Hyper Text Markup Language",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
  {
    text: "Mit welchem Tag kann man in HTML einen Absatz erstellen?",
    answers: ["br", "bi", "bs"],
    correctAnswer: "br",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
  {
    text: "Müssen alle HTML Tags wieder geschlossen werden?",
    answers: ["Nein", "Ja", "Vielleicht"],
    correctAnswer: "Nein",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
  {
    text: "Was ist ein Attribut?",
    answers: ["zusätzliche Information, die ein Tag beinhaltet", "Eine Walart", "Eine Bachelorarbeit"],
    correctAnswer: "zusätzliche Information, die ein Tag beinhaltet",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
  {
    text: "Mit welchem Tag kann man einen Link einbauen?",
    answers: ["a", "b", "c"],
    correctAnswer: "a",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
  {
    text: "Funktioniert HTML auch ohne CSS?",
    answers: ["Ja", "Nein", "Manchmal"],
    correctAnswer: "Ja",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
  {
    text: "Für was steht API?",
    answers: ["Application Programming Interface", "All Programmers Interface", "Altes Programmier Interface"],
    correctAnswer: "Application Programming Interface",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
  {
    text: "Welche HTML Variante nutzt man aktuell?",
    answers: ["HTML4", "HTML5", "HTML8"],
    correctAnswer: "HTML5",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
];

/* Quiz-Array für das CSS Quiz*/

let questionsCSS: Question[] = [
  {
    text: "Was heißt CSS?",
    answers: ["Cascading Style Sheets", "Caspar Simon Shurk", "Computer Style Sheets"],
    correctAnswer: "Hyper Text Markup Language",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
  {
    text: "Was bedeutet der Selektor #?",
    answers: ["class", "id", "first"],
    correctAnswer: "id",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
  {
    text: "Was ist die Aufgabe von CSS?",
    answers: ["Studenten begeistern", "Professoren begeistern", "Den Code stylen"],
    correctAnswer: "Den Code stylen",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
  // weitere Fragen ...
];

/* Quiz-Array für das TypeScript Quiz*/

let questionsTypeScript: Question[] = [
  {
    text: "Was heißt CSS?",
    answers: ["Cascading Style Sheets", "Caspar Simon Shurk", "Computer Style Sheets"],
    correctAnswer: "Hyper Text Markup Language",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
  {
    text: "Was bedeutet der Selektor Hashtag",
    answers: ["class", "id", "first"],
    correctAnswer: "id",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
  // weitere Fragen ...
];

/* Quiz-Array für das gemischte Quiz*/

let questionsmixed: Question[] = [
  {
    text: "Was heißt CSS?",
    answers: ["Cascading Style Sheets", "Caspar Simon Shurk", "Computer Style Sheets"],
    correctAnswer: "Hyper Text Markup Language",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
  {
    text: "Was heißt HTML?",
    answers: ["Hyper Text Markup Language", "Hyper Titanium Mark Leauge", "Hyper Text Mission Language"],
    correctAnswer: "Hyper Text Markup Language",
    moreinfos: "https://de.wikipedia.org/wiki/Heidelbeere"
  },
  // weitere Fragen ...
];

/* Variablen für den Punktestand*/

let correctanswers: number = 0;

/* Variable, um auf den Array zugreifen zu können*/

let question: Question;

/* Funktion, die eine neue Frage anzeigt*/

function shownewquestion(question: Question): string {
  /* Die Anwortmöglichkeiten erscheinen in zufälliger Reihenfolge */
  let getanswer = question.answers.sort(() => Math.random() - 0.5);
  return `<div>
      <h1 class="starttext">${question.text}</h1>
      <button id="button0" class="buttondesign">${question.answers[0]}</button> 
      <button id="button1" class="buttondesign">${question.answers[1]}</button>
      <button id="button2" class="buttondesign">${question.answers[2]}</button>
      <p id="punktestand">Dein Punktestand: ${correctanswers}</p>
    </div>`;
};

//* Funktion, die die Antwort auf richtig und falsch überprüft*//

let moreinfos= document.querySelector("#moreinfos") as HTMLLinkElement

function checkAnswer(question: Question, clickedanswer: string) {
  if (question.correctAnswer == clickedanswer)

    /* Es wird angezeigt, dass die Frage richtig beantwortet wurde*/ {
    document.getElementById("nextquestionbutton").style.display = "block";
    document.querySelector("#deinfeedback").innerHTML = "Juhu, das ist richtig!";
    correctanswers++;
    document.querySelector("#punktestand").innerHTML = "Dein Punktestand: " + correctanswers;
    /* Weitere Informationen werden angezeigt*/ 
    document.getElementById("#moreinfos").style.display = "block"; 
    moreinfos.href = question.moreinfos;
    document.getElementById("#moreinfos").innerHTML = "Mehr Informationen";
  }
  /* Es wird angezeigt, dass die Frage falsch beantwortet wurde*/

  else {
    document.getElementById("nextquestionbutton").style.display = "block";
    document.querySelector("#deinfeedback").innerHTML = "Das war leider nicht korrekt!";
  }
};

/* Eventlistener fürs Klicken auf die Antworten */

document.addEventListener("click", function (event: MouseEvent) {
  let button = event.target as HTMLButtonElement
  if (button.id == "button0") {
    checkAnswer(question, question.answers[0]);
  } else if (button.id == "button1") {
    checkAnswer(question, question.answers[1]);
  } else if (button.id == "button2") {
    checkAnswer(question, question.answers[2]);
  }
});

//* Es werden so lange Fragen gestellt, bis die 5 Punkte erreicht sind*//

function questionsuntil5(punktestand: number): void {
  while (correctanswers < 5) {
    // weiter Fragen stellen
    shownewquestion;
  }
  console.log("Yeyy geschafft.");
};

//* Beim Klick auf den Weiter Button wird die nächste Frage erscheinen *//

let weiterbutton = document.querySelector("#nextquestionbutton")
weiterbutton.addEventListener("click", function () {
  let newcontent = document.querySelector("#content")
  const randomFrage = Math.floor(Math.random() * currentQuestions.length);
  newcontent.innerHTML = shownewquestion(currentQuestions[randomFrage]);
  question = currentQuestions[randomFrage];
  currentQuestions.splice(randomFrage, 1);
  document.getElementById("nextquestionbutton").style.display = "none";
  document.querySelector("#deinfeedback").innerHTML = "";
  questionsuntil5;
});


 