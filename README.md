# POC AkaBi Contact

Détail:
- Demande de permissions d'accès en lecture/ecriture de la liste de contact
- 1 Bouton Permettant d'Ajouter un contact:
  - Prénom: Anna
  - Nom: AkaBiNom
  - Tel: +33 1 00 00 00 00
- Implémentation d'un compteur de 1 à 3 pour pouvoir créer les contacts Anna AkaBiNom 1, Anna AkaBiNom 2, Anna AkaBiNom 3
- A chaque création le contact est ajouter au contact-list et une popup de confirmation est affiché
- Une fois que le contact Anna AkaBiNom 3 est créé, une popup affiche que le contact est déjà créé (on ne peut plus en ajouter)

- Une liste des contacts est affiché sous le bouton avec photo/ Nom/ Prénom
- Au lancement de l'appli, un Loader s'affiche en attendant que la liste soit bien affichée
- Lorsqu'un nouveau contact est créé, la liste est refresh et il est visible en dernière position (je n'ai pas fait de tri)

- Lors du clic sur un élément de la liste: 
  - Le numéro de téléphone +33 1 23 45 67 89 est automatiquement ajouté au contact sélectionné
  - Une popup avec un message confirme cette action
  
# Réflexions sur l'API:
- Utilisation de la librairie : https://github.com/rt2zz/react-native-contacts

- L'ajout/ update d'un contact ou d'un élément (numéro de tel, mail, nom...) est assez simple et ne présente pas de difficulté aussi bien sur Android que sur iOS

- Si l'on a un grand nombre de contact, je pense que la liste est un peu longue à charger... Pour ce POC je n'ai pas chercher à optimiser outre mesure ce comportement.. Cela peut engendré une impression d'attente ou d'appuye sur le bouton et rien ne se passe derrière: Solution - Le problème est assez simple à gérer en appelant la méthode Contacts.getAll de manière asynchrone au chargement de l'appli.

# Principale difficulté:
- A l'heure actuelle, via cet API on peut écrire tous les champs sauf la partie thumbnailPath (image contact). Solution:
  - Ce problème va surement être résolu dans le futur
  - On peut trouver une autre méthode pour sauvegarder l'image (autre librairie...)
  - On peut participer nous même à la correction de ce problème en participant à la modification de cette librairie
  NB: Je ne me suis pas attardé plus que ça sur le problème en ne voulant pas passer trop de temps dessus...
  
 - Si on utilise cette API il faudra également faire attention à ce point: 
    There are issues with updating contacts on Android:
    custom labels get overwritten to "Other",
    postal address update code doesn't exist. (it exists for addContact) See https://github.com/rt2zz/react-native-     contacts/issues/332#issuecomment-455675041 for current discussions.
  
# Remarque indépendante de ma volonté:
- Je n'ai malheureusement pas pu compilé mon code pour le faire fonctionné sur iOS... Comme expliqué précédemment je ne suis hélas pas en possession d'un MAC donc pas de Xcode... J'espère que cela ne me portera pas trop préjudice

# Test sur un device
- Récupérer l'apk à l'adresse: https://we.tl/t-iRGNQ4XbON avant le 23/07/2019
- Ouvrir le fichier sur un device Android
- Autoriser l'installation de source inconnue

Bonne réception!!

