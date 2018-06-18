# Programme "harvestCorpus.pl"

Il s'agit d'un outil d’extraction de corpus ISTEX en ligne de commande. Il est écrit en Perl.

Il permet de décharger un corpus depuis la base ISTEX à partir d’une requête ou d’un fichier `.corpus`.

* **Avantages** :
  * Il permet de renommer les fichiers déchargés, de gérer l’arborescence des fichiers et de générer un fichier de notices bibliographiques et un fichier `.corpus` \(contenant la liste des identifiants du corpus\). 
  * Il permet également de traiter une requête de grande taille \(9 000 caractères\). 
  * De plus, il est associé à plusieurs [outils](https://git.istex.fr/scodex/harvest-corpus/tree/master/outils) dont `statsCorpus.pl`, un programme de réalisation de statistiques sur le corpus, et `extraitXmlEditeur.pl`, un programme pour extraire à partir des archives ZIP les fichiers XML fournis par les éditeurs . 
  * Comme ce programme extrait d'abord la liste des identifiants des documents pertinents avant de décharger les fichiers correspondants, il ne devrait pas être affecté par les limitations de la méthode  `scroll`. Donc, même si la connexion Internet a un faible débit, l'extraction se déroulera sans problème. 
  * Il gère l'authentification au serveur en dehors du réseau interne de l'Inist. 
  * Il vérifie le type des fichiers déchargés, signale les problèmes d'authentification et relance le déchargement des fichiers concernés \(pour plus de détails, voir la rubrique Détecter les problèmes d'authentification dans le chapitre [**Vérification et la mise en forme des résultats**](../verification/)\). 
* **Inconvénients** :
  * Il s'utilise en ligne de commande à partir d'un terminal. Sous Windows, cela peut se faire avec [Cygwin](https://www.cygwin.com/)  \(Git Bash ne convient pas\). 
  * Il existe des solutions alternatives sous Windows avec [Strawberry Perl](http://strawberryperl.com/) ou [ActivePerl](https://www.activestate.com/activeperl), mais elles n'ont pas été testées pour l'instant. 
* **Mode d'emploi :** ce programme est disponible sur [**Gibucket**](https://git.istex.fr/scodex/harvest-corpus).
* **Installations :**
  * si besoin, installer Git pour Windows : [https://git-for-windows.github.io/](https://git-for-windows.github.io/)
  * cloner la distribution `harvest-corpus` :

```bash
git clone https://git.istex.fr/git/scodex/harvest-corpus.git
```

* **Exemples :** pour récupérer les fichiers PDF et TEI à partir d'une requête et les placer dans le répertoire `Data/Fichiers` tout en générant un fichier de notices bibliographiques `oiseaux.txt` et un fichier d'identifiants `oiseaux.corpus` :

```bash
harvestCorpus.pl -r '/birds?/ OR (avian NOT flu)' -t pdf,tei -d Data/Fichiers -s oiseaux.corpus -n oiseaux.txt -p Oiseau_ -v
```

Tous les fichiers PDF et TEI seront renommés en **Oiseaux\_0**_**nnn**_**.pdf** et **Oiseaux\_0**_**nnn**_**.tei**. La chaîne de caractères « 0_nnn_ » représente un nombre séquentiel avec autant de chiffres que nécessaire.

L'option `-v` permet de conserver toutes le métadonnées envoyées par l'API. Elles sont placées dans le fichier `logRequete.txt` dans le répertoire `Data/Fichiers`.

* **Astuce :** l'intérêt des fichiers `.corpus` est de permettre de documenter et de référencer le corpus réalisé. Il permet aussi de refaire le même corpus ou de le compléter avec d'autres fichiers. Par exemple, pour décharger les métadonnées du corpus obtenu précédemment et placer les fichiers correspondants dans le répertoire `Data/Metadata`, il suffit de lancer :

```bash
harvestCorpus.pl -c oiseaux.corpus -m all -d Data/Metadata
```

Les fichiers au format MODS ou XML dans le répertoire `Data/Metadata` auront le même préfixe que les fichiers PDF et TEI correspondants dans le répertoire `Data/Fichiers`.

