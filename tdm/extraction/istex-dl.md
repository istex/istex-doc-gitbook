# Application ISTEX-DL \(ISTEX download\)

Il s'agit d'une application Web permettant de télécharger facilement, au travers d’une interface conviviale, un corpus de documents ISTEX sous forme d'une archive zip ou tar.gz.

* **Avantages :**
  * très simple d'emploi, l'application propose un formulaire d'usage intuitif et met à disposition de nombreuses aides à toutes les étapes
  * elle gère l’authentification par la fédération d’identité lors du téléchargement d'un premier corpus \(à l’exception de l’extraction des métadonnées qui sont libres de droit\)
  * elle supporte le téléchargement de gros corpus \(jusqu’à 100000 documents\) 
  * elle permet de constituer un corpus à partir d'une équation classique de type booléenne ou d'une simple liste d'identifiants pérennes uniques de type ARK  
  * elle autorise des équations booléennes sans limite de nombre de caractères
  * elle met à disposition des exemples pédagogiques de requêtes
  * elle propose plusieurs options de tri des documents si l’on ne souhaite télécharger qu’une partie de l’ensemble des résultats : l’option de tirage aléatoire permet de rassembler un échantillon représentatif de la diversité des résultats obtenus, à la différence du classement selon un ordre de pertinence qui sert à constituer un sous-corpus des documents les plus pertinents répondant à sa requête, ou du tri selon le critère “qualityOverRelevance”, sélectionné par défaut, représentant un classement des documents selon un ordre de pertinence associé à des indicateurs de qualité \(voir la rubrique [**Choix du type de scoring**](../../api/results/scoring.md) ****pour le mode de calcul de ces différents tris\)
  * elle affiche, pour chaque interrogation effectuée, un échantillon de 6 documents permettant de visualiser en temps réel les résultats de sa requête et de la modifier le cas échéant \(par défaut, cet échantillon correspond aux 6 premiers documents répondant à la requête et triés selon le critère “qualityOverRelevance”, mais le choix d’un autre mode de tri modifiera l’échantillon en conséquence\)
  * elle facilite le choix des types de fichiers et de formats à extraire en proposant, selon l’usage d'un outil particulier que l’on souhaite faire pour son corpus, une sélection automatique adaptée à l’application choisie
  * elle simplifie le choix des formats TXT et OCR en sélectionnant, de manière transparente pour l’utilisateur, le format du texte de qualité la meilleure pour chaque document
  * elle procure une estimation moyenne de la taille de l’archive à télécharger, selon le nombre de documents à extraire et la sélection des types de fichiers et de formats opérée
  * elle offre le choix de 2 formats d’archive \(zip, format le plus répandu, ou bien tar.gz, couramment utilisé dans les environnements Unix/Linux\), ainsi que du niveau de compression, pour qu’ils soient appropriés à la bande passante de l’utilisateur et à l’espace de stockage à disposition
  * elle fournit dans l’archive extraite un fichier répertoriant, si nécessaire, les documents qui n’ont pu être extraits
  * elle présente un menu de 4 fonctionnalités additionnelles accessibles en permanence en bas d’écran
  * elle permet de récupérer sa requête et les choix de paramétrage effectués en cas de fermeture accidentelle de l'onglet actif ou du navigateur \(fonctionnalité “Récupérer”\)
  * elle assure le partage de son corpus via la copie de l’URL conforme à l’extraction que l’on s’apprête à réaliser, cette fonctionnalité “Partager”s'activant lorsque le formulaire est complété 
  * elle propose la sauvegarde dans un historique des 30 requêtes les plus récentes, chacune d'elle pouvant être à nouveau éditée, téléchargée, partagée ou supprimée
* **Inconvénient :**
  * la réutilisation d’un tri aléatoire particulier n’est pas encore disponible
* **Mode d'emploi :** l'application est accessible à l’adresse suivante : [https://dl.istex.fr/](https://dl.istex.fr/)
* **Prérequis :**
  * l'utilisation optimale de toutes les fonctionnalités de l'application requiert l'autorisation par votre navigateur des cookies et des données pour ce site jusqu'à leur expiration 
  * la récupération des données du formulaire implique de se connecter au site avec une URL sans précision de paramètres d'URL \(`https://dl.istex.fr` uniquement\)
* **Astuces :** 
  * dans la recherche par équation classique, l'opérateur booléen "OR" est optionnel et peut être remplacé par un blanc \(voir la rubrique [Les principaux opérateurs à manipuler](../requetage/operateurs.md)\)
  * au-delà de 2000 caractères, un identifiant unique \("q\_id"\) est attribué à chaque équation booléenne, ce qui assure une possible réutilisation au moyen de la fonctionnalité “Historique”, le détail de chaque équation étant conservé
  * la recherche par ARK nécessite simplement de copier/coller une liste d'identifiants en colonne qui sera automatiquement interprétée par l'application \(voir le dernier item de la liste des "Exemples"\)
  * les exemples d'équations sont cliquables et modifiables, une fois copiés dans la fenêtre d’interrogation, ce qui permet de se familiariser avec la syntaxe à employer lors de la construction de sa requête
  * le texte intégral, au format PDF, de chacun des documents de l’échantillon de résultats d’une requête est accessible par un simple clic
  * dans le cas de la sélection d’un classement aléatoire, l’échantillon de documents affiché ne sera pas nécessairement celui qui sera présent dans l’archive extraite     \(principe du tirage aléatoire appliqué différent à chaque fois\)
  * Dans le cas du choix d’un “Usage personnalisé”, cocher ou décocher un type de fichier particulier \("Texte intégral", "Métadonnées", "Enrichissements"...\) permet de sélectionner ou désélectionner automatiquement l'ensemble des formats de ce groupe
  * une indication colorée est associée à la taille estimée de l’archive que l’on s’apprête à télécharger : la couleur orange signale une taille comprise entre 1 et 5 Go, tandis que le rouge avertit du dépassement d’une taille de 5 Go
  * lorsque le téléchargement est effectif, le partage du corpus extrait est toujours possible via la  fonctionnalité "Historique"   



