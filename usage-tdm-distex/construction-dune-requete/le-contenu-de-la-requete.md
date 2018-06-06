# Le contenu de la requête

Lorsque l'utilisateur a bien identifié ses besoins par rapport au corpus qu'il veut constituer, il reste à définir les modalités d’interrogation qui permettront de capter les documents correspondant au contenu et au périmètre identifiés pour le corpus.

![Schemacontenurequete](https://github.com/istex/istex-web-doc/tree/11fc6cf912da7e7914fb1c7187f0cdeff2e55dd5/usage-tdm-distex/img/tabl_contenu_req.png)

La liste des différentes valeurs possibles dans les champs `language`, `host.genre` et `genre` est donnée dans le chapitre « [**Annexes**](https://github.com/istex/istex-web-doc/tree/11fc6cf912da7e7914fb1c7187f0cdeff2e55dd5/usage-tdm-distex/construction-dune-requete/annexes/README.md) ».

Le volume du corpus est apprécié en fonction des capacités de stockage, des capacités de traitement par l’outil auquel il est destiné et du degré de bruit et de silence toléré.

## **Facettes**

Les facettes représentent une aide précieuse pour préciser le contenu du corpus.

En effet, leur utilisation sur le démonstrateur Istex ou sur l’API Istex peut permettre de connaître toutes les valeurs possibles d’un champ avant d’y opérer une sélection pour constituer le corpus attendu.

La syntaxe de la requête à utiliser sur l’API Istex est la suivante :

> ​ q=\(...\)&facet=champ&size=0

_​**Exemple** : si l’on souhaite connaître toutes les langues de publication des documents Istex de la revue « Astronomische Nachrichten », pour ne sélectionner par la suite que les langues intéressantes :_

```text
q=host.title:"Astronomische Nachrichten"&facet=language[*]&size=0
```

Pour afficher toutes les valeurs possibles dans un champ donné, on fait suivre le nom du champ, par exemple `language`, par `[*]`. Autrement, le serveur ne renvoie que les dix premières valeurs. Dans le cas d'un champ de type **date**, on ajoute `[perYear]` au nom du champ pour avoir l'ensemble des années.

L’argument facultatif `size=0` fait que l'on n’affiche que le résultat de la distribution par facette et pas les informations relatives aux documents pertinents.

## **Facettes imbriquées**

Les facettes imbriquées permettent de combiner plusieurs critères.

La syntaxe de la requête à utiliser sur l’API Istex est la suivante :

> ​ q=\(...\)&facet=champ1&gt;champ2&size=0

_​**Exemple** : si l’on souhaite connaître toutes les langues de publication des documents Istex de la revue « Astronomische Nachrichten », avec pour chacune d’entre elles, le nombre de documents par année :_

```text
q=host.title:"Astronomische Nachrichten"&facet=language[*]>publicationDate[perYear]&size=0
```

