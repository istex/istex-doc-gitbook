# Remplacer les documents TXT par les documents OCR

Cette procédure est utile si l'on souhaite exploiter les documents TXT pour faire de la fouille de textes.

Les fichiers TXT résultent d’une transformation du PDF par l’API Istex via PDF-to-text.

Les fichiers OCR sont des documents issus d’un processus d’océrisation par l’équipe ISTEX-DATA lorsque le TXT est de mauvaise qualité \(voir billet de blog [**"OCR - production de plein texte"**](http://blog.istex.fr/ocr-production-de-plein-texte/)\).

Lorsqu’un fichier OCR est disponible pour un document et que l’on a pensé à l’extraire, il faut écraser le fichier TXT existant par le fichier OCR qui sera de meilleure qualité.

La commande suivante permet de réaliser cette action :

```bash
for i in *.ocr
do
j=`basename $i .ocr`
mv $i $j.txt
done
```

