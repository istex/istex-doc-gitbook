# Syntaxe

**La syntaxe est la suivante :**

* URI
  * `https://api.istex.fr/document/?q={query}&facet={liste des champs}`
* Explications
  * Cette option permet de sélectionner une ou des facettes basées sur les champs disponibles.
  * La liste des champs est séparée par des **, \(virgules\)**.

{% hint style="danger" %}
les facettes ignorent les résultats qui ne possèdent pas le champ demandé. Par exemple, une facette sur le champ "copyrightDate" ne prendra pas en compte les résultats de la requête sans "copyrightDate" renseig- La liste des facettes souhaitées peut être renseignée de deux manières :  
  -   en utilisant **le nom du champ selon le mapping**,  
  -   en utilisant **les alias fournis**  


La liste des **options disponibles** diffère selon le type du champ interrogé.
{% endhint %}

* Paramètres
  * &facet : l'option permettant de définir les facettes à effectuer,
  * {liste des champs} : la liste en question, séparée par des virgules.
* Code de retour
  * 200 si OK,
  * 500 en cas de problème \(dans ce cas, contacter [api-bug@listes.istex.fr](mailto:api-bug@listes.istex.fr)\)



