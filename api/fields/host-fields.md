# Champs uniquement liés au niveau revue

Certains champs sont également présents uniquement **au niveau de la revue**, c'est-à-dire précédés de `host` \(voir le \[chapitre sur la [granularité](doc-object-granularity.md)\) :

| Champs | Type | Détails |
| --- | --- | --- |
| host.bookId | string | ------------- |
| host.conference | \[{}\] | **Tableau d'objets**, chaque objet correspondant à une **conférence** |
| host.conference.name | string | **Nom de la conférence** |
| host.eisbn | string | [**International Standard Book Number**](https://www.isbn-international.org/fr) **électronique** |
| host.eissn | string | [**International Standard Serial Number**](http://www.issn.org/) **électronique** |
| host.isbn | string | [**International Standard Book Number**](https://www.isbn-international.org/fr) **papier** |
| host.issn | string | [**International Standard Serial Number**](http://www.issn.org/) **papier** |
| host.issue | integer | **Numéro** de la revue |
| host.journalId | string | ------------- |
| host.pages | {} | **Objet** contenant les données sur les **pages** de l'article dans la revue |
| host.pages.first | integer | **Première page** de l'article dans la revue |
| host.pages.last | integer | **Dernière page** de l'article dans la revue |
| host.pages.total | integer | **Nombre de pages** de l'article dans la revue |
| host.publisherId | string | ------------- |
| host.volume | integer | **Volume** de la revue |

Si un champ n'est pas renseigné pour un objet documentaire, cela signifie que cette information n'est pas disponible pour le moment.

