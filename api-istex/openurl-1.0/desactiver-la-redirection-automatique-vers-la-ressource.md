# Désactiver la redirection automatique vers la ressource

Avec

```text
&noredirect     = <true|false>  "false" désactive la redirection automatique vers la ressource originale (défaut: false)
```

ou

```text
&directlink     = <true|false>  alias inversé de noredirect (défaut: true)
```

Suite à la demande de nos utilisateurs, nous vous permettons à travers cette variable, d'empêcher la redirection vers la ressource originale. L'API se contentera alors de vous informer si, oui ou non, nous avons identifié le document et elle vous donnera le lien vers le document plein-texte original le cas échéant.

Exemple :

[https://api.istex.fr/document/openurl?rft.au=Richard James Clark&rft.issn=0964-5284&rft.volume=30&rft.issue=4&rft.spage=298&noredirect](https://api.istex.fr/document/openurl?rft.au=Richard%20James%20Clark&rft.issn=0964-5284&rft.volume=30&rft.issue=4&rft.spage=298&noredirect)



