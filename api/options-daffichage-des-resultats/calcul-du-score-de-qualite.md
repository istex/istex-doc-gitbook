# Calcul du score de qualité

Chaque document indexé possède un score calculé par rapport à certains indices de qualité, présents dans le champ **qualityIndicators**. Ce score est noté sur une échelle de 10 points.

La formule est la suivante :

* 5 points sont consacrés au **nombre de mots dans le fulltext** : min(5, 5 x pdfWordCount / 5000)
    * On estime qu'un fulltext ayant 5000 mots ou plus est de qualité excellente.
* 3 points sont consacrés au **nombre de mots dans l'abstract** : min(3, 3 x abstractWordCount / 250)
    * On estime qu'un abstract ayant 250 mots ou plus est de qualité excellente.
* 2 points sont consacrés à **la version du PDF** :
    * inférieur à 1.3 = 0 point
    * version 1.4 = 0.5 point
    * version 1.5 = 1 point
    * version 1.6 = 1.5 points
    * supérieur à 1.7 = 2 points

Ce score et cette formule sont susceptibles d'évoluer dans le temps avec l'ajout de nouveaux indices de qualité.

