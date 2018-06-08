# À quoi servent les "indicateurs de qualité" ?

Une des raisons d'être d'ISTEX est de pouvoir irriguer des travaux de recherche en tant que fournisseur de matière première. Sans cette particularité, le projet n'existerait sûrement pas aujourd'hui.

Quand un chercheur souhaite extraire un sous-corpus d'ISTEX, il a besoin de pouvoir travailler sur des textes de "qualité" suffisante. Cette notion de "qualité", même si elle est subjective, est souvent liée au texte contenu dans les fichiers PDF, ou encore à la présence de certaines métadonnées \(résumé, mots-clés, etc.\)

Les indications de type `qualityIndicators` sont un début de réponse à cette problématique.

Un exemple concret d'utilisation est de pouvoir récupérer des fichiers PDF contenant réellement du texte, et pas uniquement des images \(utile dans le traitement du langage\). La requête suivante va renvoyer tous les documents dont le fichier PDF contient au moins 2000 mots.

```text
https://api.istex.fr/document/?q=* AND qualityIndicators.pdfWordCount:[2000 TO *]
```

