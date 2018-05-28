# Choix du type de scoring

| Syntaxe | |
|------------ | ------------- |
| URI | <span class="baseUrl">https&#58;//api.istex.fr/document/?q={query}</span><span class="mandParam">&rankBy={type de ranking}</span> |
| Explications | Chaque résultat affiche un champ **score**.<br>Cette option permet de sélectionner le type de score renvoyé lors de l'affichage des résultats. <br>Si l'option est manquante, le score sera basé sur **l'algorithme BM25** d'elasticsearch, selon la requête demandée.<br><br>Il est possible de demander un score relevé par la qualité avec le mot-clé **qualityOverRelevance**.<br>Le calcul du score de qualité est expliqué ci-dessous.<br><br>Il est possible de demander un score aléatoire avec le mot-clé **random**. <br>**Deux requêtes successives** avec un score aléatoire renverront des résultats dans un **ordre différent**.<br>Une requête avec score aléatoire génère en plus un **code unique**, permettant de **retrouver cet ordre plus tard**.<br>Ce code est visible dans les champs **nextPageURI**, **prevPageURI**, **firstPageURI** ou **lastPageURI**.<br>L'option indiquant le code et permettant de retrouver le même ordre est <span class="mandParam">&randomSeed={code}</span>.|
| Paramètres | - <span class="mandParam">&rankBy</span> : l'option permettant de définir le type de score,<br>- <span class="mandParam">{type de ranking}</span> : mot-clé désignant le type de score spécial (**qualityOverRelevance, random**). |
| Code de retour | - 200 si OK, <br> - 500 en cas de problème (dans ce cas, contacter <api-bug@listes.istex.fr>) |

| Exemples | |
| -------- | ------- |
| Résultats ayant le mot **"agile"** avec un **affichage relevé par qualité** | <a href="https://api.istex.fr/document/?q=agile&rankBy=qualityOverRelevance">https://api.istex.fr/document/?q=agile<span class="mandParam">&rankBy=qualityOverRelevance</span></a> |
| Résultats ayant le mot **"agile"** avec un **affichage aléatoire** | <a href="https://api.istex.fr/document/?q=agile&rankBy=random">https://api.istex.fr/document/?q=agile<span class="mandParam">&rankBy=random</span></a> |

