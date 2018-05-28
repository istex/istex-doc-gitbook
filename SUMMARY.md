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
    * Opérateur par défaut
    * Exemples classiques de recherche
    * Extraction
  * Options d'affichage des résultats
    * Sélection des champs renvoyés
    * Choix du type de scoring
    * Calcul du score de qualité
    * Tris basés sur le mapping
    * Paramètres de pagination
    * Pagination de type "scroll"
  * Facettes
    * Qu'est-ce qu'une facette ?
    * un exemple est toujours plus parlant
    * Syntaxe
    * Facettes dynamiques delon le mapping
    * Champs de type string et boolean
    * Champs de type integer et double
    * Champs de type date
  * Accès aux données indéxées
    * Accès à un document via son id
    * Niveau d'arborescence
    * Explication sur la granularité
    * Explication sur les champs de type .raw
    * Explication sur les indicateurs de qualité
    * Explication sur les références bibliographiques
    * Autres champs uniquement liés à l'article
    * Champs uniquement liés liés au niveau revue
    * Champs dépendant de la granularité
    * Champs d'accès aux fichiers liés au document
    * Liste des éditeurs disponibles
  * Accès aux fichiers
    * Accès aux métadonnées
    * Accès aux fulltext
    * Accès aux annexes
    * Accès aux couvertures
  * Accès aux enrichissements
    * Proposer des enrichissements
  * Identification pérenne ARK
    * Structure d'une URL de type ARK
    * Intérêt des ARK dans ISTEX
    * Emplacement des ARK
    * URL d'accès dans l'API
  * OpenURL 1.0
    * Implémentation du standard Z39.88-2004
    * Résolveur de liens
    * Désactiver la redirection automatique vers la ressource
* Usage documentaire
  * Bouton ISTEX
  * Google Scholar
  * Logiciels de gestion bibliographique
    * EndNote
    * Zotero
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
