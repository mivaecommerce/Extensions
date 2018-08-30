# Contact Us Form Installation

If your ReadyTheme did not come with the Contact extension pre-installed, you can add it to your site by performing the following steps.

### Create the contact form
- Navigate to ReadyThemes -> Content Sections
- Add a new content section:
  - Code: `contact_form`
  - Name: `Contact Us Form`
  - Content: Paste the content from [ctus_content.html](ctus_content.html)
- Copy the item tag `<mvt:item name="readytheme" param="contentsection( 'contact_form' )" />`.


### Add form to Contact Page
- Navigate to User Interface -> Pages -> CTUS
- Paste the item tag for the contact form where you would like it to appear on tha page.


### Create the form processor page
- Navigate to User Interface -> Pages
- Add a new page:
  - Code: `CTFM`
  - Name: `Contact Form`
  - Content: Paste the content from [ctfm_page.html](ctfm_page.html)
- Ensure the `urls` item is assigned to the page.
- If you would like to alter either the store email or the visitor confirmation email, there are sections for that with comments.


### Add the CSS
- Upload `contact.css` to `mm5/themes/*THEME_NAME*/extensions/contact/`.
- Navigate to User Interface -> CSS Resources
- Add a new CSS resource:
  - Code: `x-contact`
  - Type: Local File
  - File Path: `themes/*THEME_NAME*/extensions/contact/contact.css`
  - Global: false
  - Active: true
- Click `Pages` and assign to the `CTUS` page.
- Click `Resource Groups` and assign to the `css_list` group.


### Add the JavaScript
- Upload `contact.js` to `mm5/themes/*THEME_NAME*/extensions/contact/`.
- Navigate to User Interface -> JavaScript Resources
- Add a new JavaScript resource:
  - Code: `contact`
  - Type: Local File
  - File Path: `themes/*THEME_NAME*/extensions/contact/contact.js`
  - Global: false
  - Active: true
- Click `Pages` and assign to the `CTUS` page.
- Click `Resource Groups` and assign to the `footer_js` group.
