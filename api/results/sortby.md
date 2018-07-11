# Tris basés sur le mapping

**La syntaxe est la suivante :**

* URI    
  * `https://api.istex.fr/document/?q={query}&sortBy={liste des champs}`
* Explications    
  * Cette option permet de sélectionner un ou des tris basés sur les champs disponibles. 
  * Si l'option est manquante, aucun tri n'est effectué.
  * La liste des champs est séparée par des , \(virgules\).

{% hint style="danger" %}
**Attention, l'ordre des tris est très important : un tri du type sortBy=x,y demandera à l'API d'effectuer d'abord un tri selon x, puis de trier cet ordre selon y**.
{% endhint %}

* Il existe plusieurs paramétrages possibles : 
  * **x** : renvoie les résultats triés selon le champ x en ordre ascendant \(ordre par défaut\)
  * **x\[asc\]** : renvoie les résultats triés selon le champ x en ordre ascendant
  * **x\[desc\]** : renvoie les résultats triés selon le champ x en ordre descendant
* Paramètres
  * **&sortBy** : l'option permettant de définir les tris à effectuer,
  * **{liste des champs}** : la liste en question, séparée par des virgules.
* Code de retour
  * 200 si OK, 
  * 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\)

| Exemples |  |
| --- | --- |
| Affichage de l'ensemble des documents triés selon le champ **host.copyrightDate** | [https://api.istex.fr/document/?q=\***&sortBy=host.copyrightDate**&output=host.copyrightDate](https://api.istex.fr/document/?q=*&sortBy=host.copyrightDate&output=host.copyrightDate) |
| Affichage de l'ensemble des documents triés selon le champ **host.copyrightDate, en ordre descendant** | [https://api.istex.fr/document/?q=\***&sortBy=host.copyrightDate\[desc\]**&output=host.copyrightDate](https://api.istex.fr/document/?q=*&sortBy=host.copyrightDate[desc]&output=host.copyrightDate) |
| Affichage de l'ensemble des documents triés selon le champ **host.copyrightDate, puis le champ genre** | [https://api.istex.fr/document/?q=\*&**sortBy=host.copyrightDate,genre.raw**&output=host.copyrightDate,genre](https://api.istex.fr/document/?q=*&sortBy=host.copyrightDate,genre.raw&output=host.copyrightDate,genre) |

