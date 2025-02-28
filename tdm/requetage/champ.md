# Sur quel(s) champ(s) faire son interrogation ?

Les champs interrogeables sont présentés dans la rubrique [**Accès aux données indexées**](../../api/fields/) de la documentation technique de l’API Istex.

Par défaut, sans mention de champ, la recherche est effectuée sur tout le document.

Mais, si on a un critère de recherche large, qui ne porte pas sur un champ particulier, il est préférable de commencer par cibler la recherche sur des champs tels que `title`, `abstract`, `subject.value` afin de ne pas générer trop de bruit.

En effet, si on lance une requête sur l’ensemble du document, sans précision de champ, les mots recherchés peuvent être retrouvés dans les métadonnées ou dans les références bibliographiques, et ramener des résultats moins pertinents.

Dans ce cas, il faut répéter la requête en fonction des différents champs choisis (pas de factorisation de champs possible).

_​**Exemple** : si l'on souhaite rechercher des documents contenant les mots Arctic, Subarctic et ses variantes, à la fois dans le champ_ `title` _et dans le champ_ `abstract`_, il faut répéter la requête, même complexe, pour chacun des champs souhaités._

`q=(title:(Arctic OR Subarctic~1 OR Sub?arctic)) OR (abstract:(Arctic OR Subarctic~1 OR Sub?arctic))`

## Quelques champs particuliers

### _**Langues**_

Le champ `language` permet d'interroger la langue d’un document.

L’interrogation nécessite d’utiliser des codes langues (généralement 3 lettres) issus de la liste normalisée ISO 639, et non le nom complet de la langue ou de la famille de langues.

_​**Exemple :** recherche de documents en **mohawk**​_

`q=language:moh`

Pour savoir quel code langue utiliser, vous pouvez consulter en [**annexe**](../annexes/) la liste des codes interrogeables dans Istex.

NB : La valeur "unknown" est présente lorsqu'aucun code langue ne renseigne ce champ. Le champ `host.language` contient quant à lui systématiquement la valeur "unknown" quand il n'est pas renseigné.

### _**Dates de publication**_

Le champ `publicationDate` permet de retrouver les documents publiés au cours d’une année particulière ou bien d’un intervalle de temps grâce à l’emploi de **crochets ou d’accolades** (voir à ce sujet le paragraphe « Intervalles » ci-dessous).

Quelques types de requêtes :

* _Recherche de documents postérieurs à 2015_ : 2 solutions

`q=publicationDate:{2014 TO *]`

`q=publicationDate:[2015 TO *]`

* _Pour des statistiques concernant des publications sur plusieurs **périodes consécutives**, ne pas oublier d’exclure l’année frontière :_

`q=publicationDate:[1301 TO 1400]`

puis

`q=publicationDate:{1400 TO 1500]`

ou bien

`q=publicationDate:[1401 TO 1500]`

* _Pour récupérer des documents **sans** date de publication :_

`q=NOT publicationDate:[* TO *]`

* _Pour rechercher des documents sans date de publication (champ_ `publicationDate` _vide) mais qui comporteraient une date de copyright, en s’étant assuré au préalable que ce champ est renseigné (champ_ `copyrightDate` _plein) :_

`q=copyrightDate:[* TO *] NOT publicationDate:[* TO *]`

### _**Enrichissements**_

Les enrichissements, produits par les différents outils de TDM développés ou adaptés pour Istex, sont interrogeables.&#x20;

#### _**Catégories scientifiques**_&#x20;

Les catégories Scopus, Science-Metrix, WoS ou Inist donnent accès au contenu scientifique.&#x20;

Pour avoir plus de détails sur ces catégories et connaître celles qui sont présentes dans Istex, vous pouvez consulter en [**annexe**](../annexes/scientific-categories.md) la liste des catégories scientifiques dans Istex.

Quelques types de requêtes :

* _recherche des documents appartenant à la catégorie Scopus "Anthropology"_

`q=categories.scopus:anthropology`

* _recherche des titres de revues de la catégorie Science-Metrix "Information & library sciences"_

`q=categories.scienceMetrix:"library"&facet=host.title&size=0`



#### _**Entités nommées**_&#x20;

Plusieurs types d'entités nommées peuvent être détectés dans les documents Istex. Leur description, ainsi que des exemples, sont fournis sur la page dédiée du site [data.istex](https://named-entity.data.istex.fr/).

‌

**Entités de type "date" :** elles peuvent concerner des années particulières ou des périodes temporelles. Elles s’interrogent au moyen de la balise `date`.

Quelques exemples de requêtes :

* _recherche des documents dans lesquels il est fait mention des années 1850_

`q=namedEntities.unitex.date:1850s`

* _recherche des publications évoquant le XVe siècle_

`q=namedEntities.unitex.date:"XVth century"`

* _recherche des documents citant la période entre les années 1914 et 1918_

`q=namedEntities.unitex.date:"between 1914 and 1918"`

