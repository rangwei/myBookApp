sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"com/myorg/myBookApp/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("com.myorg.myBookApp.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			//this.setModel(models.loadBooks(), "books");

			this.getModel("books").attachEventOnce("metadataFailed", function (oEvent) {
				/*eslint-disable no-alert */
				alert("Request to the OData remote service failed.\nRead the Walkthrough Tutorial Step 26 to understand why you don't see any data here.");
				/*eslint-enable no-alert */
			});
		}
	});
});
