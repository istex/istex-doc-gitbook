# Intégration dans les outils de découverte

Cette documentation est à destination des gestionnaires de documentation \(ex : SCD\) qui souhaitent paramétrer leur outil de découverte \("Discovery Tool"\) pour y ajouter les ressources ISTEX.

Une fonctionnalité intéressante de l’API ISTEX est son résolveur de liens compatible avec la norme OpenURL. Cette fonctionnalité permet de savoir, à partir de métadonnées simples \(titre, auteurs…\) ou d’identifiants standards \(DOI, PMID…\) si un document est présent dans la base de documents ISTEX. Si le document est trouvé, un rebond vers le texte plein est possible.

Les 3 Discovery Tool ou Outil de Découverte les plus utilisés actuellement sont :

* **EDS** et son résolveur FTF \(EBSCO Discovery Service\)
* **Primo** et son résolveur SFX \(ExLibris/Proquest\)
* **Summon** et son résolveur de liens 360 links \(Serial Solution/ Proquest\) _**En attente contact Ex-Libris USA**_

Ces réservoirs de métadonnées destinés aux bibliothèques permettent de faire une recherche à la "Google" et d’accéder :

* via un résolveur de liens, au plein texte des articles des abonnements souscrits chez l'éditeur
* via une OpenURL, au plein texte des articles des abonnements achetés dans le cadre des licences nationales ISTEX sur la plateforme ISTEX

Pour en savoir plus sur le [**résolveur OpenURL ISTEX**](https://api.istex.fr/documentation/openurl/)

===========================================================================

Si vous utilisez **un reverse proxy tel qu'EZproxy** pour donner accès à la documentation electrionique, vous pouvez le configurer avec la [**Stanza ISTEX**](https://github.com/ezproxy-config/french/blob/master/Istex.txt) ce qui permettra d'autoriser l'accès au ressources ISTEX [depuis votre proxy une fois que son adresse IP sera déclarée à ISTEX.](https://acces.licencesnationales.fr/)

===========================================================================

