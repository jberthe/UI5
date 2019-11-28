	return {
		resultInput: new sap.m.Input(),

		// Appel de la promesse avec passage en paramètre des deux fonctions de gestion de succès / erreur
		demo1: function (input) {
			this.resultInput = input;
			this._simplePromise().then(this._success.bind(this), this._reject.bind(this));
		},

		// Promise simple
		_simplePromise: function () {
			return new Promise(function (resolve, reject) {
				// Résultat ok 1 fois sur 2
				if (Math.random() > .5) {
					resolve("Succès");
				} else {
					reject("Echec");
				}
			});
		},

		// Promesses chainées
		demo2: function (input) {
			this.resultInput = input;
			this.ajoutA("")
				.then(this.ajoutB)
				.then(this.ajoutC)
				.then(this._success.bind(this))
				.catch(function (msg) {
					input.setValue(msg);
				});
		},

		// Promesse ajoute "a"
		ajoutA: function (string) {
			return new Promise(function (resolve, reject) {
				resolve(string + "a");
			});
		},

		// Promesse ajoute "b" après 2 secondes
		ajoutB: function (string) {
			return new Promise(function (resolve, reject) {
				setTimeout(function () {
					resolve(string + "b");
				}, 2000);
			});
		},

		// Promesse ajoute "c"
		ajoutC: function (string) {
			return new Promise(function (resolve, reject) {
				resolve(string + "c");
			});
		},

		/*******************************************
		 * Fonction de gestion des succès et error
		 *******************************************/
		_success: function (sMessage) {
			this.resultInput.setValue(sMessage);
		},
		_reject: function (sMessage) {
			this.resultInput.setValue(sMessage);
		}
	};
