# Mini-Basket Installation

If your ReadyTheme did not come with the default Mini-Basket extension pre-installed, you can add it to your site by performing the following steps.

### Update Mini-Basket HTML
- Navigate to User Interface -> Global Settings -> Settings -> Mini-Basket
- Paste the content from [mini-basket.mvt](mini-basket.mvt).


### Add the CSS
- Create a new build subdirectory as `build/extensions/mini-basket/`
- Add [_mini-basket.scss](_mini-basket.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@import "mini-basket/mini-basket";`


### Add the JavaScript
- Add [mini-basket.js](mini-basket.js) to your `build/extensions/mini-basket/` subdirectory.
- Update your `gulpfile.js` file to include `buildPathExtensions + '/mini-basket/mini-basket.js'` to your `let extensions` variable.
