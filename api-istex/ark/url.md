# URL d'accès dans l'API

Dans une URL d'accès de type ARK, l'utilisation des qualificatifs permet de sélectionner une typologie et/ou un format pour un document donné. Selon le niveau de précision de l'URL, l'API renverra :

* soit le document demandé dans le format sélectionné
* soit la liste des formats disponibles pour la typologie sélectionnée
* soit la liste des typologies et formats disponibles pour le document sélectionné

## Liste des typologies et formats disponibles

| Syntaxe |  |
| --- | --- |
| URI | https://api.istex.fr/67375/**{nom-ark}** |
| Paramètres |  **{nom-ark}** : le **nom ark** ISTEX du document auquel correspond la notice \(ex : GT4-FJLCPBW9-Q\) |
| Code de retour | **200 si OK**,  **400 si le nom ark est invalid**e \(nombre de caractère incorrect ou caractère de contrôle incorrect, par exemple\)  et  **404 si le nom ark n'est pas trouvé** dans la plateforme ISTEX |
| Exemple | [https://api.istex.fr/ark:/67375/GT4-FJLCPBW9-Q](https://api.istex.fr/ark:/67375/GT4-FJLCPBW9-Q) |

Format de la réponse :

```javascript
{

    "_comment": "Objet documentaire identifié par l'indentifiant ARK ark:/67375/GT4-FJLCPBW9-Q. Liste des typologies et formats disponibles correspondant",
    "idIstex": "087661D669BF44CA05AA6CE08ADD6399F6A439C4",
    "arkIstex": "67375/GT4-FJLCPBW9-Q",
    "title": "Orphan nuclear receptor TLX activates Wnt/-catenin signalling to stimulate neural stem cell proliferation and self-renewal",
    "typologies": {
        "bundle": [
            {
                "format": "zip",
                "mimetype": "application/zip",
                "uri": "https://api.istex.fr/ark:/67375/GT4-FJLCPBW9-Q/bundle.zip"
            }
        ],
        "fulltext": [
            {
                "format": "pdf",
                "mimetype": "application/pdf",
                "uri": "https://api.istex.fr/ark:/67375/GT4-FJLCPBW9-Q/fulltext.pdf"
            },
            {
                "format": "tei",
                "mimetype": "application/tei+xml",
                "uri": "https://api.istex.fr/ark:/67375/GT4-FJLCPBW9-Q/fulltext.tei"
            },
            {
                "format": "txt",
                "mimetype": "text/plain",
                "uri": "https://api.istex.fr/ark:/67375/GT4-FJLCPBW9-Q/fulltext.txt"
            }
        ],
        "record": [
            {
                "format": "json",
                "mimetype": "application/json",
                "uri": "https://api.istex.fr/ark:/67375/GT4-FJLCPBW9-Q/record.json"
            },
            {
                "format": "mods",
                "mimetype": "application/mods+xml",
                "uri": "https://api.istex.fr/ark:/67375/GT4-FJLCPBW9-Q/record.mods"
            },
            {
                "format": "xml",
                "mimetype": "application/xml",
                "uri": "https://api.istex.fr/ark:/67375/GT4-FJLCPBW9-Q/record.xml"
            }
        ]
    }

}
```

## Liste des formats disponibles pour une typologie donnée

| Syntaxe |  |
| --- | --- |
| URI | https://api.istex.fr/67375/**{nom-ark}/{typologie}** |
| Paramètres |  **{nom-ark}** : le **nom ark** ISTEX du document auquel correspond la notice \(ex : GT4-FJLCPBW9-Q\) - {typologie} : la typologie demandée |
| Code de retour | **200 si OK**,  **400 si le nom ark est invalide** \(nombre de caractère incorrect ou caractère de contrôle incorrect, par exemple\) et  **404 si la typologie demandée n'est pas disponible** ou si le nom ark n'est pas trouvé dans la plateforme ISTEX |
| Exemple | [https://api.istex.fr/ark:/67375/**GT4-FJLCPBW9-Q/record**](https://api.istex.fr/ark:/67375/GT4-FJLCPBW9-Q/record) |

Format de la réponse :

```javascript
{

    "_comment": "Objet documentaire identifié par l'indentifiant ARK ark:/67375/GT4-FJLCPBW9-Q. Liste des formats disponibles correspondant à la typologie 'record' pour ce document ",
    "idIstex": "087661D669BF44CA05AA6CE08ADD6399F6A439C4",
    "arkIstex": "ark:/67375/GT4-FJLCPBW9-Q",
    "title": "Orphan nuclear receptor TLX activates Wnt/-catenin signalling to stimulate neural stem cell proliferation and self-renewal",
    "formats": [
        {
            "format": "json",
            "mimetype": "application/json",
            "uri": "https://api-dev.istex.fr/ark:/67375/GT4-FJLCPBW9-Q/record.json"
        },
        {
            "format": "mods",
            "mimetype": "application/mods+xml",
            "uri": "https://api-dev.istex.fr/ark:/67375/GT4-FJLCPBW9-Q/record.mods"
        },
        {
            "format": "xml",
            "mimetype": "application/xml",
            "uri": "https://api-dev.istex.fr/ark:/67375/GT4-FJLCPBW9-Q/record.xml"
        }
    ]

}
```

## Accès direct au format demandé

| Syntaxe |  |
| --- | --- |
| Paramètres | **{nom-ark}** : le **nom ark** ISTEX du document auquel correspond la notice \(ex : GT4-FJLCPBW9-Q\) , **{typologie}**: la typologie demandée  et  **{format}** : le format demandé |
| Code de retour | **200 si OK**, **400 si le nom ark est invalide** \(nombre de caractère incorrect ou caractère de contrôle incorrect, par exemple\) et **404 si le format ou la typologie demandé n'est pas disponible ou si le nom ark n'est pas trouvé** dans la plateforme ISTEX |
| Exemple | [https://api.istex.fr/ark:/67375/**GT4-FJLCPBW9-Q/record.json**](https://api.istex.fr/ark:/67375/GT4-FJLCPBW9-Q/record.json) |

En retour, l'API renverra le document dans le format souhaité dans le corps de la réponse.

