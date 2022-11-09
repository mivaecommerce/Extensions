/**
 * EXTENSIONS / SHOW RELATED / A11Y TOGGLE
 *
 * An accessible replacement to the checkbox-hack for toggling sections.
 * https://github.com/edenspiekermann/a11y-toggle
 *
 * By: https://kittygiraudel.com/
 * MIT License: https://github.com/edenspiekermann/a11y-toggle/blob/master/LICENSE
 */

(() => {
	const distinct = (value, index, self) => self.indexOf(value) === index;

	let atResizeTimeout;
	let internalId = 0;
	let togglesMap = {};
	let targetsMap = {};

	function $(selector, context) {
		return Array.prototype.slice.call(
			(context || document).querySelectorAll(selector)
		);
	}

	function getClosestToggle(element) {
		if (element.closest) {
			return element.closest('[data-a11y-toggle]');
		}

		while (element) {
			if (element.nodeType === 1 && element.hasAttribute('data-a11y-toggle')) {
				return element;
			}

			element = element.parentNode;
		}

		return null;
	}

	function handleToggle(toggle) {
		let target = toggle && targetsMap[toggle.getAttribute('aria-controls')];

		if (!target) {
			return false;
		}

		let toggles = togglesMap[`#${target.id}`];
		let isExpanded = target.getAttribute('aria-hidden') === 'false';

		target.setAttribute('aria-hidden', isExpanded);
		toggles.forEach(toggle => {
			toggle.setAttribute('aria-expanded', !isExpanded);
		});
	}

	let initA11yToggle = context => {
		togglesMap = $('[data-a11y-toggle]', context).reduce((acc, toggle) => {
			let selector = `#${toggle.getAttribute('data-a11y-toggle')}`;

			acc[selector] = acc[selector] || [];
			acc[selector].push(toggle);
			return acc;
		}, togglesMap);

		let targets = Object.keys(togglesMap);

		targets.length && $(targets).forEach(target => {
			let toggles = togglesMap[`#${target.id}`];
			let isExpanded = target.hasAttribute('data-a11y-toggle-open');
			let labelledby = [];

			if (toggles[0].offsetWidth > 0 && toggles[0].offsetHeight > 0) {
				toggles.forEach(toggle => {
					toggle.id || toggle.setAttribute('id', `a11y-toggle-${internalId++}`);
					toggle.setAttribute('aria-controls', target.id);
					toggle.setAttribute('aria-expanded', isExpanded);
					labelledby.push(toggle.id);
				});
				let distinctLabel = labelledby.filter(distinct);

				target.setAttribute('aria-hidden', !isExpanded);
				target.hasAttribute('aria-labelledby') || target.setAttribute('aria-labelledby', distinctLabel.join(' '));
				target.setAttribute('role', 'region');
			}
			else {
				toggles.forEach(toggle => {
					toggle.removeAttribute('id');
					toggle.removeAttribute('aria-controls');
					toggle.removeAttribute('aria-expanded');
				});

				target.removeAttribute('aria-hidden');
				target.removeAttribute('aria-labelledby');
				target.removeAttribute('role');

			}

			targetsMap[target.id] = target;
		});
	};

	let destroyA11yToggle = () => {
		let targets = Object.keys(togglesMap);

		targets.length && $(targets).forEach(target => {
			let toggles = togglesMap[`#${target.id}`];

			toggles.forEach(toggle => {
				toggle.removeAttribute('id');
				toggle.removeAttribute('aria-controls');
				toggle.removeAttribute('aria-expanded');
			});

			target.removeAttribute('aria-hidden');
			target.removeAttribute('aria-labelledby');
			target.removeAttribute('role');

			targetsMap[target.id] = target;
		});
	};

	let closeA11yToggle = trigger => {
		if (trigger) {
			const thisToggle = document.querySelector(`#${trigger.getAttribute('data-a11y-toggle')}`);

			document.addEventListener('mousedown', event => {
				if (thisToggle.getAttribute('aria-hidden') === 'false') {
					if (!thisToggle.contains(event.target) && event.target !== trigger) {
						trigger.click();
						event.preventDefault();
					}
				}
			}, false);
		}
	};

	/**
	 * Auto-initialize A11y Toggle when the document is complete.
	 */
	if (document.readyState === 'complete') {
		initA11yToggle();
	}

	/**
	 * This will reinitialize A11y Toggle on `resize` to either enable or destroy
	 * toggles who have their display managed through media queries.
	 */
	window.addEventListener('resize', () => {
		if (atResizeTimeout) {
			window.cancelAnimationFrame(atResizeTimeout);
		}

		atResizeTimeout = window.requestAnimationFrame(() => {
			initA11yToggle();
		});
	}, false);

	document.addEventListener('click', event => {
		let toggle = getClosestToggle(event.target);

		if (toggle && toggle.hasAttribute('data-a11y-toggle')) {
			event.preventDefault();
		}
		handleToggle(toggle);
	});

	document.addEventListener('keyup', ({key, target}) => {
		if (key === 'Enter' || key === ' ') {
			let toggle = getClosestToggle(target);

			if (toggle && toggle.getAttribute('role') === 'button') {
				handleToggle(toggle);
			}
		}
	});

	window && (window.a11yToggle = initA11yToggle);
	window && (window.a11yToggleDestroy = destroyA11yToggle);
	window && (window.a11yToggleClose = closeA11yToggle);
})();
