# Application Istex-DL (Istex download)

Il s'agit d'une application Web permettant de télécharger facilement, au travers d’une interface conviviale, un corpus de documents Istex sous forme d'une archive zip ou tar.gz.

## **Avantages :**

* très simple d'emploi, l'application propose un formulaire d'usage intuitif et met à disposition de nombreuses aides à toutes les étapes
* elle gère l’authentification par la fédération d’identité lors du téléchargement d'un premier corpus (à l’exception de l’extraction des métadonnées qui sont libres de droit)
* elle supporte le téléchargement de gros corpus (jusqu’à 100 000 documents)
* elle offre différents modes d’interrogation (modes utilisant des équations booléennes ou des identifiants uniques pérennes), dont un mode de "recherche assistée" à destination des utilisateurs débutants
* elle autorise des équations booléennes sans limite de taille et des listes d’identifiants sans limite de nombre
* elle permet de générer et de réutiliser des fichiers .corpus, fichiers documentant une extraction et conservant la liste des identifiants uniques de chaque document du corpus
* elle met à disposition des exemples pédagogiques de requêtes
* elle propose 3 options de tri des documents si l’on souhaite se restreindre à une partie des résultats (aléatoire, par pertinence, par pertinence & qualité)
* elle permet de naviguer dans la totalité des documents correspondants aux résultats de l’interrogation effectuée
* elle facilite la sélection des types de fichiers et de formats à extraire dans le cas du choix d’une plateforme ou d’un outil déterminés, comme CorText par exemple
* elle procure une estimation moyenne de la taille de l’archive à télécharger (dans le cas de corpus volumineux) et offre le choix de 2 formats d’archive
* elle présente un menu de 4 fonctionnalités additionnelles accessibles en permanence en bas d’écran (réinitialiser, récupérer, partager, historique)

## **Inconvénient :**

* la réutilisation d’un tri aléatoire particulier n’est pas encore disponible
* l'exploitation d'un export de gestionnaire bibliographique n'est pas encore disponible

## **Mode d'emploi :**&#x20;

l'application est accessible à l’adresse suivante : [https://dl.istex.fr/](https://dl.istex.fr/)

#### ‌Requête :  <a href="#mode-demploi-requete" id="mode-demploi-requete"></a>

L’application permet de constituer un corpus à l’aide d'une équation booléenne, d'une simple liste d'identifiants uniques pérennes (DOI, ARK ou ID Istex), ou bien encore au moyen d’un fichier (de type “.corpus”) contenant des éléments propres à identifier de manière unique des documents.&#x20;

* la "recherche assistée" permet de construire pas à pas une requête simple de type équation booléenne, sans connaissance des champs à interroger et de la syntaxe à utiliser
* les exemples d'équations (accessibles via le bouton "Exemples") sont cliquables et modifiables une fois copiés dans la fenêtre d’interrogation, ce qui permet également de se familiariser avec la syntaxe à employer lors de la construction de sa requête
* la recherche par identifiants nécessite simplement de choisir un type d’identifiant et de copier/coller une liste constituée en colonne ; elle sera automatiquement interprétée par l'application (tester le dernier item de la liste proposée dans le bouton "Exemples")
* la liste des identifiants copiée/collée peut être modifiée directement dans la zone de saisie de la requête
* si l’on ne dispose pas de fichier .corpus, une extraction par l’un des 2 autres modes de requêtage (équation booléenne ou liste d’identifiants) en générera un premier, que l'on pourra récupérer dans le fichier compressé obtenu lors du téléchargement
* la visualisation des résultats permet de tester en temps réel les résultats de sa requête et de l’ajuster le cas échéant
* si l’on veut se limiter à un sous-ensemble des résultats, l’option de tirage aléatoire permettra de rassembler un échantillon représentatif de la diversité des résultats obtenus, à la différence du classement selon un ordre de pertinence qui sélectionnera les documents les plus pertinents répondant à la requête, ou du tri selon le critère “qualityOverRelevance” ou “pertinence & qualité” choisi par défaut, représentant un classement des documents selon un ordre de pertinence associé à des indicateurs de qualité (voir la rubrique [Choix du type de scoring](../../api/results/scoring.md) pour le mode de calcul de ces différents tris). _NB : les modes de classement impliquant un critère de pertinence ne s’appliquent qu’aux résultats d’une recherche par équation booléenne._

