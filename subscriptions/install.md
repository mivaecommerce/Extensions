# Pagination Installation

If your ReadyTheme did not come with the default subscription extension pre-installed, you can add it to your site by performing the following steps.

### Add the CSS
- Create a new build subdirectory as `build/extensions/subscriptions/`
- Add [_subscriptions.scss](_subscriptions.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@forward "subscriptions/subscriptions";`
