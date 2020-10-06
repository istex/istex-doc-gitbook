# Fonction "Extract"

Il s'agit d'une fonction du moteur de recherche de l'API ISTEX permettant d’extraire sous forme d’une archive zip le corpus correspondant à des critères de recherche. Elle s’utilise directement dans l’URL de requêtage sur l’API en la paramétrant selon ses besoins

## **Avantages :**

* simple à utiliser, cette fonction ne nécessite aucune installation
* elle peut être utilisée en dehors du réseau interne de l'Inist-CNRS, la gestion de l’authentification s’opérant via la [fédération d’identité ou par adresse IP](../../api/access/auth-modes.md) 
* elle permet l'extraction des enrichissements lorsqu'ils existent 
* elle offre le téléchargement des annexes et couvertures disponibles
* les documents extraits peuvent être répartis ou non dans une arborescence selon le choix retenu
* il est possible de réduire la taille du corpus à télécharger \(paramètre _size_\)
* si la taille du corpus extrait est réduite, on peut choisir un autre mode de tri que celui par pertinence effectué par le moteur de recherche, c’est-à-dire un tri des documents en fonction de certain champs \(paramètre [_sortBy_](../../api/results/sortby.md)\), ou selon un tri aléatoire \(paramètre [_rankBy=random_](../../api/results/scoring.md)\) avec la possibilité de retrouver cet ordre aléatoire \(paramètre [_randomSeed_](../../api/results/scoring.md)\) ou bien encore selon un tri utilisant un score relevé par la qualité \(paramètre [_rankBy=qualityOverRelevance_](../../api/results/scoring.md)\)

## **Inconvénient :** 

* les corpus ne peuvent être extraits actuellement que dans la limite de 100 000 documents

## **Mode d'emploi :** 

* cette fonction, ainsi que la syntaxe requise pour son utilisation et les différents paramètres disponibles, sont décrits dans la rubrique **"**[**Extraction**](../../api/search/extract-feature.md)**"** de la documentation technique ISTEX

## **Astuces :**

* la fonction `extract` utilisée seule génère l’extraction de l’ensemble des fichiers disponibles pour les documents ISTEX du corpus. 
  * _**Exemple :**_ _moissonnage de tous les fichiers disponibles pour un document identifié par un ARK donné :_[  _https://api.istex.fr/document/?q=ark:"ark:/67375/HXZ-7R7P2T8X-6"&extract_ ](https://api.istex.fr/document/?q=ark:%22ark:/67375/HXZ-7R7P2T8X-6%22&extract)
* la fonction `extract`, suivie par le signe "=" et une valeur quelconque, génère uniquement l’extraction du fichier de métadonnées au format JSON
* sans indication de format, tous les formats proposés pour le type de fichier indiqué seront extraits
* sans précision du paramètre _size_, 5 documents seront extraits par défaut. Pour extraire tous les documents répondant à une requête donnée, indiquer une taille de corpus au moins égale au nombre maximal de documents à extraire
  * _**Exemple :** moissonnage du texte intégral, au format PDF, des 20 documents comportant le terme « Groenland » dans leurs titres :_ [_https://api.istex.fr/document/?q=title:groenland&size=25&extract=fulltext\[pdf\]_](https://api.istex.fr/document/?q=title:groenland&size=25&extract=fulltext[pdf])\_\_

