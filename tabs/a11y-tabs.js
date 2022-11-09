/**
 * EXTENSIONS / TABS / A11Y-TABS
 *
 * This is an accessible tab solution extension based on guidelines documented
 * by Heydon Pickering on the Inclusive Components Pattern Library.
 * https://inclusive-components.design/tabbed-interfaces/
 *
 * Version: 10.05.00
 */

const tabbedContent = (document => {
	const publicMethods = {}; // Placeholder for public methods

	/**
	 * Initialize the plugin
	 * @public
	 */
	publicMethods.init = () => {
		// Get relevant elements and collections
		const tabbed = document.querySelector('[data-tab-component]');
		const tabList = tabbed.querySelector('ul');
		const tabs = tabList.querySelectorAll('a');
		const panels = tabbed.querySelectorAll('[id^="tab-"]');
		let hash = window.location.hash;
		let targetTab = [...tabs].filter(({href}) => href.includes(hash));
		let targetPanel = [...panels].filter(({id}) => id === hash.replace('#', ''));

		/**
		 * The tab switching functionality
		 * @param oldTab
		 * @param newTab
		 */
		const switchTab = function switchTab(oldTab, newTab) {
			newTab.focus();
			// Make the active tab focusable by the user (Tab key)
			newTab.removeAttribute('tabindex');
			// Set the selected state
			newTab.setAttribute('aria-selected', 'true');
			oldTab.removeAttribute('aria-selected');
			oldTab.setAttribute('tabindex', '-1');
			/**
			 * Get the indices of the new and old tabs to find the correct tab
			 * panels to show and hide
			 */
			let index = Array.prototype.indexOf.call(tabs, newTab);
			let oldIndex = Array.prototype.indexOf.call(tabs, oldTab);

			panels[oldIndex].hidden = true;
			panels[index].hidden = false;
		};

		// Add the tablist role to the first <ul> in the .tabbed container
		tabList.setAttribute('role', 'tablist');

		// Add semantics and remove user focusability for each tab
		Array.prototype.forEach.call(tabs, (tab, i) => {
			tab.setAttribute('role', 'tab');
			tab.setAttribute('id', `tab${i + 1}`);
			tab.setAttribute('tabindex', '-1');
			tab.parentNode.setAttribute('role', 'presentation');

			// Handle clicking of tabs for mouse users
			tab.addEventListener('click', clickEvent => {
				clickEvent.preventDefault();
				let currentTab = tabList.querySelector('[aria-selected]');

				if (clickEvent.currentTarget !== currentTab) {
					if (window.getComputedStyle(tabbed, '::before').content.replace(/"/g, '') === 'max') {
						tabbed.scrollIntoView(true);
					}

					switchTab(currentTab, clickEvent.currentTarget);
				}
			});

			// Handle keydown events for keyboard users
			tab.addEventListener('keydown', keydownEvent => {
				if ([37, 39, 40].includes(keydownEvent.which)) {
					keydownEvent.preventDefault();
				}
			}, false);

			// Handle keyup events for keyboard users
			tab.addEventListener('keyup', keyupEvent => {
				// Get the index of the current tab in the tabs' node list
				let index = Array.prototype.indexOf.call(tabs, keyupEvent.currentTarget);
				/**
				 * Work out which key the user is pressing and calculate the new
				 * tab's index where appropriate
				 * @type {number}
				 */
				let dir = keyupEvent.which === 37 ? index - 1 : keyupEvent.which === 39 ? index + 1 : keyupEvent.which === 40 ? 'down' : keyupEvent.shiftKey && keyupEvent.which === 9 ? 'reverse' : null;

				if (dir !== null) {
					keyupEvent.preventDefault();
					// If the down key is pressed, move focus to the open panel.
					if (dir === 'down') {
						panels[i].focus();
					}
					/**
					 * If the Shift+Tab combination is pressed, remove focus on the
					 * open panel and return focus to the tab.
					 */
					else if (dir === 'reverse') {
					}
					// If an arrow key is pressed, switch to the adjacent tab.
					else if (tabs[dir]) {
						switchTab(keyupEvent.currentTarget, tabs[dir]);
					}
					else {
						void 0;
					}
				}
			});
		});

		/**
		 * Add tab panel semantics and hide them all
		 */
		Array.prototype.forEach.call(panels, (panel, i) => {
			panel.setAttribute('role', 'tabpanel');
			panel.setAttribute('tabindex', '-1');
			panel.setAttribute('aria-labelledby', tabs[i].id);
			panel.hidden = true;
		});

		/**
		 * If the URL contains a tab hash, activate and scroll to the relevant panel.
		 * Otherwise, initially activate the first tab and reveal the first tab panel.
		 */
		if (targetTab.length === 1 && hash.includes('#')) {
			targetTab[0].removeAttribute('tabindex');
			targetTab[0].setAttribute('aria-selected', 'true');
			targetPanel[0].hidden = false;
			setTimeout(() => {
				targetTab[0].scrollIntoView({
					behavior: 'smooth',
					block: 'center'
				});
			}, 250);
		}
		else {
			tabs[0].removeAttribute('tabindex');
			tabs[0].setAttribute('aria-selected', 'true');
			panels[0].hidden = false;
		}
	};

	/**
	 * Public APIs
	 */
	return publicMethods;

})(document);
