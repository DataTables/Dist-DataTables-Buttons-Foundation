/*! Buttons Foundation styling 4.1.3 for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */

(function(factory){
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['datatables.net-zf', 'datatables.net-buttons'], function (dt) {
			return factory(window, document, dt);
		});
	}
	else if (typeof exports === 'object') {
		if (typeof window === 'undefined') {
			module.exports = function (root) {
				if (! root) {
					// CommonJS environments without a window global must pass a
					// root. This will give an error otherwise
					root = window;
				}
				
				var DataTable = root.DataTable ?
					root.DataTable :
					require('datatables.net-zf')(root);

				if (! root.DataTable.Buttons) {
					require('datatables.net-buttons')(root);
				}

				return factory(root, root.document, DataTable);
			};
		}
		else {
			var DataTable = window.DataTable ?
				window.DataTable :
				require('datatables.net-zf');

			if (! window.DataTable.Buttons) {
				require('datatables.net-buttons');
			}

			module.exports = factory(window, window.document, DataTable);
		}
	}
	else {
		// Browser
		factory(window, document, window.DataTable);
	}
}(function(window, document, DataTable) {
'use strict';



var Dom = DataTable.Dom;
var util = DataTable.util;

util.object.assignDeep(DataTable.Buttons.defaults, {
	dom: {
		container: {
			tag: 'div',
			className: 'dt-buttons button-group'
		},
		button: {
			tag: 'a',
			className: 'dt-button button small',
			active: 'secondary active'
		},
		collection: {
			button: {
				tag: 'li',
				className: 'dt-button',
				active: 'dt-button-active-a',
				liner: {
					tag: 'a'
				}
			},
			container: {
				tag: 'div',
				className: 'dt-button-collection',
				content: {
					tag: 'ul',
					className: 'dropdown menu is-dropdown-submenu'
				}
			}
		},
		split: {
			action: {
				tag: 'button',
				className: 'button small'
			},
			dropdown: {
				tag: 'button',
				className: 'button arrow-only'
			},
			wrapper: {
				tag: 'div',
				className: 'button-group dt-button-split'
			}
		}
	}
});

Dom.on('buttons-popover.dt', function () {
	var notButton = false;

	Dom.s('.dtsp-panesContainer').each(function (el) {
		if (!Dom.s(el).is('button')) {
			notButton = true;
		}
	});

	if (notButton) {
		Dom.s('.dtsp-panesContainer').classRemove('button-group stacked');
	}
});


return DataTable;
}));
