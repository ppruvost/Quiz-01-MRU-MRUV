// Définition des questions du quiz (index numérique pour bonne réponse)
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
  },
  {
    question: "4. Une voiture roule à 90 km/h pendant 2 h. Quelle distance parcourt-elle ?",
    options: ["45 km", "90 km", "180 km", "200 km"],
    answer: 2,
    explication: "Distance = vitesse × temps → 90 × 2 = 180 km."
  },
  {
    question: "5. La position d’un mobile en MRU est donnée par :",
    options: ["x = x0 + v × t", "x = v × t² / 2", "x = m × v", "x = a × t²"],
    answer: 0,
    explication: "La position évolue linéairement dans le temps avec une vitesse constante."
  },
  // Ajoutez les autres questions selon ce modèle…
];

let current = 0;
let score = 0;

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
  // Délai d'affichage à 10 secondes
  setTimeout(showQuestion, 10000);
  document.getElementById("score").innerText = `Score actuel : ${score} / ${questions.length}`;
};

// Initialisation du quiz
showQuestion();
