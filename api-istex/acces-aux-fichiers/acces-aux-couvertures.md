# Accès aux couvertures

Toutes les URL suivantes sont accédées via la méthode **HTTP GET**.

Les URL d'accès aux **couvertures** sont de la forme :

| Syntaxe |  |
| --- | --- |
| URI | [https://api.istex.fr/document/{id}/covers/{ext}](https://api.istex.fr/document/{id}/covers/{ext}) |
| Paramètres | - {id}: l'**identifiant** ISTEX du document auquel correspond la notice, - {ext} : **extension** du fichier souhaité \(ex : "gif"\). |
| Code de retour | - 200 si OK,  - 404 si le fichier n'est pas trouvé |
| Détails | La **liste des formats** disponibles pour un objet documentaire est accessible **si on ne précise pas d'extension**. On obtiendra alors un **JSON** avec la liste des fichiers disponibles, par exemple :  Si le document interrogé ne possède **aucune couverture**, l'API renverra un message **JSON**, comme :Pour plus de **détails sur les champs** envoyés en réponse, consultez le chapitre [correspondant](https://github.com/istex/istex-web-doc/tree/c656262d865294a0ee0e11d436ebd7e1b78a4bbf/fields/README.md#champs-dacces-aux-fichiers-lies-au-document).  Si **plusieurs documents d'un format** \(ex: plusieurs JPEG\) existent, ils sont renvoyés dans une archive au format **ZIP**. |
| Formats existants | - **PDF**, **GIF**, **JPEG**. |
| Exemple | [https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/covers](https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/covers) [https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/covers](https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/covers) [https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/covers/gif](https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/covers/gif) |

