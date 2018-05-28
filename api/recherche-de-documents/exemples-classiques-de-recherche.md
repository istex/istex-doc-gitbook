# Exemples classiques de recherche

Ici sont listés différents types de recherche pouvant être effectué via l'API :

### Recherche par corpus ###

_Champ concerné_ : <span class="mandParam">corpusName:{valeur}</span>

| Syntaxe | |
|------------ | ------------- |
| URI | <span class="baseUrl">https&#58;//api.istex.fr/document/?q=</span><span class="mandParam">corpusName:{valeur}</span> |
| Paramètres | - <span class="mandParam">corpusName</span> : le champ concerné,<br>- <span class="mandParam">{valeur}</span> : la valeur recherchée. |
| Code de retour | - 200 si OK, <br>- 500 en cas de problème (dans ce cas, contacter <api-bug@listes.istex.fr>) |

| Exemples | |
| -------- | ------- |
| Recherche des documents présents dans le **corpus** ecco | <a href="https://api.istex.fr/document/?q=corpusName:ecco&output=*">https://api.istex.fr/document/?<span class="mandParam">q=corpusName:ecco</span>&output=*</a> |
| Recherche des documents contenant le **terme** "chemical" dans le **corpus** RSC Journals | <a href="https://api.istex.fr/document/?q=chemical%20AND%20corpusName:%22rsc-journals%22&output=*">https://api.istex.fr/document/?<span class="mandParam">q=chemical AND corpusName:"rsc-journals"</span>&output=*</a>

### Recherche par auteur ###

| Syntaxe | |
|------------ | ------------- |
| URI | <span class="baseUrl">https&#58;//api.istex.fr/document/?q=</span><span class="mandParam">author.name:{nom}</span> |
| Paramètres | - <span class="mandParam">author.name</span> : le champ concerné,<br>- <span class="mandParam">{nom}</span> : le nom recherché.|
| Code de retour | - 200 si OK, <br>- 500 en cas de problème (dans ce cas, contacter <api-bug@listes.istex.fr>)|

| Exemples | |
| -------- | ------- |
| Recherche des documents contenant un **auteur** ayant pour nom "Tetsushiro" | <a href="https://api.istex.fr/document/?q=author.name:Tetsushiro&output=*">https://api.istex.fr/document/?<span class="mandParam">q=author.name:Tetsushiro</span>&output=*</a> |
| Recherche des documents contenant le **terme** "Mikroelement" et un **auteur** ayant pour nom "Friedrich" | <a href='https://api.istex.fr/document/?q=Mikroelement%20AND%20author.name:Friedrich&output=*'>https://api.istex.fr/document/?<span class="mandParam">q=Mikroelement AND author.name:Friedrich</span>&output=*</a>|

<a id="recherche-par-redacteur"></a>
### Recherche par rédacteur ###

| Syntaxe | |
|------------ | ------------- |
| URI | <span class="baseUrl">https&#58;//api.istex.fr/document/?q=</span><span class="mandParam">host.editor.name:{nom}</span> |
| Paramètres | - <span class="mandParam">host.editor.name</span> : le champ concerné, <br>- <span class="mandParam">{nom}</span> : le nom recherché. |
| Code de retour | - 200 si OK, <br>- 500 en cas de problème (dans ce cas, contacter <api-bug@listes.istex.fr>) |

| Exemples | |
| -------- | ------- |
| Recherche des documents contenant un **rédacteur** ayant pour nom "Goos" | <a href="https://api.istex.fr/document/?q=host.editor.name:Goos&output=*">https://api.istex.fr/document/?<span class="mandParam">q=host.editor.name:Goos</span>&output=*</a> |
| Recherche des documents contenant le **terme** "dangerous" et ayant un **rédacteur** du nom de "Juris Hartmanis" | <a href="https://api.istex.fr/document/?q=dangerous%20AND%20host.editor.name:%22Juris%20Hartmanis%22&output=*">https://api.istex.fr/document/?<span class="mandParam">q=dangerous AND host.editor.name:"Juris Hartmanis"</span>&output=*</a>|

### Recherche par genre de document ###

| Syntaxe | |
|------------ | ------------- |
| URI | <span class="baseUrl">https&#58;//api.istex.fr/document/?q=</span><span class="mandParam">genre:{valeur}</span> |
| Paramètres | - <span class="mandParam">genre</span> : le champ concerné,<br>- <span class="mandParam">{valeur}</span> : la valeur recherchée. |
| Code de retour | - 200 si OK, <br>- 500 en cas de problème (dans ce cas, contacter <api-bug@listes.istex.fr>) |

| Exemples | |
| -------- | ------- |
| Recherche des documents contenant un document de **type** "reviews" | <a href="https://api.istex.fr/document/?q=genre:reviews&output=*">https://api.istex.fr/document/?<span class="mandParam">q=genre:reviews</span>&output=*</a> |
| Recherche des documents contenant le **terme** "cortex" et étant du **type** "Original Paper" | <a href="https://api.istex.fr/document/?q=cortex%20AND%20genre:%22original%20paper%22&output=*">https://api.istex.fr/document/?<span class="mandParam">q=cortex AND genre:"original paper"</span>&output=*</a>|

