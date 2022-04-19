# Quantify Installation

If your ReadyTheme did not come with the Quantify extension pre-installed, you can add it to your site by performing the following steps.

### Add the CSS
- Create a new build subdirectory as `build/extensions/quantify/`
- Add [_quantify.scss](_quantify.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@import "quantify/quantify";`


### Add the JavaScript
- Add [quantify.js](quantify.js) to your `build/extensions/quantify/` subdirectory.
- Update your `gulpfile.js` file to include `buildPathExtensions + '/quantify/quantify.js'` to your `let extensions` variable.


### Initialize the extension
Within `build/ui/theme.js`, locate `init: function () {` and append this code:

```javascript
/**
 * Initialize Quantify extension
 */
quantify.init(document);
```


### Add to the Product Page
You will need to replace the quantity `input` in the product display layout with the following:
```html
<div class="o-layout__item u-width-12 u-width-4--m x-product-layout-purchase__options-quantity">
	<label class="c-form-label u-text-bold u-font-small u-color-gray-40 is-required" for="l-quantity">Qty</label>
	<div class="x-quantify c-control-group t-quantify u-font-small" data-hook="quantify">
		<button class="c-button c-control-group__button u-bg-white u-color-gray-40 u-icon-subtract" data-action="decrement" aria-label="Decrease Quantity"></button>
		<input id="l-quantity" class="c-form-input c-control-group__field u-text-center u-color-gray-40" data-max="" data-min="1" data-step="1" type="text" inputmode="decimal" name="Quantity" value="1">
		<button class="c-button c-control-group__button u-bg-white u-color-gray-40 u-icon-add" data-action="increment" aria-label="Increase Quantity"></button>
	</div>
</div>
```


### Add to the Basket Page
You will need to replace the quantity `input` in the basket contents with the following:
```html
<div class="c-form-list">
	<div class="c-form-list__item">
		<label class="u-hide-visually" for="l-quantity-&mvte:group:group_id;">Quantity</label>
		<div class="x-quantify c-control-group" data-hook="quantify">
			<button class="c-button c-control-group__button u-bg-white u-color-gray-30" data-action="decrement">
				<span class="u-icon-subtract" aria-hidden="true"></span>
				<span class="u-hide-visually">Decrease Quantity/Remove</span>
			</button>
			<input id="l-quantity-&mvte:group:group_id;" class="c-form-input c-control-group__field u-text-bold u-text-center" data-max="" data-min="1" data-step="1" data-group="group-&mvte:group:group_id;" data-hook="group-quantity" type="text" inputmode="decimal" name="Quantity" value="&mvt:group:quantity;" required>
			<button class="c-button c-control-group__button u-bg-white u-color-gray-30" data-action="increment">
				<span class="u-icon-add" aria-hidden="true"></span>
				<span class="u-hide-visually">Increase Quantity</span>
			</button>
		</div>
	</div>
</div>
```
