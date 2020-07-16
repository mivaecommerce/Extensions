# Category Tree Installation

If your ReadyTheme did not come with the default Category Tree extension pre-installed, you can add it to your site by performing the following steps.

### Update Category Tree Template HTML
- Navigate to User Interface -> Settings -> Category Tree Template
- Paste the content from [category-tree.mvt](category-tree.mvt).


### Add the CSS
- Create a new build subdirectory as `build/extensions/category-tree/`
- Add [_category-tree.scss](_category-tree.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@import "category-tree/category-tree";`