<a id="recherche-par-genre-de-serie"></a>
### Recherche par genre de série ###

| Syntaxe | |
|------------ | ------------- |
| URI | <span class="baseUrl">https&#58;//api.istex.fr/document/?q=</span><span class="mandParam">host.genre:{valeur}</span> |
| Paramètres | - <span class="mandParam">host.genre</span> : le champ concerné,<br>- <span class="mandParam">{valeur}</span> : la valeur recherchée. |
| Code de retour | - 200 si OK, <br>- 500 en cas de problème (dans ce cas, contacter <api-bug@listes.istex.fr>) |

| Exemples | |
| -------- | ------- |
| Recherche des documents contenant un document présent dans un **journal** | <a href="https://api.istex.fr/document/?q=host.genre:journal&output=*">https://api.istex.fr/document/?<span class="mandParam">q=host.genre:journal</span>&output=*</a> |
| Recherche des documents contenant le **terme** "cortex" et présent dans un **livre** | <a href="https://api.istex.fr/document/?q=cortex%20AND%20host.genre:book&output=*">https://api.istex.fr/document/?<span class="mandParam">q=cortex AND host.genre:book</span>&output=*</a>|

### Recherche par sujet ###

_Champ concerné_ : <span class="mandParam">subject.value:{valeur}</span>

| Syntaxe | |
|------------ | ------------- |
| URI | <span class="baseUrl">https&#58;//api.istex.fr/document/?q=</span><span class="mandParam">subject.value:{valeur}</span> |
| Paramètres | - <span class="mandParam">subject.value</span> : le champ concerné,<br>- <span class="mandParam">{valeur}</span> : la valeur recherchée. |
| Code de retour | - 200 si OK, <br>- 500 en cas de problème (dans ce cas, contacter <api-bug@listes.istex.fr>) |

| Exemples | |
| -------- | ------- |
| Recherche des documents contenant un **sujet** "pigeon" | <a href="https://api.istex.fr/document/?q=subject.value:pigeon&output=*">https://api.istex.fr/document/?<span class="mandParam">q=subject.value:pigeon</span>&output=*</a> |
| Recherche des documents contenant un **sujet** avec "pigeon" et "retina" | <a href="https://api.istex.fr/document/?q=subject.value:(pigeon%20AND%20retina)&output=*">https://api.istex.fr/document/?<span class="mandParam">q=subject.value:(pigeon AND retina)</span>&output=*</a>|

<a id="recherche-par-sujet-de-serie"></a>
### Recherche par sujet de série ###

_Champ concerné_ : <span class="mandParam">host.subject.value:{valeur}</span>

| Syntaxe ||
|------------ | ------------- |
| URI | <span class="baseUrl">https&#58;//api.istex.fr/document/?q=</span><span class="mandParam">host.subject.value:{valeur}</span> |
| Paramètres | - <span class="mandParam">host.subject.value</span> : le champ concerné,<br>- <span class="mandParam">{valeur}</span> : la valeur recherchée. |
| Code de retour | - 200 si OK, <br>- 500 en cas de problème (dans ce cas, contacter <api-bug@listes.istex.fr>) |

| Exemples | |
| -------- | ------- |
| Recherche des documents contenant un **sujet de série** "statistics" | <a href="https://api.istex.fr/document/?q=host.subject.value:statistics&output=*">https://api.istex.fr/document/?<span class="mandParam">q=host.subject.value:statistics</span>&output=*</a> |
| Recherche des documents contenant le **terme** "germination" et ayant un **sujet de série** "life sciences" | <a href="https://api.istex.fr/document/?q=germination%20AND%20host.subject.value:%22life%20sciences%22&output=*">https://api.istex.fr/document/?<span class="mandParam">q=germination AND host.subject.value:"life sciences"</span>&output=*</a> |

### Recherche par langue ###

_Champ concerné_ : <span class="mandParam">language:{valeur}</span>

| Syntaxe ||
|------------ | ------------- |
| URI | <span class="baseUrl">https&#58;//api.istex.fr/document/?q=</span><span class="mandParam">language:{valeur}</span> |
| Paramètres | - <span class="mandParam">language</span> : le champ concerné,<br>- <span class="mandParam">{valeur}</span> : la valeur recherchée. |
| Code de retour | - 200 si OK, <br>- 500 en cas de problème (dans ce cas, contacter <api-bug@listes.istex.fr>) |

| Exemples ||
| -------- | ------- |
| Recherche des documents en **langue** allemande | <a href="https://api.istex.fr/document/?q=language:ger&output=*">https://api.istex.fr/document/?<span class="mandParam">q=language:ger</span>&output=*</a> |
| Recherche des documents contenant le **terme** "germination" et en **langue** anglaise | <a href="https://api.istex.fr/document/?q=germination%20AND%20language:eng&output=*">https://api.istex.fr/document/?<span class="mandParam">q=germination AND language:eng</span>&output=*</a>
