# Extraire les documents XML des fichiers ZIP

Parmi les fichiers fournis par les éditeurs, on a des archives ZIP contenant généralement pour chaque document un répertoire avec un fichier PDF et un fichier XML. Ce fichier XML peut ne contenir que des métadonnées ou contenir en plus le texte du document sous forme structurée. 

Mais la situation n'est pas toujours aussi simple : dans certains cas, on a dans l'archive plusieurs répertoires avec parfois plusieurs fichiers PDF ou plusieurs fichiers XML ainsi que des fichiers accessoires comme des images ou des photos.

A l’aide du script Perl **[extraitXmlEditeur.pl](https://git.istex.fr/scodex/harvest-corpus/blob/master/outils/extrait-xml-%C3%A9diteur/extraitXmlEditeur.pl)** (téléchargeable dans GitBucket), nous procédons à l’extraction du fichier XML en passant par les étapes suivantes :

- Recherche dans l’archive ZIP des fichiers PDF et XML par `unzip –l` 
- Mise en correspondance entre fichier PDF et fichier XML par différentes heuristiques
- Extraction du fichier XML sélectionné et renommage

A ce stade, il reste encore quelques cas compliqués qui sont signalés, mais pas traités automatiquement. Il faut donc les extraire manuellement.

**Extraction manuelle** 

Pour expliciter la méthode, prenons comme exemple le corpus « Vieillissement » dont un fichier ZIP,  `Vieil_03555.zip`, n'a pas pu être traité. Les différentes étapes sont :

- listage des fichiers de l'archive ZIP : pour cela, on utilise le programme `unzip` :

```bash
unzip -l Vieillissement/Vieil_03555.zip
Archive:  Vieillissement/Vieil_03555.zip
  Length      Date    Time    Name
---------  ---------- -----   ----
   137102  04-14-2016 21:55   ageing36_5pdf/afm068.pdf
    49123  04-14-2016 21:55   ageing36_5xml/afm068.xml
   184080  04-14-2016 21:55   ageing36_5largeimages/afm068-f1.jpeg
    85847  04-14-2016 21:55   ageing36_5largeimages/afm068-f2.jpeg
    24094  04-14-2016 21:55   ageing36_5mediumimages/afm068-f1.gif
    11810  04-14-2016 21:55   ageing36_5mediumimages/afm068-f2.gif
  9175398  04-14-2016 21:55   ageing36_5peripherals/back_matter.pdf
  7629198  04-14-2016 21:55   ageing36_5peripherals/front_matter.pdf
     9133  04-14-2016 21:55   ageing36_5smallimages/afm068-f1.gif
     4702  04-14-2016 21:55   ageing36_5smallimages/afm068-f2.gif
   262568  04-14-2016 21:55   ageing36_5peripherals/cover.tif
---------                     -------
 17573055                     11 files
```


- repérage du fichier XML à extraire : d​ans le cas présent, on a plusieurs fichiers PDF, mais un seul fichier XML `afm068.xml` qui correspond au fichier PDF `afm068.pdf` présent dans un autre répertoire. 


- extraction du fichier XML : également avec le programme `unzip`, mais en utilisant l'option `-j` pour ne pas créer le répertoire `ageing36_5xml` :

```bash
unzip -j ageing36_5xml/afm068.xml
```

- renommage du fichier XML extrait : le fichier extrait `afm068.xml` est présent dans le répertoire courant. Il faut donc le remettre dans le répertoire avec les autres fichiers XML en lui donnant le préfixe du document correspondant dans ce corpus :

```bash
mv afm068.xml Vieillissement/Vieil_03555.xml
```


