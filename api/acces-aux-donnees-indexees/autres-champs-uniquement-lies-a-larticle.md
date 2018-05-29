# Autres champs uniquement liés à l'article

D'autres champs sont également présents uniquement **au niveau de l'article** :

| Champs | Type | Détails |
| --- | --- | --- |
| abstract | string | **Résumé** du document |
| articleId | string | ------------- |
| categories | {} | **Objet** contenant les informations liées aux **catégories** |
| categories.inist | \[string\] | **Tableau** contenant toutes les **catégories déterminées par \[méthode bayésienne\]\[nb\]** du document |
| categories.scienceMetrix | \[string\] | **Tableau** contenant toutes les **catégories \[Science-Metrix\]\[scienceMetrix\]** du document |
| categories.wos | \[string\] | **Tableau** contenant toutes les **catégories \[Web Of Science\]\[WOS\]** du document |
| chapterId | string | ------------- |
| corpusName | string | **Nom du corpus** auquel appartient le document \(ex : "elsevier"\) |
| enrichments.type | \[string\] | Indique la **nature** des enrichissements disponibles \(ex : "multicat","refBibs"\) |
| keywords | {} | **Objet** contenant les informations liées aux **mots-clés** |
| keywords.teeft | \[string\] | **Tableau** contenant tous les termes anglais extraits par \[étiquetage morpho-syntaxique\]\[POS\] |
| namedEntities | {} | **Objet** contenant les informations liées aux **entités nommées** |
| namedEntities.unitex | \[string\] | **Tableau** contenant toutes les entités nommées détectées par \[Unitex-CasSys\]\[unitex\] |
| originalGenre | string | **Genre** du document **fourni par l'éditeur** |
| pmid | string | **Identifiant \[PubMed\]\[PUBMED\]** du document |

Si un champ n'est pas renseigné pour un objet documentaire, cela signifie que cette information n'est pas disponible pour le moment.

