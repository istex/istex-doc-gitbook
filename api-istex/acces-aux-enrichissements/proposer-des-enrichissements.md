# Proposer des enrichissements

Si vous avez une **idée d'enrichissement** et que vous souhaitez l'intégrer dans l'API, vous pouvez nous **contacter** à [api-team@listes.istex.fr](mailto:api-team@listes.istex.fr).

L'enrichissement en question se doit d'être un fichier **TEI** de la forme :

```text

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

```

**\(1\)** : TEI sont les balises contenant l'enrichissement en question. L'arborescence se doit d'être exacte pour pouvoir intégrer le TEI de base.

**\(2\)** : teiHeader est la balise contenant les informations pouvant décrire le type d'enrichissement _\(title\)_, un descriptif sur ce dernier _\(resp\)_, les personnes liées _\(name\)_, les corpus concernés _\(extent\)_ ou encore les différentes dates de mise à jour _\(change\)_

Les TEI doivent **impérativement** contenir l'identifiant ISTEX sous la forme **istex-{id}** pour permettre le recoupement avec les données actuelles.

Exemple :



