# Authentification par l'adresse IP

Ce mode d'authentification est **dépendant de l'endroit** à partir duquel vous accédez à l'API. Concrètement, si vous vous connectez depuis un établissement autorisé (unité, laboratoire, université...), l'API vous donnera automatiquement accès aux ressources en accès contrôlé, en se basant sur l'adresse IP de votre ordinateur (ou du reverse-proxy de votre établissement, s'il en possède un)

## Si votre établissement n'est pas encore autorisé

Vous (ou une personne habilitée) devez demander l'ajout de votre établissement à la liste des bénéficiaires, en vous rendant à l'adresse [https://acces.licencesnationales.fr/](https://acces.licencesnationales.fr/)

Une fois cette demande validée par l'Abes, elle sera diffusée à l'ensemble des portails (éditeurs, par exemple) et services concernés le 1er du mois suivant. L'équipe technique en charge de l'API pourra ensuite intégrer cette autorisation pour la rendre effective. 
