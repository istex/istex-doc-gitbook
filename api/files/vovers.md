# Accès aux couvertures

Toutes les URL suivantes sont accédées via la méthode **HTTP GET**.

**La syntaxe des URL d'accès aux couvertures est de la forme :**

* URI
  * `https://api.istex.fr/document/{id}/covers/{ext}`
* Paramètres
  * **{id}** : l'**identifiant** Istex du document auquel correspond la notice,
  * **{ext}** : **extension** du fichier souhaité (ex : "gif").
* Code de retour
  * 200 si OK,
  * 404 si le fichier n'est pas trouvé
*   Détails

    * La **liste des formats** disponibles pour un objet documentaire est accessible **si on ne précise pas d'extension**. On obtiendra alors un **JSON** avec la liste des fichiers disponibles, par exemple :

    ```javascript
    {
      id: "087661D669BF44CA05AA6CE08ADD6399F6A439C4",
      covers: [
        {
          original: true,
          mimetype: "image/gif",
          extension: "gif",
          uri: "https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/covers/gif"
        }
      ]
    }
    ```

    Si le document interrogé ne possède **aucune couverture**, l'API renverra un message **JSON**, comme :

    ```javascript
    {
      id: "55420CDEEA0F6538E215A511C72E2E5E57570138",
      _error: "Il n'existe actuellement aucun résultat pour ce type de data"
    }
    ```

    Pour plus de **détails sur les champs** envoyés en réponse, consultez le chapitre [correspondant](../fields/files.md).

    Si **plusieurs documents d'un format** (ex: plusieurs JPEG) existent, ils sont renvoyés dans une archive au format **ZIP**. 
* Formats existants
  * **PDF**, **GIF**, **JPEG**.
* Exemple
  * [https://api.istex.fr/document/**55420CDEEA0F6538E215A511C72E2E5E57570138/covers**](https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/covers) [https://api.istex.fr/document/**087661D669BF44CA05AA6CE08ADD6399F6A439C4/covers**](https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/covers) [https://api.istex.fr/document/**087661D669BF44CA05AA6CE08ADD6399F6A439C4/covers/gif**](https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/covers/gif)
