/**
 * EXTENSIONS / SHOW PASSWORD / SHOW PASSWORD
 *
 * This extension allows a user to reveal the password they have typed.
 *
 * Version: 10.05.00
 */

(() => {
	const passwordInputs = document.querySelectorAll('input[type="password"]');
	const hideClass = 'u-icon-eye-closed';
	const hideLabel = 'Hide Password.';
	const hideText = 'Hide';
	const showClass = 'u-icon-eye-open';
	const showLabel = 'Show password as plain text. Warning: this will display your password on the screen.';
	const showText = 'Show';

	function getPreviousSibling({previousElementSibling}, selector) {
		let sibling = previousElementSibling;

		if (!selector) {
			return sibling;
		}

		while (sibling) {
			if (sibling.matches(selector)) {
				return sibling;
			}
			sibling = sibling.previousElementSibling;
		}
	}

	if (passwordInputs.length > 0) {
		passwordInputs.forEach(passwordInput => {
			const toggleButton = document.createElement('button');
			let findLabel = getPreviousSibling(passwordInput, 'label');

			toggleButton.classList.add('c-button');
			toggleButton.classList.add('u-bg-transparent');
			toggleButton.classList.add('x-toggle-password');
			mivaJS.showPassword.useIcon ? toggleButton.classList.add(showClass) : toggleButton.textContent = showText;
			if (findLabel && findLabel.classList.contains('u-hide-visually')) {
				toggleButton.classList.add('x-toggle-password--no-label');
			}
			toggleButton.setAttribute('aria-label', showLabel);
			toggleButton.setAttribute('data-hook', 'toggle-password');
			toggleButton.type = 'button';
			passwordInput.parentElement.style.position = 'relative';
			passwordInput.parentElement.insertBefore(toggleButton, passwordInput.nextSibling);
		});

		const togglePasswordButtons = document.querySelectorAll('[data-hook="toggle-password"]');

		if (togglePasswordButtons.length > 0) {
			togglePasswordButtons.forEach(togglePasswordButton => {
				togglePasswordButton.addEventListener('click', () => {
					let closestInput = getPreviousSibling(togglePasswordButton, 'input');

					if (closestInput.type === 'password') {
						closestInput.type = 'text';
						mivaJS.showPassword.useIcon ? togglePasswordButton.classList.replace(showClass, hideClass) : togglePasswordButton.textContent = hideText;
						togglePasswordButton.setAttribute('aria-label', hideLabel);
					}
					else {
						closestInput.type = 'password';
						mivaJS.showPassword.useIcon ? togglePasswordButton.classList.replace(hideClass, showClass) : togglePasswordButton.textContent = showText;
						togglePasswordButton.setAttribute('aria-label', showLabel);
					}
				});
			});
		}
	}
})();
