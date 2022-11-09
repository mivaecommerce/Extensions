/**
 * EXTENSIONS / FASTEN HEADER / FASTEN HEADER
 *
 * This extension is a more refined version of a classic "sticky" header function.
 *
 * Version: 10.05.00
 */

function fastenHeader(position, {offsetHeight}) {
	if (position > offsetHeight) {
		document.body.classList.add('x-fasten-header--is-active');
	}
	else {
		document.body.classList.remove('x-fasten-header--is-active');
	}
}

if (window.matchMedia('(any-hover: hover) and (any-pointer: fine)').matches && _hook('fasten-header')) {
	const siteHeader = document.querySelector('[data-hook="site-header"]');
	let animationTimeout;

	fastenHeader(window.scrollY, siteHeader);

	window.addEventListener('scroll', () => {
		if (animationTimeout) {
			window.cancelAnimationFrame(animationTimeout);
		}

		animationTimeout = window.requestAnimationFrame(() => {
			fastenHeader(window.scrollY, siteHeader);
		});
	}, false);
}
