# Paramètres de pagination

Les paramètres de pagination se basent sur les deux options `from` et `size` qui s'utilisent et se combinent comme suit :

**La syntaxe pour la "position" est la suivante :**

* URI
  * https://api.istex.fr/document/?q={query}**&from={position}**
* Explications    
  * Cette option permet d'indiquer le numéro de départ du premier résultat renvoyé.
  * Si l'option est manquante, l'affichage commencera au premier résultat.
  * La position est un entier.
  * Si ce nombre dépasse le nombre de résultats, la page n'affichera aucun résultat.
* Paramètres
  * **&from** : l'option permettant de définir le numéro de départ,
  * **{position}** : le numéro de départ en question.
* Code de retour
  * 200 si OK, 
  * 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\)

**La syntaxe pour le "nombre" est la suivante :**

* URI
  * https://api.istex.fr/document/?q={query}**&size={nombre}**
* Explications
  * Cette option permet d'indiquer le nombre de résultats renvoyés par page.
  * Si l'option est manquante, chaque page affichera 10 résultats.
  * Le nombre est un entier ne pouvant pas dépasser 5000.

    Dans le cas contraire, ce nombre sera descendu automatique à 5000. 
* Paramètres
  * **&from** : l'option permettant de définir le numéro de départ,
  * **{position}** : le numéro de départ en question.
* Code de retour
  * 200 si OK, 
  * 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\)

| Exemples |  |
| --- | --- |
| Récupération des **7 premiers résultats** pour le terme "controllability" | [https://api.istex.fr/document/?q=controllability&size=7](https://api.istex.fr/document/?q=controllability&size=7) [https://api.istex.fr/document/?q=controllability&from=0&size=7](https://api.istex.fr/document/?q=controllability&from=0&size=7) |
| Récupération des **résultats 3 à 7** pour le terme "controllability" | [https://api.istex.fr/document/?q=controllability&from=3&size=4](https://api.istex.fr/document/?q=controllability&from=3&size=4) |

Une fois cette requête effectuée, il est possible de **naviguer dans les résultats** grâce aux champs suivants, présents dans la réponse de l'API :

* **firstPageURI** : fournit l'URI permettant d'atteindre la toute première page.
* **lastPageURI** : fournit l'URI permettant d'atteindre la toute dernière page.
* **prevPageURI** : fournit l'URI permettant d'atteindre la page précédente. N'est pas présent si la page actuelle est la première page.
* **nextPageURI** : fournit l'URI permettant d'atteindre la page suivante. N'est pas présent si la page actuelle est la dernière page.

{% hint style="danger" %}


* Il est **impossible de parcourir les résultats au-delà de la 10 000ème réponse**. En d'autres termes, la somme des paramètres `from` et `size` ne doit jamais dépasser 10 000. Si vous avez besoin de dépasser ce seuil, vous devez utiliser la pagination de type _scroll_ présentée ci-dessous.
* Le paramètre `lastPageURI` est par conséquent déprécié et ne doit plus être utilisé
{% endhint %}



