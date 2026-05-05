sap.ui.define([
    "./BaseController"
], (Controller) => {
    "use strict";

    return Controller.extend("kobeni.controller.Main", {
        onInit() {
            this.oRouter = this.getOwnerComponent().getRouter();
        },

        onImpressumPress() {
			this.oRouter.navTo("RouteImpressum");
        },

        onLoginPress() {
            this.oRouter.navTo("RouteLogin");
        },

        onRegisterPress() {
            this.oRouter.navTo("RouteRegister");
        }
    });
});