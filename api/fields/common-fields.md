# Champs dépendant de la granularité

La liste suivante concerne les champs disponibles à la fois **au niveau de l'article** et **au niveau de la revue ou livre** (voir le \[chapitre sur la [granularité](doc-object-granularity.md)). Pour changer entre ces deux niveaux de granularité, il suffit d'ajouter le champ `host` pour accéder aux **données niveau revue**, et de ne rien ajouter pour les **données niveau article** :

| Champs              | Type      | Détails                                                                                                                                                 |
| ------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| author              | \[{}]     | **Tableau d'objets**, chaque objet correspondant à un **auteur**                                                                                        |
| author.affiliations | \[string] | **Tableau** des **affiliations de l'auteur**, liées à l'article ou la revue                                                                             |
| author.name         | string    | **Nom de l'auteur**, lié à l'article ou la revue                                                                                                        |
| copyrightDate       | date      | **Date de copyright** de l'article ou de la revue                                                                                                       |
| doi                 | string    | [**Digital Object Identifier**](http://www.doi.org/) de l'article ou de la revue                                                                        |
| editor              | \[{}]     | **Tableau d'objets**, chaque objet correspondant à un **rédacteur**                                                                                     |
| editor.affiliations | \[string] | **Tableau** des **affiliations du rédacteur**, liées à l'article ou la revue                                                                            |
| editor.name         | string    | **Nom du rédacteur**, lié à l'article ou la revue                                                                                                       |
| genre               | string    | **Typologie Istex de niveau** [**article/chapitre**](http://content-type.lod.istex.fr/) **ou** [**revue/ebook**](http://publication-type.lod.istex.fr/) |
| language            | string    | **Langue** de l'article ou de la revue                                                                                                                  |
| pii                 | string    | [**Personally Identifiable Information**](http://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-122.pdf) de l'article ou de la revue     |
| publicationDate     | date      | **Date de publication** de l'article ou de la revue                                                                                                     |
| subject             | \[{}]     | **Tableau d'objets**, chaque objet correspondant à un **thème**                                                                                         |
| subject.language    | string    | **Langue du thème** de l'article ou de la revue                                                                                                         |
| subject.value       | string    | **Thème** de l'article ou de la revue                                                                                                                   |
| title               | string    | **Titre** de l'article ou de la revue                                                                                                                   |

Si un champ n'est pas renseigné pour un objet documentaire, cela signifie que cette information n'est pas disponible pour le moment.
