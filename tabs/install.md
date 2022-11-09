# A11y Tabs Installation

If your ReadyTheme did not come with the A11y Tabs extension pre-installed, you can add it to your site by performing the following steps.


### Add the CSS
- Create a new build subdirectory as `build/extensions/tabs/`
- Add [_a11y-tabs.scss](_a11y-tabs.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@forward "fasten-header/a11y-tabs";`


### Add the JavaScript
- Add [a11y-tabs.js](a11y-tabs.js) to your `build/extensions/tabs/` subdirectory.
- Update your `gulpfile.js` file to include `buildPathExtensions + '/tabs/a11y-tabs.js'` to your `let extensions` variable.


### Initialize the extension
Within `build/ui/theme.js`, append this code where you would like your tabs to be:

```javascript
/**
 * Initialize the A11y-Tabs extension
 */
tabbedContent.init();
```

### A11y Tabs code example
To create an A11y Tabs element, follow this layout example:
```html
<div class="x-a11y-tabs" data-tab-component>
    <ul class="x-a11y-tabs__list">
        <li class="x-a11y-tabs__item">
            <a class="x-a11y-tabs__link" href="#tab-one">Tab One</a>
        </li>
        <li class="x-a11y-tabs__item">
            <a class="x-a11y-tabs__link" href="#tab-two">Tab Two</a>
        </li>
        <li class="x-a11y-tabs__item">
            <a class="x-a11y-tabs__link" href="#tab-three">Tab Three</a>
        </li>
    </ul>
    <section id="tab-one" class="x-a11y-tabs__panel">
        <h2>Tab One</h2>
        Tab One Content
    </section>
    <section id="tab-two" class="x-a11y-tabs__panel">
        <h2>Tab Two</h2>
        Tab Two Content
    </section>
    <section id="tab-three" class="x-a11y-tabs__panel">
        <h2>Tab Three</h2>
        Tab Three Content
    </section>
</div>
```

### Using A11y Tabs in product descriptions
By default, Shadows will display all entries in the Product Tabs custom field group. If you would like to create new tabs to display on the product page, the code you use for the new field must start with `tabs_` and you will assign it to the "Product Tabs" group like the "Reviews" and "Specifications" tabs are which are part pf the initial Shadows installation. 
