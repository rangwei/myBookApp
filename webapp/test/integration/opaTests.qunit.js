/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"com/myorg/myBookApp/test/integration/AllJourneys"
	], function() {
		QUnit.start();
	});
});
