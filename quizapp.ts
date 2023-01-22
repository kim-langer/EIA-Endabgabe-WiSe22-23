//* Das Starten des Quizzes*//
/* vom HTML Quiz*/
document.querySelector("#HTMLQuiz").addEventListener("click", function () {
    let newcontent = document.querySelector("#content")
    /* Die Fragen werden zufällig ausgewählt*/
    const randomFrage = Math.floor(Math.random() * questionsHTML.length);
    newcontent.innerHTML = shownewquestion(questionsHTML[randomFrage]);
    /* Nachdem eine Frage genutzt wurde, wird sie aus dem Array entfernt und nicht nochmal gezeigt*/
    const question = questionsHTML[randomFrage];
    questionsHTML.splice(randomFrage, 1);
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
  
  /* Interface für die Objekte*/
  interface Question {
    text: string;
    answers: string[];
    correctAnswer: string;
  }
  
  /* Quiz-Array für das HTML Quiz*/
  
  let questionsHTML: Question[] = [
    {
      text: "Was heißt HTML?",
      answers: ["Hyper Text Markup Language", "Hyper Titanium Mark Leauge", "Hyper Text Mission Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      text: "Mit welchem Tag kann man in HTML einen Absatz erstellen?",
      answers: ["br", "bi", "bs"],
      correctAnswer: "br"
    },
    {
      text: "Müssen alle HTML Tags wieder geschlossen werden?",
      answers: ["Nein", "Ja", "Vielleicht"],
      correctAnswer: "Nein"
    },
    {
      text: "Was ist ein Attribut?",
      answers: ["zusätzliche Information, die ein Tag beinhaltet", "Eine Walart", "Eine Bachelorarbeit"],
      correctAnswer: "zusätzliche Information, die ein Tag beinhaltet"
    },
    {
      text: "Mit welchem Tag kann man einen Link einbauen?",
      answers: ["a", "b", "c"],
      correctAnswer: "a"
    },
    {
      text: "Funktioniert HTML auch ohne CSS?",
      answers: ["Ja", "Nein", "Manchmal"],
      correctAnswer: "Ja"
    },
    {
      text: "Für was steht API?",
      answers: ["Application Programming Interface", "All Programmers Interface", "Altes Programmier Interface"],
      correctAnswer: "Application Programming Interface"
    },
    {
      text: "Welche HTML Variante nutzt man aktuell?",
      answers: ["HTML4", "HTML5", "HTML8"],
      correctAnswer: "HTML5"
    },
  ];
  
  /* Quiz-Array für das CSS Quiz*/
  
  let questionsCSS: Question[] = [
    {
      text: "Was heißt CSS?",
      answers: ["Cascading Style Sheets", "Caspar Simon Shurk", "Computer Style Sheets"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      text: "Was bedeutet der Selektor #?",
      answers: ["class", "id", "first"],
      correctAnswer: "id"
    },
    {
      text: "Was ist die Aufgabe von CSS?",
      answers: ["Studenten begeistern", "Professoren begeistern", "Den Code stylen"],
      correctAnswer: "Den Code stylen"
    },
    // weitere Fragen ...
  ];
  
  /* Quiz-Array für das TypeScript Quiz*/
  
  let questionsTypeScript: Question[] = [
    {
      text: "Was heißt CSS?",
      answers: ["Cascading Style Sheets", "Caspar Simon Shurk", "Computer Style Sheets"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      text: "Was bedeutet der Selektor Hashtag",
      answers: ["class", "id", "first"],
      correctAnswer: "id"
    },
    // weitere Fragen ...
  ];
  
  /* Quiz-Array für das gemischte Quiz*/
  
  let questionsmixed: Question[] = [
    {
      text: "Was heißt CSS?",
      answers: ["Cascading Style Sheets", "Caspar Simon Shurk", "Computer Style Sheets"],
      correctAnswer: "Hyper Text Markup Language"
    },
    {
      text: "Was heißt HTML?",
      answers: ["Hyper Text Markup Language", "Hyper Titanium Mark Leauge", "Hyper Text Mission Language"],
      correctAnswer: "Hyper Text Markup Language"
    },
    // weitere Fragen ...
  ];
  
  /* Variable für den Punktestand*/
  
  let score = 0;
  
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
      <p id="punktestand">Dein Punktestand: ${score}</p>
    </div>`;
  };
  
  //* Funktion, die die Antwort auf richtig und falsch überprüft*//
  
  function checkAnswer(question: Question, clickedanswer: string) {  
    if (question.correctAnswer == clickedanswer) 
  
    /* Es wird angezeigt, dass die Frage richtig beantwortet wurde*/
  
    { document.getElementById("nextquestionbutton").style.display = "block";
      document.querySelector("#deinfeedback").innerHTML = "Juhu, das ist richtig!";
      score++;
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
  
  /* Es werden so lange Fragen gestellt, bis die 5 Punkte erreicht sind*/
  
  function questionsuntil5(Points: number): void {
    while (score < 5) {
      // weiter Fragen stellen
      shownewquestion;}
      console.log("Yeyy geschafft.");
  }
  