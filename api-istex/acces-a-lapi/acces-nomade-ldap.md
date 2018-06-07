# Accès nomade \(LDAP\)

### Accès nomade \(LDAP\) {#acces-nomade-ldap}

#### Principe {#principe}

Ce mode d’accès créé avant la mise en place de l'authentication par la fédération d’identités permettait d'accéder à l'API en dehors de votre établissement \(télétravail, autorisation de votre établissement en attente de validation...\) grâce à _un login + mot de passe_ gérés par l'annuaire LDAP de l'INIST-CNRS.

#### Mode d'utilisation {#mode-dutilisation}

* Si vous vous connectez **via un navigateur**, ce dernier affichera une fenêtre d'authentification où il sera nécessaire de renseigner votre adresse mail comme identifiant et votre mot de passe.
* Si vous souhaitez vous connecter **en ligne de commande**, il vous sera nécessaire de rentrer les paramètres suivants :
  * Pour `curl` : curl -u {nom de famille}:{mot de passe} {URL de l'API}
  * Pour `wget` : wget --user={nom de famille} --password={mot de passe} {URL de l'API}

_Note technique_ : ce mode d'authentification est une mise en oeuvre de la [méthode "Basic" de l'authentification HTTP](https://fr.wikipedia.org/wiki/Authentification_HTTP#M.C3.A9thode_.C2.AB_Basic_.C2.BB). Son utilisation est possible depuis n'importe quel langage de programmation ou bibliothèque qui implémente le protocole HTTP.

{% hint style="danger" %}
**Cependant ce type de connexion est amené à disparaître prochainement et n'est plus prioritaire**. Pour privilégier ce mode d’authentification, tant qu'il est encore disponible, rajouter auth=ldap dans votre URL. [https://api.istex.fr/document/F11C03882643184B3D12B60F771ADCB6FD23533A/fulltext/pdf?**auth=ldap**](https://api.istex.fr/document/F11C03882643184B3D12B60F771ADCB6FD23533A/fulltext/pdf?auth=ldap)
{% endhint %}



