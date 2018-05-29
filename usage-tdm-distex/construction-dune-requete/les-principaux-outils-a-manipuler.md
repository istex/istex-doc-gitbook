# Les principaux outils à manipuler

**Les opérateurs booléens**

Les opérateurs à disposition sont : **OR**, **AND** et **NOT**.

À écrire impérativement en **majuscules**, avec un **espace avant et après**, pour que le moteur de recherche en tienne compte.

Si aucun opérateur n’est utilisé entre 2 champs ou 2 valeurs recherchées, l’opérateur par défaut OR s’applique.

Les opérateurs d’inclusion/exclusion

L’opérateur d’inclusion « **+** » équivaut à **OR** \(et non pas AND\).

L’opérateur d’exclusion « **-** » équivaut à **NOT**.

À écrire **sans espace** entre le « + » ou le « - » et le terme de recherche à inclure ou à exclure.

Ces opérateurs peuvent s’utiliser sur un terme unique ou sur une expression composée et délimitée par des parenthèses ou des guillemets.

_**Exemples :**_

* _recherche de documents contenant le mot « Greenland » et le mot « Sub-arctic »_

```text
q=Greenland +"Sub-arctic"
```

* _recherche de documents contenant le mot « Iceland » mais pas les mots « Jan » et « Mayen »_

  ```text
  q=Iceland -(Jan AND Mayen)
  ```

Les guillemets

Les guillemets permettent de faire une recherche extacte sur une chaîne de caractères donnée.

Ils permettent de considérer 2 ou plusieurs mots comme faisant partie d'une même expression à rechercher.

Sans les guillemets, ces mots sont considérés comme étant reliés par l'opérateur booléen OR et sont recherchés dans le document indépendamment les uns des autres.

`q="speech therapy"` ⇒ 12 908 résultats

`q=speech therapy` ⇒ 2 813 753 résultats

**Les troncatures**

Les troncatures sont très utiles pour ramener plusieurs résultats correspondant à une chaîne de caractères commune sans énumérer toutes les variantes possibles :

* Le joker ou métacaractère « **?** » est utilisé pour remplacer 1 caractère
* Le joker ou métacaractère « **\*** » est utilisé pour remplacer 0, 1 ou plusieurs caractère\(s\)

Mais attention, elles impliquent quelques contraintes :

* elles ne sont possibles qu’en milieu ou en fin de mot

  Exemple : `q=te?t OR text*`

* elles ne sont pas possibles en début de mot

  Exemple : `q=*ext`

* elles ne fonctionnent pas dans les expressions entre guillemets lorsqu’elles sont employées en fin d’expression

  Exemples :

​ `q=title:"speech therap*"` ⇒ aucun résultat

​ `q=title:"speech therap?"` ⇒ aucun résultat

Par contre :

​ `q=title:"speech therapy"` ⇒ 169 résultats

Pour une requête complète, il faut donc écrire :

​ `q=title:("speech therapy" "speech therapies" "speech therapist" "speech therapists")`

⇒ 199 résultats

La troncature avec jokers peut cependant générer beaucoup de bruit.

​ Par exemple :

​ `q=title:fung*` ⇒ 24 612 résultats

Pour ouvrir le choix des variantes recherchées sans toutefois générer trop de bruit, on utilisera alors des expressions régulières \(voir chapitre correspondant ci-dessous\).

​ Exemple :

​ `q=title:/fung(i|use?s?)/` ⇒ 13 321 résultats

Cette requête se concentre en effet sur des variantes comme « fungi » « fungus », « funguses » et ignore les mots comme « fungicide », « fungal », etc.

**Le parenthésage**

L’utilisation de parenthèses permet de factoriser des valeurs dans des champs ou de faire des combinaisons d’associations entre opérateurs booléens.

Exemple de parenthésage simple :

​ Il faut écrire :

```text
q=champ:(mot1 OR mot2 OR mot3 OR mot4)
```

​ ou, en tenant compte du caractère facultatif de **OR**, écrire :

```text
q=champ:(mot1 mot2 mot3 mot4)
```

​ Plutôt que :

```text
q=champ:mot1 OR mot2 OR mot3 OR mot4
```

En effet, dans le second cas, le champ n’est pas factorisé. Seul le 1er mot `mot1` sera recherché dans le champ indiqué et les autres mots seront recherchés dans l’ensemble du document.

Dans les parenthésages plus complexes, il est possible d’inclure un NOT dans un NOT afin d’autoriser la présence d’un mot lorsque l’on exclut la présence d’un autre mot :

* **\*Exemple :** Recherche des documents contenant les mots commençant par pyrophyt- ou sciaphyt- ou sclerophyt- ou xerophyt- ou "aquatic plant" dans le résumé\*

```text
q=abstract:(pyrophyt* sciaphyt* sclerophyt* xerophyt* "aquatic plant")
```

​ ⇒ Résultat : 1 010

* **\*Exemple:** Parmi les documents contenant les mots commençant par pyrophyt- ou sciaphyt- ou sclerophyt- ou xerophyt- ou "aquatic plant" dans le résumé, on exclut ceux qui contiennent le mot fungi\*

```text
q=abstract:((pyrophyt* sciaphyt* sclerophyt* xerophyt* "aquatic plant") NOT fungi)
```

​ ⇒ Résultat : 1 000

* **\*Exemple :** Parmi les documents contenant les mots commençant par pyrophyt- ou sciaphyt- ou sclerophyt- ou xerophyt- ou "aquatic plant" et ne contenant pas le mot fungi dans le résumé, on accepte les documents contenant le mot fungi s’ils contiennent aussi les mots commençant par mycorrhiz- ou ectomycorrhiz- ou endomycorrhiz-\*

```text
q=abstract:(pyrophyt* sciaphyt* sclerophyt* xerophyt* "aquatic plant" NOT (fungi NOT (mycorrhiz* ectomycorrhiz* endomycorrhiz*)))
```

​ ⇒ Résultat : 1 001

