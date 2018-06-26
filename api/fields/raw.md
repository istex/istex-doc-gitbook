# Explication sur les champs de type .raw

Les champs de type **string** possèdent tous un sous-champ **raw**. Ce dernier permet d'interroger le champ père, de **manière non segmentée**.

Par exemple, le champ `corpusName` possède un champ `corpusName.raw`. La requête [https://api.istex.fr/document/?q=corpusName:brill-journals&facet=corpusName](https://api.istex.fr/document/?q=corpusName:brill-journals&facet=corpusName) va renvoyer les résultats contenant soit le terme "brill", soit "journals". On voit donc dans le résultat de la facette :

```javascript
  aggregations: {
    corpusName: {
      docCountErrorUpperBound: 0,
      sumOtherDocCount: 0,
      buckets: [
        {
          key: "rsc-journals",
          docCount: 294458
        },
        {
          key: "degruyter-journals",
          docCount: 238361
        },
        {
          key: "brill-journals",
          docCount: 127470
        },
        {
          key: "brill-hacco",
          docCount: 11182
        }
      ],
      keyCount: 4
    }
  }
```

La requête [https://api.istex.fr/document/?q=corpusName.raw:brill-journals&facet=corpusName](https://api.istex.fr/document/?q=corpusName.raw:brill-journals&facet=corpusName) quant à elle renverra les résultats contenant exactement le terme "brill-journals" :

```javascript
  aggregations: {
    corpusName: {
      docCountErrorUpperBound: 0,
      sumOtherDocCount: 0,
      buckets: [
        {
          key: "brill-journals",
          docCount: 127470
        }
      ],
      keyCount: 1
    }
  }
```

Ce champ a été créé pour les facettes, mais peut être utilisé par l'utilisateur. On lui préférera cependant la version classique \(segmentée\), qui permet une recherche plus avancée. Pour obtenir le même résultat précédent, il suffit alors de délimiter le mot avec des guillemets :  [https://api.istex.fr/document/?q=corpusName:"brill-journals"&facet=corpusName](https://api.istex.fr/document/?q=corpusName:"brill-journals"&facet=corpusName)

