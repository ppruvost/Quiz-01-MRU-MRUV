// Définition des questions du quiz
const questions = [
  {
    question: "1. Dans un MRU, la vitesse :",
    options: ["Reste constante", "Diminue", "Augmente", "Varie aléatoirement"],
    answer: 0,
    explication: "Dans un MRU, le mobile se déplace en ligne droite avec une vitesse constante."
  },
  {
    question: "2. Dans un MRU, l’accélération est :",
    options: ["Constante et non nulle", "Variable", "Égale à zéro", "Négative"],
    answer: 2,
    explication: "L’accélération mesure la variation de vitesse. Si la vitesse ne change pas, l’accélération est nulle."
  },
  {
    question: "3. La formule de la vitesse dans un MRU est :",
    options: ["v = d / t", "v = t / d", "v = m × a", "v = a × t"],
    answer: 0,
    explication: "Dans un mouvement uniforme, la vitesse se calcule comme distance divisée par le temps."
  }
  // Ajoutez ici vos autres questions au format ci-dessus
];

let current = 0;
let score = 0;

// Affiche la question courante et les options
function showQuestion() {
  if (current < questions.length) {
    const q = questions[current];
    let html = `<div class="question">${q.question}</div><div class="options">`;
    q.options.forEach((opt, idx) => {
      html += `<label><input type="radio" name="q" value="${idx}"> ${opt}</label>`;
    });
    html += "</div>";
    document.getElementById("quiz").innerHTML = html;
    document.getElementById("explication").innerHTML = "";
    document.getElementById("submit").disabled = false;
  } else {
    document.getElementById("quiz").innerHTML = "<strong>Quiz terminé !</strong>";
    document.getElementById("score").innerText = `Résultat : ${score} / ${questions.length}`;
    document.getElementById("submit").disabled = true;
    document.getElementById("explication").innerHTML = "";
  }
}

// Gère le clic sur le bouton "Soumettre"
document.getElementById("submit").onclick = function() {
  let selected = document.querySelector('input[name="q"]:checked');
  if (!selected) {
    document.getElementById("explication").innerHTML = "Veuillez sélectionner une réponse.";
    return;
  }
  let answer = parseInt(selected.value);
  if (answer === questions[current].answer) {
    score++;
    document.getElementById("explication").innerHTML = `<span class="success">Bonne réponse !</span> ${questions[current].explication}`;
  } else {
    document.getElementById("explication").innerHTML = `<span class="fail">Mauvaise réponse.</span> ${questions[current].explication}`;
  }
  current++;
  document.getElementById("submit").disabled = true;
  setTimeout(showQuestion, 1600);
  document.getElementById("score").innerText = `Score actuel : ${score} / ${questions.length}`;
};

// Initialise le quiz à l’ouverture de la page
showQuestion();
