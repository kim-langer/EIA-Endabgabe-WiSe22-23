//* Anmerkung: Das Prinzip, dass die Fragen über return mit neuem HTML Content erstellt werden, sowie Funktionen die damit zusammenhängen, habe ich zusammen mit Marie Eckl erarbeitet.*//

/* Interface für die Objekte/der Aufbau einer Frage wird hier definiert*/
interface Question {
  text: string;
  answers: string[];
  correctAnswer: string;
  moreinfos: string;
}

//* Das Starten des Quizzes*//

/* eine Variable für das flexible Aufrufen neuer Fragen, unabhängig vom ausgewählten Quiz*/
let currentQuestions: Question[];

/* Start HTML Quiz*/

document.querySelector("#HTMLQuiz").addEventListener("click", function () {
  currentQuestions = questionsHTML;
  let newcontent = document.querySelector("#content")
  /* Die Fragen werden zufällig ausgewählt*/
  const randomFrage = Math.floor(Math.random() * currentQuestions.length);
  newcontent.innerHTML = shownewquestion(currentQuestions[randomFrage]);
  question = currentQuestions[randomFrage];
  currentQuestions.splice(randomFrage, 1);
});

/* Start CSS Quiz*/

document.querySelector("#CSSQuiz").addEventListener("click", function () {
  currentQuestions = questionsCSS;
  let newcontent = document.querySelector("#content")
  const randomFrage = Math.floor(Math.random() * currentQuestions.length);
  newcontent.innerHTML = shownewquestion(currentQuestions[randomFrage]);
  question = currentQuestions[randomFrage];
  currentQuestions.splice(randomFrage, 1);
});

/* Start TypeScript Quiz*/

document.querySelector("#TypeScriptQuiz").addEventListener("click", function () {
  currentQuestions = questionsTypeScript;
  let newcontent = document.querySelector("#content")
  const randomFrage = Math.floor(Math.random() * currentQuestions.length);
  newcontent.innerHTML = shownewquestion(currentQuestions[randomFrage]);
  question = currentQuestions[randomFrage];
  currentQuestions.splice(randomFrage, 1);
});

/* Start gemischtes Quiz*/

document.querySelector("#mixedQuiz").addEventListener("click", function () {
  currentQuestions = questionsmixed;
  let newcontent = document.querySelector("#content")
  const randomFrage = Math.floor(Math.random() * currentQuestions.length);
  newcontent.innerHTML = shownewquestion(currentQuestions[randomFrage]);
  question = currentQuestions[randomFrage];
  currentQuestions.splice(randomFrage, 1);
});

/* Quiz-Array für das HTML Quiz*/

let questionsHTML: Question[] = [
  {
    text: "Was heißt HTML?",
    answers: ["Hyper Text Markup Language", "Hyper Titanium Mark Leauge", "Hyper Text Mission Language"],
    correctAnswer: "Hyper Text Markup Language",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Mit welchem Tag kann man in HTML einen Absatz erstellen?",
    answers: ["br", "bi", "bs"],
    correctAnswer: "br",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Müssen alle HTML Tags wieder geschlossen werden?",
    answers: ["Nein", "Ja", "Vielleicht"],
    correctAnswer: "Nein",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Was ist ein Attribut?",
    answers: ["zusätzliche Information, die ein Tag beinhaltet", "Eine Walart", "Eine Bachelorarbeit"],
    correctAnswer: "zusätzliche Information, die ein Tag beinhaltet",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Mit welchem Tag kann man einen Link einbauen?",
    answers: ["a", "b", "c"],
    correctAnswer: "a",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Funktioniert HTML auch ohne CSS?",
    answers: ["Ja", "Nein", "Manchmal"],
    correctAnswer: "Ja",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Für was steht API?",
    answers: ["Application Programming Interface", "All Programmers Interface", "Altes Programmier Interface"],
    correctAnswer: "Application Programming Interface",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Welche HTML Variante nutzt man aktuell?",
    answers: ["HTML4", "HTML5", "HTML8"],
    correctAnswer: "HTML5",
    moreinfos: "https://www.w3schools.com"
  },
];

