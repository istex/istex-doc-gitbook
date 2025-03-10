# Accès aux fulltext

Toutes les URL suivantes sont accédées via la méthode **HTTP GET**.

**La syntaxe des URL d'accès aux fulltext est de la forme :**

* URI
  * `https://api.istex.fr/document/{id}/fulltext/{ext}`
* Paramètres
  * **{id}** : l'**identifiant** Istex du document auquel correspond la notice,
  * **{ext}** : **extension** du fichier souhaité (ex : "xml").
* Code de retour
  * 200 si OK,
  * 404 si le fichier n'est pas trouvé
*   Détails

    * La **liste des formats** disponibles pour un objet documentaire est accessible **si on ne précise pas d'extension**. On obtiendra alors un **JSON** avec la liste des fichiers disponibles, par exemple :

    ```javascript
    {
      id: "55420CDEEA0F6538E215A511C72E2E5E57570138",
      fulltext: [
        {
          original: true,
          mimetype: "application/pdf",
          extension: "pdf",
          uri: "https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/fulltext/pdf"
        },
        {
          original: false,
          mimetype: "application/tei+xml",
          extension: "tei",
          uri: "https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/fulltext/tei"
        }
      ]
    }
    ```

    Pour plus de **détails sur les champs** envoyés en réponse, consultez le chapitre [correspondant](../fields/files.md).\
    Il est possible de demander directement le(s) **document(s) fourni(s) par l'éditeur** en précisant comme extension "**original**".\
    Si **plusieurs documents d'un format** (ex: plusieurs pages TIFF) existent, ils sont renvoyés dans une archive au format **ZIP**. \
    Le format "**cleaned**" est un format **textuel brut** duquel ont été retirés les métadonnées, références bibliographiques, contenus des tableaux, des images et formules. Ce format ne contient que le contenu textuel des paragraphes du corps du texte.
* Formats existants
  * **PDF**, **TEI**, **TXT**, **CLEANED**, **ZIP**, **TIFF**.
* Exemple
  * [https://api.istex.fr/document/**55420CDEEA0F6538E215A511C72E2E5E57570138/fulltext**](https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/fulltext)&#x20;
  * [https://api.istex.fr/document/**55420CDEEA0F6538E215A511C72E2E5E57570138/fulltext/pdf**](https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/fulltext/pdf)&#x20;
  * [https://api.istex.fr/document/**55420CDEEA0F6538E215A511C72E2E5E57570138/fulltext/original**](https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138/fulltext/original)
