# Dialog Installation

If your ReadyTheme did not come with the Dialog extension pre-installed, you can add it to your site by performing the following steps.


### Add the CSS
- In the core build directory, `build/core/css/components/`, add the [_dialog.scss](_dialog.scss) file.
- Update your `build/core/core.scss` file to include `@forward "components/dialog";`


### Add the JavaScript
- Create a new build subdirectory as `build/extensions/dialog/`
- Add [dialog.js](dialog.js) to your `build/extensions/dialog/` subdirectory.
- Update your `gulpfile.js` file to include `buildPathExtensions + '/dialog/dialog.js'` to your `let extensions` variable.


### Dialog code example
To create a dialog element, follow this layout example:
```html
<div class="c-dialog" data-dialog="DIALOG_NAME" aria-hidden="true">
	<div class="c-dialog__overlay" tabindex="-1">
		<div class="c-dialog__container" aria-labelledby="DIALOG_NAME-title" aria-modal="true" role="dialog">
			<header class="c-dialog__header">
				<h2 id="forgot-password-title" class="c-dialog__title c-heading-delta u-text-uppercase">Password Lookup</h2>
				<button class="c-dialog__close" aria-label="Close Dialog" data-dialog-close></button>
			</header>
			<div class="c-dialog__content">
<!-- Place the content of your dialog here. -->
			</div>
		</div>
	</div>
</div>
```

To trigger the dialog, add a button to your page:
```html
<button class="c-button u-bg-gray-50" data-dialog-trigger="DIALOG_NAME" type="button">Open Dialog</button>
```
Replace `DIALOG_NAME` with the name or reference to the dialog element.
