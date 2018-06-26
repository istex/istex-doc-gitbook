# Métadonnées pour l'intégration du bouton ISTEX

L'[extension pour navigateur ISTEX](../../usage-documentaire-distex/bouton-istex.md) permet de venir afficher des boutons ISTEX

![](../../.gitbook/assets/istex-button%20%281%29.png)

au sein de vos pages web lorsque des références bibliographiques y sont trouvées et qu'elles correspondent à des ressources présentes dans la plateforme ISTEX. Pour que cette technique fonctionne cela nécessite d'[installer dans son navigateur web l'extension ISTEX](../../usage-documentaire-distex/bouton-istex.md).

Ces références bibliographiques sont le plus souvent des identifiants forts de documents comme des DOI ou des PMID mais elle peuvent également être des OpenURL que le bouton ISTEX sera aussi capable de repérer. Ces métadonnées peuvent apparaitre dans la page HTML sous différentes formes.

Par exemple par la présence d'une ancre HTML :

```markup
<a href="http://dx.doi.org/10.1016/S0248-8663(00)00250-2">Accès à l'article</a>
```

Ou encore avec un PMID qui sera détecté dans le HTML \(cf [exemple en bas de cette page](https://fr.wikipedia.org/wiki/Espace_dodécaédrique_de_Poincaré)\) :

```markup
<a rel="nofollow" href="http://www.ncbi.nlm.nih.gov/pubmed/14534579">
14534579
</a>
```

Ou bien par la présence d'un DOI directement dans le texte d'un paragraphe :

```markup
<p>
  Texte de mon article citant un DOI : 10.1016/S0248-8663(00)00250-2
</p>
```

Et également par la présence du DOI directement dans une [balise COinS](https://www.zotero.org/support/dev/exposing_metadata/coins) :

```markup
<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;id=doi:10.1016/S0987-7053(05)80281-3"></span>
```

Et un peu plus complexe avec un set de métadonnées complet exprimé sous la forme d'un COinS OpenURL \(cf [exemple en bas de cette page](https://fr.wikipedia.org/wiki/Espace_dodécaédrique_de_Poincaré)\) :

```markup
<span class="Z3988" title="ctx_ver=Z39.88-2004&amp;rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal&amp;rft.genre=article&amp;rft.atitle=Dodecahedral+space+topology+as+an+explanation+for+weak+wide-angle+temperature+correlations+in+the+cosmic+microwave+background&amp;rft.jtitle=Nature&amp;rft.issue=6958&amp;rft.aulast=Luminet&amp;rft.aufirst=Jean-Pierre&amp;rft.au=Jeff+Weeks&amp;rft.date=2003-10-09&amp;rft.volume=425&amp;rft.pages=593%E2%80%93595&amp;rft_id=info%3Adoi%2F10.1038%2Fnature01944&amp;rft_id=info%3Apmid%2F14534579&amp;rfr_id=info%3Asid%2Ffr.wikipedia.org%3AEspace+dod%C3%A9ca%C3%A9drique+de+Poincar%C3%A9" id="COinS_47149"></span>
```

Ces deux dernière manières de procéder avec COinS couplé à une balise span vide permettent d'afficher le bouton ISTEX dynamiquement à cet emplacement dans la page web et seulement lorsque la ressource ISTEX est disponible.

Toutes ces techniques sont des bonnes manières de procéder surtout lorsque vous avez des listes d'articles à présenter. C'est souvent le cas lorsqu'un portail documentaire ou une base de données bibliographique affiche une liste de résultats suite à une recherche.

Donc si vous voulez que des 

![](../../.gitbook/assets/istex-button.png)

apparaissent automatiquement dans vos listes de résultats **pensez à y indiquer d'une façon ou d'une autre le DOI ou le PMID des ressources en question**.

