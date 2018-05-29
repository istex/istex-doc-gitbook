# Proposer des enrichissements

Si vous avez une **idée d'enrichissement** et que vous souhaitez l'intégrer dans l'API, vous pouvez nous **contacter** à <api-team@listes.istex.fr>.

L'enrichissement en question se doit d'être un fichier **TEI** de la forme :

<pre class="json">
document
  └── teiCorpus
          └── TEI                             (1)
              └── standOff
                  ├──   teiHeader             (2)
                  │       ├── fileDesc
                  │   │   └── titleStmt
                  │   │       ├── title
                  │   │       ├── respStmt
                  │   │       │   ├── resp
                  │   │       │   └── name
                  │   │       └── extent
                  │   └── revisionDesc
                  │       └── change
                  └ ...

</pre>

**(1)** : TEI sont les balises contenant l'enrichissement en question. L'arborescence se doit d'être exacte pour pouvoir intégrer le TEI de base.

**(2)** : teiHeader est la balise contenant les informations pouvant décrire le type d'enrichissement *(title)*, un descriptif sur ce dernier *(resp)*, les personnes liées *(name)*, les corpus concernés *(extent)* ou encore les différentes dates de mise à jour *(change)*

Les TEI doivent **impérativement** contenir l'identifiant ISTEX sous la forme **istex-{id}** pour permettre le recoupement avec les données actuelles.

Exemple :

![Exemple de TEI d'enrichissement valable](img/teiEnrich.png)

[fields]: /fields/#champs-dacces-aux-fichiers-lies-au-document
[GROBID]: https://github.com/kermitt2/grobid
[WOS]: http://thomsonreuters.com/en/products-services/scholarly-scientific-research/scholarly-search-and-discovery/web-of-science.html
[scienceMetrix]: http://science-metrix.com/
[abesHub]: http://www.abes.fr/Projets-en-cours/Hub-de-metadonnees
[nb]: https://fr.wikipedia.org/wiki/Classification_na%C3%AFve_bay%C3%A9sienne
[unitex]: http://tln.li.univ-tours.fr/Tln_Istex.html
[POS]: https://fr.wikipedia.org/wiki/%C3%89tiquetage_morpho-syntaxique

