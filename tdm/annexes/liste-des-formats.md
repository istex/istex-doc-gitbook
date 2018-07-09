# Liste des formats et types de fichiers présents dans ISTEX

ISTEX met à la disposition de ses utilisateurs différents types de fichiers pour ses documents :

* le texte intégral
* les métadonnées
* les annexes
* les couvertures
* les enrichissements

Ces types de fichiers sont eux-mêmes disponibles dans différents formats qui ont chacun leur particularité à prendre en compte lors de l'extraction  en fonction de l'objectif visé.

## Texte intégral



#### o   **PDF :** Portable Document Format \(format de document portable\)

Il s'agit d'un format de description de pages pouvant contenir du texte, des dessins, des images et photographies \(noir et blanc, couleur, 3D\). C’est un format ouvert, évolutif et multiplateforme, issu de l’imprimerie, qui conserve la mise en page du document original. Il offre une sécurité permettant à l’auteur d’un document d’empêcher sa modification par des utilisateurs. Il a été créé par Adobe Systems, Inc. Le logiciel Adobe® Acrobat® Reader est nécessaire pour lire et imprimer un fichier PDF.

_Les fichiers en format PDF dans ISTEX sont des fichiers originaux fournis par l’éditeur._

#### o   **ZIP**

Il s'agit d'un format permettant l’archivage et la compression de fichiers. L’archivage est l’utilisation d’un seul fichier pour stocker plusieurs fichiers. La compression des fichiers permet de réduire leur taille. Compresser les fichiers permet de gagner du temps dans le chargement des données et de la place dans le stockage de celles-ci. Le logiciel de compression analyse le fichier et compresse les parties qui se répètent. Lors de la décompression, la forme originale du fichier est restaurée. On peut le comparer à la combinaison de tar \(archivage\) et gzip \(compression\) dans le cadre d'une archive compressée .tgz.

_Dans ISTEX, le répertoire ZIP proposé pour chaque document du corpus contient les fichiers fournis par l’éditeur \(PDF, XML structuré, images, couvertures, annexes\) ainsi que le JSON produit par ISTEX._

#### o   **TEI :** Text Encoding Initiative \(initiative pour l’encodage du texte\)

La TEI est un format d’encodage de textes permettant de traiter tout type de document numérique exprimé en langage de balisage XML.

