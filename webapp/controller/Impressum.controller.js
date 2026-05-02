sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("kobeni.controller.Impressum", {
        onInit() {
        },

        onRouteMatched(oEvent) {
            console.log("Impressum")
        }
    });
});