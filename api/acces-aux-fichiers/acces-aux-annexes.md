# Accès aux annexes

Toutes les URL suivantes sont accédées via la méthode **HTTP GET**.

Les URL d'accès aux **annexes** sont de la forme :

| Syntaxe | |
|------------ | ------------- |
| URI | https&#58;//api.istex.fr/document/{id}/annexes/{ext}|
| Paramètres | - {id} : l'**identifiant** ISTEX du document auquel correspond la notice,<br>- {ext} : **extension** du fichier souhaité (ex : "pdf"). |
| Code de retour | - 200 si OK, <br>- 404 si le fichier n'est pas trouvé|
| Détails | La **liste des formats** disponibles pour un objet documentaire est accessible **si on ne précise pas d'extension**.<br>On obtiendra alors un **JSON** avec la liste des fichiers disponibles, par exemple : <br><pre class="json">{<br>  id: "087661D669BF44CA05AA6CE08ADD6399F6A439C4",<br>  annexes: [<br>    {<br>      original: true,<br>      mimetype: "application/pdf",<br>      extension: "pdf",<br>      uri: "https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/annexes/pdf"<br>    },<br>    {<br>      original: true,<br>      mimetype: "image/jpeg",<br>      extension: "jpeg",<br>      uri: "https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/annexes/jpeg"<br>    }<br>  ]<br>}</pre>Si le document interrogé ne possède **aucun annexe**, l'API renverra un message **JSON**, comme :<pre class="json">{<br>  id: "55420CDEEA0F6538E215A511C72E2E5E57570138",<br>  _error: "Il n'existe actuellement aucun résultat pour ce type de data"<br>}</pre>Pour plus de **détails sur les champs** envoyés en réponse, consultez le chapitre [correspondant][fields].<br><br>Si **plusieurs documents d'un format** (ex: plusieurs JPEG) existent, ils sont renvoyés dans une archive au format **ZIP**.|
| Formats existants | - **PDF**, **JPEG**, **QT**, **PTT**, **XLS**, **AVI**, **XML**, **GIF**, **WMV**. |
| Exemple | <a href="https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/annexes">https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/annexes</a><br><a href="https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/annexes">https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/annexes</a><br><a href="https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/annexes/pdf">https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/annexes/pdf</a>

