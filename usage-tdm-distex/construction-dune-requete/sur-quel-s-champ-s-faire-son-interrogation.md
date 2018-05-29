# Sur quel\(s\) champ\(s\) faire son interrogation ?

Les champs interrogeables sont présentés dans la rubrique [**Accès aux données indexées**](https://api.istex.fr/documentation/fields/) de la documentation technique de l’API ISTEX.

Par défaut, sans mention de champ, la recherche est effectuée sur tout le document.

Mais, si on a un critère de recherche large, qui ne porte pas sur un champ particulier, il est préférable de commencer par cibler la recherche sur des champs tels que `title`, `abstract`, `subject.value` afin de ne pas générer trop de bruit.

En effet, si on lance une requête sur l’ensemble du document, sans précision de champ, les mots recherchés peuvent être retrouvés dans les métadonnées ou dans les références bibliographiques, et ramener des résultats moins pertinents.

Dans ce cas, il faut répéter la requête en fonction des différents champs choisis \(pas de factorisation de champs possible\).

_​**Exemple** : si l'on souhaite rechercher des documents contenant les mots « Arctic » \(mais pas « Arctic » quand il est présent avec des mots commençant par « charr»\), Subarctic et ses variantes à la fois dans le champ_ `title` _et dans le champ_ `abstract`_, il faut répéter la requête, même complexe, pour chacun des champs souhaités._

```text
q=(title:(Arctic NOT (arctic AND /charr?/) OR Subarctic~1 OR Sub?arctic)) OR (abstract:(Arctic NOT (arctic AND /charr?/) OR Subarctic~1 OR Sub?arctic))
```

&gt; &gt;

Quelques champs particuliers

_**Langues**_

Le champ `language` permet d'interroger la langue d’un document.

L’interrogation nécessite d’utiliser des codes langues \(généralement 3 lettres\) issus de la liste normalisée ISO 639, et non le nom complet de la langue ou de la famille de langues.

* _​**Exemple** : Recherche de documents en **mohawk**​_

```text
  q=language:moh
```

Pour savoir quel code langue utiliser, vous pouvez consulter en [**annexe**](https://github.com/istex/istex-web-doc/tree/339773edda60c129d5b81201b7ed7ed264a762b7/usage-tdm-distex/construction-dune-requete/annexes/README.md) la liste des codes interrogeables dans Istex.

NB : La valeur « unknown » est présente lorsqu'aucun code langue ne renseigne ce champ. Le champ `host.language` contient quant à lui systématiquement la valeur « unknown » car il n'est actuellement pas renseigné.

_**Dates de publication**_

Le champ `publicationDate` permet de retrouver les documents publiés au cours d’une année particulière ou bien d’un intervalle de temps grâce à l’emploi de **crochets ou d’accolades**  \(voir à ce sujet le paragraphe « Intervalles » ci-dessous\).

Quelques types de requêtes :

* _Recherche de documents postérieurs à 2015_ : 2 solutions

```text
  q=publicationDate:[2015 TO *]
```

```text
  q=publicationDate:{2014 TO *]
```

* Pour des statistiques concernant des publications sur plusieurs **périodes consécutives**, ne pas oublier d’exclure l’année frontière.

  ```text
  ***Exemple** : année 1400 incluse dans une requête de documents du 14e siècle, mais exclue du 15e siècle*
  ```

  ```text
  q=publicationDate:[1301 TO 1400]
  ```

  puis

  ```text
  q=publicationDate:{1400 TO 1500]
  ```

  ou bien

  ```text
  q=publicationDate:[1401 TO 1500]
  ```

* _Pour récupérer des documents **sans** date de publication :_

```text
  q=NOT publicationDate:[* TO *]
```

* _Pour rechercher des documents sans date de publication \(champ_ `publicationDate` _vide\) mais qui comporteraient une date de copyright, en s’étant assuré au préalable que ce champ est renseigné \(champ_ `copyrightDate` _plein\) :_

```text
  q=copyrightDate:[* TO *] NOT publicationDate:[* TO *]
```

