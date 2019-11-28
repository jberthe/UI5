	return {
		separateur: null,

		// Variable let et const
		demo1: function () {
			const maVariableNonMutable = "Non modifiable";
			let maVariableMutable = "Modifiable";
			
			// Déclenche une erreur :
			maVariableNonMutable = "modifiée";
			
			// Ne déclenche pas d'erreur :
			maVariableMutable = "modifiée";
		},
		
		// Fonction fléchée
		demo2: function () {
			const tab = ['a', 'b', 'c'];
			tab.forEach(element => console.log(element));
		},
		
		// Fonction flechée et template (parenthèses inutiles si un seul paramètre)
		demo3: (param1, param2)=>{
			console.log(`Résultat ${param1} - ${param2}`);
		},
		
		// Fonction fléchée : le this est celui de la portée supérieur si trouvé, plus besoin de bind ou de that !
		demo4: () =>{
			const tab = ['a', 'b', 'c'];
			this.separateur = "+";
			tab.forEach(element => console.log(element + this.separateur));
		},
		
	};
