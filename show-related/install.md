# A11y Toggle Installation

If your ReadyTheme did not come with the A11y Toggle extension pre-installed, you can add it to your site by performing the following steps.


### Add the CSS
- Create a new build subdirectory as `build/extensions/show-related/`
- Add [_a11y-toggle.scss](_a11y-toggle.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@import "show-related/a11y-toggle";`


### Add the JavaScript
- Add [a11y-toggle.js](a11y-toggle.js) to your `build/extensions/show-related/` subdirectory.
- Update your `gulpfile.js` file to include `buildPathExtensions + '/show-related/a11y-toggle.js'` to your `let extensions` variable.


### Initialize the extension
Within `build/ui/theme.js`, locate `init: function () {` and append this code:

```javascript
/**
 * Initialize the A11y-Toggle extension
 */
a11yToggle();
```

### A11y Toggle code example
To create an A11y Toggle element, follow this layout example:
```html
<div class="x-collapsible-content" aria-labelledby="TOGGLE_NAME-label">
    <h5 id="TOGGLE_NAME-label" class="u-text-uppercase">TITLE</h5>
    <button class="x-collapsible-content__toggle u-text-uppercase" data-a11y-toggle="TOGGLE_NAME" type="button">TITLE <span class="u-icon-add" data-toggle="<" aria-hidden="true"></span></button>
    <div id="TOGGLE_NAME" class="x-collapsible-content__item">
<!-- Place the content of your A11y Toggle here. -->
    </div>
</div>
```
Replace `TOGGLE_NAME` with the name or reference to the A11y Toggle element.
