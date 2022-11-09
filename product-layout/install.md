# Product Layout Installation

If your ReadyTheme did not come with the default product layout pre-installed, you can add it to your site by performing the following steps.

_**Note:** You may need to rollback your page code to earlier version or copy the default code from a new branch._

### Add the CSS
- Create a new build subdirectory as `build/extensions/product-layout/`
- Add [_product-layout.scss](_product-layout.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@forward "product-layout/product-layout";`
- Create a new subdirectory as `build/extensions/product-layout/picturebook/`
- Add [_product-layout.scss](picturebook/_photo-gallery.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@forward "product-layout/picturebook/photo-gallery";`


### Add the JavaScript
- Add [ajax-add-to-cart.js](ajax-add-to-cart.js) to your `build/extensions/product-layout/` subdirectory.
- Update your `gulpfile.js` file to include `buildPathExtensions + '/product-layout/ajax-add-to-cart.js'` to your `let extensions` variable.


### Initialize the AJAX Add to Cart extension
Within `build/ui/theme.js`, locate `jsPROD: function () {` and append this code:

```javascript
/**
 * Initialize the AJAX Add-To-Cart extension
 */
addToCart.init();
```