#### Usage <a href="#mode-demploi-usage" id="mode-demploi-usage"></a>

* l’usage personnalisé donne accès à tous les types de fichiers et de formats disponibles dans Istex ; cependant, selon les publications à télécharger, il se peut, en dépit de la sélection faite, que certains formats ou types de fichiers (en particulier, les annexes, couvertures ou enrichissements) ne soient pas présents dans l’archive extraite, s’ils n’ont pas été fournis par l’éditeur ou ajoutés lors du passage dans la chaîne de traitement propre à Istex
* en fonction de la plateforme ou de l’outil particulier envisagés pour l’exploitation de son corpus, une sélection automatique des types de fichiers et de formats compatibles avec l'outil visé sera opérée par l’application ; changer d’option reste possible à tout moment

#### Téléchargement&#xD; <a href="#mode-demploi-telechargement" id="mode-demploi-telechargement"></a>

* 2 formats d’archive sont à disposition : zip, format le plus répandu, ou bien tar.gz (format « tar », lui-même compressé au format « gzip »), couramment utilisé dans les environnements Unix/Linux
* la taille du corpus que l’on s’apprête à télécharger est fournie lorsqu’elle dépasse 1 Go ; elle est estimée en fonction du nombre de documents à extraire et de la sélection opérée parmi les types de fichiers et de formats associés
* une indication colorée est associée à l’estimation de la taille : la couleur orange signale une taille comprise entre 1 et 5 Go, tandis que le rouge avertit du dépassement de 5 Go
* le niveau de compression est à choisir et à adapter à la taille estimée du corpus (lorsque cette indication est donnée), à la bande passante de l’utilisateur, ainsi qu’à l’espace de stockage disponible sur le disque dur

#### Menu&#xD; <a href="#mode-demploi-menu" id="mode-demploi-menu"></a>

* la fonctionnalité “Récupérer” permet de retrouver sa requête et tous les choix de paramétrage effectués en cas de fermeture de l'onglet actif ou même du navigateur (voir aussi la rubrique “Prérequis”)
* la fonctionnalité “Partager” s'active lorsque le formulaire est complété ; elle assure le partage du corpus que l’on s’apprête à extraire via la copie de l’URL qui s’est mise à jour au fur et à mesure où le formulaire est rempli. Coller l’URL partagée permettra de générer l’interface avec le corpus prêt à être téléchargé.&#x20;
* la fonctionnalité “Historique” propose la sauvegarde des 30 requêtes les plus récentes, chacune d'elle pouvant être à nouveau éditée, téléchargée, partagée ou supprimée

## **Prérequis :**

* l'utilisation optimale de toutes les fonctionnalités de l'application requiert l'autorisation par votre navigateur des cookies et des données pour ce site jusqu'à leur expiration&#x20;
* la récupération des données du formulaire implique de se connecter au site avec une URL sans précision de paramètres d'URL (`https://dl.istex.fr` uniquement)

## **Astuces :**&#x20;

#### Requête&#xD; <a href="#astuces-requete" id="astuces-requete"></a>

