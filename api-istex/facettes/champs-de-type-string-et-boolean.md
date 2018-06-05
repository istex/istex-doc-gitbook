# Champs de type string et boolean

| Informations |  |
| --- | --- |
| Options | - x : renvoie les **10 termes du champ x les plus présents** dans les résultats de la requête, - x\[y\] : renvoie les **y termes du champ x les plus présents** dans les résultats de la requête, - x\[\*\] : renvoie **tous les termes du champ x présents** dans les résultats de la requête, dans la limite de **1000 termes maximum**. |
| Détails | Les résultats sont affichés **du terme le plus présent vers le terme le plus rare**.  Attention, certains champs ne peuvent être interrogés, leur résultat étant jugé non pertinent  et trop conséquent pour être affiché : doi, title, abstract |
| Format de réponse |  |
| Explications | - docCountErrorUpperBound : indique si une erreur de calcul est présente, - sumOtherDocCount : somme des documents avec des termes supplémentaires non affichés ici, - keyCount : nombre de termes différents affiché, - buckets : tableau contenant l'état de collection, - key : terme trouvé, - docCount : nombre de fois où ce terme a été trouvé. |

| Exemples |  |
| --- | --- |
| Affichage de l'ensemble des documents avec une facette sur les **10 corpus les plus présents** | [https://api.istex.fr/document/?q=\*&facet=corpusName](https://api.istex.fr/document/?q=*&facet=corpusName) [https://api.istex.fr/document/?q=\*&facet=corpusName\[10\]](https://api.istex.fr/document/?q=*&facet=corpusName[10]) |
| Affichage de l'ensemble des documents avec une facette sur **tous les corpus présents** | [https://api.istex.fr/document/?q=\*&facet=corpusName\[\*\]](https://api.istex.fr/document/?q=*&facet=corpusName[*]) |
| Affichage de l'ensemble des documents avec une facette sur les **5 corpus les plus présents** | [https://api.istex.fr/document/?q=\*&facet=corpusName\[5\]](https://api.istex.fr/document/?q=*&facet=corpusName[5]) |

