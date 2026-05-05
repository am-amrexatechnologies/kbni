sap.ui.define([
    "./BaseController"
], (Controller) => {
    "use strict";

    return Controller.extend("kobeni.controller.Login", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
        },

        onRouteMatched(oEvent) {}
    });
});