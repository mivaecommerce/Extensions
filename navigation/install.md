# Transfigure Navigation Installation

If your ReadyTheme did not come with the default Transfigure Navigation extension pre-installed, you can add it to your site by performing the following steps.

### Update Transfigure Navigation HTML
- Navigate to ReadyThemes -> Navigation Sets -> primary_navigation
- Paste the content from [transfigure-navigation.mvt](transfigure-navigation.mvt).


### Add Transfigure Navigation to global header
- Navigate to User Interface -> Settings -> Global Header
- Paste the following code where you would like the navigation to appear:
    - _Note: You may need to modify to fit best in your theme._

```html
<div class="o-wrapper o-wrapper--full o-wrapper--flush t-site-navigation &mvte:global:checkout_hidden;">
	<div class="o-layout o-layout--align-center o-layout--flush o-layout--justify-center t-site-navigation__wrap">
		<mvt:item name="readytheme" param="navigationset( 'primary_navigation' )" />
	</div>
</div>
<!-- end t-site-navigation -->

```


### Add the CSS
- Create a new build subdirectory as `build/extensions/transfigure-navigation/`
- Add [_transfigure-navigation.scss](_transfigure-navigation.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@import "navigation/transfigure-navigation";`


### Add the JavaScript
- Add [transfigure-navigation.js](transfigure-navigation.js) to your `build/extensions/navigation/` subdirectory.
- Update your `gulpfile.js` file to include `buildPathExtensions + '/navigation/transfigure-navigation.js'` to your `let extensions` variable.
