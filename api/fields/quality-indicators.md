# Explication sur les indicateurs de qualité

Les indicateurs de qualité sont rassemblés sous le champ **qualityIndicators**.

Ces derniers contiennent des **informations supplémentaires** sur le contenu du fulltext et des métadonnées, calculé en amont de la chaîne. En effet, on y retrouvera :

| Champs | Type | Détails |
| --- | --- | --- |
| qualityIndicators | {} | **Objet** contenant l'ensemble des **informations supplémentaires** |
| qualityIndicators.abstractCharCount | integer | Nombre de **caractères** dans le résumé |
| qualityIndicators.abstractWordCount | integer | Nombre de **mots** dans le résumé \(basé sur le nombre d'espace\) |
| qualityIndicators.keywordCount | integer | Nombre de **mots clés** présents |
| qualityIndicators.pdfCharCount | integer | Nombre de **caractères** dans le PDF |
| qualityIndicators.pdfPageCount | integer | Nombre de **pages** du PDF |
| qualityIndicators.pdfPageSize | string | **Taille** des pages du PDF \(format : "X x Y pts"\) |
| qualityIndicators.pdfVersion | string | Numéro de **version** du PDF |
| qualityIndicators.pdfWordCount | integer | Nombre de **mots** dans le PDF \(basé sur le nombre d'espace\) |
| qualityIndicators.refBibsNative | boolean | Indique si les **références bibliographiques** sont fournis par l'éditeur |
| qualityIndicators.score | double | **Score** de qualité, calculé selon les critères précédents \(voir [ici](https://github.com/istex/istex-web-doc/tree/bc2b57f3e7c3dddba8986e80f7f526e8b0ea0dc6/results/README.md#calcul-du-score-de-qualite) pour plus de détails\) |

Ces informations sont **extraites des métadonnées** des fichiers, ou directement **calculées par nos outils**. Si un champ n'est pas renseigné pour un objet documentaire, cela signifie que cette information n'est pas disponible pour le moment.

