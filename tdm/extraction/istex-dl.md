# Application ISTEX-DL \(ISTEX download\)

Il s'agit d'une application Web permettant de télécharger facilement, au travers d’une interface conviviale, un corpus de documents ISTEX sous forme d'une archive zip ou tar.gz.

## **Avantages :**

* très simple d'emploi, l'application propose un formulaire d'usage intuitif et met à disposition de nombreuses aides à toutes les étapes
* elle gère l’authentification par la fédération d’identité lors du téléchargement d'un premier corpus \(à l’exception de l’extraction des métadonnées qui sont libres de droit\)
* elle supporte le téléchargement de gros corpus \(jusqu’à 100000 documents\)
* elle offre 3 modes d’interrogation
* elle autorise des équations booléennes sans limite de taille et des listes d’identifiants sans limite de nombre
* elle permet de générer et de réutiliser des fichiers .corpus
* elle met à disposition des exemples pédagogiques de requêtes
* elle propose 3 options de tri des documents si l’on souhaite se restreindre à une partie des résultats \(aléatoire, par pertinence, par pertinence & qualité\)
* elle affiche un échantillon de 6 documents correspondants aux résultats de l’interrogation effectuée
* elle facilite la sélection des types de fichiers et de formats à extraire dans le cas du choix d’une plateforme ou d’un outil déterminés
* elle procure une estimation moyenne de la taille de l’archive à télécharger \(dans le cas de corpus volumineux\) et offre le choix de 2 formats d’archive
* elle présente un menu de 4 fonctionnalités additionnelles accessibles en permanence en bas d’écran \(réinitialiser, récupérer, partager, historique\)

## **Inconvénient :**

* la réutilisation d’un tri aléatoire particulier n’est pas encore disponible

## **Mode d'emploi :** 

l'application est accessible à l’adresse suivante : [https://dl.istex.fr/](https://dl.istex.fr/)

#### ‌Requête : 

l’application permet de constituer un corpus à l’aide d'une équation de type booléenne, d'une simple liste d'identifiants pérennes uniques de type ARK, ou bien encore au moyen d’un fichier, de type “.corpus”, contenant des éléments propres à identifier de manière unique des documents

* les exemples d'équations \(accessibles via le bouton "Exemples"\) sont cliquables et modifiables une fois copiés dans la fenêtre d’interrogation, ce qui permet de se familiariser avec la syntaxe à employer lors de la construction de sa requête
* la recherche par ARK nécessite simplement de copier/coller une liste d'identifiants en colonne qui sera automatiquement interprétée par l'application \(tester le dernier item de la liste proposée dans le bouton "Exemples"\)
* la liste des identifiants ARK copiée/collée peut être modifiée directement dans la zone de saisie de la requête
* si l’on ne dispose pas de fichier .corpus, une extraction par l’un des 2 autres modes de requêtage \(équation booléenne ou liste d’identifiants ARK\) en générera un premier, que l'on pourra récupérer dans le fichier compressé obtenu lors du téléchargement
* l’échantillon de résultats permet de visualiser en temps réel les résultats de sa requête et de l’ajuster le cas échéant
* si l’on veut se limiter à un sous-ensemble des résultats, l’option de tirage aléatoire permettra de rassembler un échantillon représentatif de la diversité des résultats obtenus, à la différence du classement selon un ordre de pertinence qui sélectionnera les documents les plus pertinents répondant à la requête, ou du tri selon le critère “qualityOverRelevance” ou “pertinence & qualité” choisi par défaut, représentant un classement des documents selon un ordre de pertinence associé à des indicateurs de qualité \(voir la rubrique [Choix du type de scoring](../../api/results/scoring.md) pour le mode de calcul de ces différents tris\). _NB : les modes de classement impliquant un critère de pertinence ne s’appliquent qu’aux résultats d’une recherche par équation booléenne._

#### Usage

* l’usage personnalisé donne accès à tous les types de fichiers et de formats disponibles dans ISTEX ; cependant, selon les publications à télécharger, il se peut quelle que soit la sélection que certains formats ou types de fichiers \(en particulier, les annexes, couvertures ou enrichissements\) ne soient pas présents dans l’archive extraite, s’ils n’ont pas été fournis par l’éditeur ou ajoutés lors du passage dans la chaîne de traitement propre à ISTEX
* en fonction de la plateforme ou de l’outil particulier envisagés pour l’exploitation de son corpus, une sélection automatique des types de fichiers et de formats à extraire sera opérée par l’application ; changer d’option reste possible à tout moment

