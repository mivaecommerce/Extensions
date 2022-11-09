/**
 * 	Closable Messages
 *
 * Version: 10.05.00
 */
(() => {
	let closeElements = document.querySelectorAll('[data-hook="message__close"]');

	Array.prototype.forEach.call(closeElements, element => {
		let ux_message_closer = element;
		let ux_message = ux_message_closer.parentNode;

		ux_message_closer.addEventListener('click', event => {
			event.preventDefault();
			ux_message.classList.add('u-hidden');
		}, false);
	});
})();
