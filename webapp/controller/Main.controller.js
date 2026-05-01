sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("kobeni.controller.Main", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
        },

        onImpressumPress() {
            this.oRouter.navTo("RouteImpressum");
        }
    });
});