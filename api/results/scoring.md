# Choix du type de scoring

**La syntaxe est la suivante :**

* URI
  * `https://api.istex.fr/document/?q={query}&rankBy={type de ranking}`
* Explications
  * Chaque résultat affiche un champ **score**.
  * Cette option permet de sélectionner le type de score renvoyé lors de l'affichage des résultats. 
  * Si l'option est manquante, le score sera basé sur **l'algorithme BM25** d'elasticsearch, selon la requête demandée.
  * Il est possible de demander un score relevé par la qualité avec le mot-clé **qualityOverRelevance**.
  * Le calcul du score de qualité est [expliqué ici ](quality-indicators.md).
  * Il est possible de demander un score aléatoire avec le mot-clé **random**. 
  * **Deux requêtes successives** avec un score aléatoire renverront des résultats dans un **ordre différent**.
  * Une requête avec score aléatoire génère en plus un **code unique**, permettant de **retrouver cet ordre plus tard.**
  * Ce code est visible dans les champs **nextPageURI, prevPageURI, firstPageURI ou lastPageURI.**
  * L'option indiquant le code et permettant de retrouver le même ordre est **&randomSeed={code}**.
* Paramètres
  * **&rankBy** : l'option permettant de définir le type de score,
  * **{type de ranking**} : mot-clé désignant le type de score spécial **\(qualityOverRelevance, random\)**.
* Code de retour
  * 200 si OK, 
  * 500 en cas de problème \(dans ce cas, contacter api-bug@listes.istex.fr\)

| Exemples |  |
| :--- | :--- |
| Résultats ayant le mot **"agile"** avec un **affichage relevé par qualité** | [https://api.istex.fr/document/?q=agile**&rankBy=qualityOverRelevance**](https://api.istex.fr/document/?q=agile&rankBy=qualityOverRelevance) |
| Résultats ayant le mot **"agile"** avec un **affichage aléatoire** | [https://api.istex.fr/document/?q=agile**&rankBy=random**](https://api.istex.fr/document/?q=agile&rankBy=random) |

