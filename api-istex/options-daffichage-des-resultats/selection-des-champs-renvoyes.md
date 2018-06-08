# Sélection des champs renvoyés

Apprendre les options disponibles dans l'API : [http://www.inist.fr/formations/Tuto\_API\_ISTEX\_Module\_4/story.html](http://www.inist.fr/formations/Tuto_API_ISTEX_Module_4/story.html)


**La syntaxe est la suivante :**	

- URI	
  - https://api.istex.fr/document/?q={query}&output={liste des champs}

- Explications	

  - Cette option permet de sélectionner les champs renvoyés lors de l'affichage des résultats 

  - Si l'option est manquante, les résultats afficheront leur champ title

  - Dans tous les cas, les champs id et score seront présents

  - La liste des champs est séparée par des , (virgules)Il est possible de demander l'affichage : 

    - de l'ensemble des champs disponibles avec le caractère * (étoile), 
    - de l'ensemble des fichiers fulltext disponibles avec le mot-clé fulltext, 
    - de l'ensemble des fichiers metadata disponibles avec le mot-clé metadata, 
    - de l'ensemble des enrichissements disponibles avec le mot-clé enrichments, 
    - de l'ensemble des annexes disponibles avec le mot-clé annexes. 

  - Si, pour un résultat, le champ n'est pas affiché, cela indique que le résultat en question n'a pas ce champ renseigné.
 
- Paramètres	

  - **&output** : l'option permettant de définir la liste des champs,

  - **{liste des champs}** : la liste en question, séparée par des virgules
    
- Code de retour

  - 200 si OK, 
  - 501 si le champ demandé n'est pas disponible, 
  - 500 en cas de problème (dans ce cas, contacter api-bug@listes.istex.fr)


| Syntaxe |  |
| --- | --- |
| URI | [https://api.istex.fr/document/?q={query}&output={liste\_des\_champs}](https://api.istex.fr/document/?q={query}&output={liste_des_champs}) |
| Explications | Cette option permet de sélectionner les champs renvoyés lors de l'affichage des résultats.  Si l'option est manquante, les résultats afficheront leur champ **title**. Dans tous les cas, les champs **id et score** seront présents.  La liste des champs est séparée par des **, \(virgules\)**.  Il est possible de demander l'affichage :   - de **l'ensemble des champs disponibles** avec le caractère **\* \(étoile\)**,   - de **l'ensemble des fichiers fulltext disponibles** avec le mot-clé **fulltext**,   - de **l'ensemble des fichiers metadata disponibles** avec le mot-clé **metadata**,   - de **l'ensemble des enrichissements disponibles** avec le mot-clé **enrichments**,   - de **l'ensemble des annexes disponibles** avec le mot-clé **annexes**.   Si, pour un résultat, **le champ n'est pas affiché**, cela indique que **le résultat en question n'a pas ce champ renseigné**. |
| Paramètres | - &output : l'option permettant de définir la liste des champs, - {liste des champs} : la liste en question, séparée par des virgules. |
| Code de retour | - 200 si OK,  - 501 si le champ demandé n'est pas disponible,   - 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\) |

| Exemples |  |
| --- | --- |
| Récupération des champs **title et fulltext** sur l'ensemble des résultats | [https://api.istex.fr/document/?q=\*&output=title,fulltext](https://api.istex.fr/document/?q=*&output=title,fulltext) |
| Récupération de **tous les champs disponibles** sur l'ensemble des résultats | [https://api.istex.fr/document/?q=_&output=\_](https://api.istex.fr/document/?q=*&output=*) |

