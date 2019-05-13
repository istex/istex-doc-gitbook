# Quelques astuces pour peaufiner sa requête

## **Minuscule ou majuscule ?**

De manière générale, la recherche est **insensible à la casse**, c’est-à-dire que le moteur ne tient pas compte des majuscules ou des minuscules.

Ainsi, la recherche sur "brain" ramènera autant de résultats que celle sur "Brain".

## **Mots composés**

Tout comme pour les minuscules et majuscules, le moteur de recherche n’est pas sensible aux tirets présents dans les mots composés.

Ainsi, la recherche sur "disease-free plant" ramènera autant de résultats que celle sur "disease free plant".

## **Diacritiques**

Le moteur de recherche est par contre sensible aux accents et autres caractères diacritiques et nécessite une indication de toutes les formes accentuées possibles si l’on veut prendre en compte des résultats de plusieurs langues.

_**Exemple** : recherche de documents avec « logopédie », « logopède », « logopedics », « Logopädie »_

2 solutions :

```text
q=logopéd* OR logopèd* OR logoped* OR logopäd*
```

ou, plus simplement :

```text
q=logop?d*
```

Cette dernière requête aura l'avantage de retrouver des documents avec d'autres formes que l'on n'aurait pas pensé à rechercher \(par exemple : "Logopadie"\).

Attention, certains documents peuvent échapper à une recherche sur un mot accentué car certaines entités caractères XML ne sont pas reconnues et sont donc supprimées lors de l’entrée dans la base ISTEX.

Ce problème concerne par exemple la recherche de documents en espagnol :

```text
q=title: "ExploraciN CientimTrica De La ProducciN EspaOla En Logopedia Educativa"
```

Pour ne pas manquer ces documents, il faut prévoir dans la requête une variante où le caractère accentué est supprimé ou n’est pas accentué :

```text
q=title:(exploración OR exploracion OR exploracin)
```

```text
q=title:exploraci*n
```

## Apostrophe

L’apostrophe qui sépare un nom et son déterminant marque la frontière entre les 2 mots.

Dans l’API ISTEX, le nom n’est pas désolidarisé de son déterminant quand ce dernier contient une apostrophe.

Ainsi, on n’obtient pas les mêmes résultats lorsque l’on inclut le nom avec l’apostrophe ou pas :

```text
q=title:orthophonie
```

​ ⇒ 3 documents

```text
title:(orthophonie OR l’orthophonie)
```

​ ⇒ 4 documents

En attendant que cet aspect soit pris en compte dans l'API, il convient d’inclure cette particularité dans la requête, en pensant à ajouter les cas avec « l’ » ou « d’ » lors des recherches sur des noms en français.

## **Expressions régulières \(//\)**

Lorsque l’on recherche des termes comportant plusieurs formes d’écriture, les expressions régulières permettent de raccourcir la requête.

Aucune majuscule n’est autorisée entre les délimiteurs //. Les lettres qui ne sont pas communes aux différentes écritures sont indiquées **entre crochets**. Celles qui n’apparaissent que pour certaines écritures sont **suivies du métacaractère « ? »** et sont éventuellement écrites **entre parenthèses** à partir de 2 lettres.

* _**Quelques exemples de syntaxes :**_
  * _Spit**s**berg OR Spit**z**berg OR Spit**s**berg**en** OR Spit**z**berg**en**_ : `q=/spit[sz]berg(en)?/`
    * Dans les termes ci-dessus, le caractère au choix entre s et z est indiqué entre crochets ; la terminaison “en” optionnelle est indiquée entre parenthèses et suivie par le métacaractère « **?** ».
  * _Es**k**im**o** OR Es**qu**im**au** OR Es**k**im**os** OR Es**qu**im**aux**_ : `q=/es[kq]u?im[oa]u?[sx]?/`
    * 3e caractère au choix entre k et q \(indiqué entre crochets\), suivi d’un u optionnel \(indiqué par un ?\), terminaison par un o ou un a \(entre crochets\) suivi ou non d’un u \(noté par un ?\), caractère final pluriel au choix entre s et x et optionnel \(entre crochets et suivi d’un ?\)
  * _I**ñ**upi**at** OR I**ñ**upi**aq** OR I**ñ**up**iak** OR I**ñ**upi**k** OR I**n**upi**at** OR I**n**upi**aq** OR I**n**upi**ak** OR I**n**upi**k**_ : `q=/i[nñ]upia?[tqk]/`
    * caractère final au choix entre 3 lettres : t, q et k, indiqué entre crochets

Il est également possible d’employer la barre verticale « **\|** » pour indiquer un choix entre plusieurs chaînes de caractères, ce qui permet de simplifier la syntaxe.

* _**Exemples :**_ 
  * _Fung**i** OR fung**us** OR fung**uses**_ : `q=/fung(i|us|uses)/` 
  * _Es**k**im**o** OR Es**qu**im**au** OR Es**k**im**os** OR Es**qu**im**aux**_ : `q=/es(k|qu)im(o|au)[sx]?/`

On peut se servir d’une expression régulière dans une expression multi-termes

* _**Exemple :**_  
  * _"Franz Josef Land" OR "Franz Joseph Land"_ : `q=(franz AND /jose[fp]h?/ AND land)`

Il est enfin conseillé de vérifier les résultats, des formes d'écriture peu usuelles ou inattendues pouvant être ramenées

* _**Exemple :**_
  * _L'équation `q=/es(k|qu)im(o|au)[sx]?/` fournit des documents comportant par exemple "Esquimo", "Esquimos", "Eskimau", etc._

NB : L’utilisation des expressions régulières pour interroger les champs `.raw` ne donne aucun résultat.

