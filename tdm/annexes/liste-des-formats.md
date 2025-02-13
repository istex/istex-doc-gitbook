# Liste des formats et types de fichiers présents dans ISTEX

Istex met à la disposition de ses utilisateurs différents types de fichiers pour ses documents :

* le texte intégral
* les métadonnées
* les annexes
* les couvertures
* les enrichissements

Ces types de fichiers sont eux-mêmes disponibles dans différents formats qui ont chacun leur particularité à prendre en compte lors de l'extraction des documents, en fonction de l'objectif visé.

## Texte intégral

### **o PDF (**&#x50;ortable Document Format _\*Format de document portable_)

Il s'agit d'un format de description de pages pouvant contenir du texte, des dessins, des images et photographies (noir et blanc, couleur, 3D). C’est un format ouvert, évolutif et multiplateforme, issu de l’imprimerie, qui conserve la mise en page du document original. Il offre une sécurité permettant à l’auteur d’un document d’empêcher sa modification par des utilisateurs. Il a été créé par Adobe Systems, Inc. Le logiciel Adobe® Acrobat® Reader est nécessaire pour lire et imprimer un fichier PDF.

_Les fichiers en format PDF dans Istex sont des fichiers originaux fournis par l’éditeur._

### **o ZIP**

Il s'agit d'un format permettant l’archivage et la compression de fichiers. L’archivage est l’utilisation d’un seul fichier pour stocker plusieurs fichiers. La compression des fichiers permet de réduire leur taille. Compresser les fichiers permet de gagner du temps dans le chargement des données et de la place dans le stockage de celles-ci. Le logiciel de compression analyse le fichier et compresse les parties qui se répètent. Lors de la décompression, la forme originale du fichier est restaurée. On peut le comparer à la combinaison de tar (archivage) et gzip (compression) dans le cadre d'une archive compressée .tgz.

