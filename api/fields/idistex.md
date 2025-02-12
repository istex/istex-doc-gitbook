# Accès à un document via son id

Toutes les URL suivantes sont accédées via la méthode **HTTP GET**.

Pour **récupérer la liste des champs et formats** (métadonnées, fulltext, annexes, covers, enrichments) disponibles **pour un document**, il est possible d'effectuer une requête sous la forme :

| Syntaxe        |                                                                                                                                                      |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| URI            | `https://api.istex.fr/document/{id}`                                                                                                                 |
| Paramètres     | - **{id}** : l'identifiant Istex du document auquel correspond la notice.                                                                            |
| Code de retour | - 200 si OK,  - 404 si la notice n'est pas trouvée                                                                                                   |
| Exemple        | [https://api.istex.fr/document/**55420CDEEA0F6538E215A511C72E2E5E57570138**](https://api.istex.fr/document/55420CDEEA0F6538E215A511C72E2E5E57570138) |
