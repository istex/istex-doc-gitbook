# Fonction "Extract"

Il s'agit d'une fonction du moteur de recherche de l'API ISTEX permettant d’extraire un corpus correspondant à des critères de recherche. Celle-ci s’utilise directement dans l’URL de requêtage sur l’API.

* **Avantages :**
  * simple à utiliser, elle ne nécessite aucune installation
  * elle peut être utilisée en dehors de l’Inist car gère l’authentification par la fédération d’identité
  * elle offre également le téléchargement des annexes et couvertures disponibles. 
* **Inconvénients :** 
  * les corpus ne peuvent être extraits actuellement que dans la limite de 10 000 documents
  * l'extraction des annexes et des enrichissements n'est actuellement pas utilisable, mais le fichier JSON extrait par défaut reprend la totalité des enrichissements disponibles d'un document numérique donné.
* **Mode d'emploi :** cette fonction et la syntaxe requise pour son utilisation sont décrites dans la rubrique **"**[**Extraction**](../../api/search/extract-feature.md)**"** de la documentation technique ISTEX.
* **Astuces :**
  * pour que la fonction `extract` soit opérationnelle, il faut la faire suivre obligatoirement par le signe "=" et une valeur quelconque, mais seuls les fichiers JSON sont extraits. Indiquer un \(ou plusieurs\) type de fichiers pour obtenir leur extraction.
    * **Exemple :** moissonnage des métadonnées au format JSON pour les documents contenant l'expression "by draconis stars" dans le résumé

      [https://api.istex.fr/document/?q=abstract:"by draconis stars"&extract=lhjd](https://api.istex.fr/document/?q=abstract:"by%20draconis%20stars"&extract=lhjd)
  * sans indication de format, tous les formats disponibles pour un type de fichiers sont extraits
  * la syntaxe pour extraire les enrichissements ne comporte pas de "s" \(_enrichment_\).
  * indiquer une taille de corpus au moins égale au nombre de documents à extraire. Sans cette précision, 5 documents sont extraits par défaut.
    * **\*Exemple :** moissonnage du texte intégral au format pdf des 18 documents contenant le terme Groenland dans le titre\*

      [_https://api.istex.fr/document/?q=title:groenland&size=20&extract=fulltext\[pdf\]_](https://api.istex.fr/document/?q=title:groenland&size=20&extract=fulltext[pdf])

