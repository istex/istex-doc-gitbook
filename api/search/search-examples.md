# Exemples classiques de recherche

Ici sont listés différents types de recherche pouvant être effectué via l'API :

## Recherche par corpus

_Champ concerné_ : **corpusName:{valeur}**

| Syntaxe |  |
| :--- | :--- |
| URI | `https://api.istex.fr/document/?q=`**`corpusName:{valeur}`** |
| Paramètres | - **corpusName** : le champ concerné, - **{valeur}** : la valeur recherchée. |
| Code de retour | - 200 si OK,  - 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\) |

| Exemples |  |
| :--- | :--- |
| Recherche des documents présents dans le **corpus** ecco | [https://api.istex.fr/document/?**q=corpusName:ecco**&output=\*](https://api.istex.fr/document/?q=corpusName:ecco&output=*) |
| Recherche des documents contenant le **terme** "chemical" dans le **corpus** RSC Journals | \[[https://api.istex.fr/document/?\*\*q=chemical](https://api.istex.fr/document/?**q=chemical) AND corpusName:"rsc-journals_\*"&output=\_\]\([https://api.istex.fr/document/?q=chemical AND corpusName:"rsc-journals"&output=\*](https://api.istex.fr/document/?q=chemical%20AND%20corpusName:"rsc-journals"&output=*)\) |

## Recherche par auteur

| Syntaxe |  |
| :--- | :--- |
| URI | [https://api.istex.fr/document/?q=\*\*author.name:{nom}\*\*](https://api.istex.fr/document/?q=**author.name:{nom}**) |
| Paramètres | - **author.name** : le champ concerné, - **{nom}** : le nom recherché. |
| Code de retour | - 200 si OK,  - 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\) |

| Exemples |  |
| :--- | :--- |
| Recherche des documents contenant un **auteur** ayant pour nom "Tetsushiro" | [https://api.istex.fr/document/?**q=author.name:Tetsushiro**&output=\*](https://api.istex.fr/document/?q=author.name:Tetsushiro&output=*) |
| Recherche des documents contenant le **terme** "Mikroelement" et un **auteur** ayant pour nom "Friedrich" | [https://api.istex.fr/document/?**q=Mikroelement AND author.name:Friedrich**&output=\*](https://api.istex.fr/document/?q=Mikroelement%20AND%20author.name:Friedrich&output=*) |

## Recherche par rédacteur

| Syntaxe |  |
| :--- | :--- |
| URI | [https://api.istex.fr/document/?q=\*\*host.editor.name:{nom}\*\*](https://api.istex.fr/document/?q=**host.editor.name:{nom}**) |
| Paramètres | - **host.editor.name** : le champ concerné,  - **{nom}** : le nom recherché. |
| Code de retour | - 200 si OK,  - 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\) |

| Exemples |  |
| :--- | :--- |
| Recherche des documents contenant un **rédacteur** ayant pour nom "Goos" | [https://api.istex.fr/document/?**q=host.editor.name:Goos**&output=\*](https://api.istex.fr/document/?q=host.editor.name:Goos&output=*) |
| Recherche des documents contenant le **terme** "dangerous" et ayant un **rédacteur** du nom de "Juris Hartmanis" | \[[https://api.istex.fr/document/?\*\*q=dangerous](https://api.istex.fr/document/?**q=dangerous) AND host.editor.name:"Juris Hartmanis_\*"&output=\_\]\([https://api.istex.fr/document/?q=dangerous AND host.editor.name:"Juris Hartmanis"&output=\*](https://api.istex.fr/document/?q=dangerous%20AND%20host.editor.name:"Juris%20Hartmanis"&output=*)\) |

## Recherche par genre de document

| Syntaxe |  |
| :--- | :--- |
| URI | [https://api.istex.fr/document/?q=\*\*genre:{valeur}\*\*](https://api.istex.fr/document/?q=**genre:{valeur}**) |
| Paramètres | - **genre** : le champ concerné, - **{valeur}** : la valeur recherchée. |
| Code de retour | - 200 si OK,  - 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\) |

| Exemples |  |
| :--- | :--- |
| Recherche des documents contenant un document de **type** "reviews" | [https://api.istex.fr/document/?**q=genre:reviews**&output=\*](https://api.istex.fr/document/?q=genre:reviews&output=*) |
| Recherche des documents contenant le **terme** "cortex" et étant du **type** "Original Paper" | \[[https://api.istex.fr/document/?\*\*q=cortex](https://api.istex.fr/document/?**q=cortex) AND genre:"original paper_\*"&output=\_\]\([https://api.istex.fr/document/?q=cortex AND genre:"original paper"&output=\*](https://api.istex.fr/document/?q=cortex%20AND%20genre:"original%20paper"&output=*)\) |

## Recherche par genre de série

| Syntaxe |  |
| :--- | :--- |
| URI | [https://api.istex.fr/document/?q=\*\*host.genre:{valeur}\*\*](https://api.istex.fr/document/?q=**host.genre:{valeur}**) |
| Paramètres | - **host.genre** : le champ concerné, - **{valeur}** : la valeur recherchée. |
| Code de retour | - 200 si OK,  - 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\) |

| Exemples |  |
| :--- | :--- |
| Recherche des documents contenant un document présent dans un **journal** | [https://api.istex.fr/document/?**q=host.genre:journal**&output=\*](https://api.istex.fr/document/?q=host.genre:journal&output=*) |
| Recherche des documents contenant le **terme** "cortex" et présent dans un **livre** | [https://api.istex.fr/document/?**q=cortex AND host.genre:book**&output=\*](https://api.istex.fr/document/?q=cortex%20AND%20host.genre:book&output=*) |

## Recherche par sujet

_Champ concerné_ : **subject.value:{valeur}**

| Syntaxe |  |
| :--- | :--- |
| URI | [https://api.istex.fr/document/?q=\*\*subject.value:{valeur}\*\*](https://api.istex.fr/document/?q=**subject.value:{valeur}**) |
| Paramètres | - **subject.value** : le champ concerné, - **{valeur}** : la valeur recherchée. |
| Code de retour | - 200 si OK,  - 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\) |

| Exemples |  |
| :--- | :--- |
| Recherche des documents contenant un **sujet** "pigeon" | [https://api.istex.fr/document/?**q=subject.value:pigeon**&output=\*](https://api.istex.fr/document/?q=subject.value:pigeon&output=*) |
| Recherche des documents contenant un **sujet** avec "pigeon" et "retina" | [https://api.istex.fr/document/?**q=subject.value:\(pigeon AND retina**\)&output=\*](https://api.istex.fr/document/?q=subject.value:%28pigeon%20AND%20retina%29&output=*) |

## Recherche par sujet de série

_Champ concerné_ : **host.subject.value:{valeur}**

| Syntaxe |  |
| :--- | :--- |
| URI | [https://api.istex.fr/document/?q=\*\*host.subject.value:{valeur}\*\*](https://api.istex.fr/document/?q=**host.subject.value:{valeur}**) |
| Paramètres | **- host.subject.value** : le champ concerné, - **{valeur}** : la valeur recherchée. |
| Code de retour | - 200 si OK,  - 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\) |

| Exemples |  |
| :--- | :--- |
| Recherche des documents contenant un **sujet de série** "statistics" | [https://api.istex.fr/document/?**q=host.subject.value:statistics**&output=\*](https://api.istex.fr/document/?q=host.subject.value:statistics&output=*) |
| Recherche des documents contenant le **terme** "germination" et ayant un **sujet de série** "life sciences" | \[[https://api.istex.fr/document/?\*\*q=germination](https://api.istex.fr/document/?**q=germination) AND host.subject.value:"life sciences_\*"&output=\_\]\([https://api.istex.fr/document/?q=germination AND host.subject.value:"life sciences"&output=\*](https://api.istex.fr/document/?q=germination%20AND%20host.subject.value:"life%20sciences"&output=*)\) |

## Recherche par langue

_Champ concerné_ : **language:{valeur}**

| Syntaxe |  |
| :--- | :--- |
| URI | [https://api.istex.fr/document/?q=\*\*language:{valeur}\*\*](https://api.istex.fr/document/?q=**language:{valeur}**) |
| Paramètres | - **language** : le champ concerné, - **{valeur}** : la valeur recherchée. |
| Code de retour | - 200 si OK,  - 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\) |

| Exemples |  |
| :--- | :--- |
| Recherche des documents en **langue** allemande | [https://api.istex.fr/document/?**q=language:ger**&output=\*](https://api.istex.fr/document/?q=language:ger&output=*) |
| Recherche des documents contenant le **terme** "germination" et en **langue** anglaise | [https://api.istex.fr/document/?**q=germination AND language:eng**&output=\*](https://api.istex.fr/document/?q=germination%20AND%20language:eng&output=*) |

