# Implémentation du standard Z39.88-2004

Ce standard est déjà en grande partie implémenté dans l'API, mais il se peut que certains types de métadonnées ne soient pas encore pris en charge. Si cela s'avère utile ou nécessaire, nous ferons évoluer le résolveur pour qu'il respecte de plus en plus le standard tel qu'il est défini officiellement.

Voici la liste des descripteurs d'identification disponibles \(rft\_id\), qui permettent d'identifier une ressource unique :

```text
&rft_id      = info:doi/<value>   Recherche sur un DOI
&rft_pii     = info:pii/<value>   Recherche sur un PII (identifiants spécifiques, utilisés notamment chez Elsevier et IOP)
&rft_pmid    = info:pmid/<value>  Recherche sur un PMID (PubMed ID, utilisés notamment chez BMJ et OUP)
```

Exemples :

 [https://api.istex.fr/document/openurl?rft\_id=info:doi/10.1136/acupmed-2012-010183](https://api.istex.fr/document/openurl?rft_id=info:doi/10.1136/acupmed-2012-010183)

[ https://api.istex.fr/document/openurl?rft\_id=info:pii/S0143-0807\(98\)90774-7](https://api.istex.fr/document/openurl?rft_id=info:pii/S0143-0807%2898%2990774-7)

{% hint style="danger" %}
 **Il doit s'agir du DOI d'une ressource** _**unique**_ **\(article ou chapitre\). Le DOI d'un livre ou d'une revue ne fonctionneront pas. Si vous ne possédez que le DOI du livre ou de la revue, utilisez les descripteurs de méta-données jdoi et bdoi comme décrits ci-dessous.**
{% endhint %}

Et les descripteurs de meta-données :

```text
&rft.atitle = <value>   Titre de l'article
&rft.jtitle = <value>   Titre du journal
&rft.btitle = <value>   Titre du Livre
&rft.jdoi   = <value>   DOI du journal
&rft.bdoi   = <value>   DOI du Livre
&rft.issn   = <value>   ISSN
&rft.isbn   = <value>   ISBN
&rft.date   = <value>   Date de publication
&rft.volume = <value>   Numéro de volume du journal 
&rft.issue  = <value>   Numéro de parution du journal
&rft.spage  = <value>   Page de Début
&rft.epage  = <value>   Page de fin
&rft.aulast = <value>   Nom de famille du premier auteur
&rft.aufirst= <value>   Prénom du premier auteur
&rft.auinit = <value>   Initiales de l'auteur
&rft.auinitm= <value>   Initiale du second prénom de l'auteur
&rft.au     = <value>   Nom complet des autres auteurs (ex : "Harry S. Truman"), si plusieurs auteurs secondaires : "&rft.ut=Second,%20A&rft.ua=Third,%20A"
```

Vos critères doivent être suffisamment précis pour identifier une unique ressource. S'ils ne sont pas suffisamment exhaustifs, le résolveur vous retournera un message de notification et un code HTTP 300. Le DOI d'un article ou d'un chapitre permettra d'identifier quasi-systématiquement une ressource unique, d'autres combinaisons sont possibles, comme "ISSN+Volume+N° Issue+Auteur+Page du début de l'article" qui possèdent également un taux satisfaisant d'identification.

Exemple :





```text
https://api.istex.fr/document/openurl?rft.au=Richard James Clark&rft.issn=0964-5284&rft.volume=30&rft.issue=4&rft.spage=298
```

&lt;/a&gt;

Exemple d'un manque d'exhaustivité :

```text
https://api.istex.fr/document/openurl?rft.au=Richard
```

&lt;/a&gt;

