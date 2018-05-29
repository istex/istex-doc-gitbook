# Accès aux métadonnées

Toutes les URL suivantes sont accédées via la méthode **HTTP GET**.

Les URL d'accès aux **métadonnées** sont de la forme :

| Syntaxe | |
|------------ | ------------- |
| URI | https&#58;//api.istex.fr/document/{id}/metadata/{ext} |
| Paramètres | - {id} : l'**identifiant** ISTEX du document auquel correspond la notice,<br>- {ext} : **extension** du fichier souhaité (ex : "xml"). |
| Code de retour | - 200 si OK, <br>- 404 si le fichier n'est pas trouvé|
| Détails | La **liste des formats** disponibles pour un objet documentaire est accessible **si on ne précise pas d'extension**.<br>On obtiendra alors un **JSON** avec la liste des fichiers disponibles, par exemple : <br><pre class="json">{<br>  id: "55420CDEEA0F6538E215A511C72E2E5E57570138",<br>  metadata: [<br>    {<br>      original: true,<br>      mimetype: "application/xml",<br>      extension: "xml",<br>      uri: "https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/metadata/xml"<br>    },<br>    {<br>      original: false,<br>      mimetype: "application/mods+xml",<br>      extension: "mods",<br>      uri: "https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/metadata/mods"<br>    }<br>  ]<br>}</pre>Pour plus de **détails sur les champs** envoyés en réponse, consultez le chapitre [correspondant][fields].<br><br>Il est possible de demander directement la **notice fournie par l'éditeur** en précisant comme extension "**original**".|
| Formats existants | - **XML**, **MODS**. |
| Exemple | <a href="https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/metadata">https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/metadata</a><br><a href="https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/metadata/mods">https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/metadata/mods</a><br><a href="https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/metadata/original">https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/metadata/original</a>

