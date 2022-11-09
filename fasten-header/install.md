# Fasten Header Installation

If your ReadyTheme did not come with the Fasten Header extension pre-installed, you can add it to your site by performing the following steps.

### Create the fasten header block
- Navigate to User Interface -> Theme Components -> Content Sections
- Add a new content section:
  - Code: `fasten_header`
  - Name: `Fasten Header`
  - Content: Paste the content from [fasten-header.mvt](fasten-header.mvt)
- Copy the item tag `<mvt:item name="readytheme" param="contentsection( 'fasten_header' )" />`.


### Add fasten header to global header
- Navigate to User Interface -> Global Settings -> Settings -> Global Header
- Paste the item tag for the fasten header block within the site header, preferably above `<mvt:item name="navbar" />`.


### Add the CSS
- Create a new build subdirectory as `build/extensions/fasten-header/`
- Add [_fasten-header.scss](_fasten-header.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@forward "fasten-header/fasten-header";`


### Add the JavaScript
- Add [fasten-header.js](fasten-header.js) to your `build/extensions/fasten-header/` subdirectory.
- Update your `gulpfile.js` file to include `buildPathExtensions + '/fasten-header/fasten-header.js'` to your `let extensions` variable.
