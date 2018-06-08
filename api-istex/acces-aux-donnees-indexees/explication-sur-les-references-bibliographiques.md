# Explication sur les références bibliographiques

Les références bibliographiques sont rassemblées sous le champ **refBibs**.

Ces dernières sont soit **fournies par l'éditeur**, soit **extraites** à l'aide de l’outil d'analyse [GROBID](https://github.com/kermitt2/grobid) à partir du PDF. On y retrouvera :

| Champs | Type | Détails |
| --- | --- | --- |
| refBibs | \[{}\] | **Tableau d'objets**, chaque objet correspondant à une **référence bibliographique** |
| refBibs.author | \[{}\] | **Tableau d'objets**, chaque objet correspondant à un **auteur référencé** |
| rebBibs.author.name | string | **Nom** d'un auteur référencé |
| refBibs.host | {} | **Objet** contenant les informations liées à la **revue** ou le **livre** \(voir le chapitre sur la \[granularité\]\[granularité\]\) |
| refBibs.host.author | \[{}\] | **Tableau d'objets**, chaque objet correspondant à un **auteur de la revue référencée** |
| refBibs.host.author.name | string | **Nom d'un auteur de la revue** référencée |
| refBibs.host.issue | integer | **Numéro de la revue** référencée |
| refBibs.host.pages | {} | **Objet** contenant les données sur les **pages**, liés à la **revue** |
| refBibs.host.pages.first | integer | **Première page de la revue** référencée |
| refBibs.host.pages.last | integer | **Dernière page de la revue** référencée |
| refBibs.host.publicationDate | date | **Date de publication de la revue** référencée |
| refBibs.host.title | string | **Titre de la revue** référencée |
| refBibs.host.volume | integer | **Numéro de volume de la revue** référencée |
| refBibs.publicationDate | date | **Date de publication** référencée |
| refBibs.title | string | **Titre** référencé |

Si un champ n'est pas renseigné pour un objet documentaire, cela signifie que cette information n'est pas disponible pour le moment.

