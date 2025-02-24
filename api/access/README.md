# Accès à l'API

La plateforme Istex fournit l'ensemble de ses services sous la forme d'une API Web utilisant le protocole HTTP dans un esprit Restful.

Les principaux services de l'API permettent :

* d'effectuer des recherches au sein des ressources mises à disposition
* d'accéder aux documents trouvés, en choisissant parmi l'ensemble des formats proposés

Selon le type de requête, une authentification sera nécessaire ou non.

Sont en accès libre, sans authentification :

* la recherche (toutes options incluses)
* l'accès aux métadonnées (formats **JSON** et **MODS**)

L'accès aux formats de fichiers suivant est en accès contrôlé, et nécessite une étape d'authentification :

* **PDF** (fulltext)
* **TEI** (fulltext et enrichissements)
* **XML** original (tel que fourni par l'éditeur, contient parfois du fulltext)
* formats divers (images, vidéo, son...) correspondant aux annexes et aux couvertures

{% hint style="info" %}
**Pour connaitre le shéma TEI (Text Encoding Initiative) utilisé pour le projet Istex (liste de notions textuelles admises par le plus grand nombre) voir** [**https://tei.istex.fr/**](https://tei.istex.fr/)
{% endhint %}

 
