# Sélection des champs renvoyés

Pour apprendre les options disponibles dans l'API :

_\_\[\_N_'_hésitez pas à consulter le tutoriel multimédias_ ]\([https://istex-tutorial.data.istex.fr/ark:/67375/Q05-STTNXF50-V](https://istex-tutorial.data.istex.fr/ark:/67375/Q05-STTNXF50-V))

**La syntaxe est la suivante :**

* URI
  * `https://api.istex.fr/document/?q={query}&output={liste des champs}`
* Explications
  * Cette option permet de sélectionner les champs renvoyés lors de l'affichage des résultats
  * Si l'option est manquante, les résultats afficheront leur champ title
  * Dans tous les cas, les champs id et score seront présents
  * La liste des champs est séparée par des , (virgules)Il est possible de demander l'affichage :
    * de l'ensemble des champs disponibles avec le caractère \* (étoile),&#x20;
    * de l'ensemble des fichiers fulltext disponibles avec le mot-clé fulltext,&#x20;
    * de l'ensemble des fichiers metadata disponibles avec le mot-clé metadata,&#x20;
    * de l'ensemble des enrichissements disponibles avec le mot-clé enrichments,&#x20;
    * de l'ensemble des annexes disponibles avec le mot-clé annexes.&#x20;
  * Si, pour un résultat, le champ n'est pas affiché, cela indique que le résultat en question n'a pas ce champ renseigné.
* Paramètres
  * **\&output** : l'option permettant de définir la liste des champs,
  * **{liste des champs}** : la liste en question, séparée par des virgules
* Code de retour
  * 200 si OK,&#x20;
  * 501 si le champ demandé n'est pas disponible,&#x20;
  * 500 en cas de problème&#x20;

| Exemples                                                                     |                                                                                                                             |
| ---------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Récupération des champs **title et fulltext** sur l'ensemble des résultats   | [https://api.istex.fr/document/?q=\***\&output=title,fulltext**](https://api.istex.fr/document/?q=*\&output=title,fulltext) |
| Récupération de **tous les champs disponibles** sur l'ensemble des résultats | [https://api.istex.fr/document/?q=\***\&output=\***](https://api.istex.fr/document/?q=*\&output=*)                          |
