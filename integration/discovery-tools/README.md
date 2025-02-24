# Intégration dans les outils de découverte

Cette documentation est à destination des gestionnaires de documentation (ex : SCD) qui souhaitent paramétrer leur outil de découverte ("Discovery Tool") pour y ajouter les ressources Istex.

Une fonctionnalité intéressante de l’API Istex est son résolveur de liens compatible avec la norme OpenURL. Cette fonctionnalité permet de savoir, à partir de métadonnées simples (titre, auteurs…) ou d’identifiants standards (DOI, PMID…) si un document est présent dans la base de documents Istex. Si le document est trouvé, un rebond vers le texte plein est possible.

Les 3 Discovery Tool ou Outils de Découverte les plus utilisés actuellement sont :

* **EDS et son résolveur FTF (EBSCO Discovery Service)**
* **Primo et son résolveur SFX / Alma  (ExLibris/ProQuest)**
* **Summon et son résolveur de liens 360 KB (ExLibris/ProQuest)**&#x20;

Ces réservoirs de métadonnées destinés aux bibliothèques permettent de faire une recherche à la "Google" et d’accéder :

* via un résolveur de liens, au plein texte des articles des abonnements souscrits chez l'éditeur
* via une OpenURL, au plein texte des articles des abonnements achetés dans le cadre des licences nationales Istex sur la plateforme Istex

Pour en savoir plus sur le [**résolveur OpenURL ISTEX**](https://api.istex.fr/documentation/openurl/)

\===========================================================================

Si vous utilisez **un reverse proxy tel qu'EZproxy** pour donner accès à la documentation électronique, vous pouvez le configurer avec la [**Stanza ISTEX**](https://github.com/ezproxy-config/french/blob/master/Istex.txt) ce qui permettra d'autoriser l'accès au ressources  Istex [depuis votre proxy une fois que son adresse IP sera déclarée à ISTEX.](https://acces.licencesnationales.fr/)

\===========================================================================