/* Quiz-Array für das CSS Quiz*/

let questionsCSS: Question[] = [
  {
    text: "Was heißt CSS?",
    answers: ["Cascading Style Sheets", "Caspar Simon Shurk", "Computer Style Sheets"],
    correctAnswer: "Hyper Text Markup Language",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Was bedeutet der Selektor #?",
    answers: ["class", "id", "first"],
    correctAnswer: "id",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Was ist die Aufgabe von CSS?",
    answers: ["Studenten begeistern", "Professoren begeistern", "Den Code stylen"],
    correctAnswer: "Den Code stylen",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Wie ändert man in CSS die Textfarbe?",
    answers: ["color", "height", "top"],
    correctAnswer: "color",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Wie ändert man in CSS die Hintergrundfarbe?",
    answers: ["background-color", "background-border", "background-height"],
    correctAnswer: "background-color",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Warum ist CSS so toll?",
    answers: ["macht mehr Spaß als Skriptsprache", "darum", "deshalb"],
    correctAnswer: "macht mehr Spaß als Skriptsprache",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Was heißt rot auf Englisch?",
    answers: ["red", "green", "yellow"],
    correctAnswer: "red",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Was beudetet display hidden?",
    answers: ["es versteckt sich", "es erscheint", "es möchte gehen"],
    correctAnswer: "es versteckt sich",
    moreinfos: "https://www.w3schools.com"
  },
];

/* Quiz-Array für das TypeScript Quiz*/

let questionsTypeScript: Question[] = [
  {
    text: "Wie kann man eine Variable definieren?",
    answers: ["let", "car", "hi"],
    correctAnswer: "let",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Was ist ein Array?",
    answers: ["Pfeil & Bogen", "eine Ansammlung von Werten", "ein britisches Frühstück"],
    correctAnswer: "eine Ansammlung von Werten",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Mit welcher Sprache steht TypeScript in Verbindung?",
    answers: ["JavaScript", "PHP", "was anderes"],
    correctAnswer: "JavaScript",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Wie kann man multiplizieren?",
    answers: ["*", "/", "%"],
    correctAnswer: "*",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Wie weist man einem Wert richtig oder falsch zu?",
    answers: ["boolean", "string", "EIA"],
    correctAnswer: "boolean",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Wie kann man das HTML manipulieren?",
    answers: ["mit innerHTML", "mit hiHTML", "gar nicht"],
    correctAnswer: "mit innerHTML",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Wann wurde die erste Version von TypeScript veröffentlicht?",
    answers: ["2012", "1923", "1980"],
    correctAnswer: "2012",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Was definiert den Wert einer Grundfarbe?",
    answers: ["RRGGBB", "PPHH9", "ZZ62"],
    correctAnswer: "RRGGBB",
    moreinfos: "https://www.w3schools.com"
  },
];

/* Quiz-Array für das gemischte Quiz*/

