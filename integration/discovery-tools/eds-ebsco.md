# EDS - EBSCO

**Accès au PDF après une recherche**

Une recherche sur l’article suivant : _Tricuspid incompetence and right ventricular output in congestive heart failure_ de la revue **British Heart Journal Janvier 1957, Vol. 19 Issue 1**, du bouquet BMJ ISTEX

![](../../.gitbook/assets/recherchebibcnrs-1.png)

Deux propositions d'accès au PDF :

* Directement à partir de la plateforme ISTEX par OpenURL avec pérennité de l’accès
* Ou par rebond à partir du site de l'éditeur via le résolveur de lien FTF d'EBSCO

![](../../.gitbook/assets/lien-1.png)

L'accès direct au document sur la plateforme ISTEX est possible de 2 façons en fonction des habitudes de travail.

**1- FTF/Résolveur de lien : En créant un lien Open URL et en lui assignant des bouquets**

**2- EDS/Customlinks : En utilisant le CustomLink d'EBSCO**

## 1- FTF/Résolveur de lien

Le Holdings Management (HLM) dans EBSCOADMIN permet à l’administrateur du compte de gérer les collections ou abonnements et leur associer un résolveur de liens permettant l’accès au plein texte sur le site de l’éditeur.

### **A- Liens éditeurs pour Bouquets ou Titres de ressources**

Dans le HLM en cliquant sur **"Liens"**, l’administrateur peut visualiser les liens éditeurs disponibles dans le module d'administration qu'il faudra associer à un **"Titres"** ou un **"Bouquet"** de ressources pour aller jusqu'au plein texte. Dans notre exemple : 51 liens sont disponibles

![](../../.gitbook/assets/liens.png)

### **B- Création d'un lien vers la plateforme ISTEX**

Cliquer sur **"Nouveau lien"**

![](../../.gitbook/assets/creationdelienistex-1.png)

Remplir le formulaire **"Url\* de base"**

Avec `https://view.istex.fr/document/openurl`

Au niveau de la **"Chaîne de requête"** préciser le champ DOI et PMID plus le mode et l'ordre d'authentification : IP puis Fédération d'identité

`?rft_id=info:doi/{DOI}&rft_id=info:pmid/{PMID}&sid=ebsco&auth=ip,fede`

![](../../.gitbook/assets/istexview2-1.png)

Ainsi que les métadonnées prises en compte :

`{IfNotEmpty({DOI}{PMID},ok,)}`

Ne pas oublier de cocher l'affichage du lien "Pour mes fonds documentaires associés"

![](../../.gitbook/assets/liensuite.png)

Pour personnifier l'affichage du lien, rajouter l’icône ISTEX dont l'URL est :

`https://content-delivery.istex.fr/assets/img/istex-minilink.png`

![](../../.gitbook/assets/iconeistex.png)

### **C- OpenURL sur le champ PMID**

L'Open URL ne se fait pas que sur le champ DOI mais également sur le champ PMID et les résultats sont d'autant plus performants que 4 000 000 de PMID ont été ingérés dans la plateforme ISTEX. Il faut donc au préalable en plus de rajouter le PMID dans le paramétrage au moment de la création du lien "ISTEX Plateforme", modifier l'équation dans le résolveur de lien.

\=> EDS/Linking/Custom Links puis Modify

![](../../.gitbook/assets/pmid1.png)

\=> Choisir SetUp MaintainCustomLink

![](../../.gitbook/assets/pmid2-1.png)

\=> Sélectionner le résolver de lien FullTextFinder

![](../../.gitbook/assets/pmid3.png)

\=> Dans Query String, vérifier

![](../../.gitbook/assets/pmid4-1.png)

\=> et complèter l'équation.

![](../../.gitbook/assets/pmid5.png)

### **D- Open URL : erreur 404 et Istex View**

Il peut y avoir une différence de contenu entre la liste des revues négociées avec les éditeurs, disponible au format Kbart sur le site des licences nationales, et les documents, réellement livrés en xml, disponibles sur la plateforme ISTEX.

\=> Un message code 404 peu **user friendly** s’affiche :

