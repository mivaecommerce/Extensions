/**
 +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
 |c|o|l|l|a|p|s|i|n|g| |b|r|e|a|d|c|r|u|m|b|s|
 +-+-+-+-+-+-+-+-+-+-+ +-+-+-+-+-+-+-+-+-+-+-+
 *
 * This extension is a variation on the Priority + navigation pattern where extra links are
 * hidden behind a trigger when they do not fit into the allotted space. With breadcrumbs,
 * we are hiding the links at the start of the list, instead of at the end.
 */

(function ($, window) {
	'use strict';

	const $breadcrumbNavigation = $.hook('collapsing-breadcrumbs');
	const $triggerArea = $.hook('collapsing-breadcrumbs__trigger-area');
	const $displayButton = $.hook('collapsing-breadcrumbs__button');
	const $visibleLinks = $.hook('collapsing-breadcrumbs__list');
	const $hiddenLinks = $.hook('collapsing-breadcrumbs__group');
	let numOfItems = 0;
	let totalSpace = 64;
	let breakWidths = [];
	let availableSpace;
	let numOfVisibleItems;
	let requiredSpace;

	/**
	 * Check the total space required for the breadcrumb links and how many there are.
	 */
	$visibleLinks.children().each(function () {
		totalSpace += $(this).outerWidth(true) + (parseInt($visibleLinks.css('padding-left')));
		numOfItems += 1;
		breakWidths.push(totalSpace);
	});

	/**
	 * Compare the needed space with the available space and move breadcrumbs accordingly.
	 * @returns {jQuery}
	 */
	$.fn.checkNavigationOverflow = function () {
		// Get instant state
		availableSpace = $visibleLinks.outerWidth(true) - parseInt($visibleLinks.css('padding-right'));
		numOfVisibleItems = $visibleLinks.children().length;
		requiredSpace = breakWidths[numOfVisibleItems - 1];

		// There is not enough space
		if (requiredSpace > availableSpace) {
			$visibleLinks.children('[data-hook="collapsing-breadcrumbs__item"]').first().appendTo($hiddenLinks);
			numOfVisibleItems -= 1;
			$breadcrumbNavigation.addClass('is-loaded');
			this.checkNavigationOverflow();
		}
		// There is more than enough space
		else if (availableSpace > breakWidths[numOfVisibleItems]) {
			$hiddenLinks.children().last().prependTo($visibleLinks).insertAfter($triggerArea);
			numOfVisibleItems += 1;
			$breadcrumbNavigation.addClass('is-loaded');
			this.checkNavigationOverflow();
		}

		// Update the button accordingly
		if (numOfVisibleItems === numOfItems) {
			$triggerArea.addClass('u-hidden');
		}
		else {
			$triggerArea.removeClass('u-hidden');
		}

		return this;
	};


	/**
	 * Check for rezise and control button click.
	 */
	$.fn.collapsingBreadcrumbs = function () {
		const initElement = this;
		let animationTimeout;

		window.addEventListener('resize', function () {
			if (animationTimeout) {
				window.cancelAnimationFrame(animationTimeout);
			}

			animationTimeout = window.requestAnimationFrame(function () {
				initElement.checkNavigationOverflow();
			});
		}, false);

		$displayButton.on('click', function () {
			$hiddenLinks.toggleClass('u-hidden');
		});

		initElement.checkNavigationOverflow();
	};

	/**
	 * Initialize the extension.
	 */
	if ($breadcrumbNavigation.length > 0) {
		$breadcrumbNavigation.collapsingBreadcrumbs();
	}

})(jQuery, window);
