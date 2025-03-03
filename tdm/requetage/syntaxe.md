# Le contenu de la requête

Lorsque l'utilisateur a bien identifié ses besoins par rapport au corpus qu'il veut constituer, il reste à définir les modalités d’interrogation qui permettront de capter les documents correspondant au contenu et au périmètre identifiés pour le corpus.

| Exemples de contenus                                     | Modalité d’interrogation                                                                                                                                                                                                                                            |
| -------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Un domaine**                                           | Recherche par catégories scientifiques (selon les classifications Science-Metrix, Web of Science, Scopus ou Pascal-Francis) sur les champs dédiés aux enrichissements Istex : `categories.scienceMetrix`, `categories.wos`, `categories.scopus`, `categories.inist` |
| **Une thématique, un sujet**                             | Recherche par mots ou par expressions soit sur tous les champs, soit sur les champs `title`, `abstract` ou `subject.value`.                         Énumérer un maximum de synonymes et de variantes                                                                |
| **Une date de publication**                              | Recherche par date sur le champ `publicationDate` ou `copyrightDate`                                                                                                                                                                                                |
| **Un type de publication** (monographie, revue, etc.)    | Recherche par type sur le champ `host.genre`                                                                                                                                                                                                                        |
| **Un type de contenu** (article, résumé, chapitre, etc.) | Recherche par type sur le champ `genre`                                                                                                                                                                                                                             |
| **Une langue de document**                               | Recherche par code langue sur le champ `language`                                                                                                                                                                                                                   |
| **Une revue**                                            | Soit recherche par le nom de la revue sur le champ `host.title`           Soit recherche par l’ISSN sur le champ `host.issn`                                                                                                                                        |

La liste des différentes valeurs possibles dans les champs `language`, `host.genre` et `genre` est donnée dans le chapitre « [**Annexes**](../annexes/) ».

Le volume du corpus est apprécié en fonction des capacités de stockage, des capacités de traitement par l’outil auquel il est destiné et du degré de bruit et de silence toléré.

## **Facettes**

Les facettes représentent une aide précieuse pour préciser le contenu du corpus. En effet, leur utilisation sur Istex Search ou sur l’API Istex peut permettre de connaître toutes les valeurs possibles d’un champ avant d’y opérer une sélection pour constituer le corpus attendu.

Sur Istex Search, les facettes sont accessibles via le menu à gauche des résultats.

Sur l’API Istex, la syntaxe de la requête à utiliser est la suivante :

> ​ q=(...)\&facet=champ\&size=0

NB : si l'on définit l’argument facultatif `size` par `size=0`, on n’affichera que le résultat de la distribution par facette et non les informations relatives aux documents pertinents.

Pour afficher toutes les valeurs possibles dans un champ donné, on fait suivre le nom du champ (par exemple un champ **langue**) par `[*]`, sans quoi le serveur ne renverra que les dix premières valeurs.

_**Exemple** : si l’on souhaite connaître toutes les langues dans lesquelles sont publiés les documents de la revue « Astronomische Nachrichten », pour ne sélectionner par la suite que les langues intéressantes :_

`q=host.title:"Astronomische Nachrichten"&facet=language[*]&size=0`

Dans le cas d'un champ de type **date**, on ajoutera `[perYear]` au nom du champ pour connaître la répartition par année.

_**Exemple :** si l'on souhaite avoir une vue année par année des documents de la revue « Astronomische Nachrichten » présents dans Istex :_

`q=host.title:"Astronomische Nachrichten"&facet=publicationDate[perYear]&size=0`

Il est également possible d'interroger sur la facette **date** sans préciser de paramètre. Dans ce cas, ce sont les valeurs limites qui seront renvoyées par l'API.

_**Exemple :** si l'on ne souhaite repérer que les dates de début et de fin de la revue « Astronomische Nachrichten » présente dans Istex :_

`q=host.title:"Astronomische Nachrichten"&facet=publicationDate&size=0`&#x20;

Pour afficher les données regroupées par périodicité, on ajoutera `[y-z:i]` au champ date, y et z représentant les valeurs limites de l'intervalle de temps considéré, tandis que i représente la périodicité souhaitée.

_**Exemple :** si l'on souhaite obtenir la répartition par décennie du nombre de documents Istex publiés sur la période 1400-1500 :_

`q=*&facet=publicationDate[1400-1500:10]&size=0`

NB : plus de détails sur les facettes et sur la réponse JSON renvoyée par l'API sont à retrouver dans la rubrique [**Facettes**](../../api/facets/) de la documentation technique de l’API Istex.

## **Facettes imbriquées**

Les facettes imbriquées permettent de combiner plusieurs critères.

La syntaxe de la requête à utiliser sur l’API Istex est la suivante :

> ​ q=(...)\&facet=champ1>champ2\&size=0

_​**Exemple** : si l’on souhaite connaître toutes les langues de publication des documents Istex de la revue Cognition, avec pour chacune d’entre elles, le nombre de documents par année :_

`q=host.title:Cognition&facet=language[*]>publicationDate[perYear]&size=0`

NB : il n'y a pas de limitation au nombre d'imbrications possibles.&#x20;
