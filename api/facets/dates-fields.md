# Champs de type date

**Informations :**

* Options
  * **x** : renvoie le nombre de résultats ayant une date pour le champ x compris **entre la date la plus ancienne et la plus récente**,
  * **x\[y-z\]** : renvoie le nombre de résultats ayant une date pour le champ x compris **entre y et z**,
  * **x\[y-z:i**\] : renvoie le nombre de résultats ayant une date pour le champ x entre l'année y et z, affiché **par intervalle de i années**,
  * **x\[perYear\]** : **équivalent à \[\*-\*:1\]**, renvoie le nombre de résultats ayant une date pour le champ x, affiché **par année**.  Les valeurs **y et z** peuvent prendre comme valeur **\* \(étoile\)** pour désigner **les valeurs minimale et maximale**.
* Détails
  * Les résultats sont affichés **du terme le plus présent vers le terme le plus rare**.

{% hint style="danger" %}
certains champs ne peuvent être interrogés, leur résultat étant jugé non pertinent  
 et trop conséquent pour être affiché : doi, title, abstract
{% endhint %}

* Format de réponse pour une facette x\[y-z\]
  *   ```text
    {
      "aggregations": {
        "publicationDate": {
          "buckets": [
            {
              "key": "1836-1972",
              "from": -4228675200000,
              "fromAsString": "1836",
              "to": 63072000000,
              "toAsString": "1972",
              "docCount": 581
            }
          ]
        }
      }
    }
    ```
* Explications
  * **buckets** : tableau contenant l'état de collection,
  * **key** : correspond à "y - z" \(string\),
  * **from** : correspond à y \(timestamp en millisecondes\),
  * **fromAsString** : correspond à y \(string\),
  * **to** : correspond à z \(timestamp en millisecondes\),
  * **toAsString** : correspond à z \(string\),
  * **docCount** : nombre de résultats trouvé dans cet intervalle.
* Format de réponse pour une facette **x\[y-z:i\]**
  *   ```text
    {
      "aggregations": {
        "copyrightDate": {
          "buckets": [
            {
              "keyAsString": "1832",
              "key": -4354905600000,
              "docCount": 50,
              "rangeAsString": "[1832-1833["
            },
            {
              "keyAsString": "1833",
              "key": -4323283200000,
              "docCount": 62,
              "rangeAsString": "[1833-1834["
            },
            ...
          }
        }
      }
    }
    ```
* Explications

{% hint style="danger" %}
l'intervalle se doit d'être un **entier \(integer\)**, il n'est actuellement pas possible d'utiliser un **float**.  
Il n'est pas possible également de continuer avec une facette imbriquée : les facettes suivantes seront supprimées.
{% endhint %}

 Les résultats sont découpés selon l'intervalle choisi.  
Prenons un exemple : un intervalle de 2 entre 2000 et 2004 créera 3 résultats :  
- le nombre de documents entre **2000** et 2002 non inclu,  
- le nombre de documents entre **2002** et 2004 non inclu,  
- le nombre de documents en **2004**.  
Mathématiquement, on aura : \[2000-2004:2\] = \[**2000**-2002\[ + \[**2002**-2004\[ + \[**2004**-2004\]  
La facette affiche ces intervalles en indiquant **la borne inférieure** comme référence \(key et keyAsString\).  
  
La facette affiche les dates **de la plus ancienne à la plus récente**.

* **buckets** : tableau contenant l'état de collection,
* **keyAsString** : année trouvée \(année en string\),
* **key** : année trouvée \(timestamp en millisecondes\),
* **docCount** : nombre de résultats trouvé pour cette année,
* **rangeAsString** : correspond à la notation mathématique de l'intervalle créé \(string\).

| Exemples |  |
| --- | --- |
| Affichage de l'ensemble des documents avec une facette sur **l'ensemble des dates de publication** | [https://api.istex.fr/document/?q=\***&facet=publicationDate**](https://api.istex.fr/document/?q=*&facet=publicationDate) |
| Affichage de l'ensemble des documents avec une facette sur les **dates de publication compris entre 1900 et 2000** | [https://api.istex.fr/document/?q=\***&facet=publicationDate\[1900-2000\]**](https://api.istex.fr/document/?q=*&facet=publicationDate[1900-2000]) |
| Affichage de l'ensemble des documents avec une facette sur **l'ensemble des dates de publication, découpé par année** | [https://api.istex.fr/document/?q=\***&facet=publicationDate\[perYear\]**](https://api.istex.fr/document/?q=*&facet=publicationDate[perYear]) ****[https://api.istex.fr/document/?q=\***&facet=publicationDate\[\*-\*:1**\]](https://api.istex.fr/document/?q=*&facet=[*-*:1])                               [https://api.istex.fr/document/?q=\***&facet=publicationDateOverTime**](https://api.istex.fr/document/?q=*&facet=publicationDateOverTime) |

