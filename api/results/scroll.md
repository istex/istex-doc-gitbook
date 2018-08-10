# Pagination de type "scroll"

Pour parcourir de grands ensembles de résultats, la pagination _classique_ ne peut pas être utilisée. Il s'agit d'une limitation technique pour préserver les performances du moteur de recherche.

Il convient alors d'utiliser la fonctionnalité de "_scrolling_", qui permet de parcourir d'un bout à l'autre un ensemble de résultats. Dans ce mode de parcours, il n'est pas possible de "revenir en arrière" dans les résultats, d'où l'absence de notion de _page_.

Le principe d'utilisation est le suivant :

* Lors du premier appel de la recherche, le paramètre d'URL `scroll` est renseigné, ce qui active ce mode de parcours
* L'API renvoie le premier groupe de résultats, accompagné d'un identifiant `scrollId`
* Pour accéder à la suite des résultats, vous devez relancer la requête initiale accompagnée du paramètre `scrollId`, ce qui permet à l'API savoir à quel parcours et jeu de résultats se référer.

| Syntaxe |  |
| :--- | :--- |
| URI | `https://api.istex.fr/document/?q={query}&scroll={durée}&scrollId={identifiant}` |
| Explications | Cette option permet d'activer le mode `scroll`.  Dans ce mode, une sorte de "session" de parcours est initiée et maintenue active pendant temps limité,  à l'issue duquel les résultats ne peuvent plus être parcourus. |
| Paramètres | **&scroll** : l'option permettant de définir la durée pendant laquelle la liste des résultats reste "active".  Ce délai est formé d'un nombre entier suivi des caractères `d`, `h`, `m`, `s` ou `ms`.  La valeur par défaut est `30s`.  Ce délai est remis à zéro à chaque _déplacement_ dans les résultats de la _session_ courante. |
| Paramètres | **&scrollId** : l'option permettant de spécifier la _session_ \(le jeu de résultats\) en cours de parcours. |
| Code de retour | 200 si OK,   404 si le délai a été dépassé \(équivaut à : contexte scrollId non trouvé\)  - 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\) |

* Formatage des résultats renvoyés :

```javascript
{
    "total": nombre de résultats,
    "scroll": délai d'activation pour la session de scroll
    "scrollId": identifiant de la session de scroll
    "nextScrollURI": URL de navigation dans la suite des résultats
    "noMoreScrollResults": booléen permettant de savoir s'il reste des résultats
    "hits": [
        groupe de résultats courant 
        ....
    ]
}
```

