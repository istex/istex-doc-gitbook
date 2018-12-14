# Moissonneur de l'API ISTEX

Le programme **istex-api-harvester** est un utilitaire en ligne de commande permettant de moissonner les corpus requêtés par l'API de la plateforme ISTEX. Il est écrit en NodeJS.

* **Avantage** :  il gère l'authentification au serveur en dehors du réseau interne de l'Inist-CNRS.
* **Inconvénient** : son utilisation nécessite de disposer de Git et de NodeJs, ainsi que d'installer le moissonneur via un terminal de commande.
* **Mode d'emploi :** ce programme est disponible sur [**GitHub**](https://github.com/istex/istex-api-harvester).
* **Installations :**
  * installation de Git pour Windows : [https://git-for-windows.github.io/](https://git-for-windows.github.io/)
  * installation de NodeJS pour Windows : [https://nodejs.org/en/download/](https://nodejs.org/en/download/)
  * lancement du terminal Git Bash : `Démarrer /Toutes les Applications / Git Bash`
  * installation du moissonneur : `npm install -g istex-api-harvester`
* **Astuces :**
  * les options de cet utilitaire sont listées sur GitHub 
  * indiquer le nombre de documents à extraire. Sans précision, aucun document n'est moissonné
  * les métadonnées étant extraites par défaut, si on ne souhaite que les fichiers textes, utiliser l'option -M avec une chaîne vide, c’est-à-dire un blanc entre doubles quotes : -M **""**
    * _**Exemple :** moissonnage du texte intégral au format txt, sans les métadonnées, de 590 documents correspondant à la requête querya1.txt, à télécharger dans le répertoire «corpusAncien»_

```bash
istex-api-harvester -F txt -M "" -o corpusAncien -s 600 --query="'cat querya1.txt'"
```

* Si le corpus est volumineux, il faut augmenter la durée de vie de la [fonction `Scroll`](../../api/results/scroll.md). Celle-ci est de 30 s par défaut. Avec un tel délai, le parcours des 100 résultats de la "page courante" peut s’avérer trop long et entraîner une erreur 404 renvoyée par l'API.
  * _**Exemple :** moissonnage du texte intégral au format pdf et des métadonnées associées de 17 257 documents contenant le terme "arctic" dans le titre ou le résumé, à télécharger dans le répertoire Polaris \(la durée de vie de la fonction `Scroll` a été portée à 5 mn\)_

```bash
istex-api-harvester -t 5m -F pdf -o Polaris -s 17500 -q "title:arctic OR abstract:arctic"
```