* dans la recherche par équation booléenne, l'opérateur **OR** s'applique par défaut ; autrement dit un “espace” entre 2 termes de recherche sera interprété comme un opérateur **OR** (voir la rubrique [Les principaux opérateurs à manipuler](../requetage/operateurs.md))
* au-delà d'un certain seuil (2000 caractères dans le cas d'une équation booléenne ; entre 46 et 80 identifiants selon le type d’identifiant unique pérenne choisi) est attribué à chaque requête un identifiant unique nommé "q\_id", le détail de la requête correspondante étant conservé 6 mois par l'API Istex (au-delà, il est nécessaire de relancer le téléchargement pour réinitialiser la conservation du “q\_id”) ; la réutilisation de ces requêtes longues est assurée au travers de la fonctionnalité “Historique”, au même titre que pour les requêtes plus courtes
* l’interrogation par liste d’identifiants ou par sélection de fichier du type .corpus lance une étape de calcul du nombre de documents, destinée à vérifier que tous les identifiants fournis correspondent bien à des publications présentes dans le réservoir Istex
* Si des erreurs de syntaxe sont présentes dans une liste d’identifiants, les 20 premières erreurs seront indiquées avec le numéro de ligne correspondant. La correction des erreurs permettra de lancer le calcul du nombre de résultats. Pour corriger, se reporter aux conseils et liens suivants : [DOI](https://dx.doi.org/101163/9789004294929) (corriger le préfixe), [ARK](https://doc.istex.fr/api/ark/) (respecter le préfixe “ark:/67375/” et la suite de 3-8-1 caractères alphanumériques), [ID Istex](https://doc.istex.fr/api/ark/) (respecter la suite de 40 caractères alphanumériques). En cas d’impossibilité à corriger ces erreurs, supprimer les lignes erronées pour déclencher l’envoi de la requête.
* dans le mode "recherche assistée", l'équation booléenne correspondant aux différentes sélections et recherches effectuées s'écrit automatiquement en parallèle et en temps réel ; cette fonctionnalité permet de se familiariser avec les noms techniques des champs et la syntaxe propre à l'API Istex
* pour modifier directement en écriture l'équation booléenne initiée via l'assistant de construction de requête, il est possible à tout moment de basculer du mode "recherche assistée" au mode "équation booléenne" par un simple clic sur le bouton crayon. Attention : basculer du mode "équation booléenne" au mode "recherche assistée" réinitialise le formulaire !
* par défaut, l'affichage des résultats répondant à la requête suit un classement selon le critère “pertinence & qualité” ; mais il s’accordera au choix d’un autre mode de classement
* pour chaque résultat, les différents types de fichiers et de formats existants dans la plateforme Istex sont accessibles par un simple clic

#### Usage <a href="#astuces-usage" id="astuces-usage"></a>

* l’information concernant les fichiers et formats, sélectionnés automatiquement lors du choix d’une plateforme ou d’un outil particuliers, est visible dans l’URL de partage, ainsi que dans l’historique une fois le corpus téléchargé
* dans le cas du choix d’un “Usage personnalisé”, cocher ou décocher un type de fichier particulier ("Texte intégral", "Métadonnées", "Enrichissements"...) permet de sélectionner ou désélectionner automatiquement l'ensemble des formats de ce groupe
* l’application simplifie le choix des formats TXT et OCR (le [format OCR](../annexes/liste-des-formats.md#o-ocr-optical-character-recognition-reconnaissance-optique-de-caracteres) est disponible dans Istex lorsqu’un document a été ré-océrisé) en sélectionnant, de manière transparente pour l’utilisateur, le format du texte de qualité la meilleure pour chaque document
* la sélection du [format "Cleaned"](https://doc.istex.fr/tdm/annexes/liste-des-formats.html#o-cleaned-nettoy%C3%A9) (format de texte brut sans images, légendes, tableaux, formules, etc. , particulièrement adapté à un traitement en fouille de textes) n'est pas exclusive du format TXT. Si vous choisissez d'extraire ces 2 formats pour votre corpus, les documents possédant ces formats seront téléchargés conjointement&#x20;

#### Téléchargement&#xD; <a href="#astuces-telechargement" id="astuces-telechargement"></a>

* l’archive téléchargée comprend, en complément des publications demandées et du fichier .corpus, un fichier “manifest” reprenant les caractéristiques de l’interrogation, ainsi que, si nécessaire, un fichier “log” répertoriant les documents qui n’ont pu être extraits
* les usages LODEX et CorText nécessitent un téléchargement au format zip

#### Menu&#xD; <a href="#astuces-menu" id="astuces-menu"></a>

*   lorsque le téléchargement a été lancé, le partage du corpus extrait est toujours possible via la fonctionnalité "Historique"

    &#x20;&#x20;

