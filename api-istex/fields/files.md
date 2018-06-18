# Champs d'accès aux fichiers liés au document

A ces listes de champs s'ajoutent la suivante, permettant de consulter les fichiers liés au document en question. Ces champs ne sont pas interrogeables, et l'accès à ces fichiers sera détaillé dans les sections suivantes :

| Champs | Type | Détails |
| --- | --- | --- |
| annexes.extension | string | **Extension** du fichier d'annexe \(ex : "jpeg"\) |
| annexes.mimetype | string | **Mimetype** du fichier du fulltext \(ex : "image/jpeg"\) |
| annexes.original | boolean | Indique si le fichier d'annexe **vient de l'éditeur** |
| annexes.uri | string | **Chemin d'accès** au fichier d'annexe |
| covers.extension | string | **Extension** du fichier de cover \(ex : "gif"\) |
| covers.mimetype | string | **Mimetype** du fichier du fulltext \(ex : "image/gif"\) |
| covers.original | boolean | Indique si le fichier de cover **vient de l'éditeur** |
| covers.uri | string | **Chemin d'accès** au fichier de cover |
| enrichments.{type} | {} | **Objet** contenant les informations liées au type d'enrichissement {type} \(ex: {type}=refBibs\) |
| enrichments.{type}.extension | string | **Extension** du fichier d'enrichissement de type {type} \(ex: "tei"\) |
| enrichments.{type}.mimetype | string | **Mimetype** du fichier d'enrichissement de type {type} \(ex: "application/tei+xml"\) |
| enrichments.{type}.original | boolean | Indique si le fichier d'enrichissement de type {type} **vient de l'éditeur** |
| enrichments.{type}.uri | string | **Chemin d'accès** au fichier d'enrichissement de type {type} |
| fulltext.extension | string | **Extension** du fichier du fulltext \(ex : "pdf"\) |
| fulltext.mimetype | string | **Mimetype** du fichier du fulltext \(ex : "application/pdf"\) |
| fulltext.original | boolean | Indique si le fichier du fulltext **vient de l'éditeur** |
| fulltext.uri | string | **Chemin d'accès** au fichier du fulltext |
| metadata.extension | string | **Extension** du fichier de métadonnées \(ex : "xml"\) |
| metadata.mimetype | string | **Mimetype** du fichier du fulltext \(ex : "application/xml"\) |
| metadata.original | boolean | Indique si le fichier de métadonnées **vient de l'éditeur** |
| metadata.uri | string | **Chemin d'accès** au fichier de métadonnées |

