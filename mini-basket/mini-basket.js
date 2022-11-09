/**
 * EXTENSIONS / MINI-BASKET / MINI-BASKET
 *
 * This is the default, off-canvas, mini-basket functionality of Miva.
 *
 * Version: 10.05.00
 */

const miniBasket = (document => {
	let mbElement = document.querySelector('[data-hook="mini-basket"]');
	let mbContent = mbElement.querySelector('[data-hook="mini-basket__content"]');
	let publicMethods = {};
	let openTrigger;

	/**
	 * Merge two or more objects. Returns a new object.
	 * Set the first argument to `true` for a deep or recursive merge [optional]
	 * @private
	 * @returns {Object}	Merged values of defaults and options
	 */
	let extend = function (...args) {

		let extended = {};
		let deep = false;
		let i = 0;
		let length = args.length;

		if (Object.prototype.toString.call(args[0]) === '[object Boolean]') {
			deep = args[0];
			i++;
		}

		let merge = obj => {
			for (let prop in obj) {
				if (Object.prototype.hasOwnProperty.call(obj, prop)) {
					if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
						extended[prop] = extend(true, extended[prop], obj[prop]);
					}
					else {
						extended[prop] = obj[prop];
					}
				}
			}
		};

		for (; i < length; i++) {
			let obj = args[i];
			merge(obj);
		}

		return extended;

	};

	/**
	 * Toggle the visibility of the mini-basket
	 * @private
	 */
	let toggleMenu = (event, display) => {
		if (mivaJS.miniBasket.use) {
			event.preventDefault();
			event.stopPropagation();
			if (display === 'open') {
				mbElement.parentElement.hidden = false;
			}

			setTimeout(() => {
				document.documentElement.classList.toggle('u-overflow-hidden');
				mbElement.classList.toggle('x-mini-basket--open');
				a11yHelper();
			}, 50);

			if (display === 'close') {
				setTimeout(() => {
					mbElement.parentElement.hidden = true;
				}, 300);
			}
		}
		else {
			document.location = event.target.dataset.link;
		}
	};

	/**
	 * Manage focus for accessibility
	 * @private
	 */
	let a11yHelper = () => {
		const FOCUSABLE_ELEMENTS = [
			'a[href]',
			'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
			'select:not([disabled]):not([aria-hidden])',
			'textarea:not([disabled]):not([aria-hidden])',
			'button:not([disabled]):not([aria-hidden])',
			'[tabindex]:not([tabindex^="-"])'
		];
		let focusableElements = mbContent.querySelectorAll(FOCUSABLE_ELEMENTS);
		let firstFocus = focusableElements[0];
		let lastFocus = focusableElements[focusableElements.length - 1];

		function handleKeyboard(keyEvent) {
			let tabKey = (keyEvent.key === 'Tab' || keyEvent.keyCode === 9);

			function handleBackwardTab() {
				if (document.activeElement === firstFocus) {
					keyEvent.preventDefault();
					lastFocus.focus();
				}
			}

			function handleForwardTab() {
				if (document.activeElement === lastFocus) {
					keyEvent.preventDefault();
					firstFocus.focus();
				}
			}

			if (!tabKey) {
				return;
			}

			if (keyEvent.shiftKey) {
				handleBackwardTab();
			}
			else {
				handleForwardTab();
			}
		}

		if (mbElement.classList.contains('x-mini-basket--open')) {
			openTrigger = document.activeElement;
			mbContent.focus();
			mbContent.addEventListener('keydown', keyEvent => {
				handleKeyboard(keyEvent);
			});
		}
		else {
			openTrigger.focus();
			mbContent.removeEventListener('keydown', handleKeyboard);
		}
	};

	/**
	 * Toggle the visibility of the mini-basket
	 * @public
	 */
	publicMethods.toggle = (event, display) => {
		toggleMenu(event, display);
	};

	/**
	 * Initialize the plugin
	 * @public
	 */
	publicMethods.init = options => {
		mbElement.parentElement.hidden = true;

		document.querySelector('[data-hook="site-header"]').addEventListener('click', event => {
			if (!event.target.closest('[data-hook~="open-mini-basket"]')) {
				return;
			}
			toggleMenu(event, 'open');
		}, false);

		document.querySelector('[data-hook="mini-basket"]').addEventListener('click', event => {
			if (!event.target.closest('[data-hook~="close-mini-basket"]')) {
				return;
			}
			toggleMenu(event, 'close');
		}, false);

		if (mivaJS.miniBasket.use && mivaJS.miniBasket.closeOnBackground) {
			mbElement.addEventListener('click', function (event) {
				if (event.target === this) {
					toggleMenu(event, 'close');
				}
			}, false);
		}

		if (mivaJS.miniBasket.use && mivaJS.miniBasket.closeOnEsc) {
			window.addEventListener('keydown', event => {
				let escKey = (event.key === 'Escape');

				if (event.defaultPrevented) {
					return;
				}

				if (!escKey) {
					return;
				}

				if (escKey) {
					if (mbElement.classList.contains('x-mini-basket--open')) {
						event.preventDefault();
						toggleMenu(event, 'close');
					}
				}
			}, true);
		}
	};

	/**
	 * Public APIs
	 */
	return publicMethods;
})(document);
