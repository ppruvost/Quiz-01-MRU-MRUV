# Quiz MRU / MRUV avec explications - Niveau Seconde Professionnelle REMI
# Auteur : [Votre nom]
# Description : Quiz interactif de 20 questions sur le MRU et MRUV avec explications pédagogiques

def poser_question(question, options, bonne_reponse, explication):
    print("
" + question)
    for i, option in enumerate(options, 1):
        print(f"{i}. {option}")
    try:
        reponse = int(input("Votre réponse (1-4) : "))
        if options[reponse - 1] == bonne_reponse:
            print("✅ Bonne réponse !")
            print("ℹ️ Explication :", explication)
            return True
        else:
            print(f"❌ Mauvaise réponse. La bonne réponse était : {bonne_reponse}")
            print("ℹ️ Explication :", explication)
            return False
    except (ValueError, IndexError):
        print("Entrée invalide.")
        return False


def quiz_MRU_MRUV():
    print("=== QUIZ : MRU et MRUV (Seconde Professionnelle REMI) ===")
    print("Répondez aux 20 questions suivantes et apprenez en révisant !
")

    questions = [
        {"question": "1. Dans un MRU, la vitesse :",
         "options": ["Reste constante", "Diminue", "Augmente", "Varie aléatoirement"],
         "bonne_reponse": "Reste constante",
         "explication": "Dans un MRU, le mobile se déplace en ligne droite avec une vitesse constante."},

        {"question": "2. Dans un MRU, l’accélération est :",
         "options": ["Constante et non nulle", "Variable", "Égale à zéro", "Négative"],
         "bonne_reponse": "Égale à zéro",
         "explication": "L’accélération mesure la variation de vitesse. Si la vitesse ne change pas, l’accélération est nulle."},

        {"question": "3. La formule de la vitesse dans un MRU est :",
         "options": ["v = d / t", "v = t / d", "v = m × a", "v = a × t"],
         "bonne_reponse": "v = d / t",
         "explication": "Dans un mouvement uniforme, la vitesse se calcule comme distance divisée par le temps."},

        {"question": "4. Une voiture roule à 90 km/h pendant 2 h. Quelle distance parcourt-elle ?",
         "options": ["45 km", "90 km", "180 km", "200 km"],
         "bonne_reponse": "180 km",
         "explication": "Distance = vitesse × temps → 90 × 2 = 180 km."},

        {"question": "5. La position d’un mobile en MRU est donnée par :",
         "options": ["x = x0 + v × t", "x = v × t² / 2", "x = m × v", "x = a × t²"],
         "bonne_reponse": "x = x0 + v × t",
         "explication": "La position évolue linéairement dans le temps avec une vitesse constante."},

        {"question": "6. Le graphique position–temps d’un MRU est :",
         "options": ["Une droite", "Une courbe", "Une parabole", "Une sinusoïde"],
         "bonne_reponse": "Une droite",
         "explication": "Car la position varie proportionnellement au temps quand la vitesse est constante."},

        {"question": "7. Le graphique vitesse–temps d’un MRU montre :",
         "options": ["Une droite horizontale", "Une droite montante", "Une droite descendante", "Une courbe"],
         "bonne_reponse": "Une droite horizontale",
         "explication": "La vitesse reste la même tout au long du temps."},

        {"question": "8. Dans un MRUV, la vitesse varie :",
         "options": ["D’une façon constante", "De manière aléatoire", "À intervalles irréguliers", "Pas du tout"],
         "bonne_reponse": "D’une façon constante",
         "explication": "Dans un MRUV, la variation de vitesse par unité de temps est constante."},

        {"question": "9. Relation vitesse–temps en MRUV :",
         "options": ["v = v0 + a × t", "v = a / t", "v = v0 - a / t", "v = d / t"],
         "bonne_reponse": "v = v0 + a × t",
         "explication": "La vitesse augmente linéairement quand l’accélération est constante."},

        {"question": "10. Un mobile part du repos avec a = 3 m/s² pendant 4 s. Sa vitesse finale est :",
         "options": ["3 m/s", "7 m/s", "12 m/s", "15 m/s"],
         "bonne_reponse": "12 m/s",
         "explication": "v = a × t → 3 × 4 = 12 m/s car v0 = 0."},

        {"question": "11. Formule de la position en MRUV :",
         "options": ["x = x0 + v0 × t + (1/2) × a × t²", "x = v × t", "x = v0 + a × t", "x = a × t²"],
         "bonne_reponse": "x = x0 + v0 × t + (1/2) × a × t²",
         "explication": "Elle résume le déplacement total en tenant compte de la vitesse initiale et de l’accélération."},

        {"question": "12. Si v0 = 0, a = 2 m/s², t = 5 s, alors x = ?",
         "options": ["10 m", "25 m", "50 m", "100 m"],
         "bonne_reponse": "25 m",
         "explication": "x = ½ × a × t² = ½ × 2 × 25 = 25 m."},

        {"question": "13. L’unité d’une accélération :",
         "options": ["m/s", "m/s²", "m × s", "s/m²"],
         "bonne_reponse": "m/s²",
         "explication": "Car l’accélération est une variation de vitesse (m/s) par unité de temps (s)."},

        {"question": "14. Quand l’accélération est négative, le mouvement est :",
         "options": ["Accéléré", "Uniforme", "Ralenti", "Inversé"],
         "bonne_reponse": "Ralenti",
         "explication": "Une accélération négative signifie une diminution de la vitesse : c’est un ralentissement."},

        {"question": "15. Une voiture freine avec a = -4 m/s² pendant 3 s, en partant de 20 m/s. Sa vitesse est :",
         "options": ["8 m/s", "12 m/s", "20 m/s", "32 m/s"],
         "bonne_reponse": "8 m/s",
         "explication": "v = v0 + a × t → 20 + (-4 × 3) = 8 m/s."},

        {"question": "16. En MRUV, la pente du graphe vitesse–temps représente :",
         "options": ["La distance parcourue", "L’accélération", "La masse", "Le temps"],
         "bonne_reponse": "L’accélération",
         "explication": "La pente indique la variation de vitesse par unité de temps, donc l’accélération."},

        {"question": "17. Le graphique position–temps d’un MRUV est :",
         "options": ["Une droite", "Une courbe parabolique", "Une ligne horizontale", "Une sinusoïde"],
         "bonne_reponse": "Une courbe parabolique",
         "explication": "La position varie en fonction du carré du temps, d’où la forme parabolique."},

        {"question": "18. Une moto avec v0 = 10 m/s et a = 2 m/s² pendant 5 s. Sa vitesse finale ?",
         "options": ["10 m/s", "15 m/s", "20 m/s", "30 m/s"],
         "bonne_reponse": "20 m/s",
         "explication": "v = v0 + a × t → 10 + (2 × 5) = 20 m/s."},

        {"question": "19. Si la vitesse augmente de façon constante, le mouvement est :",
         "options": ["Uniforme", "Uniformément varié", "Périodique", "Statique"],
         "bonne_reponse": "Uniformément varié",
         "explication": "La variation constante de vitesse définit le MRUV."},

        {"question": "20. Quelle relation relie la distance, l’accélération et la vitesse quand v0 = 0 ?",
         "options": ["v² = 2 × a × d", "v = a × d", "d = v × a", "a = v / d"],
         "bonne_reponse": "v² = 2 × a × d",
         "explication": "Cette équation relie vitesse finale, accélération et déplacement quand la vitesse initiale est nulle."}
    ]

    score = 0
    for q in questions:
        if poser_question(q["question"], q["options"], q["bonne_reponse"], q["explication"]):
            score += 1

    print(f"
=== Résultat final : {score} / {len(questions)} ===")
    if score == len(questions):
        print("🌟 Excellent ! Vous maîtrisez parfaitement le MRU et le MRUV.")
    elif score >= 14:
        print("👍 Très bien ! Quelques révisions et ce sera parfait.")
    elif score >= 8:
        print("🙂 Vous progressez. Revoyez les définitions et formules principales.")
    else:
        print("📘 Relecture conseillée ! Reprenez les notions de base du MRU et MRUV.")


if __name__ == "__main__":
    quiz_MRU_MRUV()

