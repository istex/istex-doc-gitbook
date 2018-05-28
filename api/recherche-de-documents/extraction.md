# Extraction

L'API est capable de vous fournir une archive au format ZIP répondant à vos critères de recherche. Cette méthode, certes moins performante qu'un harvesting du client, vous permettra de vous assurer de la conformité des données et de leur complétude.

Pour effectuer une extraction, vous devrez agrémenter votre requête de l'option `extract`, qui est soumise au contrôle d'accès.  
 Vous pouvez demander à l'API d'extraire tout ou partie des données disponibles, en précisant le type et le format \(meta-données, texte-plein, formats Mods, TEI, PDF, etc.\).

Pour le moment, et pour des raisons purement techniques, le nombre de documents qu'il est possible d'extraire en une requête est **limité à 10000 maximum**. L'API renvoie un code d'erreur 413 en cas de dépassement. **Par défaut, seuls 10 documents sont archivés** si rien n'est précisé.

