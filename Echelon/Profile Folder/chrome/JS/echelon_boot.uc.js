// ==UserScript==
// @name			Echelon :: Functions Loader
// @description 	Loads resources required for Echelon.
// @author			Travis
// @include			main
// @loadOrder       14
// ==/UserScript==

const { ctypes } = ChromeUtils.import("resource://gre/modules/ctypes.jsm");

function executeFunctions() {
	EchelonThemeManager.init();
	getAndSetTitleBarHeight();
	createAppMenuButton();
	createAddToBookmarks();
	echelonInitLayout();
	openEchelonWizardWindow(true);
	addEchelonOptionsMenuItem();
	addEchelonTabsOnTopMenuItem();
	observeMenuBar();
	observeIdentityLabel();
	changeTitleFormats();
	updateAboutItem();
	EchelonPopupManager.registerEvent();
	EchelonSearchManager.installSearchBoxHook();

	window.addEventListener("echelon-reopen-wizard", function(e) {
		// Kill the wizard notification early. Technically, it will disappear as soon as this
		// callback ends, but it looks bad.
		gBrowser?.getNotificationBox()?.getNotificationWithValue("echelon-setup-closed")?.dismiss();

		openEchelonWizardWindow(false);
	});

	// This particular tooltip element that is used for the search bar, extensions,
	// etc, is completely untouchable, even with author styles. We must set its style
	// attribute with JS.
	waitForElement(":root > tooltip").then(e => {
		console.log("root tooltip hi");
		e.setAttribute("style", "-moz-default-appearance:tooltip!important;appearance:auto!important");
	});

    console.info("Functions executed.");
}

window.addEventListener("load", function () {
    executeFunctions();  
})	