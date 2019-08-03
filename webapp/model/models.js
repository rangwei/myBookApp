sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {
		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		loadBooks: function() {
			var booksUrl = "http://localhost:4004/catalog/Books";
			var oListModel = new sap.ui.model.json.JSONModel();
			oListModel.loadData(booksUrl);
			oListModel.setDefaultBindingMode("OneWay");
			return oListModel;
		}
	};
});
