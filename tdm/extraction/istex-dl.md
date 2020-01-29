# Application ISTEX-DL \(ISTEX download\)

Il s'agit d'une application Web permettant de télécharger très facilement, via une interface conviviale, un corpus de documents ISTEX sous forme d'une archive zip à partir d’une requête.

* **Avantages :**
  * très simple d'emploi, l'application propose un formulaire d'usage intuitif et met à disposition de nombreuses aides à toutes les étapes
  * elle gère l’authentification par la fédération d’identité lors du téléchargement d'un premier corpus
  * elle offre le téléchargement de gros corpus \(jusqu’à 100 000 documents\) 
  * elle permet de constituer un corpus à partir d'une équation classique de type booléenne ou d'une simple liste d'identifiants pérennes de type ARK  
  * elle autorise des équations de très grande taille \(plus de 60 000 caractères\)
  * elle propose des exemples de requêtes pédagogiques
  * elle met à disposition une option de tirage aléatoire pour constituer, sous forme d'un sous-corpus, un échantillon représentatif de la diversité des résultats obtenus, à la différence du classement par défaut qui s'effectue selon un ordre de pertinence calculé par l'algorithme BM25 du moteur de recherche de l'API sur les documents répondant à la requête effectuée \(voir la rubrique [**Choix du type de scoring**](../../api/results/scoring.md)\)
  * elle permet de récupérer sa requête et les choix de paramétrage effectués en cas de fermeture accidentelle de l'onglet actif ou de votre navigateur 
  * elle offre le partage de votre corpus par la copie de l’URL correspondant à l’extraction que vous vous apprêtez à réaliser \(le bouton est activé lorsque le formulaire est complété\) 
  * elle simplifie le choix des formats TXT et OCR, en sélectionnant pour chaque document le format du texte de qualité la meilleure
  * elle propose la sauvegarde dans un historique des 30 requêtes les plus récentes, chacune d'elle pouvant être à nouveau éditée, téléchargée, partagée ou supprimée
  * elle fournit un fichier répertoriant, le cas échéant, les documents qui n’ont pu être extraits  
* **Inconvénients :**
  * la limite autorisée pour des équations très longues dépend du navigateur employé \(indication notifiée dans l'aide fournie\)
* **Mode d'emploi :** l'application est accessible à l’adresse suivante : [https://dl.istex.fr/](https://dl.istex.fr/)
* **Prérequis :**
  * l'utilisation optimale de toutes les fonctionnalités de l'application requiert l'autorisation par votre navigateur des cookies et des données pour ce site jusqu'à leur expiration 
  * la récupération des données du formulaire implique de se connecter au site avec une URL sans précision de paramètres d'URL \(`https://dl.istex.fr` uniquement\)
* **Astuces :** 
  * la recherche par ARK nécessite simplement de copier/coller une liste d'identifiants en colonne qui sera interprétée par l'application \(voir dernier item du bouton "Exemples"\)
  * dans la recherche par équation classique, l'opérateur booléen "OR" est optionnel et peut être remplacé par un blanc
  * les exemples d'équations sont cliquables et modifiables, une fois copiés dans la fenêtre de requêtage, permettant de se familiariser avec la syntaxe à employer lors de la construction de sa requête
  * une indication colorée, associée au nombre de caractères calculé en temps réel en fonction de la longueur de l’équation dans la fenêtre de requêtage, permet d’ajuster plus aisément la taille de sa requête : la couleur orange signale qu'il reste 1 000 caractères encore disponibles ; le rouge avertit du dépassement de la taille maximale
  * en cochant ou décochant un type de fichier particulier, tous les formats associés sont automatiquement sélectionnés ou désélectionnés
  * lorsque le téléchargement est effectif, le partage du corpus extrait est toujours possible via le bouton "Historique"   





