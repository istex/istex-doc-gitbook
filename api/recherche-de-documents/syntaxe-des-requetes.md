# Syntaxe des requêtes

Toutes les URL suivantes sont accédées via la méthode **HTTP GET**.

La recherche s'effectue sous la forme : 

| Syntaxe | |
|------------ | ------------- |
| URI | <span class="baseUrl">https&#58;//api.istex.fr/document/?</span><span class="mandParam">q={query}</span> |
| Paramètres | - <span class="mandParam">q=</span> : la lettre clé permettant d'indiquer que ce qui suit est la requête, <br>- <span class="mandParam">{query}</span> : la chaîne de recherche. Celle-ci correspond à une requête du type "Google" ou "Bing".<br> Plus de précisions sur [cette page de la documentation de Lucene](https://lucene.apache.org/core/4_3_0/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package_description). |
| Code de retour | - 200 si OK, <br>- 500 en cas de problème (dans ce cas, contacter <api-bug@listes.istex.fr>) |

* _Formatage des résultats renvoyés_ :

<pre class="json">
{
	total : nombre de résultats,
	hits : [
		{
			id : id du document,
			title : titre du document,
			abstract : résumé du document,
			metadata : [
				{
					type : type MIME du document,
					uri : URI d'accès au document,
					original : document d'origine éditeur ou généré par nos soins
				}
				,
				...
				(suite des formats de métadonnées disponibles)
			],
			fulltext : [
				{
					type : type MIME du document,
					uri : URI d'accès au document,
					original : document d'origine éditeur ou généré par nos soins
				}
				,
				...
				(suite des formats de fulltext disponibles)
			]
		}
		,
		(suite des résultats)
		...
	]
}
</pre>

