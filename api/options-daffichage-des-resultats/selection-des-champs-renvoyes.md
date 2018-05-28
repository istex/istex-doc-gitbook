# Sélection des champs renvoyés

| Syntaxe | |
|------------ | ------------- |
| URI | <span class="baseUrl">https&#58;//api.istex.fr/document/?q={query}</span><span class="mandParam">&output={liste des champs}</span> |
| Explications | Cette option permet de sélectionner les champs renvoyés lors de l'affichage des résultats. <br>Si l'option est manquante, les résultats afficheront leur champ **title**.<br>Dans tous les cas, les champs **id et score** seront présents.<br><br>La liste des champs est séparée par des **, (virgules)**.<br><br>Il est possible de demander l'affichage : <br> - de **l'ensemble des champs disponibles** avec le caractère **\* (étoile)**, <br> - de **l'ensemble des fichiers fulltext disponibles** avec le mot-clé **fulltext**, <br> - de **l'ensemble des fichiers metadata disponibles** avec le mot-clé **metadata**, <br> - de **l'ensemble des enrichissements disponibles** avec le mot-clé **enrichments**, <br> - de **l'ensemble des annexes disponibles** avec le mot-clé **annexes**. <br><br>Si, pour un résultat, **le champ n'est pas affiché**, cela indique que **le résultat en question n'a pas ce champ renseigné**.|
| Paramètres | - <span class="mandParam">&output</span> : l'option permettant de définir la liste des champs,<br>- <span class="mandParam">{liste des champs}</span> : la liste en question, séparée par des virgules. |
| Code de retour | - 200 si OK, <br>- 501 si le champ demandé n'est pas disponible, <br> - 500 en cas de problème (dans ce cas, contacter <api-bug@listes.istex.fr>) |

| Exemples | |
| -------- | ------- |
| Récupération des champs **title et fulltext** sur l'ensemble des résultats | <a href="https://api.istex.fr/document/?q=*&output=title,fulltext">https://api.istex.fr/document/?q=*<span class="mandParam">&output=title,fulltext</span></a> |
| Récupération de **tous les champs disponibles** sur l'ensemble des résultats | <a href="https://api.istex.fr/document/?q=*&output=*">https://api.istex.fr/document/?q=*<span class="mandParam">&output=\*</span></a> |

