		//
		// Utilisation du keyword class (ES6)
		//
	
    MyClasse: class {
			constructor(name) {
				this._name = name;
			}

			get name() {
				return this._name;
			}
		},
    
  	demo3: function (text) {
			var instance = new this.MyClasse("Nom de ma classe");
			text.setValue(instance.name);
		},
