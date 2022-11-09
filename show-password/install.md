# Show Password Installation

If your ReadyTheme did not come with the Show Password extension pre-installed, you can add it to your site by performing the following steps. There is no initialization needed. This extension will append a `button` to any password input field on the site automatically.


### Add the CSS
- Create a new build subdirectory as `build/extensions/show-password/`
- Add [_show-password.scss](_show-password.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@forward "show-password/show-password";`


### Add the JavaScript
- Add [show-password.js](show-password.js) to your `build/extensions/show-password/` subdirectory.
- Update your `gulpfile.js` file to include `buildPathExtensions + '/show-password/show-password.js'` to your `let extensions` variable.
