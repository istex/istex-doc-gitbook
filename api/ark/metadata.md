# Emplacement des ARK

Un identifiant ARK, lorsqu'il a été attribué à un document ISTEX, se retrouve à différents niveaux :

## Dans le format MODS

Dans ce format, il se retrouve aux côtés des autres identifiants dans l'élément `<identifier type="ark">` :

```markup
...
</relatedItem>
<identifier type="istex">087661D669BF44CA05AA6CE08ADD6399F6A439C4</identifier>
<identifier type="ark">ark:/67375/GT4-FJLCPBW9-Q</identifier>
<identifier type="DOI">...</identifier>
<identifier type="ArticleID">...</identifier>
<accessCondition>...
```

## Dans le format TEI

Comme dans le MODS, il se retrouve aux côtés des autres identifiants dans l'élément `<idno type="ark">` :

```markup
...
<sourceDesc>
  <biblStruct type="abstract">
    <analytic>
      <title level="a" type="main">...</title>
      <idno type="istex">087661D669BF44CA05AA6CE08ADD6399F6A439C4</idno>
      <idno type="ark">ark:/67375/GT4-FJLCPBW9-Q</idno>
      <idno type="DOI">...</idno>
      <idno type="unit">...</idno>
    </analytic>
    ...
  </biblStruct>
  ...
</sourceDesc>
...
```

{% hint style="info" %}
 **Pour connaitre le shéma TEI \(Text Encoding Initiative\) utilisé pour le projet ISTEX \(liste de notions textuelles admises par le plus grand nombre \) voir** [**https://tei.istex.fr/**](https://tei.istex.fr/)
{% endhint %}

## Dans le format JSON

Dans ce format, il se retrouve à la racine de la structure représentant le document \(article ou chapitre\) dans le champ `arkIstex` :

```javascript
{
    "corpusName": "nature",
    "arkIstex": "ark:/67375/GT4-FJLCPBW9-Q",
    "language": [
        "eng"
    ],
    "title": "Orphan nuclear receptor TLX activates Wnt/-catenin signalling to stimulate neural stem cell proliferation and self-renewal",
    ...
}
```

On notera également la présence dans ce format d'un champ multi-valué `ark`. Contrairement à `arkIstex`, ce champ pourra contenir plusieurs identifiants ARK, dans le cas où plusieurs autorités auraient attribué un ARK au même document.

