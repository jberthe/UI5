		//
		// Validation des champs obligatoires d'un Form
		// A appeler par exemple : 
		// - Sur le activate d'un wizard step
		// - Sur le liveChange d'un input ou d'un textarea
		// - Sur le selectionChange d'un select ou d'un combobox
		// - Sur le change d'un datepicker
		//
		_validateStep: function (oForm) {
				var bAllOk = true;
				// Parcours de tous les champs du form pour vérifier les champs requis
				oForm.getFormContainers().forEach(function (container) {
					container.getFormElements().forEach(function (element) {
						element.getFields().forEach(function (field) {
							if (field instanceof sap.m.Input || field instanceof sap.m.ComboBox || field instanceof sap.m.TextArea || field instanceof sap
								.m.Select || field instanceof sap.m.DatePicker) {
								if (field.getProperty("required")) {
									if (!this._fieldHasValue(field)) {
										// Error le champs est requis
										field.setValueState(sap.ui.core.ValueState.Error);
										bAllOk = false;
									} else {
										field.setValueState(sap.ui.core.ValueState.None);
									}
								}
							}
						}.bind(this));
					}.bind(this));
				}.bind(this));
				return bAllOk;
			},

			//
			// Le champ est-il valorisé ?
			//
			_fieldHasValue: function (oField) {
				if (oField instanceof sap.m.Input || oField instanceof sap.m.TextArea || oField instanceof sap.m.DatePicker) {
					return oField.getValue() && oField.getValue() !== "";
				} else if (oField instanceof sap.m.ComboBox || oField instanceof sap.m.Select) {
					return oField.getSelectedItem() !== null;
				} else {
					return false;
				}
			},