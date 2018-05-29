# Syntaxe

| Syntaxe | |
|------------ | ------------- |
| URI | https&#58;//api.istex.fr/document/?q={query}&facet={liste_des_champs} |
| Explications | Cette option permet de sélectionner une ou des facettes basées sur les champs disponibles.<br><br>La liste des champs est séparée par des **, (virgules)**.<br><br>Attention, les facettes ignorent les résultats qui ne possèdent pas le champ demandé. Par exemple, une facette sur <br>le champ "copyrightDate" ne prendra pas en compte les résultats de la requête sans "copyrightDate" renseignée.<br><br>La liste des facettes souhaitées peut être renseignée de deux manières :<br>- en utilisant **le nom du champ selon le mapping**,<br>- en utilisant **les alias fournis**<br><br>La liste des **options disponibles** diffère selon le type du champ interrogé.|
| Paramètres | - &facet : l'option permettant de définir les facettes à effectuer,<br>- {liste des champs} : la liste en question, séparée par des virgules. |
| Code de retour | - 200 si OK, <br> - 500 en cas de problème (dans ce cas, contacter <api-bug@listes.istex.fr>) |

