# Accès nomade (LDAP)

## Accès nomade (LDAP) <a href="#acces-nomade-ldap" id="acces-nomade-ldap"></a>

### Principe <a href="#principe" id="principe"></a>

Ce mode d’accès créé avant la mise en place de authentification par la fédération d’identités permettait d'accéder à l'API en dehors de votre établissement (télétravail, autorisation de votre établissement en attente de validation...) grâce à _un login + mot de passe_ gérés par l'annuaire LDAP de l'Inist-CNRS.

### Mode d'utilisation <a href="#mode-dutilisation" id="mode-dutilisation"></a>

* Si vous vous connectiez **via un navigateur**, ce dernier affichait une fenêtre d'authentification où il était nécessaire de renseigner votre adresse mail comme identifiant et votre mot de passe.
* Vous pouviez également vous connecter **en ligne de commande.**

_Note technique_ : ce mode d'authentification est une mise en oeuvre de la [méthode "Basic" de l'authentification HTTP](https://fr.wikipedia.org/wiki/Authentification_HTTP#M.C3.A9thode_.C2.AB_Basic_.C2.BB). Son utilisation est possible depuis n'importe quel langage de programmation ou bibliothèque qui implémente le protocole HTTP.

{% hint style="danger" %}
Cependant ce mode d'authentification n'est plus disponible depuis juillet 2019
{% endhint %}
