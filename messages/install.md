# Messages Installation

If your ReadyTheme did not come with the Messages extension pre-installed, you can add it to your site by performing the following steps.

### Create the messages block
- Navigate to User Interface -> Theme Components -> Content Sections
- Add a new content section:
  - Code: `messages`
  - Name: `Error and Information Messages`
  - Content: Paste the content from [messages.mvt](messages.mvt)
- Copy the item tag `<mvt:item name="readytheme" param="contentsection( 'messages' )" />`.


### Add messages to your site
- Paste the item tag for the messages block within the site where you would like to display messages.


### Add the CSS
- Create a new build subdirectory as `build/extensions/messages/`
- Add [_messages.scss](_messages.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@forward "messages/messages";`


### Add the JavaScript
- Add [messages.js](messages.js) to your `build/extensions/messages/` subdirectory.
- Update your `gulpfile.js` file to include `buildPathExtensions + '/messages/messages.js'` to your `let extensions` variable.


### Closeable Messages
If you would like to add closeable messages to pages in your store, you can create a custom message by using this code as a template:
```html
<p class="x-messages x-messages--info">
    YOUR MESSAGE HERE
    <span class="x-messages__close" data-hook="message__close">Close</span>
</p>
```
