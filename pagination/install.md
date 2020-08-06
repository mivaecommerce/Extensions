# Pagination Installation

If your ReadyTheme did not come with the default pagination extension pre-installed, you can add it to your site by performing the following steps.

_**Note:** You may need to rollback your page code to earlier version or copy the default code from a new branch._

### Add the CSS
- Create a new build subdirectory as `build/extensions/pagination/`
- Add [_pagination.scss](_pagination.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@import "pagination/pagination";`
