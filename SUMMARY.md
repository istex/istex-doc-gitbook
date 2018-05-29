# Table of contents

* [istex-web-doc](README.md)
* API
  * [Accès à l'API](api/acces-a-lapi/README.md)
    * Titre à choisir
    * [S'authentifier sur l'API](api/acces-a-lapi/sauthentifier-sur-lapi.md)
    * [Authentification par l'adresse IP](api/acces-a-lapi/authentification-par-ladresse-ip.md)
    * [Authentification par fédération d'identités](api/acces-a-lapi/authentification-par-federation-didentites.md)
    * [Accès nomade \(LDAP\)](api/acces-a-lapi/acces-nomade-ldap.md)
    * [URL de vérification de connexion](api/acces-a-lapi/url-de-verification-de-connexion.md)
  * Recherche de documents
    * [Syntaxe des requêtes](api/recherche-de-documents/syntaxe-des-requetes.md)
    * [Opérateur par défaut](api/recherche-de-documents/operateur-par-defaut.md)
    * [Exemples classiques de recherche](api/recherche-de-documents/exemples-classiques-de-recherche.md)
    * [Extraction](api/recherche-de-documents/extraction.md)
  * Options d'affichage des résultats
    * [Sélection des champs renvoyés](api/options-daffichage-des-resultats/selection-des-champs-renvoyes.md)
    * [Choix du type de scoring](api/options-daffichage-des-resultats/choix-du-type-de-scoring.md)
    * [Calcul du score de qualité](api/options-daffichage-des-resultats/calcul-du-score-de-qualite.md)
    * [Tris basés sur le mapping](api/options-daffichage-des-resultats/tris-bases-sur-le-mapping.md)
    * [Paramètres de pagination](api/options-daffichage-des-resultats/parametres-de-pagination.md)
    * [Pagination de type "scroll"](api/options-daffichage-des-resultats/pagination-de-type-scroll.md)
  * Facettes
    * [Qu'est-ce qu'une facette ?](api/facettes/quest-ce-quune-facette.md)
    * [un exemple est toujours plus parlant](api/facettes/un-exemple-est-toujours-plus-parlant.md)
    * [Syntaxe](api/facettes/syntaxe.md)
    * [Facettes dynamiques delon le mapping](api/facettes/facettes-dynamiques-delon-le-mapping.md)
    * [Champs de type string et boolean](api/facettes/champs-de-type-string-et-boolean.md)
    * [Champs de type integer et double](api/facettes/champs-de-type-integer-et-double.md)
    * [Champs de type date](api/facettes/champs-de-type-date.md)
  * Accès aux données indéxées
    * [Accès à un document via son id](api/acces-aux-donnees-indexees/acces-a-un-document-via-son-id.md)
    * [Niveau d'arborescence](api/acces-aux-donnees-indexees/niveau-darborescence.md)
    * [Explication sur la granularité](api/acces-aux-donnees-indexees/explication-sur-la-granularite.md)
    * [Explication sur les champs de type .raw](api/acces-aux-donnees-indexees/explication-sur-les-champs-de-type-.raw.md)
    * [Explication sur les indicateurs de qualité](api/acces-aux-donnees-indexees/explication-sur-les-indicateurs-de-qualite.md)
    * [Explication sur les références bibliographiques](api/acces-aux-donnees-indexees/explication-sur-les-references-bibliographiques.md)
    * [Autres champs uniquement liés à l'article](api/acces-aux-donnees-indexees/autres-champs-uniquement-lies-a-larticle.md)
    * [Champs uniquement liés liés au niveau revue](api/acces-aux-donnees-indexees/champs-uniquement-lies-lies-au-niveau-revue.md)
    * [Champs dépendant de la granularité](api/acces-aux-donnees-indexees/champs-dependant-de-la-granularite.md)
    * [Champs d'accès aux fichiers liés au document](api/acces-aux-donnees-indexees/champs-dacces-aux-fichiers-lies-au-document.md)
    * [Liste des éditeurs disponibles](api/acces-aux-donnees-indexees/liste-des-editeurs-disponibles.md)
  * Accès aux fichiers
    * [Accès aux métadonnées](api/acces-aux-fichiers/acces-aux-metadonnees.md)
    * [Accès aux fulltext](api/acces-aux-fichiers/acces-aux-fulltext.md)
    * [Accès aux annexes](api/acces-aux-fichiers/acces-aux-annexes.md)
    * [Accès aux couvertures](api/acces-aux-fichiers/acces-aux-couvertures.md)
  * [Accès aux enrichissements](api/acces-aux-enrichissements/README.md)
    * [Proposer des enrichissements](api/acces-aux-enrichissements/proposer-des-enrichissements.md)
  * [Identification pérenne ARK](api/identification-perenne-ark/README.md)
    * [Structure d'une URL de type ARK](api/identification-perenne-ark/structure-dune-url-de-type-ark.md)
    * [Intérêt des ARK dans ISTEX](api/identification-perenne-ark/interet-des-ark-dans-istex.md)
    * [Emplacement des ARK](api/identification-perenne-ark/emplacement-des-ark.md)
    * [URL d'accès dans l'API](api/identification-perenne-ark/url-dacces-dans-lapi.md)
  * [OpenURL 1.0](api/openurl-1.0/README.md)
    * [Implémentation du standard Z39.88-2004](api/openurl-1.0/implementation-du-standard-z39.88-2004.md)
    * [Résolveur de liens](api/openurl-1.0/resolveur-de-liens.md)
    * [Désactiver la redirection automatique vers la ressource](api/openurl-1.0/desactiver-la-redirection-automatique-vers-la-ressource.md)
* Usage documentaire
  * [Bouton ISTEX](usage-documentaire/bouton-istex.md)
  * [Google Scholar](usage-documentaire/google-scholar.md)
  * Logiciels de gestion bibliographique
    * [EndNote](usage-documentaire/logiciels-de-gestion-bibliographique/endnote.md)
    * [Zotero](usage-documentaire/logiciels-de-gestion-bibliographique/zotero.md)
* Usage TDM d'ISTEX
  * Préambule à la constitution d'un corpus
  * Construction d'une requête
    * Le contenu de la requête
    * Sur quel\(s\) champ\(s\) faire son interrogation ?
    * Les principaux outils à manipuler
    * Quelques astuces pour peaufiner sa requête
  * Extraction d'un corpus
    * Application ISTEX-dl \(ISTEX download\)
    * Fonction "Extract"
    * Moissonneur de l'API ISTEX
    * Programme "harvestCorpus.pl"
  * Vérification et mise en forme des résultats
    * Détecter les problèmes d'authentification
    * Détecter les PDF image
    * Remplacer les documents TXT par les documents OCR
    * Détecter les ligatures dans le TXT
    * Extraire les documents XML des fichiers ZIP
  * Annexes
    * Liste des codes langues dans ISTEX
    * Liste des types de publication et de contenu dans ISTEX
    * Liste des catégories scientifiques dans ISTEX
* Intégration ISTEX dans votre ENT
  * Intégration dans les outils de découverte
    * EDS - EBSCO
    * PRIMO - ExLibris
    * SUMMON
  * Intégration avec les widgets
  * Intégration dans Drupal
  * Intégration dans uPortal
  * Intégration du bouton ISTEX
    * Métadonnées pour l'intégration du bouton ISTEX
  * Intégration avancée avec l'API ISTEX
  * Ils ont intégré ISTEX
    * Archive ouverte HAL
    * CHU Rouen Normandie
    * INRA
    * Université Aix Marseille
    * Université Jean Monnet St Etienne
    * Université Paris Saclay
    * Université Paris Sciences Lettres
    * Université Rennes2
* FAQ

