# Programme "harvestCorpus.pl"

`harvestCorpus` est un outil d’extraction de corpus ISTEX en ligne de commande. Il est écrit en Perl.

Il permet de décharger un corpus depuis la base ISTEX à partir d’une requête ou d’un fichier `.corpus`.

* **Avantages** :
  * il permet de renommer les fichiers déchargés, de gérer l’arborescence des fichiers et de générer un fichier de notices bibliographiques, ainsi qu'un fichier `.corpus` \(contenant la liste des identifiants du corpus\). 
  * il permet également de traiter une requête de grande taille \(9 000 caractères\). 
  * il est associé à plusieurs [outils](https://github.com/istex/harvest-corpus/tree/master/outils) dont `statsCorpus.pl`, un programme de réalisation de statistiques sur le corpus, et `extraitXmlEditeur.pl`, un programme pour extraire à partir des archives ZIP les fichiers XML fournis par les éditeurs . 
  * comme ce programme extrait d'abord la liste des identifiants des documents pertinents avant de décharger les fichiers correspondants, il ne devrait pas être affecté par les limitations de la [pagination de type  `scroll`](../../api/results/scroll.md). Donc, même si la connexion Internet a un faible débit, l'extraction devrait se dérouler sans problème. 
  * il gère l'authentification au serveur en dehors du réseau interne de l'Inist. 
  * il vérifie le type des fichiers déchargés, signale les problèmes d'authentification et relance le déchargement des fichiers concernés en cas d’interruption intempestive \(pour plus de détails, voir la rubrique [Détecter les problèmes d'authentification](../verification/auth-problems.md) dans le chapitre "Vérification et mise en forme des résultats"\). 
* **Inconvénients** :
  * il s'utilise en ligne de commande à partir d'un terminal. Sous Windows, cela peut se faire avec [Cygwin](https://www.cygwin.com/)  \(Git Bash ne convient pas\). 
  * Il existe des solutions alternatives sous Windows avec [Strawberry Perl](http://strawberryperl.com/) ou [ActivePerl](https://www.activestate.com/activeperl), mais elles n'ont pas été testées pour l'instant. 
* **Installations :**
  * ce programme est disponible sur [**GitHub**](https://github.com/istex/harvest-corpus)
  * en plus des modules présents dans la distribution standard de Perl, le programme a besoin de [modules supplémentaires](https://github.com/istex/harvest-corpus#pr%C3%A9requis) disponibles sur [CPAN](https://www.cpan.org/).
  * si besoin, installer Git pour Windows : [https://git-for-windows.github.io/](https://git-for-windows.github.io/)
  * cloner la distribution `harvest-corpus` :

```bash
git clone https://github.com/istex/harvest-corpus.git
```

* **Exemples :** pour récupérer les fichiers PDF et TEI à partir d'une requête et les placer dans le répertoire `Data/Fichiers` tout en générant un fichier de notices bibliographiques `oiseaux.txt` et un fichier d'identifiants `oiseaux.corpus` :

```bash
harvestCorpus.pl -q '/birds?/ OR (avian NOT flu)' -t pdf,tei -d Data/Fichiers -s oiseaux.corpus -n oiseaux.txt -p Oiseau_ -v
```

Tous les fichiers PDF et TEI seront renommés en **Oiseaux\_0**_**nnn**_**.pdf** et **Oiseaux\_0**_**nnn**_**.tei**. La chaîne de caractères « 0_nnn_ » représente un nombre séquentiel avec autant de chiffres que nécessaire.

Le format des fichiers d’identifiants, comme `oiseaux.corpus`, ou de notices bibliographiques, comme `oiseaux.txt`, est explicité sur [GitHub](https://github.com/istex/harvest-corpus).

L'option `-v` permet de conserver toutes le métadonnées envoyées par l'API. Elles sont placées dans le fichier `logRequete.txt` dans le répertoire `Data/Fichiers`.

* **Astuces :** 

  * la liste complète des options, avec leur description, est à consulter sur [GitHub](https://github.com/istex/harvest-corpus#options).
  * authentification : le téléchargement de fichiers en texte intégral suppose une authentification, soit implicite par adresse IP, soit explicite par identification à la fédération d'identité de Renater. Dans ce deuxième cas, il faut [obtenir un jeton d'identification](https://doc.istex.fr/api/access/fede.html#1%C3%A8re-%C3%A9tape--g%C3%A9n%C3%A9ration-du-token) et l’ajouter à la ligne de commande avec l’option `-j`.
  * tirage aléatoire : dans le cas où le résultat d’une requête donne un nombre de documents très élevé, il est possible d’en limiter le nombre avec l’option `-l` et d’avoir ces documents soit dans l’ordre défini par le moteur de recherche, soit dans un ordre aléatoire en rajoutant l’option `-r` \(mais dans ce cas, on est limité à 10 000 documents\). Ainsi, pour créer un échantillon de 1 000 documents PDF provenant de l’éditeur Elsevier à télécharger dans le répertoire Elsevier avec le préfixe els, on peut écrire : 

  ```bash
  harvestCorpus.pl -q corpusName:elsevier -t pdf -d Elsevier -p els -l 1000 -r
  ```

  * l'intérêt des fichiers `.corpus` est de permettre de documenter et de référencer le corpus réalisé. Il permet aussi de refaire le même corpus ou de le compléter avec d'autres fichiers. Par exemple, pour décharger les métadonnées du corpus obtenu précédemment et placer les fichiers correspondants dans le répertoire `Data/Metadata`, il suffit de lancer :

  ```bash
  harvestCorpus.pl -c oiseaux.corpus -m all -d Data/Metadata
  ```

       

Les fichiers au format MODS ou XML dans le répertoire `Data/Metadata` auront le même préfixe que les fichiers PDF et TEI correspondants dans le répertoire `Data/Fichiers.`



 



