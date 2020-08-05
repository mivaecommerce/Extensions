# Contact Us Form Installation

If your ReadyTheme did not come with the Contact extension pre-installed, you can add it to your site by performing the following steps.

### Create the contact form
- Navigate to User Interface -> Theme Components -> Content Sections
- Add a new content section:
  - Code: `contact_form`
  - Name: `Contact Us Form`
  - Content: Paste the content from [contact_form.mvt](contact_form.mvt)
- Copy the item tag `<mvt:item name="readytheme" param="contentsection( 'contact_form' )" />`.


### Add form to Contact Page
- Navigate to User Interface -> Pages -> CTUS
- Paste the item tag for the contact form where you would like it to appear on tha page.


### Create the form processor page
- Navigate to User Interface -> Pages
- Add a new page:
  - Code: `CTFM`
  - Name: `Contact Form`
  - Content: Paste the content from [ctfm.mvt](ctfm.mvt)
- Ensure the `urls` item has been assigned to the page.
- If you would like to alter either the store email, or the visitor confirmation email, there are sections for that with comments.


### Add the CSS
- Upload [contact.css](contact.css) to `mm5/themes/%STORE_ID%/*THEME_NAME*/extensions/contact/`.
- Navigate to User Interface -> CSS Resources
- Add a new CSS resource:
  - Code: `x-contact`
  - Type: Local File
  - File Path: `themes/%STORE_ID%/*THEME_NAME*/extensions/contact/contact.css`
  - Global: false
  - Active: true
- Click `Pages` and assign to the `CTUS` page.
- Click `Resource Groups` and assign to the `css_list` group.
- **_If you are using the developer build, the `scss` file has been included._**
  - Create a new build subdirectory as `build/extensions/contact/`
  - Add [_contact.scss](_contact.scss) to the directory.
  - Update your `build/extensions/extensions.scss` file to include `@import "contact/contact";`


### Add the JavaScript
- Upload [contact.js](contact.js) to `mm5/themes/%STORE_ID%/*THEME_NAME*/extensions/contact/`.
- Navigate to User Interface -> JavaScript Resources
- Add a new JavaScript resource:
  - Code: `contact`
  - Type: Local File
  - File Path: `themes/%STORE_ID%/*THEME_NAME*/extensions/contact/contact.js`
  - Global: false
  - Active: true
- Click `Pages` and assign to the `CTUS` page.
- Click `Resource Groups` and assign to the `footer_js` group.