![](../../.gitbook/assets/istexview1.png)

\=> **Une couche IHM** (pour interface Homme-Machine) a été développée et rajoutée au-dessus de l'API ISTEX et en particulier de son OpenURL pour permettre l’affichage d’un message plus explicite pour l’utilisateur.\
Il suffit pour le voir de remplacer `https://api.istex.fr/document/openurl` (Pour ceux qui ont paramétré le lien avant ISTEX View) par `https://view.istex.fr/document/openurl` dans le champ **« URL\* de base »** de la fenêtre de paramétrage du lien ISTEX plateforme.

![](../../.gitbook/assets/istexview2.png)

\=>Le message devient :

![](../../.gitbook/assets/istexview3.png)

### **E- Assigner le lien aux bouquets concernés**

Une fois le lien créé il faut l’assigner à tous les bouquets Licences Nationales ISTEX déjà présents dans la plateforme ISTEX :

* Les rechercher

![](../../.gitbook/assets/bouquetsressourcesaassocier.png)

* Les associer au lien OpenURL

![](../../.gitbook/assets/associerbouquetsistex.png)

{% hint style="danger" %}
Seuls les bouquets suivants sont déjà disponibles sur la plateforme ISTEX.
{% endhint %}

35 négociations mais 36 bouquets à sélectionner car la négociation "Numérique Premium" comporte 2 bouquets "Révolution française-Premier Empire" et "Littérature française et francophone" et la négociation "Droz" comporte le 2 bouquets "Portail Calvin"  et le "Portail Humanisme et Renaissance"

#### 36 bouquets à associer

* American Chemical Society (ISTEX - Licences Nationales)
* BMJ Journals (ISTEX - Licences Nationales)
* Brepols Journals (ISTEX - Licences Nationales)
* Brepols - ebooks (ISTEX - Licences Nationales)
* BRILL (ISTEX - Licences Nationales)
* Brill Recueils des cours de l’Académie de La Haye (ISTEX -Licences Nationales)
* Brill Religions in the Graeco-Roman World Online (ISTEX - Licences Nationales)
* Cambridge University Press (ISTEX - Licences Nationales)
* Cambridge University Press – e-books en science politique (ISTEX - Licences Nationales)
* De Gruyter (ISTEX - Licences Nationales)
* De Gruyter ebooks en langue française (ISTEX - Licences Nationales)
* De Gruyter – ebooks en sciences de l’Antiquité (ISTEX - Licences Nationales)
* Duke : sélectionner "Duke mathematical Journal" dans le bouquet "projet Euclid" puis choisir comme date => 1935-2012
* EarlyEnglish Books Online (EEBO)
* EDP Sciences (ISTEX - Licences Nationales)
* EighteenthCentury Collections Online
* Elsevier (ISTEX - Licences Nationales)
* Emerald(ISTEX - Licences Nationales)
* Geologicalsociety of London Publishing – ebooks (ISTEX - Licences Nationales)
* Institute of Physics (ISTEX - Licences Nationales)
* Lavoisier (ISTEX - Licences Nationales)
* Littérature française et francophone (ISTEX - Licences Nationales)
* Karger – eBooks en médecine (ISTEX – Licences Nationales)
* Nature Publishing Group (ISTEX - Licences Nationales)
* OpenEdition Books (ISTEX - Licences Nationales)
* OxfordUniversity Press (ISTEX - Licences Nationales)
* Révolution française – Premier Empire (ISTEX - LicencesNationales)
* RoyalSociety of Chemistry (ISTEX - Licences Nationales)
* RoyalSociety of Chemistry eBooks (ISTEX - Licences Nationales)
* SAGE (ISTEX - Licences Nationales)
* Springer Nature eBooks (ISTEX - Licences Nationales)
* SpringerLINK (ISTEX - Licences Nationales)
* Wiley Online Library (ISTEX - Licences Nationales)
* Taylor & Francis eBooks (Politics and International Relations) (ISTEX - Licences Nationales)
* The Royal Society Online Journals (ISTEX - Licences Nationales)
* Droz Portail Calvin (ISTEX-Licences Nationales)
* Droz Portail Humanisme et Renaissance (ISTEX-Licences Nationales)

