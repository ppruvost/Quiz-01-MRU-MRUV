// =============================
// Initialisation d'EmailJS
// =============================
(function() {
  emailjs.init("TJHX0tkW1CCz7lv7a"); // clé publique EmailJS
})();

// =============================
// Variables globales
// =============================
let user = {
  nom: "",
  prenom: "",
};
let current = 0;
let score = 0;

// =============================
// Vérification du nom/prénom
// =============================
document.getElementById("startQuiz").addEventListener("click", () => {
  const nom = document.getElementById("nom").value.trim();
  const prenom = document.getElementById("prenom").value.trim();

  if (!nom || !prenom) {
    alert("Merci de renseigner votre nom et prénom avant de commencer.");
    return;
  }

  user.nom = nom;
  user.prenom = prenom;

  document.getElementById("userForm").style.display = "none";
  document.getElementById("quiz").style.display = "block";

  showQuestion();
});

// =============================
// Questions du quiz
// =============================
const questions = [
  {
    question: "1. Dans un MRU, la vitesse :",
    options: ["Reste constante", "Diminue", "Augmente", "Varie aléatoirement"],
    bonne_reponse: "Reste constante",
    explication: "Dans un MRU, le mobile se déplace en ligne droite avec une vitesse constante."
  },
  {
    question: "2. Dans un MRU, l’accélération est :",
    options: ["Constante et non nulle", "Variable", "Égale à zéro", "Négative"],
    bonne_reponse: "Égale à zéro",
    explication: "L’accélération mesure la variation de vitesse. Si la vitesse ne change pas, l’accélération est nulle."
  },
  {
    question: "3. La formule de la vitesse dans un MRU est :",
    options: ["v = d / t", "v = t / d", "v = m × a", "v = a × t"],
    bonne_reponse: "v = d / t",
    explication: "Dans un mouvement uniforme, la vitesse se calcule comme distance divisée par le temps."
  },
  {
    question: "4. Une voiture roule à 90 km/h pendant 2 h. Quelle distance parcourt-elle ?",
    options: ["45 km", "90 km", "180 km", "200 km"],
    bonne_reponse: "180 km",
    explication: "Distance = vitesse × temps → 90 × 2 = 180 km."
  },
  {
    question: "5. La position d’un mobile en MRU est donnée par :",
    options: ["x = x0 + v × t", "x = v × t² / 2", "x = m × v", "x = a × t²"],
    bonne_reponse: "x = x0 + v × t",
    explication: "La position évolue linéairement dans le temps avec une vitesse constante."
  },
  {
    question: "6. Le graphique position–temps d’un MRU est :",
    options: ["Une droite", "Une courbe", "Une parabole", "Une sinusoïde"],
    bonne_reponse: "Une droite",
    explication: "Car la position varie proportionnellement au temps quand la vitesse est constante."
  },
  {
    question: "7. Le graphique vitesse–temps d’un MRU montre :",
    options: ["Une droite horizontale", "Une droite montante", "Une droite descendante", "Une courbe"],
    bonne_reponse: "Une droite horizontale",
    explication: "La vitesse reste la même tout au long du temps."
  },
  {
    question: "8. Dans un MRUV, la vitesse varie :",
    options: ["D’une façon constante", "De manière aléatoire", "À intervalles irréguliers", "Pas du tout"],
    bonne_reponse: "D’une façon constante",
    explication: "Dans un MRUV, la variation de vitesse par unité de temps est constante."
  },
  {
    question: "9. Relation vitesse–temps en MRUV :",
    options: ["v = v0 + a × t", "v = a / t", "v = v0 - a / t", "v = d / t"],
    bonne_reponse: "v = v0 + a × t",
    explication: "La vitesse augmente linéairement quand l’accélération est constante."
  },
  {
    question: "10. Un mobile part du repos avec a = 3 m/s² pendant 4 s. Sa vitesse finale est :",
    options: ["3 m/s", "7 m/s", "12 m/s", "15 m/s"],
    bonne_reponse: "12 m/s",
    explication: "v = a × t → 3 × 4 = 12 m/s car v0 = 0."
  }
  // ... (tu peux continuer les autres questions identiquement)
];

// =============================
// Affichage des questions
// =============================
function showQuestion() {
  if (current < questions.length) {
    const q = questions[current];
    let html = `<div class="question">${q.question}</div><div class="options">`;
    q.options.forEach((opt) => {
      html += `<label><input type="radio" name="q" value="${opt}"> ${opt}</label><br>`;
    });
    html += `<button id="submit">Valider</button>`;
    document.getElementById("quiz").innerHTML = html;
    document.getElementById("explication").innerHTML = "";

    document.getElementById("submit").onclick = validateAnswer;
  } else {
    endQuiz();
  }
}

// =============================
// Validation de la réponse
// =============================
function validateAnswer() {
  const selected = document.querySelector('input[name="q"]:checked');
  if (!selected) {
    document.getElementById("explication").innerHTML = "Veuillez sélectionner une réponse.";
    return;
  }

  const reponse = selected.value;
  const q = questions[current];

  if (reponse === q.bonne_reponse) {
    score++;
    document.getElementById("explication").innerHTML = `<span class="success">Bonne réponse !</span> ${q.explication}`;
  } else {
    document.getElementById("explication").innerHTML = `<span class="fail">Mauvaise réponse.</span> ${q.explication}`;
  }

  current++;
  setTimeout(showQuestion, 3000); // 3s avant la question suivante
  document.getElementById("score").innerText = `Score actuel : ${score} / ${questions.length}`;
}

// =============================
// Fin du quiz + Envoi du mail
// =============================
function endQuiz() {
  document.getElementById("quiz").innerHTML = "<strong>Quiz terminé !</strong>";
  document.getElementById("score").innerText = `Résultat final : ${score} / ${questions.length}`;
  document.getElementById("explication").innerHTML = "";

  // Préparation des données
  const emailParams = {
    nom: user.nom,
    prenom: user.prenom,
    score: `${score} / ${questions.length}`,
  };

  // Envoi via EmailJS
  emailjs
    .send("service_cgh817y", "template_ly7s41e", emailParams)
    .then(() => {
      alert("Résultats envoyés par email avec succès !");
    })
    .catch((error) => {
      console.error("Erreur lors de l’envoi :", error);
      alert("Une erreur est survenue lors de l’envoi de l’email.");
    });
}




