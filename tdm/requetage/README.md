# Construction d'une requête

Ce chapitre propose un certain nombre d’éléments essentiels et incontournables pour construire sa requête et ainsi optimiser sa recherche.

Pour plus de détails sur la syntaxe d’une requête, n’hésitez pas à consulter la rubrique [**Recherche de documents**](../../api/search/) de la documentation technique de l’API Istex.

La requête peut être construite dans le [**Démonstrateur ISTEX**](http://demo.istex.fr/), en mode simple ou en mode avancé, afin de visualiser directement le nombre de documents retrouvés et de naviguer dans le corpus à travers les différentes facettes. Le démonstrateur permet également de tester certaines parties d’une requête complexe afin de détecter ses éventuelles incohérences.

La requête est ensuite envoyée à l’API pour permettre d’extraire le corpus à l’aide de différents moyens qui sont décrits dans le chapitre suivant ([**Extraction d'un corpus**](../extraction/)), notamment l’interface d'assistance au téléchargement de corpus : [**Application ISTEX-DL (ISTEX download)**](../extraction/istex-dl.md).

Une requête sur l'API Istex est constituée des éléments suivants :

* l'URL de base :&#x20;
  * [https://api.istex.fr/document/?](https://api.istex.fr/document/?)
* un paramètre obligatoire :&#x20;
  * q={requête}
* des paramètres optionnels :&#x20;
  * output={liste des champs à afficher}
  * size={nombre max. de documents affichés}
  * from={numéro du premier document}
* un séparateur de paramètres : &

> _**Exemple**_ : _Recherche des documents issus de la revue dont le titre est "Biofutur" ou l'ISSN est "0294-3506", qui ont été publiés en 1955 et dont l'auteur est "Dodet". On souhaite visualiser le titre, l'auteur et les informations concernant la revue, pour les 100 premiers documents._
>
> \[[https://api.istex.fr/document/?q=(host.title:"Biofutur"+OR+host.issn:"0294-3506")+AND+host.publicationDate:1995+AND+author.name:"DODET"\&output=title,author,host\&size=100\](https://api.istex.fr/document/?q=%28host.title:"Biofutur"+OR+host.issn:"0294-3506"%29+AND+host.publicationDate:1995+AND+author.name:"DODET"\&output=title,author,host\&size=100](https://api.istex.fr/document/?q=\(host.title:%22Biofutur%22+OR+host.issn:%220294-3506%22\)+AND+host.publicationDate:1995+AND+author.name:%22DODET%22\&output=title,author,host\&size=100]\(https://api.istex.fr/document/?q=%28host.title:%22Biofutur%22+OR+host.issn:%220294-3506%22%29+AND+host.publicationDate:1995+AND+author.name:%22DODET%22\&output=title,author,host\&size=100))

NB : Tous les exemples de requêtes donnés ici sont conçus pour être utilisés directement dans l'API en précisant l'URL `https://api.istex.fr/document/?`. Si l'on souhaite les utiliser dans le démonstrateur ou dans l'interface de téléchargement ISTEX-DL, il ne faut garder que la partie {requête}, c'est-à-dire, supprimer `q=` et tout ce qui se trouve après `&`, caractère "&" inclus.