_Dans Istex, le répertoire ZIP proposé pour chaque document du corpus contient les fichiers fournis par l’éditeur (texte intégral en format PDF, en XML structuré, et éventuellement des couvertures et des annexes), ainsi que le fichier_ [_JSON_](liste-des-formats.md#o-json-javascript-object-notation-notation-des-objets-du-langage-javascript) _produit par Istex._

_NB : La rubrique_ [_Extraire les documents XML des fichiers ZIP_](../verification/extract-xml-from-zip/) _propose une procédure permettant de récupérer le fichier en format XML structuré fourni par l'éditeur afin de pouvoir l'exploiter avec des outils TAL ou TDM._

### **o TEI (**&#x54;ext Encoding Initiative _\*Initiative pour l’encodage du texte_)

La TEI est un format d’encodage de textes permettant de traiter tout type de document numérique exprimé en langage de balisage XML.

La communauté académique internationale constituée autour de la Text Encoding Initiative définit des recommandations pour la syntaxe de ce format et un métalangage pour la description des structures d’encodage de textes. Le consortium de la TEI s’organise en différentes instances : conseil d’administration, conseil technique, groupes de travail, groupes d’intérêt spécifique. Les groupes font des propositions pour les recommandations qui sont ensuite adoptées (ou non) par le conseil technique. Ces recommandations sont regroupées dans un guide : [TEI: P5 Guidelines](http://www.tei-c.org/Guidelines/P5/).

_C'est le format qui a été retenu dans Istex pour harmoniser, autour d'un format pivot, les fichiers XML issus des différentes_ [_DTD_ ](https://fr.wikipedia.org/wiki/Document_type_definition)_des éditeurs. Les fichiers XML TEI ainsi générés reproduisent la structuration fine du texte présente au départ. Dans le cas où l’éditeur ne fournit pas de XML, les fichiers XML TEI sont générés à partir du PDF via une transformation PDF-to-text et une injection du texte brut non structuré dans la balise \<body>_.

{% hint style="info" %}
**Pour connaitre le shéma TEI (Text Encoding Initiative) utilisé pour le projet Istex (liste de notions textuelles admises par le plus grand nombre) voir** [**https://tei.istex.fr/**](https://tei.istex.fr/)
{% endhint %}

### **o TXT (**&#x54;ext)

Un fichier txt est un fichier contenant du texte au format UTF-8.

Un fichier txt peut être lu ou modifié via le bloc-notes ou un éditeur de texte traditionnel.

_Dans Istex, les fichiers en texte brut sont générés à partir d’une transformation du PDF original à l’aide du logiciel PDF-to-text._

### o CLEANED (Nettoyé)

Fichier au format TXT

Le format “Cleaned” a été créé par Istex pour les besoins de la fouille textuelle sur le texte intégral des publications. Il est issu d’une structuration des documents soit par l’outil Grobid, soit par l’outil Pub2TEI, la version TEI obtenue la meilleure étant sélectionnée. Le fichier “Cleaned” est alors généré en ciblant le contenu textuel de la balise du document, dont est retirée toute mise en forme, ainsi que les éléments susceptibles d’entraîner des problèmes dans le traitement réalisé par les outils de TDM (images, tableaux, figures, formules).

### **o OCR (**&#x4F;ptical Character Recognition _\*Reconnaissance optique de caractères_)

La reconnaissance optique de caractères, ou océrisation, est une technique informatique permettant – grâce à un procédé optique – de lire et stocker des images de textes imprimés, dactylographiés ou manuscrits, et de les traduire en fichiers textes.

_Dans Istex, les fichiers OCR sont générés grâce à une chaîne de réocérisation basée sur l’outil Tesseract. Cette chaîne permet d’améliorer la qualité des documents originaux dont le texte est absent (PDF image) ou non exploitable (problèmes de reconnaissance de caractères). Lorsqu’il est disponible, ce fichier OCR sera automatiquement choisi à la place du fichier TXT d’origine. Pour plus de détails, voir l'article d'actualité_ [_"OCR : production de plein texte"_](https://www.istex.fr/ocr-production-de-plein-texte/)

_NB : La rubrique_ [_Remplacer les documents TXT par les documents OCR_](liste-des-formats.md) _propose une procédure permettant d'exploiter le fichier OCR pour faire de la fouille de textes._

### **o TIFF (**&#x54;agged Image File Format _\*Format de fichier d’image étiqueté_)

TIFF est un format de fichier pour image numérique dans lequel des balises permettent de décrire les caractéristiques d’une image (dimensions, nombre de couleurs utilisées, type de compression).

Il permet de stocker des images matricielles (cartes de points) de taille importante (plus de 4 Go quand elles sont compressées), en noir et blanc, en couleurs réelles, ainsi que des images indexées, faisant usage d'une palette de couleurs.

Il s'agit d'un format de conteneur (ou encapsulation), à la manière de avi ou zip, c'est-à-dire pouvant contenir des données de formats arbitraires. C’est un format issu du fax.

_Les fichiers en format TIFF dans Istex sont des fichiers originaux fournis uniquement par les éditeurs des ressources EBBO et ECCO._

## Métadonnées

Les métadonnées sont les informations bibliographiques permettant de présenter un document (nom de l’auteur, affiliation, revue, éditeur, etc.).

### **o XML (**&#x45;xtensible Markup Language _\*Langage de balisage extensible_)

Il s'agit d'un langage de balisage ouvert qui permet de structurer de manière hiérarchisée les données d’un document. La structuration balisée des métadonnées d’un document permet la lecture de ces données par une machine (traitement automatique) et l’échange de ces données entre les machines. C’est un langage standardisé, simple et extensible, permettant de décrire tout type de donnée.

_Dans Istex, les métadonnées en XML sont des fichiers originaux fournis par l’éditeur selon une DTD propre._

### **o MODS (**&#x4D;etadata Object Description Schema _\*Schéma de description objet de métadonnées_) <a href="#o-mods-metadata-object-description-schema-schema-de-description-objet-de-metadonnees" id="o-mods-metadata-object-description-schema-schema-de-description-objet-de-metadonnees"></a>

MODS est un schéma XML créé pour traiter des données bibliographiques et qui s’est élargi de façon à permettre la description de tout type de document et de tout support (numérique ou non) : texte imprimé, document iconographique, enregistrement sonore, document d'archive, collection de documents.

_Dans Istex, les fichiers MODS sont générés à partir d’une transformation des XML originaux, afin de les homogénéiser dans un format de description standard. Le format MODS a été utilisé dans sa version 3.6._

### o JSON (JavaScript Object Notation _\*Notation des objets du langage JavaScript_)

JSON est un format standard permettant la représentation et l’échange de données structurées, facile à lire/écrire par les humains, facile à analyser par les machines. JSON est issu du langage de programmation JavaScript. Les documents JSON étant relativement légers, ce format est souvent utilisé pour structurer et transmettre des données sur des sites web. JSON est une syntaxe permettant de stocker des données de différents types : objets, tableaux, nombres, chaînes de caractères, booléens, valeurs "null", et de conserver des données hiérarchiques.

_Dans Istex, les fichiers JSON regroupent les métadonnées du document, le lien vers le texte intégral dans ses différents formats (et le cas échéant les liens vers les annexes et couvertures), ainsi que toutes les informations à valeur ajoutée produites par Istex sur le document (identifiant ARK ; indicateurs de qualité ; enrichissements par catégories scientifiques, par références bibliographiques structurées, par entités nommées, par termes d'indexation)._



## Annexes

Les annexes sont des fichiers originaux parfois fournis par l’éditeur pour accompagner et compléter le texte intégral. Ils peuvent être de plusieurs types : textes, tableurs, diaporamas, images, vidéos, multimédias, etc.

_NB : les formats d'Annexes présents dans Istex qui sont déjà décrits dans les rubriques précédentes ne sont pas répétés ici._

### **o DOC (**&#x44;ocument)

DOC ou doc est une extension de nom de fichier, utilisée pour la documentation en format texte propriétaire, sur une large variété de systèmes d'exploitation.

Ce n’est pas une norme industrielle, ce qui pose des problèmes d’interopérabilité.

### **o RTF (**&#x52;ich Text Format _\*Format de texte enrichi_)

Format descriptif, non compressé, de fichier de traitement de texte, créé par Microsoft. Il est reconnu par la plupart des logiciels de traitement de texte comme OpenOffice.org Writer, LibreOffice Writer ou Word et peut être lu sur tous les systèmes d’exploitation (Windows, Mac, Linux, Unix, etc.). Il a été créé pour être un format pivot entre logiciels et plates-formes hétérogènes.

Son codage textuel des données, non compressé, le rend théoriquement lisible par l’œil humain.

### **o XLS (**&#x65;XceL Spreadsheet _\*Feuille de calcul Excel_)

Le logiciel Excel est un logiciel tableur (permet de créer des tableaux) et grapheur (permet de générer des graphiques à partir de ces tableaux). Il intègre des fonctions de calcul numérique, de représentation graphique, d'analyse de données et de programmation.

Excel utilise des fichiers portant l'extension xls ou xlsx. Chaque fichier correspond à un classeur contenant des feuilles de calculs. Chaque feuille correspond à un tableau de lignes et de colonnes pouvant contenir des valeurs (numériques ou non) ainsi que des formules permettant les calculs.

### o **XLSX (**&#x65;XceL Spreadsheet Xml _\*Feuille de calcul Excel respectant la norme XML_)

.xlsx est une extension de nom de fichier pour tableur au format Office Open XML utilisé par Microsoft Office à partir de la version 2007.

Le nouveau format xlsx permet de bénéficier des nouveaux outils (comme les tables ou mises en forme conditionnelles avancées).

### o **PPT (**&#x50;owerPoinT)

PowerPoint est un logiciel de présentation de diaporama édité par Microsoft et faisant partie de la suite Microsoft Office. Il fonctionne sous Windows et Mac OS. Un fichier PPT est un diaporama.

### **o GIF (**&#x47;raphics Interchange Format _\*Format d'échange d'images_)

Format d’image numérique, à mi-chemin entre une image fixe et une courte vidéo, couramment utilisé sur le web.

Il a été créé par CompuServe pour réaliser des images de poids assez faible (légèreté obtenue par une limitation du nombre des couleurs à 256). Il utilise l’algorithme non destructeur LZW (Lampel Ziv Welch : noms de ses auteurs) pour la compression d'images, breveté par l’entreprise Unisys à laquelle une redevance devait être versée par les éditeurs de logiciels manipulant des images GIF. C’est une des raisons pour lesquelles le format PNG (aussi limité à 256 couleurs), libre de droits, a été préféré. Le fait que le GIF soit tombé dans le domaine public ne devrait pas changer cette préférence, car le PNG qui permet un codage des couleurs sur 32 bits (contre 8 pour le GIF) et plusieurs niveaux de transparence, est désormais techniquement supérieur au GIF.

### **o JPEG (**&#x4A;oint Photographic Experts Group _\*Groupe mixte d'experts en photographie_)

Norme qui définit le format d'encodage et l'algorithme de décodage pour une représentation numérique compressée d'une image fixe.

Le Joint Photographic Experts Group travaille en partenariat avec l'Union Internationale des Télécommunications (d'où le « joint » pour mixte).

Les images JPEG ont l'extension ".jpg", ".jpeg", ".jpe" ou ".jfif".

Le format JPEG permet de compresser des images bitmap très détaillées, en utilisant un algorithme de compression destructif (taux de compression élevé, mais dégradation de la qualité d'image).

### o **MPEG (**&#x4D;oving Pictures Experts Group _\*Groupe d’experts internationaux de l’industrie de l’image_)

Le MPEG est un groupe d’experts ayant développé des standards internationaux pour la compression, le traitement et le codage d’images animées et de données audio. Ces standards internationaux sont le MPEG-1, le MPEG-2, le MPEG-4, le MPEG-7, le MPEG-21.

Le format MPEG est un format de compression des données vidéo.

Dans les séquences vidéo, une majorité de scènes sont fixes ou changent très peu : on parle de "redondance temporelle". Puisque seuls quelques pixels changent d'une image à l'autre, on peut réduire les redondances temporelles en se contentant de décrire ce changement.

Pour ce faire, les formats MPEG-1 et MPEG-2 utilisent la prédiction compensée de mouvement.

* MPEG-1 : compression des données vidéo et des canaux audio associés.
* MPEG-2 : dédié à l’origine à la télévision numérique, il offre une qualité élevée à un débit pouvant aller jusqu'à 40 Mbps ainsi que 5 canaux audio surround.
* MPEG-4 ou MP4 ou ISO/CEI 14496 : codage de données multimédia sous forme d'objets numériques, afin de permettre une plus grande interactivité ; ses multiples paramètres d'encodage lui permettent de s'adapter à presque tous les supports de diffusion comme le téléchargement et le streaming sur Internet, le multimédia sur téléphone mobile, la radio numérique, les jeux vidéo, la télévision et les supports haute définition. Ses multiples paramètres d'encodage lui permettent de s'adapter à presque tous les supports de diffusion et d'obtenir différentes qualités d'image, allant du petit écran de téléphone au cinéma haute définition.
* MPEG-7 : fournit une représentation standard des données audio et vidéo pour décrire et chercher du contenu multimédia.
* MPEG-21 : offre un cadre de travail pour l’interopérabilité et l’utilisation de tous les contenus multimédia.

### **o AVI (**&#x41;udio Video Interleave _\*Imbrication audio vidéo_)

L'AVI est un format d'empaquetage conçu pour stocker des données audio et vidéo.

C’est un conteneur transportant des fichiers vidéo et audio, eux-mêmes écrits dans d'autres formats. Un fichier .avi peut ainsi abriter des fichiers vidéo MPeg ou DivX, ou encore des musiques codées en MP3.

### **o WMV (W**indows Media Video)

Windows Media Video (WMV) est le nom d'une famille de codecs vidéo propriétaires développés par Microsoft.

Un fichier WMV est une vidéo au format propriétaire Windows Media Video. Un fichier au format WMV possède à la fois des données audio et vidéo, compressées pour pouvoir être diffusées en streaming, à la manière du MPEG-2 ou du MEPG-4.

Distinguer les notions de **codec**, **standard** et **format conteneur** :

* Le **standard** décrit un procédé, pouvant définir un **format conteneur** ou un format de compression.
*   Le **codec** est l'implémentation matérielle ou logicielle qui met en œuvre un standard.

    ```
      Exemple : MPEG-4 AVC/H.264 est un standard vidéo, et x264 est un codec capable de produire un     flux vidéo dans le format de compression décrit par le standard.
    ```

Le **format conteneur** peut embarquer des flux audio et/ou vidéo, des données techniques descriptives des flux en présence pour permettre leur décodage, mais aussi, en fonction du conteneur, toute sorte de métadonnées comme des sous-titres, du chapitrage, du timecode etc. Les formats conteneurs ne sont pas compatibles avec tous les formats de compression.

Exemple : un conteneur MPEG-2 ne peut contenir que des flux vidéo MPEG-2, des flux audio MPEG (layers 1, 2 ou 3) ou des flux audio AAC.

Les **codecs propriétaires** sont développés par des entreprises, et font souvent l'objet de brevets dans les pays où c'est possible.

Les **codecs libres** ou ouverts comme Vorbis sont inventés et développés par des acteurs du logiciel libre pour permettre aux utilisateurs de garder le contrôle des médias qu'ils produisent eux-mêmes.

_NB : le mot-valise « codec » vient de « codeur décodeur » (en anglais : coder-decoder)._

### **o QT (**&#x51;uick Time)

Format multimédia développé par Apple ; il est multiplateforme (pris en charge sur les systèmes Macintosh et Windows) ; il peut contenir une piste audio et vidéo compressée.

L’extension .mov est souvent utilisée pour les fichiers vidéo QuickTime.

## Couvertures

Il s'agit de fichiers originaux parfois fournis par l’éditeur pour présenter la couverture de la revue dans laquelle est publié le document. Ils peuvent être de plusieurs types : documents textuels (ex. : PDF), images (exs. : GIF, TIFF, JPEG), pages web (ex. : HTML), etc.

_NB : les formats de "Couvertures" présents dans Istex qui sont déjà décrits dans les rubriques précédentes ne sont pas répétés ici._

### **o HTML (**&#x48;yperText Markup Language _\*Langage de balisage d’hypertexte_)

Langage de balisage conçu pour représenter les pages web, pour écrire de l’hypertexte. Il permet de structurer sémantiquement et de mettre en forme le contenu des pages web, d’inclure des ressources multimédias dont des images, des formulaires de saisie, et des programmes informatiques.

Il est souvent utilisé avec le langage de programmation JavaScript et des feuilles de style en cascade (CSS).

## Enrichissements

Les enrichissements sont des informations complémentaires de plusieurs types obtenues à partir du texte intégral et ajoutées au document pour permettre leur réutilisation dans d’autres projets ou initiatives, notamment en fouille de textes. Ils permettent également de cibler plus finement une requête pour constituer un corpus. Ces informations complémentaires sont des catégories scientifiques, des références bibliographiques structurées, une version structurée du texte intégral des documents, des entités nommées et des termes d'indexation.

Ces enrichissements sont produits par Istex à l’aide de plusieurs outils ou méthodes issus de la recherche en traitement automatique des langues et de la recherche en sciences des données et des connaissances, et qui ont été adaptés par Istex pour traiter un grand volume de données. Chaque type d'enrichissement est nommé à partir de l'outil ayant permis de le générer.

La présence de ces différents types d'enrichissements dans Istex varie en fonction de la langue des documents et des résultats produits par les outils.

### o multicat

Désigne les enrichissements par catégories scientifiques produits par l'outil Multicat. Ils sont issus d'un processus de catégorisation par appariement qui reporte sur chaque document d'une revue la catégorie scientifique attribuée à cette revue par des ressources reconnues (Science-Metrix, Web of Science, Scopus), en s'appuyant sur l'ISSN de la revue.

Les enrichissements produits sont en format TEI-Standoff et contiennent toutes les catégories qui ont été attribuées à la revue par ces différentes ressources. À noter que les catégories scientifiques attribuées à une revue ne sont pas toujours adaptées pour catégoriser tous les articles de la même revue.

Plus de détails sur ces enrichissements et le processus d'enrichissement dans les rubriques suivantes du site [data.istex.fr](https://data.istex.fr/) :

* [catégories Science-Metrix](https://sciencemetrix-category.data.istex.fr/)
* [catégories WoS](https://wos-category.data.istex.fr/)
* [catégories Scopus](https://scopus-category.data.istex.fr/)
* [processus Multicat/Science-Metrix](https://enrichment-process.data.istex.fr/ark:/67375/R0H-Q29BJZWS-N)
* [processus Multicat/WoS](https://enrichment-process.data.istex.fr/ark:/67375/R0H-PWBRNFQ8-H)
* [processus Multicat/Scopus](https://enrichment-process.data.istex.fr/ark:/67375/R0H-BMCHCCJF-J)

### o nb

Désigne les enrichissements par catégories scientifiques produits par l'outil Nb, afin de compléter les résultats de Multicat en proposant un traitement ciblé sur l'article. Ils sont issus d'un processus de catégorisation supervisée qui utilise une approche statistique (Bayésien Naïf) comprenant une phase d'apprentissage sur un corpus extrait des bases de données bibliographiques Pascal et Francis de l'Inist-CNRS, puis une phase de prédiction.

Les enrichissements produits sont en format TEI-Standoff et contiennent toutes les catégories prédites (code de classement + verbalisation) et leur probabilité.

Plus de détails sur ces enrichissements et le processus d'enrichissement dans les rubriques suivantes du site [data.istex.fr](https://data.istex.fr/) :

* [catégories INIST](https://inist-category.data.istex.fr/)
* [processus Bayésien naïf](https://enrichment-process.data.istex.fr/ark:/67375/R0H-DV0BN0B8-J)

### o refBibs

Désigne les enrichissements par références bibliographiques structurées produits par l'outil Grobid (GeneRation Of BIbliographic Data). Il s'agit d'un outil d'analyse et d'extraction d'informations bibliographiques et de contenu qui fonctionne par apprentissage automatique avec une cascade de modèles CRF (Conditional Random Fields) et qui permet de segmenter le document pour trouver le segment \<Refbib>.

Les enrichissements produits sont en format TEI-Standoff et contiennent une version structurée de chaque référence bibliographique.

Plus de détails sur le processus d'enrichissement dans la rubrique suivante du site [data.istex.fr](https://data.istex.fr/) :

* [processus Grobid](https://enrichment-process.data.istex.fr/ark:/67375/R0H-2WXX0NK2-9)

### o grobidFulltext

Désigne les enrichissements par structuration du texte intégral produits par l'outil [Grobid](https://grobid.readthedocs.io/en/latest/) (GeneRation Of BIbliographic Data). Il s'agit d'un outil d'analyse et d'extraction d'informations bibliographiques et de contenu qui fonctionne par apprentissage automatique avec une cascade de modèles CRF (Conditional Random Fields). Grâce aux modèles utilisés, il permet de structurer du texte brut à partir d’un format PDF, en segmentant la totalité d’un document, mettant en évidence la structure fine du corps du texte (paragraphes, titres de sections, appel aux références bibliographiques, figures, tableaux, etc.).

Les enrichissements produits sont en format TEI et contiennent une version structurée du texte intégral des documents.

Plus de détails sur le processus d'enrichissement dans la rubrique suivante du site data.istex.fr : [processus GrobidFulltext](https://enrichment-process.data.istex.fr/ark:/67375/R0H-0T5BT0B0-Q).

### o teeft

Désigne les enrichissements par termes d'indexation produits par l'outil Teeft. Ils sont issus d'un processus d’indexation non supervisée qui extrait des termes représentatifs du contenu d'un document en anglais.

Les enrichissements produits sont en format TEI-Standoff et contiennent les termes, leur fréquence et leur spécificité.

Plus de détails sur le processus d'enrichissement dans la rubrique suivante du site [data.istex.fr](https://data.istex.fr/) :

* [processus Teeft](https://enrichment-process.data.istex.fr/ark:/67375/R0H-R25KK4KZ-Q)

### o unitex

Désigne les enrichissements par entités nommées produits par l'outil Unitex. Il s'agit d'un ensemble de logiciels permettant de traiter des textes en langues naturelles en utilisant des ressources linguistiques issues de travaux initiés sur le français par Maurice Gross au Laboratoire d’Automatique Documentaire et Linguistique (LADL). La cascade de transducteurs CasEN pour la reconnaissance des entités nommées est implantée sous le logiciel CasSys développé par le Laboratoire d’Informatique de l’Université de Tours.

Les enrichissements produits sont en format TEI-Standoff et contiennent les entités nommées de type "personne", "lieu", "organisation", "indicateur temporel", "pointeur vers références bibliographiques", "références bibliographiques complètes dans le texte", "url" retrouvées dans le texte en anglais et en français, ainsi que leur fréquence.

Plus de détails sur ces enrichissements et le processus d'enrichissement dans les rubriques suivantes du site [data.istex.fr](https://data.istex.fr/) :

* [entités nommées](https://named-entity.data.istex.fr/)
* [processus Unitex-CasSys](https://enrichment-process.data.istex.fr/ark:/67375/R0H-KGDTPS40-S)
