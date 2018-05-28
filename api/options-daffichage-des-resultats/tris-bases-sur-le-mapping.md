# Tris basés sur le mapping

| Syntaxe | |
|------------ | ------------- |
| URI | <span class="baseUrl">https&#58;//api.istex.fr/document/?q={query}</span><span class="mandParam">&sortBy={liste des champs}</span> |
| Explications | Cette option permet de sélectionner un ou des tris basés sur les champs disponibles. <br>Si l'option est manquante, **aucun tri n'est effectué**.<br><br>La liste des champs est séparée par des **, (virgules)**.<br><br><span class="mandParam">Attention, l'ordre des tris est très important : <br>un tri du type sortBy=x,y demandera à l'API d'effectuer d'abord un tri selon x, puis de trier cet ordre selon y.</span><br><br>Il existe plusieurs paramétrages possibles :  <br>- <span class="mandParam">x</span> : renvoie les résultats triés selon le champ x **en ordre ascendant (ordre par défaut)**<br>- <span class="mandParam">x[asc]</span> : renvoie les résultats triés selon le champ x **en ordre ascendant**<br>- <span class="mandParam">x[desc]</span> : renvoie les résultats triés selon le champ x **en ordre descendant**|
| Paramètres | - <span class="mandParam">&sortBy</span> : l'option permettant de définir les tris à effectuer,<br>- <span class="mandParam">{liste des champs}</span> : la liste en question, séparée par des virgules. |
| Code de retour | - 200 si OK, <br> - 500 en cas de problème (dans ce cas, contacter <api-bug@listes.istex.fr>) |

| Exemples | |
| -------- | ------- |
| Affichage de l'ensemble des documents triés selon le champ **host.copyrightDate** | <a href="https://api.istex.fr/document/?q=*&sortBy=host.copyrightDate&output=host.copyrightDate">https://api.istex.fr/document/?q=*<span class="mandParam">&sortBy=host.copyrightDate</span>&output=host.copyrightDate</a> |
| Affichage de l'ensemble des documents triés selon le champ **host.copyrightDate, en ordre descendant** | <a href="https://api.istex.fr/document/?q=*&sortBy=host.copyrightDate[desc]&output=host.copyrightDate">https://api.istex.fr/document/?q=*<span class="mandParam">&sortBy=host.copyrightDate[desc]</span>&output=host.copyrightDate</a> |
| Affichage de l'ensemble des documents triés selon le champ **host.copyrightDate, puis le champ genre** | <a href="https://api.istex.fr/document/?q=*&sortBy=host.copyrightDate,genre.raw&output=host.copyrightDate,genre">https://api.istex.fr/document/?q=*<span class="mandParam">&sortBy=host.copyrightDate,genre.raw</span>&output=host.copyrightDate,genre</a> |

