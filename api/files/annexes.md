# Accès aux annexes

Toutes les URL suivantes sont accédées via la méthode **HTTP GET**.

**La syntaxe des URL d'accès aux annexes est de la forme :**

* URI
  * `https://api.istex.fr/document/{id}/annexes/{ext}`
* Paramètres
  * {**id}** : l'**identifiant** Istex du document auquel correspond la notice,
  * **{ext}** : **extension** du fichier souhaité (ex : "pdf").
* Code de retour
  * 200 si OK,
  * 404 si le fichier n'est pas trouvé.
*   Détails

    * La **liste des formats** disponibles pour un objet documentaire est accessible **si on ne précise pas d'extension**. On obtiendra alors un **JSON** avec la liste des fichiers disponibles, par exemple :

    ```javascript
    {
      id: "087661D669BF44CA05AA6CE08ADD6399F6A439C4",
      annexes: [
        {
          original: true,
          mimetype: "application/pdf",
          extension: "pdf",
          uri: "https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/annexes/pdf"
        },
        {
          original: true,
          mimetype: "image/jpeg",
          extension: "jpeg",
          uri: "https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/annexes/jpeg"
        }
      ]
    }
    ```
*   Si le document interrogé ne possède **aucun annexe**, l'API renverra un message **JSON**, comme :

    ```javascript
    {
    id: "55420CDEEA0F6538E215A511C72E2E5E57570138",
    _error: "Il n'existe actuellement aucun résultat pour ce type de data"
    }
    ```

    Pour plus de **détails sur les champs** envoyés en réponse, consultez le chapitre [correspondant](../fields/files.md).

    Si **plusieurs documents d'un format** (ex: plusieurs pages TIFF) existent, ils sont renvoyés dans une archive au format **ZIP**. 
* Formats existants
  * **PDF**, **JPEG**, **QT**, **PTT**, **XLS**, **AVI**, **XML**, **GIF**, **WMV**.
* Exemples
  * [https://api.istex.fr/document/**55420CDEEA0F6538E215A511C72E2E5E57570138/annexes**](https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/annexes)
  * [https://api.istex.fr/document/**087661D669BF44CA05AA6CE08ADD6399F6A439C4/annexes**](https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/annexes)
  * [https://api.istex.fr/document/**087661D669BF44CA05AA6CE08ADD6399F6A439C4/annexes/pdf**](https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/annexes/pdf)