ou bien

`q=namedEntities.unitex.date:"from 1914 to 1918"`

‌

**Entités de type "lieu" :** les noms de lieux sont annotés grâce à deux balises qui distinguent, d’une part les lieux géopolitiques ou administratifs (entité `placeName`), et d’autre part, les lieux comportant une caractéristique géographique (entité `geogName`).

Quelques exemples de requêtes :

* _recherche des documents comportant la mention du monument chinois de la Cité Interdite, à Pékin, ou de la région allemande de Basse Saxe_

`q=namedEntities.unitex.placeName:"forbidden city"`

`q=namedEntities.unitex.placeName:"lower saxony"`‌

* _recherche des documents dans lesquels a été repéré le toponyme "Mont Blanc" ou bien la mer de Kara, ou encore les îles Canaries_

‌`q=namedEntities.unitex.geogName:"mont blanc"`

`q=namedEntities.unitex.geogName:"kara sea"`

`q=namedEntities.unitex.geogName:"canary islands"`

‌‌

**Entités de type "personne" :** les noms de personne sont interrogeables via la balise `persName`.

Exemple de requête :

* _recherche des publications pour lesquels le nom "Staline" a été reconnu_

‌`q=namedEntities.unitex.persName:staline`

‌‌

**Entités de type "organisation" :** dans Istex sont différenciés trois types d’organisations. Ces types sont les suivants :

* l’entité `orgName` fait référence aux noms des organisations en général
* l’entité `orgName type funder` fait référence aux organismes finançant des projets officiels ou aux projets financés
* l’entité `orgName type provider` fait référence aux organismes hébergeant et mettant à disposition des ressources pour des travaux de recherche ou bien à ces ressources elles-mêmes

Quelques exemples de requêtes :

* _recherche des publications citant l’IPCC (c’est-à-dire le GIEC ou groupe d'experts intergouvernemental sur l'évolution du climat)_

‌`q=namedEntities.unitex.orgName:ipcc`

* _recherche des documents mentionnant l’ANR (acronyme et forme développée) comme financeur des recherches relatées_

‌`q=namedEntities.unitex.orgName_funder:ANR`

`q=namedEntities.unitex.orgName_funder:"french national research agency"`

* _recherche des publications exposant les résultats de travaux qui ont bénéficié de la mise à disposition gracieuse de ressources par la "Commission géologique du Canada"_

‌`q=namedEntities.unitex.orgName_provider:"Geological Survey of Canada"`

NB : les organisations de type "fournisseur" ne sont pas encore accessibles sur l'API Istex, mais elles le seront prochainement.&#x20;

‌‌

**Entité de type "URL"** : elles permettent de retrouver les publications signalant l’identifiant d’une page ou d’un site web.

Exemple de requête :

* _recherche des documents dans lesquels est indiqué le lien vers le site du projet international d’évaluation des politiques de lutte antitabac (ITC project)_

‌`q=namedEntities.unitex.ref_url:http://www.itcproject.org`

‌‌

**Entité de type "citation bibliographique"** : il s’agit des mentions du texte pointant vers les références bibliographiques situées en fin de document.

Quelques exemples de requêtes :

* _recherche des publications citant les travaux du paléoclimatologue Jean Jouzel et de ses collaborateurs_

‌`q=namedEntities.unitex.ref_bibl:"jouzel et al"`

* _recherche des documents mentionnant l’article de 1986 des physiciens Bednorz et Müller révolutionnant la recherche sur la supraconductivité haute température_

‌`q=namedEntities.unitex.ref_bibl:"Bednorz and Müller, 1986"`

‌‌

**Entité de type "référence bibliographique"** : il s’agit des références apparaissant en totalité dans le corps du texte qui ne renvoient pas vers les références bibliographiques de fin de texte ou de bas de page. Ce cas de figure se rencontre parfois dans certaines publications. La balise à utiliser est `bibl`.

Exemple de requête :

* _recherche des documents comportant la mention de l'article sur les arrêts cardiaques peropératoires de J. P. Morray publié en 1996_&#x20;

‌`q=namedEntities.unitex.bibl:"Morray JP. Pediatric perioperative cardiac arrest registry: an update. A.S.A. Newsletter 1996 ; 60 : 26-8"`

NB : ce type d’entités n'est pas encore accessible sur l'API Istex, mais elle le sera prochainement.



#### _Indexation **Teeft**_

Les termes représentatifs du texte intégral des documents de langue anglaise ont été extraits grâce à l'outil Rd-teeft. Le détail de cet outil est donné sur la page du site [data.istex](https://enrichment-process.data.istex.fr/ark:/67375/R0H-R25KK4KZ-Q) qui lui est consacrée.

Ces termes offrent un moyen supplémentaire de cerner un sujet.

Exemple de requête :

* _recherche des documents contenant les unitermes ou mots-composés avec music, musicology, musical, etc._

`q=keywords.teeft:"music*"`