let questionsmixed: Question[] = [
  {
    text: "Wie kann man eine Variable definieren?",
    answers: ["let", "car", "hi"],
    correctAnswer: "let",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Was beudetet display hidden?",
    answers: ["es versteckt sich", "es erscheint", "es möchte gehen"],
    correctAnswer: "es versteckt sich",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Was ist die Aufgabe von CSS?",
    answers: ["Studenten begeistern", "Professoren begeistern", "Den Code stylen"],
    correctAnswer: "Den Code stylen",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Müssen alle HTML Tags wieder geschlossen werden?",
    answers: ["Nein", "Ja", "Vielleicht"],
    correctAnswer: "Nein",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Was ist ein Attribut?",
    answers: ["zusätzliche Information, die ein Tag beinhaltet", "Eine Walart", "Eine Bachelorarbeit"],
    correctAnswer: "zusätzliche Information, die ein Tag beinhaltet",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Mit welchem Tag kann man einen Link einbauen?",
    answers: ["a", "b", "c"],
    correctAnswer: "a",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Wie kann man das HTML manipulieren?",
    answers: ["mit innerHTML", "mit hiHTML", "gar nicht"],
    correctAnswer: "mit innerHTML",
    moreinfos: "https://www.w3schools.com"
  },
  {
    text: "Wann wurde die erste Version von TypeScript veröffentlicht?",
    answers: ["2012", "1923", "1980"],
    correctAnswer: "2012",
    moreinfos: "https://www.w3schools.com"
  },
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

let moreinfos = document.querySelector("#moreinfos") as HTMLLinkElement


function checkAnswer(question: Question, clickedanswer: string) {
   /* Variablen, die auf die Buttons aus der shownewquestion Funktion zugreifen*/
  let button0 = document.getElementById("button0") as HTMLButtonElement
  let button1 = document.getElementById("button1") as HTMLButtonElement
  let button2 = document.getElementById("button2") as HTMLButtonElement
  if (question.correctAnswer == clickedanswer)

    /* Es wird angezeigt, dass die Frage richtig beantwortet wurde*/ {
    document.getElementById("nextquestionbutton").style.display = "block";
    document.querySelector("#deinfeedback").innerHTML = "Juhu, das ist richtig!";
    correctanswers++;
    document.querySelector("#punktestand").innerHTML = "Dein Punktestand: " + correctanswers;
    /* Weitere Informationen werden angezeigt*/
    document.getElementById("moreinfos").style.display = "block";
    moreinfos.href = question.moreinfos;
    document.getElementById("moreinfos").innerHTML = "Du willst mehr darüber wissen? Klicke hier!";
    /* Die Buttons sind nur einmal klickbar, indem sie nach dem ersten Ausführen der Funktion deaktiviert werden*/
    button0.disabled = true;
    button1.disabled = true;
    button2.disabled = true;

  }
  /* Es wird angezeigt, dass die Frage falsch beantwortet wurde*/

  else {
    document.getElementById("nextquestionbutton").style.display = "block";
    document.querySelector("#deinfeedback").innerHTML = "Das war leider nicht korrekt!";
    document.getElementById("moreinfos").innerHTML = "Du willst mehr darüber wissen? Klicke hier!";
    button0.disabled = true;
    button1.disabled = true;
    button2.disabled = true;
  }
};

/* Eventlistener fürs Klicken auf die Antwortbuttons */

document.addEventListener("click", function (event: MouseEvent) {
  let button = event.target as HTMLButtonElement
  if (button.id == "button0") {
    checkAnswer(question, question.answers[0]
    );
  } else if (button.id == "button1") {
    checkAnswer(question, question.answers[1]);
  } else if (button.id == "button2") {
    checkAnswer(question, question.answers[2]);
  }
});

//* Es werden so lange Fragen gestellt, bis die 5 Punkte erreicht sind*//

function questionsuntil5(): void {
  if (correctanswers === 5) {
    const endscreen = (): string => {
      /* ... */
      return `<div>
          <h1 class="starttext2">Glückwünsch! Du hast 5/5 Punkten erreicht!</h1>
          <button id="nextroundbutton" class="buttondesign3">Yeyy, nächste Runde :)</button>
        </div>`;
    };
    const resultElement = document.querySelector("#quizfertig");
    resultElement.innerHTML = endscreen();
    let newcontent = document.querySelector("#content")
    newcontent.innerHTML = "";
    //* Eine neue Runde kann gestartet werden *//
    document.querySelector("#nextroundbutton").addEventListener("click", function () {
      window.location.reload();
    });
  }
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
  document.getElementById("moreinfos").innerHTML = "";
  questionsuntil5();
});
