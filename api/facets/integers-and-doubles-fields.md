# Champs de type integer et double

**Informations :**

* Options
  * **x :** renvoie le nombre de résultats ayant un chiffre pour le champ x compris **entre le chiffre le plus bas et le plus haut**,
  * **x\[y-z]** : renvoie le nombre de résultats ayant un chiffre pour le champ x compris **entre y et z**,
  * **x\[y-z:i]** : renvoie le nombre de résultats **par intervalle i** ayant un chiffre pour le champ x compris **entre y et z**.  Les valeurs **y et z** peuvent prendre comme valeur **\* (étoile)** pour désigner **les valeurs minimale et maximale**.
* Format de réponse pour une facette **x\[y-z]**
  * ```javascript
    {
    "aggregations": {
      "qualityIndicators.score": {
        "buckets": [
          {
            "key": "0.013-9.5",
            "from": 0.013,
            "fromAsString": "0.013",
            "to": 9.5,
            "toAsString": "9.5",
            "docCount": 2303789
          }
        ]
      }
    }
    }
    ```
* Explications
  * **buckets** : tableau contenant l'état de collection,
  * **key** : correspond à "y - z" (string),
  * **from** : correspond à y (numérique),
  * **fromAsString** : correspond à y (string),
  * **to** : correspond à z (numérique),
  * **toAsString** : correspond à z (string),
  * **docCount** : nombre de résultats trouvé.
* Format de réponse pour une facette **x\[y-z:i]**
  * ```javascript
    {
    "aggregations": {
      "qualityIndicators.score": {
        "docCount": 9119,
        "buckets": [
          {
            "key": 0,
            "rangeAsString": "[0-2[",
            "docCount": 2996
          },
          {
            "key": 2,
            "rangeAsString": "[2-4[",
            "docCount": 1400
          },
          ...
        ]
      }
    }
    }
    ```
* Explications

{% hint style="danger" %}
l'intervalle se doit d'être un **entier (integer)**, il n'est actuellement pas possible d'utiliser un **float**.
{% endhint %}

Les résultats sont découpés selon l'intervalle choisi.\
Prenons un exemple : un intervalle de 2 entre 0 et 5 créera 3 résultats :

* le nombre de documents entre **0** et 2 non inclu, &#x20;
* le nombre de documents entre **2** et 4 non inclu, &#x20;
* le nombre de documents entre **4** et 5 inclu.\
  Mathématiquement, on aura : \[0-5:2] = \[**0**-2\[ + \[**2**-4\[ + \[**4**-5]\
  La facette affiche ces intervalles en indiquant **la borne inférieure** comme référence (key).
* **docCount** : nombre de documents concerné par l'intervalle \[x-y] de la facette,
* **buckets** : tableau contenant l'état de collection,
* **key** : correspond à la borne inférieure de l'intervalle créé (number),
* **rangeAsString** : correspond à la notation mathématique de l'intervalle créé (string),
* **docCount** : nombre de résultats trouvé dans l'intervalle.\*

| Exemples                                                                                                                      |                                                                                                                                                                                                                                                                                               |
| ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Affichage de l'ensemble des documents avec une facette sur **l'ensemble des scores de qualité**                               | [https://api.istex.fr/document/?q=\***\&facet=qualityIndicators.score**](https://api.istex.fr/document/?q=\*\&facet=qualityIndicators.score) ; [https://api.istex.fr/document/?q=\***\&facet=score**](https://api.istex.fr/document/?q=\*\&facet=score)                                       |
| Affichage de l'ensemble des documents avec une facette sur **les scores de qualité compris entre 5 et 7**                     | [https://api.istex.fr/document/?q=\***\&facet=qualityIndicators.score\[5-7\]**](https://api.istex.fr/document/?q=\*\&facet=qualityIndicators.score\[5-7]) **;** [https://api.istex.fr/document/?q=\***\&facet=score\[5-7\]**](https://api.istex.fr/document/?q=\*\&facet=score\[5-7])         |
| Affichage de l'ensemble des documents avec une facette sur **les scores de qualité compris entre 5 et 7 par intervalle de 1** | [https://api.istex.fr/document/?q=\***\&facet=qualityIndicators.score\[5-7:1\]**](https://api.istex.fr/document/?q=\*\&facet=qualityIndicators.score\[5-7:1]) **;** [https://api.istex.fr/document/?q=\***\&facet=score\[5-7:1\]**](https://api.istex.fr/document/?q=\*\&facet=score\[5-7:1]) |
