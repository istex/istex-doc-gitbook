# Extraction

L'API est capable de vous fournir une archive au format ZIP répondant à vos critères de recherche. Cette méthode, moins souple et performante qu'un harvesting du client, vous permettra de télécharger à grande échelle un sous-corpus de documents dans les formats désirés.

Pour effectuer une extraction, vous devrez agrémenter votre requête de l'option `extract`, qui est soumise au contrôle d'accès.  
Vous pouvez demander à l'API d'extraire tout ou partie des données disponibles, en précisant le type et le format \(meta-données, texte-plein, formats Mods, TEI, PDF, etc.\).

Le nombre de documents qu'il est possible d'extraire en une requête est **limité à 100 000 maximum**. L'API renvoie un code d'erreur 413 en cas de dépassement. **Par défaut, seuls 5 documents sont archivés** si rien n'est précisé.

### Note importante : 

À partir de la version 5.7.0 de l'API, et suite à la réécriture complète de la fonctionnalité d'extraction, **le paramètre** `spread` **est déprécié**. Celui-ci n'est donc plus utilisable jusqu'à ce qu'il soit ré-implémenté.

## Syntaxe

**La syntaxe est la suivante :**

* URI
  * `https://api.istex.fr/document/?q=`**`{valeur}&extract={typefichier}[{formats}]`**
* Paramètres 
  * **q** : la requête
  * **extract : {typefichier}\[{formats}\]** : la sélection des type et formats de fichiers à extraire
  * ~~**spread : {true\|**_**false**_**}** : active la répartition des fichiers téléchargés dans une arborescence à 4 niveaux \(utile pour un nombre important de documents\). Option désactivée par défaut \(spread=false\)~~
* Code de retour
  * 200 si OK
  * 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\)

**Plus de détails sur la syntaxe** **extract : {typefichier}\[{formats}\]** :

* **{typefichier}** est une liste parmi les valeurs `metadata`, `fulltext`, `enrichments`, `cover`,`annexes`, séparée par le caractère `;`.
* **{formats}** correspond à la liste des formats de fichiers \(au sens "mimetype"\). Il peut être renseigné pour chaque type \(metadata, fulltext...\). Pour cela, la liste des formats est mentionnée entre crochets `[`...`]` et séparée par des virgules.
* si **extract** est utilisé seul, l'ensemble des fichiers disponibles est extrait. 

| Exemples |  |
| :--- | :--- |
| Extraction de toutes les documents relatifs au terme "brain" | [https://api.istex.fr/document/?q=brain&**extract**&output=\*](https://api.istex.fr/document/?q=brain&extract) |
| Extraction de tous les fichiers de méta-données et de plein-texte correspondant au terme "brain" | [https://api.istex.fr/document/?q=brain&**extract=metadata;fulltext**](https://api.istex.fr/document/?q=brain&extract=metadata;fulltext) |
| Extraction des méta-données en Mods uniquement, du plein-texte en PDF et TEI, et toutes les annexes pour le terme "brain" | [https://api.istex.fr/document/?q=brain&**extract=metadata\[mods\];fulltext\[pdf,tei\];annexes**](https://api.istex.fr/document/?q=brain&extract=metadata[mods];fulltext[pdf,tei];annexes) |

Vous pouvez aussi utiliser les paramètres de recherche classiques `from`, `size`, `rankBy`, `sortBy` et `randomSeed`, ce qui vous permettra d'influencer le nombre et l'ordre des documents archivés.

## A propos de l'archive générée

Par défaut, l'archive générée possède un sous-dossier par objet documentaire téléchargé. Chaque sous-dossier comprend lui-même les fichiers qui composent le document, selon le ou les formats choisis.

~~Lorsque l'option "spread" est activée, l'archive Zip qui est générée suit une organisation particulière. Les documents sont ventilés dans l'arborescence à 5 niveaux suivante :~~

* ~~Un fichier `manifest.json` contenant des éléments d'informations sur la requête utilisées pour l'extraction~~
* ~~3 niveaux avec des sous-répertoires nommés avec l'un des 16 caractères `0, 1... 9, A... F`~~
* ~~un 4ème niveau de sous-répertoires, nommés selon l'identifiant Istex `idIstex` et contenant un fichier `${idIstex}.json` avec l'ensemble du document \(métadonnées + fulltext\) au format JSON~~
* ~~le 5ème niveau se compose des sous-répertoires `fulltext`, `metadata`, `annexes` et `covers` \(absents ou présents selon les cas\) contenant les formats de fichiers demandés lors de l'extraction.~~

