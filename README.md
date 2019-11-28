# UI5 - Référence
Bonnes pratiques et exemple des code pour les deéveloppements UI5

## Bonnes pratiques
### Structure d'un projet

La structure visée est la suivante : 
* Formatter, Models, et autres classe utilitaires de traitement des données dans le répertoire model
* Fragments dans un sous-répertoire des vues
* Les éventuels models locaux JSON également dans le répertoire model
* Les éventuelles annotations dans un fichier nommé suivant le nom du service et dans le répertoire model ou localService

Exemple :

![Structure](/Images/structure.jpg)

### Organisation du code
#### Classe d'accès au données

Créer une classe Models.js qui contiendra toutes les opérations liées aux modèles de l'application (CRUD...)

Exemple de Models.js :

```javascript
sap.ui.define([
	"sap/ui/base/Object",
	"sap/ui/model/json/JSONModel"
], function(Object, JSONModel ) {
	"use strict";

	return Object.extend("<mon_package>/model/Models", {

		oComponent: null,

		constructor: function(oComponent) {
			this.oComponent = oComponent;
		},
		[...]
	});
});
```

Pour y accéder facilement on peut instancier cette classe dans le composant et créer un getter correspondant

```javascript
[...]
modelHelper: null,
[...]
init: function() {
	[...]
	this.modelHelper = new Models(this);
	[...]
},
getModelHelper: function() {
	return this.modelHelper;
}
```

Pour simplifier le code des controllers, on pourra dans le BaseController créer une méthode d'accès

```javascript
getModelHelper: function() {
	return this.getOwnerComponent().getModelHelper();
}
```

#### Template standard d'un controller

Utiliser l'événement onRouteMatched pour les traitements initiaux.
Ensuite effectuer les éventuels appels oData sous forme de promesses chainées après la chargement des métadonnées du modèle.

```javascript
onInit: function() {
	this.getRouter().getRoute("<ma_route>").attachMatched(this.on<ma_route>Matched);
},

on<ma_route>Matched: function(event) {
	this.getView().setBusy(true);
	this.getModel().metadataLoaded()
		.then(this.getModelHelper().<lecture_du_modèle>)
		.then(this._<maj_de_l_ui>);
}
```

### Nommages

* Application : Z<module>_<nom metier> (ex : ZSD_LISTE_CMDS) (15 char max)
* Namespace : ch.rolex.<module>.<application> (Ex : ch.rolex.sd.liste_cmds)
* Vues : <nom>.view.xml (Ex : main.view.xml)
* Fragments : <nom>.fragment.xml (Ex : table.fragment.xml)
* Controlleurs : <Nomdelavue>.controller.js  (Ex : Main.controller.js)
* Model local : <Nom>.json
* Fichiers d’annotations : <Nomdumodèle>.anno.xml

## Exemples / demos
* [Promesses](Exemples/Promise.js) : utilisation des promesses (exemple de chainage)
* [Classe](Exemples/Class.js) : utilisation des class (ES6)
* [ES6](Exemples/ES6.js) : exemples de nouvelle syntaxe ES6 (déclarations, fonction fléchées, template, class...)
* [Validation Form](Exemples/Validation_form.js) : routine pour validation des champs obligatoires d'un form
