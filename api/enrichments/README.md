# Accès aux enrichissements

Toutes les URL suivantes sont accédées via la méthode **HTTP GET**.

**La syntaxe des URL d'accès aux enrichissements est de la forme :**

* URI
  * https://api.istex.fr/document/**{id}/enrichments/{type}**
* Paramètres
  * **{id}** : l'**identifiant** ISTEX du document auquel correspond la notice,
  * **{type}** : **type** de l'enrichissement \(ex : "multicat" pour les catégories [WOS](http://thomsonreuters.com/en/products-services/scholarly-scientific-research/scholarly-search-and-discovery/web-of-science.html) et [Science-Metrix](http://science-metrix.com/)\).
* Code de retour
  * 200 si OK,
  * 404 si le fichier n'est pas trouvé
* Détails

  * La **liste des enrichissements** disponibles pour un objet documentaire est accessible **si on ne précise pas de type**. On obtiendra alors un **JSON** avec cette liste, par exemple :

  ```javascript
  {
    id: "087661D669BF44CA05AA6CE08ADD6399F6A439C4",
    enrichments: {
      multicat: [{
        original: false,
        mimetype: "application/tei+xml",
        extension: "tei",
        uri: "https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/enrichments/multicat"
      }]
    }
  }
  ```



  * Si le document interrogé ne possède **aucun enrichissement**, l'API renverra un message **JSON**, comme :

  ```javascript
  {
    id: "0134F1716893F9118DCE7278BE3333CC40D50461",
    _error: "Il n'existe actuellement aucun résultat pour ce type de data"
  }
  ```

  Pour plus de **détails sur les champs** envoyés en réponse, consultez le chapitre [correspondant](../fields/files.md).  
  
  Il est possible de récupérer **plusieurs types** d'enrichissement en **une seule fois** en séparant les types voulus par des **`,`\(virgules\)**.  
  Dans ce cas, l'API renverra une archive au format **ZIP**.  
  
   Pour **consolider** les enrichissements avec le **TEI** présent dans le fulltext, il suffit d'activer l'option **?consolidate** dans la requête.  
  La consolidation peut se **combiner** avec la récupération de plusieurs types d'enrichissement.

* Types existants

  * **abesAuthors** : auteurs extraits du [Hub de métadonnées de l'ABES](http://www.abes.fr/Projets-en-cours/Hub-de-metadonnees),
  * **abesSubjects** : sujets extraits du [Hub de métadonnées de l'ABES](http://www.abes.fr/Projets-en-cours/Hub-de-metadonnees),
  * **multicat** : catégories [Web Of Science](http://thomsonreuters.com/en/products-services/scholarly-scientific-research/scholarly-search-and-discovery/web-of-science.html) et [Science-Metrix](http://science-metrix.com/) du document,
  * **nb** : catégories déterminées par [méthode bayésienne naïve](https://fr.wikipedia.org/wiki/Classification_na%C3%AFve_bay%C3%A9sienne),
  * **refBibs** : références bibliographiques extraites de [GROBID](https://github.com/kermitt2/grobid),
  * **teeft** : _Term Extraction for English FullText_, extraction sur le fulltext anglais par [étiquetage morpho-syntaxique](https://fr.wikipedia.org/wiki/%C3%89tiquetage_morpho-syntaxique) ,
  * **unitex** : entités nommées détectées par [Unitex-CasSys](http://tln.li.univ-tours.fr/Tln_Istex.html).

* Exemples : 
  * [https://api.istex.fr/document/**0134F1716893F9118DCE7278BE3333CC40D50461/enrichments**](https://api.istex.fr/document/0134F1716893F9118DCE7278BE3333CC40D50461/enrichments)
  * [https://api.istex.fr/document/**087661D669BF44CA05AA6CE08ADD6399F6A439C4/enrichments**](https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/enrichments)
  * [https://api.istex.fr/document/**087661D669BF44CA05AA6CE08ADD6399F6A439C4/enrichments/multicat**](https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/enrichments/multicat)
  * [https://api.istex.fr/document/**087661D669BF44CA05AA6CE08ADD6399F6A439C4/enrichments/multicat?consolidate**](https://api.istex.fr/document/087661D669BF44CA05AA6CE08ADD6399F6A439C4/enrichments/multicat?consolidate)
  * [https://api.istex.fr/document/**0B894D0911C91F04D21BD372C741AAD5C8781B35/enrichments/multicat,refBibs**](https://api.istex.fr/document/0B894D0911C91F04D21BD372C741AAD5C8781B35/enrichments/multicat,refBibs)
  * [https://api.istex.fr/document/**0B894D0911C91F04D21BD372C741AAD5C8781B35/enrichments/multicat,refBibs?consolidate**](https://api.istex.fr/document/0B894D0911C91F04D21BD372C741AAD5C8781B35/enrichments/multicat,refBibs?consolidate)