Les requêtes prises en charge sont celles suivant la [syntaxe de la bibliothèque de recherche Lucene](https://lucene.apache.org/core/4_3_0/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package_description).

De manière générale, une requête est une suite de termes recherchés.

De base, les termes sont recherchés dans tous les champs indexés (titre, auteur, résumé, fulltext...).

| Exemples | |
|------------ | ------------- |
| Recherche des documents contenant le mot "Controllability" dans tous les champs indexés | <a href="https://api.istex.fr/document/?q=Controllability">https://api.istex.fr/document/?<span class="mandParam">q=Controllability</span></a>|
| Recherche des documents contenant le mot "test" dans tous les champs indexés | <a href="https://api.istex.fr/document/?q=test">https://api.istex.fr/document/?<span class="mandParam">q=test</span></a>|

Les termes cherchés sont reliés par des opérateurs booléens, l'opérateur ``OR`` étant celui par défaut. Les opérateurs supportés sont ``OR``, ``AND``, ``NOT``, ainsi que les opérateurs d'inclusion/exclusion ``+`` et ``-``.

| Exemples | |
| -------- | ------- |
| Recherche des documents contenant le terme "api" **ou** "study" dans un de leurs champs indexés | <a href="https://api.istex.fr/document/?q=api%20OR%20study">https://api.istex.fr/document/?<span class="mandParam">q=api OR study</span></a> <br> <a href="https://api.istex.fr/document/?q=api%20study">https://api.istex.fr/document/?<span class="mandParam">q=api study</span></a> |
| Recherche des documents contenant le terme "test" **et** "study" dans un de leurs champs indexés | <a href="https://api.istex.fr/document/?q=test%20AND%20study">https://api.istex.fr/document/?<span class="mandParam">q=test AND study</span></a>|
| Recherche des documents contenant le terme "test" **mais pas** "study" dans un de leurs champs indexés | <a href="https://api.istex.fr/document/?q=api%20NOT%20study">https://api.istex.fr/document/?<span class="mandParam">q=test NOT study</span></a> <br> <a href="https://api.istex.fr/document/?q=api%20-study">https://api.istex.fr/document/?<span class="mandParam">q=api -study</span></a>|

L'utilisation de jokers ``*`` et ``?`` est possible, permettant de remplacer un certain nombre de caractères.

| Exemples | |
| -------- | ------- |
| Recherche des documents contenant un terme commençant par "te", **ayant 0, 1 ou plusieurs caractères supplémentaires** et finissant par un "t" dans un de leurs champs indexés (ex: "test", "tegument") | <a href="https://api.istex.fr/document/?q=te*t">https://api.istex.fr/document/?<span class="mandParam">q=te*t</span></a> |
| Recherche des documents contenant un terme commençant par "te", **ayant 1 caractère supplémentaire** et finissant par un "t" dans un de leurs champs indexés (ex: "tet", "test") | <a href="https://api.istex.fr/document/?q=te?t">https://api.istex.fr/document/?<span class="mandParam">q=te?t</span></a>|

L'utilisation d'**expressions régulières** est également disponible, à l'aide des délimiteurs ``//``. Elles se basent sur la classe java [RegExp](https://lucene.apache.org/core/4_3_0/core/org/apache/lucene/util/automaton/RegExp.html).

| Exemples | |
| -------- | ------- |
| Recherche des documents contenant le **terme "ham", "jam" ou "hamster"** dans un de leurs champs indexés | <a href="https://api.istex.fr/document/?q=/[hj]am(ster)?/">https://api.istex.fr/document/?<span class="mandParam">q=/[hj]am(ster)?/</span></a> |
| Recherche des documents contenant un **terme avec 25 caractères parmi les lettres A, C, G et T** dans un de leurs champs indexés | <a href="https://api.istex.fr/document/?q=/[CGAT]{25}/">https://api.istex.fr/document/?<span class="mandParam">q=/[CGAT]{25}/</span></a>|

Il est également possible d'effectuer des recherches de type **"fuzzy"**, basées sur la **distance de Damerau-Levenshtein**. Pour cela, il suffit de rajouter le symbole ``~`` (tilde) à la **fin du terme** recherché.

| Exemples | |
| -------- | ------- |
| Recherche des documents contenant un **terme proche du mot "ham"** dans un de leurs champs indexés | <a href="https://api.istex.fr/document/?q=ham~">https://api.istex.fr/document/?<span class="mandParam">q=ham~</span></a> |

La **recherche de proximité** permet, quant à elle, de trouver une suite de mots, distant d'une valeur définie. Il suffit d'utiliser les **"" (guillemets)** pour rassembler les mots, puis d'ajouter un ``~`` (tilde) accompagné de la **distance (nombre entier)**.

| Exemples | |
| -------- | ------- |
| Recherche des documents contenant **les termes "ham" et "jam" distants d'une longueur de 10 mots** dans un de leurs champs indexés | <a href="https://api.istex.fr/document/?q=%22ham%20jam%22~10">https://api.istex.fr/document/?<span class="mandParam">q="ham jam"~10</span></a> |

L'API permet également de **privilégier des termes** lors de la recherche, avec l'aide du symbole ``^`` (puissance) suivant le ou les termes à amplifier, et accompagné d'un nombre facteur. Plus ce nombre est **élevé**, plus le terme sera **privilégié** par rapport aux autres. Ce nombre est obligatoirement un **nombre positif**, mais peut être inférieur à 1 (par exemple, 0.5).

| Exemples | |
| -------- | ------- |
| Recherche des documents contenant **les termes "ham" et "jam"**, avec une **importance deux fois plus grande pour "ham"** | <a href="https://api.istex.fr/document/?q=ham^2%20jam">https://api.istex.fr/document/?<span class="mandParam">q=ham^2 jam</span></a><br><a href="https://api.istex.fr/document/?q=ham^4%20jam^2">https://api.istex.fr/document/?<span class="mandParam">q=ham^4 jam^2</span></a><br><a href="https://api.istex.fr/document/?q=ham%20jam^0.5">https://api.istex.fr/document/?<span class="mandParam">q=ham jam^0.5</span></a> |
| Recherche des documents contenant **les termes "ham jam" et "old"**, avec une **importance deux fois plus grande pour "ham jam"** | <a href="https://api.istex.fr/document/?q=%22ham%20jam%22^2%20old">https://api.istex.fr/document/?<span class="mandParam">q="ham jam"^2 old</span></a> |

Il est possible d'interroger un **champ particulier**, à partir du moment où ce dernier est bien indexé. En effet, tous les objets documentaires sont homogénéisés, c'est-à-dire qu'un même type d'information est disponible dans le même nom de champ. Par exemple, pour savoir à quel corpus appartient un objet, il suffira de consulter le champ ``corpusName``, quelque soit l'objet documentaire. Mais tous les objets documentaires ne se valant pas, certaines informations peuvent manquer pour certains, et être restitué pour d'autres, comme par exemple pour le champ ``pii``.

En règle générale, les informations concernant le document (**article ou chapitre**) en lui-même sont **directement** indiquées par leur nom (par exemple ``title`` ou ``genre``), alors que les informations liées à **la revue ou à l'ebook** doivent être précédées de ``host`` (par exemple ``host.title`` ou ``host.genre``). Pour de plus amples détails sur la granularité ou pour voir l'ensemble des champs indexés, consultez la [section qui lui est consacrée](fields).

Pour interroger un **champ particulier**, il suffit d'indiquer son nom et d'ajouter ``:`` (deux points) avant la requête qui lui sera liée.

| Exemples | |
| -------- | ------- |
| Recherche des documents contenant le terme "api" et dont un **titre** contient le mot "study" | <a href="https://api.istex.fr/document/?q=api%20AND%20title:study">https://api.istex.fr/document/?<span class="mandParam">q=api AND title:study</span></a> |
| Recherche des documents contenant le terme "api" et dont un **titre de série** contient le mot "computer" | <a href="https://api.istex.fr/document/?q=api%20AND%20host.title:computer">https://api.istex.fr/document/?<span class="mandParam">q=api AND host.title:computer</span></a>|

Il est également possible de chercher sur un **intervalle**, avec l'utilisation des ``[]`` (crochets) et des ``{}`` (parenthèses) et du mot clé ``TO`` (en majuscules). Les crochets sont **inclusifs**, alors que les accolades, à l'inverse, sont **exclusives**. L'intervalle peut se faire sur des **nombres**, mais également sur des **mots** : il s'agit alors d'un intervalle alphabétique.

| Exemples | |
| -------- | ------- |
| Recherche des documents contenant une **date de publication entre 1900 et 1905** | <a href="https://api.istex.fr/document/?q=publicationDate:[1900 TO 1905]">https://api.istex.fr/document/?<span class="mandParam">q=publicationDate:[1900 TO 1905]</span></a><br><a href="https://api.istex.fr/document/?q=publicationDate:{1889 TO 1906}">https://api.istex.fr/document/?<span class="mandParam">q=publicationDate:{1899 TO 1906}</span></a><br><a href="https://api.istex.fr/document/?q=publicationDate:{1889 TO 1906}">https://api.istex.fr/document/?<span class="mandParam">q=publicationDate:[1900 TO 1906}</span></a> |
| Recherche des documents contenant un **terme entre "half" et "ham" dans son titre** | <a href="https://api.istex.fr/document/?q=title:[half TO ham]">https://api.istex.fr/document/?<span class="mandParam">q=title:[half TO ham]</span></a>|

Pour plus de détails sur cette syntaxe, nous vous invitons à consulter [la documentation officielle](https://lucene.apache.org/core/4_3_0/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package_description).

