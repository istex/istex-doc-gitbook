# Détecter les PDF image

Cette procédure est utile si l'on souhaite exploiter les PDF pour faire de la fouille de textes. Dans ce cas, il est nécessaire de vérifier que le PDF de départ ne soit pas du PDF image car celui-ci risque de bloquer le traitement de l'outil utilisé.

Pour cela, il faut d'abord calculer le nombre de mots par page contenus dans un document et ensuite vérifier s'il s'agit d'une image ou d'un texte. En-deçà d’un certain seuil (seuil qui est variable: voir étape 4), le document sera considéré comme un PDF image.

Le programme `harvestCorpus.pl` génère un fichier `logRequete.txt` qui conserve les métadonnées des documents Istex extraits et un fichier `.corpus`, lequel contient une mise en correspondance entre les identifiants Istex et les noms de fichiers.

## **Etape 1 : Récupération des données de** `logRequete.txt`

Le programme ci-dessous calcule le ratio entre le nombre total de pages et le nombre total de mots pour un document. Celui-ci s'effectue sur une seule ligne.

```bash
perl -ne 'if (/^ {6}"id":"(\w+)"/o) {$id = $1;} 
            elsif (/^{8}"pdfWordCount": (\d+)/o) {
                        $nW = $1; $ok = 1;} 
            elsif  (/^ {8}"pdfPageCount": (\d+)/o) {
                       $nP = $1;} 
            elsif (/^    \}/o) {
                  if ($id and $nP and $ok) {
                        printf "%s\t%d\t%d\t%.2f\n",
                             $id, $nP, $nW,$nW/$nP; 
                        $id = $nP = $nW = $ok =0;} 
                 else  {
                        print STDERR"Erreur ligne $.\n";
                        }
                  }' logRequete.txt | 
 sort > tmp01.txt
```

Ce programme génère un fichier `tmp01.txt` qui contient les informations suivantes :

* identifiant Istex
* nombre total de pages
* nombre total de mots
* nombre de mots par page

Exemple :

```
000177F07386D728EA2F5D0169D4F9BF8276EB22    12    7338    611.50
0005217AB88EECA913D27DDDBAE470D54209FBA2    11    5859    532.64
00052DA849FA3FEA62F65A2984754C513B541F85    13    6549    503.77
00058F61D87EA5FB84BBE46EFE8504533D9F43C2    13    5625    432.69
0005E3037CAF703BD38CCCE35910E0D1681C2536    13    7924    609.54
0007685B6CD6C8F51866F7BC893C5A5726B7A05B    11    3778    343.45
```

## **Etape 2 : Récupération des noms de fichiers correspondant aux identifiants ISTEX**

Ce programme récupère les noms de fichiers dans le fichier `.corpus` et fait la jointure avec le fichier précédent sur l'identifiant Istex.

```bash
perl -ne 'if (/^id /o) {
                        @c = split(/\s+/); 
                        print"$c[1]\t$c[3]\n";
                        }'Nom_de_fichier.corpus | 
sort | join -t $'\t' - tmp01.txt > DistNbMotNbPage.txt
```

Il génère ainsi un fichier `DistNbMotNbPage.txt` qui contient les informations suivantes :

* identifiant Istex
* nom de fichier
* nombre total de pages
* nombre total de mots
* nombre de mots par page

Exemple :

```
000177F07386D728EA2F5D0169D4F9BF8276EB22    Syst_veg6_v2_045218    12    7338    611.50
0005217AB88EECA913D27DDDBAE470D54209FBA2    Syst_veg6_v2_027437    11    5859    532.64
00052DA849FA3FEA62F65A2984754C513B541F85    Syst_veg6_v2_051847    13    6549    503.77
00058F61D87EA5FB84BBE46EFE8504533D9F43C2    Syst_veg6_v2_048335    13    5625    432.69
0005E3037CAF703BD38CCCE35910E0D1681C2536    Syst_veg6_v2_008028    13    7924    609.54
0007685B6CD6C8F51866F7BC893C5A5726B7A05B    Syst_veg6_v2_004392    11    3778    343.45
```

## **Etape 3 : Nettoyage**

On supprime le fichier `tmp01.txt` qui n'a plus d'utilité.

```bash
rm tmp01.txt
```

## **Etape 4 : Procédure de vérification**

Le fichier `DistNbMotNbPage.txt` ainsi obtenu indique, pour chaque document du corpus, le nombre de mots par page qui va servir à identifier les documents à vérifier manuellement :

* Si le nombre de mots par page est égal à 0, il s’agit d’un PDF image.
* Si ce nombre est supérieur à 0, il s’agit également potentiellement d’un PDF image. La valeur limite à partir de laquelle, le PDF peut être considéré comme textuel est variable : environ 80, 100, 140 mots par page.

Dans le 2e cas, il faut vérifier manuellement chaque PDF dans Istex Search.

La procédure de vérification est la suivante :

* Recherche dans Istex Search :&#x20;

```
     id:identifiant_Istex
```

* Ouverture du PDF correspondant au résultat de cette requête
* Sélection du texte
  * Si la sélection totale ou partielle du texte est possible et si, en collant le texte dans un document Word, ce texte est illisible => il s’agit d’un PDF Image
  * Si la sélection totale du texte est possible et si, en collant le texte dans un document Word, ce texte est identique au texte sélectionné => il s’agit d’un PDF Texte

## **Etape 5 : Procédure de suppression des PDF Image**

Une fois les PDF Image identifiés, il faut les supprimer du corpus.

La procédure de suppression est la suivante :

* Préparer la liste d’identifiants Istex à supprimer et le fichier `corpus`faisant la correspondance entre les identifiants et les noms de fichiers

```bash
export LC_COLLATE=C

sort -u liste-PDF-a-supprimer.txt > tmp01.txt

egrep '^id ' fichier.corpus | sort -u > tmp02.txt
```

* Mettre les documents à supprimer dans un répertoire séparé nommé, par exemple, `rejets`

```bash
join tmp01.txt tmp02.txt | 
while read x
do 
set $x
echo $3
mv corpus_requete_6_v2.3/$3.* rejets/
done
```

* Supprimer les fichiers `tmp01.txt` et `tmp02.txt`
