# Breadcrumbs Installation

If your ReadyTheme did not come with the Breadcrumbs extension pre-installed, you can add it to your site by performing the following steps.

### Update Smart Breadcrumbs HTML
- Navigate to User Interface -> Global Settings -> Settings -> Smart Breadcrumbs
- Paste the content from [breadcrumbs.mvt](breadcrumbs.mvt).


### Add the CSS
- Create a new build subdirectory as `build/extensions/breadcrumbs/`
- Add [_breadcrumbs.scss](_breadcrumbs.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@forward "breadcrumbs/breadcrumbs";`
