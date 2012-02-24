/*
Copyright (c) 2003-2011, CKSource - Frederico Knabben. All rights reserved.
For licensing, see LICENSE.html or http://ckeditor.com/license
*/

CKEDITOR.skin.addSkin( 'kama', {
	/**
	 * @lend CKEDITOR.skin.uaParts
	 */
	uaParts: [ 'ie', 'ie6', 'ie7', 'ie8', 'gecko', 'opera', 'webkit' ],

	/**
	 * @lend CKEDITOR.skin.chameleon
	 */
	chameleon: function( editor, part ) {
		var css,
			cssId = '.' + editor.id;

		if ( part == 'editor' ) {
			var cssSelectors = [
				cssId + " .cke_inner",
				cssId + "_dialog .cke_dialog_contents",
				cssId + "_dialog a.cke_dialog_tab",
				cssId + "_dialog .cke_dialog_footer"
				].join( ',' );
			var cssProperties = "background-color: $color !important;";

			css = cssSelectors + '{' + cssProperties + '}';
		} else if ( part == 'panel' ) {
			css = ".cke_menuitem .cke_icon_wrapper\
			   {\
			   background-color: $color !important;\
			   border-color: $color !important;\
			   }\
			   \
			   .cke_menuitem a:hover .cke_icon_wrapper,\
			   .cke_menuitem a:focus .cke_icon_wrapper,\
			   .cke_menuitem a:active .cke_icon_wrapper\
			   {\
			   background-color: $color !important;\
			   border-color: $color !important;\
			   }\
			   \
			   .cke_menuitem a:hover .cke_label,\
			   .cke_menuitem a:focus .cke_label,\
			   .cke_menuitem a:active .cke_label\
			   {\
			   background-color: $color !important;\
			   }\
			   \
			   .cke_menuitem a.cke_disabled:hover .cke_label,\
			   .cke_menuitem a.cke_disabled:focus .cke_label,\
			   .cke_menuitem a.cke_disabled:active .cke_label\
			   {\
			   background-color: transparent !important;\
			   }\
			   \
			   .cke_menuitem a.cke_disabled:hover .cke_icon_wrapper,\
			   .cke_menuitem a.cke_disabled:focus .cke_icon_wrapper,\
			   .cke_menuitem a.cke_disabled:active .cke_icon_wrapper\
			   {\
			   background-color: $color !important;\
			   border-color: $color !important;\
			   }\
			   \
			   .cke_menuitem a.cke_disabled .cke_icon_wrapper\
			   {\
			   background-color: $color !important;\
			   border-color: $color !important;\
			   }\
			   \
			   .cke_menuseparator\
			   {\
			   background-color: $color !important;\
			   }\
			   \
			   .cke_menuitem a:hover,\
			   .cke_menuitem a:focus,\
			   .cke_menuitem a:active\
			   {\
			   background-color: $color !important;\
			   }";
		}

		return css;
	}
});