#### Téléchargement

* 2 formats d’archive sont à disposition : zip, format le plus répandu, ou bien tar.gz, couramment utilisé dans les environnements Unix/Linux
* la taille du corpus que l’on s’apprête à télécharger est fournie lorsqu’elle dépasse 1 Go ; elle est estimée en fonction du nombre de documents à extraire et de la sélection opérée parmi les types de fichiers et de formats associés
* une indication colorée est associée à l’estimation de la taille : la couleur orange signale une taille comprise entre 1 et 5 Go, tandis que le rouge avertit du dépassement de 5 Go
* le niveau de compression est à choisir et à adapter à la taille estimée du corpus \(lorsque cette indication est donnée\), à la bande passante de l’utilisateur, ainsi qu’à l’espace de stockage disponible sur le disque dur

#### Menu

* la fonctionnalité “Récupérer” permet de retrouver sa requête et tous les choix de paramétrage effectués en cas de fermeture de l'onglet actif ou même du navigateur \(voir aussi la rubrique “Prérequis”\)
* la fonctionnalité “Partager” s'active lorsque le formulaire est complété ; elle assure le partage du corpus que l’on s’apprête à extraire via la copie de l’URL qui s’est mise à jour au fur et à mesure où le formulaire est rempli. Coller l’URL partagée permettra de générer l’interface avec le corpus prêt à être téléchargé. 
* la fonctionnalité “Historique” propose la sauvegarde des 30 requêtes les plus récentes, chacune d'elle pouvant être à nouveau éditée, téléchargée, partagée ou supprimée

## **Prérequis :**

* l'utilisation optimale de toutes les fonctionnalités de l'application requiert l'autorisation par votre navigateur des cookies et des données pour ce site jusqu'à leur expiration 
* la récupération des données du formulaire implique de se connecter au site avec une URL sans précision de paramètres d'URL \(`https://dl.istex.fr` uniquement\)

## **Astuces :** 

#### Requête

* dans la recherche par équation booléenne, l'opérateur "OR" peut être remplacé par un blanc \(voir la rubrique [Les principaux opérateurs à manipuler](../requetage/operateurs.md)\)
* au-delà de 2000 caractères, un identifiant unique \(nommé "q\_id"\) est attribué à chaque requête, qu'il s'agisse d'une équation booléenne ou d'une liste d'identifiants de type ARK, ce qui assure sa réutilisation au moyen de la fonctionnalité “Historique”, le détail de chaque requête étant conservé
* l’interrogation par liste d’identifiants ARK ou par sélection de fichier du type .corpus lance une étape de calcul du nombre de documents, destinée à vérifier que tous les identifiants fournis correspondent bien à des publications présentes dans le réservoir ISTEX
* dans le cas de la sélection d’un classement aléatoire, l’échantillon de documents affiché ne sera pas nécessairement celui qui sera présent dans l’archive extraite \(en raison du principe même du tirage aléatoire, différent à chaque fois\)
* par défaut, l’échantillon de résultats correspond aux 6 premiers documents répondant à la requête et classés selon le critère “pertinence & qualité” ; mais il s’accordera au choix d’un autre mode de classement
* le texte intégral, au format PDF, de chacun des documents de l’échantillon est accessible par un simple clic

#### Usage

* l’information concernant les fichiers et formats, sélectionnés automatiquement lors du choix d’une plateforme ou d’un outil particuliers, est visible dans l’URL de partage, ainsi que dans l’historique une fois le corpus téléchargé
* dans le cas du choix d’un “Usage personnalisé”, cocher ou décocher un type de fichier particulier \("Texte intégral", "Métadonnées", "Enrichissements"...\) permet de sélectionner ou désélectionner automatiquement l'ensemble des formats de ce groupe
* l’application simplifie le choix des formats TXT et OCR \(le [format OCR](../annexes/liste-des-formats.md#o-ocr-optical-character-recognition-reconnaissance-optique-de-caracteres) est disponible dans ISTEX lorsqu’un document a été ré-océrisé\) en sélectionnant, de manière transparente pour l’utilisateur, le format du texte de qualité la meilleure pour chaque document

#### Téléchargement

* l’archive téléchargée comprend, en complément des publications demandées et du fichier .corpus, un fichier “manifest” reprenant les caractéristiques de l’interrogation, ainsi que, si nécessaire, un fichier “log” répertoriant les documents qui n’ont pu être extraits

#### Menu

* lorsque le téléchargement a été lancé, le partage du corpus extrait est toujours possible via la fonctionnalité "Historique"

  