### F- Laisser EBSCO gérer le customlink ISTEX

* Depuis août 2018 EBSCO a créé en "dur" un Customlink Full Text "managed" pour du contenu consortial (donc Custom selon leurs critères).
* Ce lien sera automatiquement associé au lien éditeur du bouquet dès que la ressource est disponible dans la plateforme ISTEX. Pour ceux qui avaient déjà paramétré un customlink ISTEX vous pouvez supprimer le premier lien => "Géré  par votre bibliothèque" et garder "Gérer EBSCO" si vous souhaiter ne plus gérer la sélection  des bouquets ISTEX .

Exemple pour **BMJ Journals (ISTEX-Licences Nationales)**

![](../../.gitbook/assets/lienistex1.JPG)

* Dans le paramétrage du lien vous autorisez bien EBSCO à gérer les associations avec ce lien

![](../../.gitbook/assets/lienistex2.JPG)

* A vous de rajouter comme ci-dessus l'url de l'image ISTEX

`https://content-delivery.istex.fr/assets/img/istex-minilink.png`

## 2- EDS/Customlinks

Contrairement au cas précédent ou un lien plateforme est créé par l'utilisateur, cette fois c'est EBSCO qui gère le CustomLink l'utilisateur choisit d'associer des System collections (champ Local collection for filter) au Customlink ISTEX Plateforme créé par EBSCO.

L’activation par l’administrateur du compte se passe dans le sous onglet Linking du ou des Group(s) et profil(s) concernés. Elle sera à répéter pour chaque profil et ou Group. Exemple le plus fréquent, Group Main, profil (eds), onglet Linking, puis Customlinks / lien Modify.

![](../../.gitbook/assets/custom1.png)

### **A- Premier cas : ISTEX plateforme est déjà activé parmi les customlinks EDS**

1. Cliquer sur SetUp/Maintain CustomLinks
2. Descendre jusqu’au lien ISTEX plateforme et cliquer sur le lien
3. Descendre jusqu’à la fonction Local Collections for Filter

![](../../.gitbook/assets/custom2.png)

1. Appuyer sur la touche ctrl du clavier et en même temps cliquer sur la source déjà sélectionnée (si elle se désélectionne, la cocher de nouveau sans lâcher la touche ctrl)
2. Toujours en appuyant sur la touche ctrl, appuyer sur la touche F du clavier pour ouvrir le champ de recherche dans la page et tapez ISTEX pour aller à toutes les occurrences du mot.

![](../../.gitbook/assets/custom3.png)

1. Utiliser les flèches du champ de recherche pour naviguer d’occurrence en occurrence.
2. Sans lâcher la touche ctrl, sélectionner la/les nouvelle(s) source(s) choisie(s) puis valider.

![](../../.gitbook/assets/custom4.png)

### **B - Deuxième cas : ISTEX plateforme n’est pas activé parmi les customLinks EDS**

1. Cliquer sur SetUp/Maintain CustomLinks
2. Cliquer sur Add New CustomLink
3. Cocher “Copy from existing CustomLink » et cliquer sur Continue
4. Dans Choose Category, sélectionner Full Text et cliquer sur ++show other available CustomLinks
5. Descendre jusqu’au lien ISTEX plateforme et cliquer sur le lien
6. Descendre jusqu’à la fonction Local Collections for Filter
7. Suivre les étapes 4 à 7 de du Cas N°1

**C - Précautions**

* Au moment de créer un Custom Link, si on veut pouvoir rajouter des corpus, il faut qu'EBSCO nous les propose et pour cela il faut impérativement sélectionner:

"leave as an EBSCO-managed link..."

![](../../.gitbook/assets/ebscogestion.png)

* Il est possible de vérifier les corpus présents dans le custom link ISTEX plateforme en sélectionnant:

Linking/Add New CustomLinks

![](../../.gitbook/assets/setup-1.png)

Chercher ISTEX plateforme et cliquer sur Go

![](../../.gitbook/assets/controlecustom.png)

Voir la rubrique : Local Collections for Filter

![](../../.gitbook/assets/customcomplet.png)
