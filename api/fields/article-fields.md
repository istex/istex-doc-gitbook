# Autres champs uniquement liés à l'article

D'autres champs sont également présents uniquement **au niveau de l'article** :

| Champs | Type | Détails |
| --- | --- | --- |
| abstract | string | **Résumé** du document |
| articleId | string | ------------- |
| categories | {} | **Objet** contenant les informations liées aux **catégories** |
| categories.inist | \[string\] | **Tableau** contenant toutes les **catégories déterminées par** [**méthode bayésienne**](https://fr.wikipedia.org/wiki/Classification_na%C3%AFve_bay%C3%A9sienne) du document |
| categories.scienceMetrix | \[string\] | **Tableau** contenant toutes les **catégories** [**Science-Metrix**](http://science-metrix.com/) ****du document |
| categories.wos | \[string\] | **Tableau** contenant toutes les **catégories** [**Web Of Science**](https://clarivate.com/products/web-of-science/) du document |
| chapterId | string | ------------- |
| corpusName | string | **Nom du corpus** auquel appartient le document \(ex : "elsevier"\) |
| enrichments.type | \[string\] | Indique la **nature** des enrichissements disponibles \(ex : "multicat","refBibs"\) |
| keywords | {} | **Objet** contenant les informations liées aux **mots-clés** |
| keywords.teeft | \[string\] | **Tableau** contenant tous les termes anglais extraits par [étiquetage morpho-syntaxique](https://fr.wikipedia.org/wiki/%C3%89tiquetage_morpho-syntaxique) |
| namedEntities | {} | **Objet** contenant les informations liées aux **entités nommées** |
| namedEntities.unitex | \[string\] | **Tableau** contenant toutes les entités nommées détectées par [Unitex-CasSys](http://tln.li.univ-tours.fr/Tln_Istex.html) |
| originalGenre | string | **Genre** du document **fourni par l'éditeur** |
| pmid | string | **Identifiant** [**PubMed**](https://www.ncbi.nlm.nih.gov/pubmed/) du document |

Si un champ n'est pas renseigné pour un objet documentaire, cela signifie que cette information n'est pas disponible pour le moment.

