# Istex Search

[Istex Search](https://search.istex.fr/fr-FR) est une service de l'infrastructure Istex dédié à la constitution de corpus. Son interface ergonomique connectée à l’API facilite la constitution de votre corpus en suivant trois étapes :

·         interrogation d'Istex

·         exploration des résultats

·         téléchargement de votre corpus



## Interrogation d'Istex

3 modes de recherche vous permettent d’interroger le réservoir Istex :

1. Recherche simple
2. Recherche assistée
3. Recherche par identifiants



### Recherche simple

Le mode de recherche simple interroge la base Istex en utilisant la syntaxe d’interrogation Lucene, le langage de requêtage du moteur de recherche Istex ([Elasticsearch](https://www.elastic.co/elasticsearch)), grâce à une équation avec les opérateurs booléens (ex. AND, OR).

Le mode de recherche simple est sélectionné par défaut à l’ouverture d’Istex Search.



<figure><img src="../.gitbook/assets/Recherche-simple.png" alt=""><figcaption></figcaption></figure>

### Recherche Assistée

Ce mode de recherche vous permet de construire une équation complexe sans connaissance a priori de la syntaxe Lucene, avec des règles et des groupes.

Une règle est constituée de trois informations : le champ que l’on souhaite interroger, le comparateur (égal à, contient etc.) et la valeur que l’on souhaite retrouver dans ce champ.

Les groupes sont l’équivalent de parenthèses. Comme en mathématiques, les opérations situées à l'intérieur des parenthèses ont la priorité.



<figure><img src="../.gitbook/assets/Recherche-assistée.png" alt=""><figcaption></figcaption></figure>



**Liste des champs interrogeables dans Istex**

<table><thead><tr><th width="160" align="center">Champ (A-Z)</th><th width="194">Nom technique</th><th>Description</th><th width="243">Exemple de requête</th></tr></thead><tbody><tr><td align="center">Affiliation d'auteur</td><td>author.affiliations</td><td>Recherche par l'affiliation d'un auteur</td><td>author.affiliations:CNRS</td></tr><tr><td align="center">Affiliation d'auteur d'une monographie</td><td>host.author.affiliations</td><td>Recherche par l'affiliation d'un auteur d'une monographie</td><td>host.author.affiliations:CNRS</td></tr><tr><td align="center">ARK</td><td>arkIstex</td><td>Recherche par l'ARK du document</td><td>arkIstex:"ark:/67375/G14-1RDSJMLS-D"</td></tr><tr><td align="center">Bouquet</td><td>corpusName</td><td>Recherche par bouquet éditeur chargé dans Istex</td><td>corpusName:"degruyter-ebooks-french"</td></tr><tr><td align="center"></td><td></td><td></td><td></td></tr><tr><td align="center"></td><td></td><td></td><td></td></tr><tr><td align="center"></td><td></td><td></td><td></td></tr><tr><td align="center"></td><td></td><td></td><td></td></tr></tbody></table>



### Recherche par identifiants

Ce mode de recherche utilise des identifiants uniques et pérennes attribués aux documents Istex (ARK, DOI ou idIstex). Il sélectionne les documents correspondant aux identifiants demandés s’ils sont présents dans le réservoir.

Il est notamment possible d’importer une liste d’identifiants mais avec un seul type d’identifiant à la fois.



<figure><img src="../.gitbook/assets/Recherche-identifiants.png" alt=""><figcaption></figcaption></figure>

<div align="center"><figure><img src="../.gitbook/assets/Recherche-identifiants-2.png" alt=""><figcaption></figcaption></figure></div>

## Exploration des résultats

Différents filtres et indicateurs permettent d'analyser le contenu le corpus et d'affiner la requête pour obtenir un corpus de qualité.

Quand la recherche est lancée, une page _Résultats de votre requête_ propose une vision d’ensemble du corpus et d’affiner celui-ci si nécessaire.

<div align="center"><figure><img src="../.gitbook/assets/exploration-corpus.png" alt=""><figcaption></figcaption></figure></div>



* Nombre de documents correspondant à la requête en cours (1)
* Requête envoyée à l’API Istex, elle peut être copiée dans le presse-papier en cliquant sur le bouton copier-coller  en bout de ligne (2)
* Filtres permettant d'explorer et d'affiner le corpus (3)
* Indicateurs scientifiques et techniques sur le corpus et pourcentage de compatibilité entre le corpus et des outils d’analyse (4)
* Modes de tri des documents du corpus (5)
* Affichage en colonne ou ligne (6)
* Vignettes cliquables correspondant aux documents du corpus (7)



### Indicateurs

Les indicateurs permettent de vérifier rapidement le pourcentage et le nombre de documents possédant un Résumé, un PDF texte, un format Texte nettoyé (format CLEANED), ainsi que la part des trois Langues de publication majoritaires dans le corpus.

<div align="center"><figure><img src="../.gitbook/assets/exploration-corpus-indicateurs.png" alt=""><figcaption></figcaption></figure></div>



### Filtres

La page de résultats comporte 11 filtres pour explorer les résultats ou restreindre la recherche.

<div align="center"><figure><img src="../.gitbook/assets/exploration-corpus-filtres.png" alt=""><figcaption></figcaption></figure></div>

Pour **appliquer un filtre**, il faut cocher ou rechercher la valeur souhaitée puis cliquer sur APPLIQUER. Le nombre de documents du corpus est ainsi mis à jour.

Il est possible d'obtenir l'inverse d'un filtre en cliquant sur le tag du filtre :

<div align="center"><figure><img src="../.gitbook/assets/exploration-corpus-filtres-tag-inverse.png" alt=""><figcaption></figcaption></figure></div>

### Modes de tri



Quatre modes de tri sont proposés :

1. _pertinence et qualité_ : classe les documents selon un ordre de pertinence associé à un score de qualité ;
2. _aléatoire_ : classe les documents de façon aléatoire, eut être utile pour analyser un échantillon de documents parmi les résultats obtenus ;
3. _date de publication_ : classe les publications selon leur date de publication (croissante ou décroissante) ;
4. _titre_ : permet de classer les publications par ordre alphabétique ou antialphabétique.



## Téléchargement d'un corpus

Istex Search permet de télécharger **jusqu'à 100 000 documents en une seule fois** et propose plusieurs formats de téléchargement.

Pour télécharger un corpus, il faut cliquer sur _TELECHARGER LE CORPUS_ dans l'encadré bleu :

<div align="center"><figure><img src="../.gitbook/assets/téléchargement-corpus.png" alt=""><figcaption></figcaption></figure></div>

Une fenêtre apparaît et propose de sélectionner les types de fichiers et de formats à extraire, adaptés à l’utilisation qui va être faite du corpus :

<div align="center"><figure><img src="../.gitbook/assets/téléchargement-corpus-configuration.png" alt=""><figcaption></figcaption></figure></div>



1. usage personnalisé pour sélectionner "à la carte" les fichiers et formats
2. usages prédéfinis:
   * Lodex > sélection automatique des métadonnées au format JSON ;
   * CorTexT > sélection automatique des textes intégraux aux formats TEI et CLEANED et des enrichissements _Teeft_ au format TEI ;
   * GarganText > sélection automatique des métadonnées au format JSON, seule sélection compatible avec le logiciel
   * NooJ > sélection automatique des textes intégraux au format TXT et des métadonnées au format JSON, seule sélection compatible avec le logiciel