La communauté académique internationale constituée autour de la Text Encoding Initiative définit des recommandations pour la syntaxe de ce format et un métalangage pour la description des structures d’encodage de textes. Le consortium de la TEI s’organise en différentes instances : conseil d’administration, conseil technique, groupes de travail, groupes d’intérêt spécifique. Les groupes font des propositions pour les recommandations qui sont ensuite adoptées \(ou non\) par le conseil technique. Ces recommandations sont regroupées dans un guide : [TEI: P5 Guidelines](http://www.tei-c.org/Guidelines/P5/).

_C'est le format qui a été retenu dans ISTEX pour harmoniser, autour d'un format pivot, les fichiers XML issus des différentes DTD des éditeurs. Les fichiers XML TEI ainsi générés reproduisent la structuration fine du texte présente au départ. Dans le cas où l’éditeur ne fournit pas de XML, les fichiers XML TEI sont générés à partir du PDF via une transformation PDF-to-Text et une injection du texte brut non structuré dans la balise &lt;body&gt;_.

#### o   **TXT :** Text

Un fichier txt est un fichier contenant du texte au format ASCII.

Le code ASCII \(American Standard Code for Information Interchange - Code Américain Standard pour l'Echange d'Informations\) est le code numérique représentant les 128 caractères possibles du clavier.

Un fichier txt peut être lu ou modifié via le bloc-notes ou un éditeur de texte traditionnel.

_Dans ISTEX, les fichiers en texte brut sont générés à partir d’une transformation du PDF original à l’aide du logiciel PDF-to-Text._

#### o   **OCR :** Optical Character Recognition \(reconnaissance optique de caractères\)

La reconnaissance optique de caractères, ou océrisation, est une technique informatique permettant – grâce à un procédé optique - de lire et stocker des images de textes imprimés, dactylographiés ou manuscrits, et de les traduire en fichiers textes.

_Dans ISTEX, les fichiers OCR sont générés grâce à une chaîne de réocérisation basée sur l’outil Tesseract. Cette chaîne permet d’améliorer la qualité des documents originaux dont le texte est absent \(PDF image\) ou non exploitable \(problèmes de reconnaissance de caractères\). Lorsqu’il est disponible, ce fichier OCR doit être utilisé à la place du fichier TXT. Pour plus de détails, voir le billet de blog_ [_OCR : production de plein texte_](https://blog.istex.fr/ocr-production-de-plein-texte/)_._ 

#### o   **TIFF :** Tagged Image File Format \(format de fichier d’image étiqueté\)

TIFF est un format de fichier pour image numérique dans lequel des balises permettent de décrire les caractéristiques d’une image \(dimensions, nombre de couleurs utilisées, type de compression\).

Il permet de stocker des images matricielles \(cartes de points\) de taille importante \(plus de 4 Go compressées\), en noir et blanc, en couleurs réelles, ainsi que des images indexées, faisant usage d'une palette de couleurs.

Il s'agit d'un format de conteneur \(ou encapsulation\), à la manière de avi ou zip, c'est-à-dire pouvant contenir des données de formats arbitraires. C’est un format issu du fax.

_Les fichiers en format TIFF dans ISTEX sont des fichiers originaux fournis uniquement par les éditeurs des ressources EBBO et ECCO._

## Métadonnées

Les métadonnées sont les informations bibliographiques permettant de présenter un document \(nom de l’auteur, affiliation, revue, éditeur, etc.\). 

#### o   **XML :** Extensible Markup Language \(langage de balisage extensible\)

Il s'agit d'un langage de balisage ouvert qui permet de structurer de manière hiérarchisée les données d’un document. La structuration balisée des métadonnées d’un document permet la lecture de ces données par une machine \(traitement automatique\) et l’échange de ces données entre les machines. C’est un langage standardisé, simple et extensible, permettant de décrire tout type de donnée.

_Dans ISTEX, les métadonnées en XML sont des fichiers originaux fournis par l’éditeur selon une DTD propre._

#### o   **MODS :** Metadata Object Description Schema \(schéma de description objet de métadonnées\)

MODS est un schéma XML créé pour traiter des données bibliographiques et qui s’est élargi de façon à permettre la description de tout type de document et de tout support \(numérique ou non\) : texte imprimé, document iconographique, enregistrement sonore, document d'archives, collection de documents.

_Dans ISTEX, les fichiers MODS sont générés à partir d’une transformation des XML originaux, afin de les homogénéiser dans un format de description standard. Le format MODS a été utilisé dans sa version 3.6._

#### o   **JSON :** JavaScript Object Notation \(notation des objets du langage JavaScript\)

JSON est un format standard permettant la représentation et l’échange de données structurées, facile à lire/écrire par les humains, facile à analyser par les machines. JSON est issu du langage de programmation JavaScript. Les documents JSON étant relativement légers, ce format est souvent utilisé pour structurer et transmettre des données sur des sites web. JSON est une syntaxe permettant de sérialiser des objets, tableaux, nombres, chaînes de caractères, booléens, valeur null et de conserver des données hiérarchiques.

_Dans ISTEX, les fichiers JSON regroupent les métadonnées du document, le lien vers le texte intégral dans ses différents formats, ainsi que toutes les informations à valeur ajoutée produites par ISTEX sur le document \(identifiant ARK ; indicateurs de qualité ; enrichissements par catégories WOS, Scopus, Science Metrix, Inist, enrichissement par références bibliographiques structurées, enrichissement par repérage des entités nommées présentes dans le texte intégral, enrichissement par indexation automatique\)_

## Annexes

Les annexes sont des fichiers originaux parfois fournis par l’éditeur pour accompagner et compléter le texte intégral. Ils peuvent être de plusieurs types : textes, tableurs, diaporamas, images, vidéos, multimédias, etc.

_NB : les formats d'Annexes présents dans ISTEX qui sont déjà décrits dans les rubriques précédentes ne sont pas répétés ici._

#### o   **DOC :** Document

DOC ou doc est une extension de nom de fichier, utilisée pour la documentation en format texte propriétaire, sur une large variété de systèmes d'exploitation.

Ce n’est pas une norme industrielle, ce qui pose des problèmes d’interopérabilité.

#### o   **RTF :** Rich Text Format \(format de texte enrichi\)

Format descriptif, non compressé, de fichier de traitement de texte, créé par Microsoft. Il est reconnu par la plupart des logiciels de traitement de texte comme OpenOffice.org Writer, LibreOffice Writer ou Word et peut être lu sur tous les systèmes d’exploitation \(Windows, Mac, Linux, Unix, etc.\). Il a été créé pour être un format pivot entre logiciels et plates-formes hétérogènes.

Son codage textuel des données, non compressé, le rend théoriquement lisible par l’œil humain.

#### o   **XLS :** eXceL Spreadsheet \(feuille de calcul Excel\)

Le logiciel Excel est un logiciel tableur \(permet de créer des tableaux\) et grapheur \(permet de générer des graphiques à partir de ces tableaux\). Il intègre des fonctions de calcul numérique, de représentation graphique, d'analyse de données  et de programmation.

Excel utilise des fichiers portant l'extension xls ou xlsx. Chaque fichier correspond à un classeur contenant des feuilles de calculs. Chaque feuille correspond à un tableau de lignes et de colonnes pouvant contenir des valeurs \(numériques ou non\) ainsi que des formules permettant les calculs.

#### o   **XLSX :** eXceL Spreadsheet Xml \(feuille de calcul Excel respectant la norme XML\)

.xlsx est une extension de nom de fichier pour tableur au format Office Open XML utilisé par Microsoft Office à partir de la version 2007.

Le nouveau format xlsx permet de bénéficier des nouveaux outils \(comme les tables ou mises en forme conditionnelles avancées\).

####  o   **PPT :** PowerPoinT

PowerPoint est un logiciel de présentation de diaporama édité par Microsoft et faisant partie de la suite Microsoft Office. Il fonctionne sous Windows et Mac OS. Un fichier PPT est un diaporama.

#### o   **GIF :** Graphics Interchange Format \(format d'échange d'images\)

Format d’image numérique, à mi-chemin entre une image fixe et une courte vidéo, couramment utilisé sur le web.

Il a été créé par CompuServe pour réaliser des images de poids assez faible \(légèreté obtenue par une limitation du nombre des couleurs à 256\). Il utilise l’algorithme non destructeur LZW \(Lampel Ziv Welch : noms de ses auteurs\) pour la compression d'images, breveté par l’entreprise Unisys à laquelle une redevance devait être versée par les éditeurs de logiciels manipulant des images GIF. C’est une des raisons pour lesquelles le format PNG \(aussi limité à 256 couleurs\), libre de droits, a été préféré. Le fait que le GIF soit tombé dans le domaine public ne devrait pas changer cette préférence, car le PNG qui permet un codage des couleurs sur 32 bits \(contre 8 pour le GIF\) et plusieurs niveaux de transparence, est désormais techniquement supérieur au GIF.

#### o   **JPEG :** Joint Photographic Experts Group \(groupe mixte d'experts en photographie\)

Norme qui définit le format d'encodage et l'algorithme de décodage pour une représentation numérique compressée d'une image fixe.

Le Joint Photographic Experts Group travaille en partenariat avec l'Union Internationale des Télécommunications \(d'où le « joint » pour mixte\).

Les images JPEG ont l'extension ".jpg", ".jpeg", ".jpe" ou ".jfif".

Le format JPEG permet de compresser des images bitmap très détaillées, en utilisant un algorithme de compression destructif \(taux de compression élevé, mais dégradation de la qualité d'image\).

#### o   **MPEG :** Moving Pictures Experts Group \(groupe d’experts internationaux de l’industrie de l’image\)

Le MPEG est un groupe d’experts ayant développé des standards internationaux pour la compression, le traitement et le codage d’images animées et de données audio. Ces standards internationaux sont le MPEG-1, le MPEG-2,  le MPEG-4, le MPEG-7, le MPEG-21.

Le format MPEG est un format de compression des données vidéo.

Dans les séquences vidéo, une majorité de scènes sont fixes ou changent très peu : on parle de "redondance temporelle". Puisque seuls quelques pixels changent d'une image à l'autre, on peut réduire les redondances temporelles en se contentant de décrire ce changement.

Pour ce faire, les formats MPEG-1 et MPEG-2 utilisent la prédiction compensée de mouvement.

* MPEG-1 : compression des données vidéo et des canaux audio associés.
* MPEG-2 : dédié à l’origine à la télévision numérique, il offre une qualité élevée à un débit pouvant aller jusqu'à 40 Mbps ainsi que 5 canaux audio surround.
* MPEG-4 ou ISO/CEI 14496 : codage de données multimédia sous forme d'objets numériques, afin de permettre une plus grande interactivité ; ses multiples paramètres d'encodage lui permettent de s'adapter à presque tous les supports de diffusion comme le téléchargement et le streaming sur Internet, le multimédia sur téléphone mobile, la radio numérique, les jeux vidéo, la télévision et les supports haute définition. Ses multiples paramètres d'encodage lui permettent de s'adapter à presque tous les supports de diffusion et d'obtenir différentes qualités d'image, allant du petit écran de téléphone au cinéma haute définition.
* MPEG-7 : fournit une représentation standard des données audio et vidéo pour décrire et chercher du contenu multimédia.
* MPEG-21 : offre un cadre de travail pour l’interopérabilité et l’utilisation de tous les contenus multimédia.

#### o   **MP4 :** Moving Pictures Experts Group \(groupe d’experts internationaux de l’industrie de l’image\)

Le MPEG est un groupe d’experts ayant développé des standards internationaux pour la compression, le traitement et le codage d’images animées et de données audio.

MPEG-4 ou ISO/CEI 14496 : codage de données multimédia sous forme d'objets numériques, afin de permettre une plus grande interactivité ; ses multiples paramètres d'encodage lui permettent de s'adapter à presque tous les supports de diffusion comme le téléchargement et le streaming sur Internet, le multimédia sur téléphone mobile, la radio numérique, les jeux vidéo, la télévision et les supports haute définition. Ses multiples paramètres d'encodage lui permettent de s'adapter à presque tous les supports de diffusion et d'obtenir différentes qualités d'image, allant du petit écran de téléphone au cinéma haute définition.

#### o   **AVI :** Audio Video Interleave \(imbrication audio vidéo\)

L'AVI est un format d'empaquetage conçu pour stocker des données audio et vidéo.

C’est un conteneur transportant des fichiers vidéo et audio, eux-mêmes écrits dans d'autres formats. Un fichier .avi peut ainsi abriter des fichiers vidéo MPeg ou DivX, ou encore des musiques codées en MP3.

#### o   **WMV :** Windows Media Video

Windows Media Video \(WMV\) est le nom d'une famille de codecs vidéo propriétaires développés par Microsoft.

Un fichier WMV est une vidéo au format propriétaire Windows Media Video. Un fichier au format WMV possède à la fois des données audio et vidéo, compressées pour pouvoir être diffusées en streaming, à la manière du MPEG-2 ou du MEPG-4.

Distinguer les notions de **codec**, **standard** et **format conteneur** :

* Le **standard** décrit un procédé, pouvant définir un **format conteneur** ou un format de compression.
* Le **codec** est l'implémentation matérielle ou logicielle qui met en œuvre un standard.

        Exemple : MPEG-4 AVC/H.264 est un standard vidéo, et x264 est un codec capable de produire un     flux vidéo dans le format de compression décrit par le standard.

Le **format conteneur** peut embarquer des flux audio et/ou vidéo, des données techniques descriptives des flux en présence pour permettre leur décodage, mais aussi, en fonction du conteneur, toute sorte de métadonnées comme des sous-titres, du chapitrage, du timecode etc. Les formats conteneurs ne sont pas compatibles avec tous les formats de compression.

Exemple : un conteneur MPEG-2 ne peut contenir que des flux vidéo MPEG-2, des flux audio MPEG \(layers 1, 2 ou 3\) ou des flux audio AAC.

Les **codecs propriétaires** sont développés par des entreprises, et font souvent l'objet de brevets dans les pays où c'est possible.

Les **codecs libres** ou ouverts comme Vorbis sont inventés et développés par des acteurs du logiciel libre pour permettre aux utilisateurs de garder le contrôle des médias qu'ils produisent eux-mêmes.

_NB : le mot-valise « codec » vient de « codeur décodeur » \(en anglais : coder-decoder\)._

#### o   **QT :** Quick Time

Format multimédia développé par Apple ; il est multiplateforme \(pris en charge sur les systèmes Macintosh et Windows\) ; il peut contenir une piste audio et vidéo compressée.

L’extension .mov est souvent utilisée pour les fichiers vidéo QuickTime.

## Couvertures

Il s'agit de fichiers originaux parfois fournis par l’éditeur pour présenter la couverture de la revue dans laquelle est publié le document. Ils peuvent être de plusieurs types : documents textuels \(ex. : PDF\), images \(exs. : GIF, TIFF, JPEG\), pages web \(ex. : HTML\), etc.

_NB : les formats de "Couvertures" présents dans ISTEX qui sont déjà décrits dans les rubriques précédentes ne sont pas répétés ici._

#### o   **HTML :** HyperText Markup Language \(langage de balisage d’hypertexte\)

Langage de balisage conçu pour représenter les pages web, pour écrire de l’hypertexte. Il permet de structurer sémantiquement et de mettre en forme le contenu des pages web, d’inclure des ressources multimédias dont des images, des formulaires de saisie, et des programmes informatiques.

Il est souvent utilisé avec le langage de programmation JavaScript et des feuilles de style en cascade \(CSS\).

