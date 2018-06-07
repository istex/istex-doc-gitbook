# Opérateur par défaut



| Syntaxe |  |
| --- | --- |
| URI | [https://api.istex.fr/document/?q={query}**&defaultOperator={AND\_ou\_OR}**](https://api.istex.fr/document/?q={query}&defaultOperator={AND_ou_OR}) |
| Explications | Cette option permet de sélectionner l'opérateur par défaut de l'API.  Si l'option est manquante, ce dernier sera le **OR**.   Par exemple, une recherche du type **https://api.istex.fr/document/?q=controllability study** doit chercher tous les documents ayant au moins un de ces mots : **controllability, study**. **Les seuls opérateurs autorisés sont AND et OR.** |
| Paramètres | - **&defaultOperator** : l'option permettant de choisir l'opérateur par défaut, 
| Paramètres | - {AND ou OR} : l'opérateur choisi. |
| Code de retour | - 200 si OK,  - 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\) |

| Exemples |  |
| --- | --- |
| Recherche des documents contenant les **termes** "controllability" **et** "study" | [https://api.istex.fr/document/?q=controllability study&defaultOperator=AND](https://api.istex.fr/document/?q=controllability%20study&defaultOperator=AND) [https://api.istex.fr/document/?q=controllability AND study](https://api.istex.fr/document/?q=controllability%20AND%20study) |
| Recherche des documents contenant les **termes** "controllability" **ou** "study" | [https://api.istex.fr/document/?q=controllability study&defaultOperator=OR](https://api.istex.fr/document/?q=controllability%20study&defaultOperator=OR) [https://api.istex.fr/document/?q=controllability OR study](https://api.istex.fr/document/?q=controllability%20OR%20study) [https://api.istex.fr/document/?q=controllability study](https://api.istex.fr/document/?q=controllability%20study) |

