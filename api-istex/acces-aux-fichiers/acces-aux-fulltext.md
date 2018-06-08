# Accès aux fulltext

Toutes les URL suivantes sont accédées via la méthode **HTTP GET**.

Les URL d'accès aux **fulltext** sont de la forme :

| Syntaxe |  |
| --- | --- |
| URI | [https://api.istex.fr/document/{id}/fulltext/{ext}](https://api.istex.fr/document/{id}/fulltext/{ext}) |
| Paramètres | - {id} : l'**identifiant** ISTEX du document auquel correspond la notice, - {ext} : **extension** du fichier souhaité \(ex : "pdf"\). |
| Code de retour | - 200 si OK,  - 404 si le fichier n'est pas trouvé |
| Détails | La **liste des formats** disponibles pour un objet documentaire est accessible **si on ne précise pas d'extension**. On obtiendra alors un **JSON** avec la liste des fichiers disponibles, par exemple :  Pour plus de **détails sur les champs** envoyés en réponse, consultez le chapitre \[correspondant\]\[fields\].  Il est possible de demander directement le\(s\) **document\(s\) fourni\(s\) par l'éditeur** en précisant comme extension "**original**".  Si **plusieurs documents d'un format** \(ex: plusieurs pages TIFF\) existent, ils sont renvoyés dans une archive au format **ZIP**. |
| Formats existants | - **PDF**, **TEI**, **TXT**, **ZIP**, **TIFF**. |
| Exemple | [https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/fulltext](https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/fulltext) [https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/fulltext/pdf](https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/fulltext/pdf) [https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/fulltext/original](https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/fulltext/original) |

