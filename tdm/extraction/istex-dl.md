# Application ISTEX-dl \(ISTEX download\)

Il s'agit d'une application Web permettant de télécharger très facilement, via une interface conviviale, un corpus de documents ISTEX sous forme d'archive zip à partir d’une requête.

* **Avantages :**
  * très simple d'emploi, l'application met à disposition de nombreuses aides à toutes les étapes
  * elle gère l’authentification par la fédération d’identité lors du téléchargement d'un premier corpus
  * elle permet de constituer un corpus, soit en utilisant une équation classique de type booléenne, soit à partir d'une simple liste d'identifiants pérennes de type ARK
  * elle offre la possibilité de trier les résultats par pertinence ou de manière aléatoire, le tirage aléatoire pour constituer un échantillon représentatif de documents pouvant s'avérer intéressant lorsque l'on restreint le nombre de documents à extraire
  * elle permet de sélectionner de manière intuitive les fichiers et formats que l'on souhaite télécharger
  * elle propose le téléchargement des annexes et couvertures disponibles pour la liste des documents extraits, ainsi que des enrichissements présents dans ISTEX sans distinction de type
  * elle offre le partage du corpus téléchargé via le lien correspondant
  * elle permet de récupérer sa requête et les choix de paramétrage effectués en cas de fermeture accidentelle de l'onglet actif ou du navigateur
  * elle propose la sauvegarde dans un historique des 30 requêtes les plus récentes, chacune d'elle pouvant être à nouveau éditée, téléchargée, partagée ou supprimée
* **Inconvénients :**
  * il est nécessaire de se reconnecter au site après l'authentification
  * la longueur des équations que l'on peut formuler dans la fenêtre de requête est limitée ; la limite dépend du navigateur employé et est précisée dans l'aide "i" proposée en regard de l'indication sur le nombre de caractères :

    ![](../../.gitbook/assets/capture_doc_dl.PNG)

  * les corpus ne peuvent être extraits actuellement que dans la limite de 10 000 documents
  * l'extraction des différents types d'enrichissement n'est pas encore opérationnelle
* **Mode d'emploi :** l'application est accessible à l’adresse suivante : [https://dl.istex.fr/](https://dl.istex.fr/)
* **Prérequis :**
  * l'utilisation optimale de toutes les fonctionnalités de l'application requiert l'autorisation par votre navigateur jusqu'à leur expiration des cookies et des données pour ce site
  * la récupération des données du formulaire implique de se connecter au site avec une URL sans précision d'un attribut \(https://dl.istex.fr uniquement\)
* **Astuces :** 
  * la recherche par ARK nécessite simplement de copier/coller une liste d'identifiants qui sera interprétée par l'application
  * dans la recherche par équation classique, l'opérateur booléen "OR" peut être remplacé simplement par un blanc
  * une indication colorée alerte sur le nombre de caractères restants dans la fenêtre de requêtage 
  * les exemples pédagogiques proposés sont cliquables et modifiables, une fois présents dans la  

    fenêtre de requêtage pour se familiariser avec la syntaxe à employer lors de la construction de sa requête 

  * si l'on souhaite extraire l'ensemble des formats existants pour un type de fichier particulier, il suffit de cocher ce dernier et tous les formats qui en dépendent seront automatiquement sélectionnés





