# Revue de sommaire

<figure><img src="../.gitbook/assets/revue de sommaire.PNG" alt=""><figcaption></figcaption></figure>

La _Revue de sommaire_ a pour but de :

* proposer des pages **dédiées pour chaque revue Istex** en présentant un accès par année - volume - numéro - titre du document, jusqu'à l'accès au plein texte disponible sur la plateforme Istex
* proposer aux établissements **une vision "revue de sommaire"**, pour les titres présents dans la plateforme Istex, intégrable dans leur portail documentaire
* proposer une liste de titres dont les **articles citent l’ouvrage/la revue** recherchés
* afficher **la liste contractuelle des titres** des licences nationales pour les corpus chargés sur la plateforme Istex
* présenter **un réel état de collection** des ressources présentes sur la plateforme Istex
* &#x20;proposer un **export au format KBART-Istex,** des ressources et de l’état de collection disponible dans la plateforme Istex
  * Un fichier KBART-Istex global, avec mise à jour automatique, est disponible en page d'accueil&#x20;
  * Un fichier KBART-Istex par corpus, année... est à exporter au niveau de la page recherche

&#x20;&#x20;

<figure><img src="../.gitbook/assets/pageacceuil RS.PNG" alt=""><figcaption></figcaption></figure>

{% hint style="danger" %}
* Les titres présents, dans la "Revue de Sommaire"_,_ proviennent du fichier de **KBART-Abes de référence**
* La création d'un export **KBART-Istex** permet de mettre à disposition des utilisateurs des tableaux KBART qui reflètent **la couverture réelle d'Istex, il peut donc y avoir plusieurs lignes par titre pour mettre en avant les trous dans les collections.**
{% endhint %}

L'instance [_Revue de sommaire Istex_](https://revue-sommaire.istex.fr/)  est disponible sur le site [https://data.istex.fr](https://data.istex.fr). [ ](http://data.istex.fr)Le site data.istex.fr expose des données [Istex](http://www.istex.fr/), selon les normes du web sémantique, dans un Triple Store via son [SPARQL Endpoint](http://data.istex.fr/triplestore/sparql).

## Interface

### Accueil

1- Une répartition graphique des ressources par corpus

![](../.gitbook/assets/graphcorpus.PNG)

En cliquant sur la flèche verte, ou sur "voir les détails", vous pouvez naviguer dans les résultats, rechercher, filtrer.

{% hint style="info" %}
Pour rendre le graphique plus lisible, les très gros corpus ECCO et EEBO, sont masqués, mais vous les retrouvez au moment de la navigation.
{% endhint %}

Par exemple, pour rechercher des ressources avec le mot _"physical"_

<figure><img src="../.gitbook/assets/grapheRS.PNG" alt=""><figcaption></figcaption></figure>

2- Des exemples de revues présentes dans Istex

Des revues incontournables sont mises en avant pour introduire la plateforme.



<figure><img src="../.gitbook/assets/page d&#x27;accueil titres rs.PNG" alt=""><figcaption></figcaption></figure>

### Recherche

* il suffit d'écrire un mot ou un titre dans l'écran de recherche (1)



<figure><img src="../.gitbook/assets/exportRS.PNG" alt=""><figcaption></figcaption></figure>

* pour affiner et aider à la recherche, une recherche filtrée (2) est proposée par _A-Z_, _bouquet_ (ressources négociées), _éditeur scientifique_ (le nom peut être différent de celui du corpus), _début de collection_ (données Abes), _fin de collection_ (données Abes), _type_ (monographie, série).
*   Le résultat de votre recherche peut-être exporté dans différents formats (3) : CSV, TSV, KBART-Istex....





SPARQL

Pour utiliser le SPARQL EndPoint Istex et/ou comparer vos ressources avec les ressources présentes dans Istex.

![](../.gitbook/assets/sparql.JPG)

{% hint style="info" %}
Pour afficher cet écran, n'hésitez pas à re-cliquer si besoin.
{% endhint %}

### Ontologie

Sont disponibles sur cette page toutes les informations de l'ontologie du projet Istex qui définit 14 Classes, 11 Object Properties et 13 Data Properties. Accès libre sur[ GITHUB](https://github.com/istex/ontology/blob/master/istexXML.owl) .

## **Résultats**

### **Recherche d'une ressource**

La recherche peut se faire sur la page _Recherche_ ou _Ressources_.

* par défaut l'opérateur booléen est un            =>  `pediatric journal = 5763`
* par défaut un caractère wildcare est présent =>  `pediatrics journal = 5763`
* pour avoir un AND entre 2 termes mettre des "  " => `"pediatrics" "journal" = 8`
* dans ce cas pas de caractère wildcare =>`"pediatric" "journal" = 25`&#x20;
* la recherche par filtre remplace la recherche avancée&#x20;

### Revue de sommaire

En sélectionnant le titre de la ressource souhaitée une page s'ouvre :

![](../.gitbook/assets/pagers.JPG)

* titre de la ressource (1)
* couverture de la ressource jusqu'au document (article, chapitre) requête à l'API Istex (2)
* accès à un panel des 10 revues les plus pertinentes citant les articles de la revue recherchée, possibilité de télécharger leurs citations dans [ISTEX-DL](https://dl.istex.fr/) (3)

![](../.gitbook/assets/rsdl.JPG)

* information sur le bouquet, lien vers le référentiel des bouquets chargés dans Istex [https://loaded-corpus.data.istex.fr](https://loaded-corpus.data.istex.fr) et nom du bouquet, lors de la négociation nationale (4)
* éditeur scientifique, le nom peut être différent que celui du corpus (5)
* issn/eissn  ou  isbn/eisbn (6)
* alignement avec Wikidata, à l'aide d'une requête SPARQL (7)
* ark de la revue (8) (en[ savoir plus](https://www.istex.fr/les-ark-dans-istex-sortent-de-lombre/))&#x20;
* exporter, de nombreux formats disponibles :  CSV, TSV, KBART, JSON... (9)



{% hint style="info" %}
La liste des titres dans _Revue de sommaire Istex_ correspond à la liste contractuelle des [licences nationales](https://www.licencesnationales.fr/liste-ressources/) pour les corpus chargés sur la plateforme Istex

La couverture affichée pour une ressource correspond aux documents présents sur la plateforme Istex

\=> Il peut y avoir une différence entre les deux
{% endhint %}

### Intégrer le sommaire dans un site web

* copier le code de la ressource disponible dans le champ couverture

![](../.gitbook/assets/integration.JPG)

* coller le tout dans une page html

![](../.gitbook/assets/html-page.JPG)

Il ne reste plus qu'à appliquer votre propre css.
