# Collapsing Breadcrumbs Installation

If your ReadyTheme did not come with the Collapsing Breadcrumbs extension pre-installed, you can add it to your site by performing the following steps.

### Update Smart Breadcrumbs HTML
- Navigate to User Interface -> Settings -> Smart Breadcrumbs
- Paste the content from [collapsing-breadcrumbs.mvt](collapsing-breadcrumbs.mvt).


### Add the CSS
- Create a new build subdirectory as `build/extensions/breadcrumbs/collapsing-breadcrumbs/`
- Add [_collapsing-breadcrumbs.scss](_collapsing-breadcrumbs.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@import "breadcrumbs/collapsing-breadcrumbs/collapsing-breadcrumbs";`


### Add the JavaScript
- Add [collapsing-breadcrumbs.js](collapsing-breadcrumbs.js) your `build/extensions/breadcrumbs/collapsing-breadcrumbs/` subdirectory.
- Update your `gulpfile.js` file to include `buildPathExtensions + '/breadcrumbs/collapsing/collapsing-breadcrumbs.js'`.
- From your command line, run `gulp build`.
