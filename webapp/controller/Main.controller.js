sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("kobeni.controller.Main", {
        onInit() {
        },

        onImpressumPress() {
            const oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("impressum");
        }
    });
});