## **Recherche floue \(~\)**

Recherche sur les variantes d’écriture d’un **terme unique** ayant **au maximum 2 caractères de différence**, caractères en plus, en moins ou caractères différents.

Ajouter derrière le terme de recherche \(uniterme\) un **tilde « ~ »** + **un nombre entier compris entre 0 et 2**.

* Sans aucune précision après le tilde, le chiffre équivaudra à 2
* S’il est de 0, aucun degré de liberté n’est autorisé, c’est donc le mot exact qui est recherché.

Il est conseillé de faire des tests pour vérifier les résultats ramenés, car une recherche floue a :

* l’avantage de mettre en évidence **des variantes pertinentes** auxquelles on n’a pas pensé \(ex. : Groenland, Grönland, Grünland, Grønland, etc.\)
* l’avantage de mettre en évidence **des termes pertinents bien que contenant des caractères incorrects**, tels que des fautes d’orthographes \(ex. : Geeenland, Greendland\)
* l’inconvénient de ramener **des termes non pertinents** \(ex. : Freeland, Greenlaw, Greensand, Greenman, etc.\).

Cas des termes contenant des **tirets** : les tirets ne sont pas compris comme des caractères. C’est le cas par exemple de « sub-arctic » qui équivaudra à « sub arctic », c’est-à-dire à deux mots distincts. Une recherche avec un tilde \("sub-arctic"~\) sera donc considérée comme une recherche de proximité \(cf. paragraphe suivant\).

## **Recherche de proximité \(~\)**

Recherche d’une expression comportant **deux termes** plus ou moins distants.

Ajouter à la suite de l’expression recherchée, un **tilde « ~ »** + la distance autorisée représentée par un **nombre entier** **\(de 0 à n\)**.

Une distance de 3, par exemple, ramène tous les résultats correspondants aux termes de l’expression séparés par 3 mots au maximum.

Encadrer les termes de l’expression par des guillemets \(pas d’usage de parenthèses\). Les signes de ponctuation, les tirets, etc. sont considérés comme des espaces et ne sont pas comptabilisés.

L'**ordre des termes** dans la requête impacte les résultats obtenus !

* _**Exemples :**_ comparer les résultats avec les requêtes suivantes 
  * `q=title:("Bering seas"~2 AND Soviet)` :  « …onto the Soviet continental shelf in the northern **Bering and Chukchi seas**… »
  * `q="Seas Bering"~2 AND Soviet`  : « …in Soviet Arctic **seas and the Bering** Sea… »
  * _**Les résultats sont inversés par rapport à Bering Seas !**_

## **Pondération \(^\)**

Donne plus de poids à un terme de recherche par rapport à un autre terme \(ou à plusieurs autres\).

Faire suivre le terme à booster du **symbole ^** et d’un chiffre \(**nombre entier ou décimal,** **obligatoirement positif**\). Plus ce chiffre est élevé, plus le poids donné au terme à privilégier est fort.

La pondération **impacte le tri des résultats** mais pas leur nombre :

* Si le chiffre indiqué est supérieur à 1, les premiers documents contiennent le terme « privilégié ».
* Si le poids est une fraction de 1, le poids du terme est réduit par rapport aux autres termes de l’équation. Dans ce cas, les résultats contenant le terme pondéré sont proposés à la fin.
* _**Exemple :**_ comparer l’ordre des résultats affichés pour les deux pondérations suivantes
  * _Inupiat**^5**_ _Inupiaq_ : `q=title:(Inupiat^5 Inupiaq)`
  * _Inupiat**^0.5** Inupiaq_ : `q=title:(Inupiat^0.5 Inupiaq)`

On peut **booster une expression de recherche multi-termes**, encadrée par des guillemets.

* _**Exemple :**_ écriture avec  « f » \(Josef\), privilégiée par rapport à celle avec « ph » \(Joseph\)
  * _q=**"Franz Josef Land"^3** "Franz Joseph Land"_

On ne peut **pas booster un terme recherché dans un champ plutôt que dans un autre** \(par exemple privilégier la recherche du terme « Asteroseismology» dans le champ titre plutôt que dans le champ résumé\).

## **Intervalles**

Interrogation sur des intervalles de **nombres ou de mots** à l‘aide de **crochets \(inclusifs\) ou d’accolades \(exclusives\)**

* _**Exemple :**_ recherche de documents antérieurs à 1407 :
  * q=publicationDate:\[\* TO 1406\]
  * q=publicationDate:\[\* TO 1407}

Si l’interrogation porte sur plusieurs intervalles **consécutifs**, ne pas oublier d’**exclure la valeur limite** entre les deux intervalles.

* _**Exemple :**_ recherche de documents du 14e siècle, puis du 15e siècle :     
  * q=publicationDate:\[1301 TO 1400\]
  * puis q=publicationDate:\[1401 TO 1500\] ou q=publicationDate:{1400 TO 1500\]

Une recherche sur un **intervalle de mots** équivaut à une recherche sur des mots dont les valeurs limites sont **tronquées par le métacaractère \***

* _**Exemple :**_ `[seal TO seas]` ramène tous les mots de 4 lettres compris entre **seal** et **seas** mais aussi **sealant**, **seamen**, **seaport**, **search**, etc.

NB : dans le **démonstrateur** ISTEX en mode « **recherche avancée** » :

* « supérieur » est équivalent à « supérieur **ou égal** »
* « inférieur » est équivalent à « inférieur **ou égal** »
* « est entre » est équivalent à « est entre les valeurs inférieure et supérieure, **y compris** ces deux valeurs limites »

