# Payment Card Installation

If your ReadyTheme did not come with the default payment card extension pre-installed, you can add it to your site by performing the following steps.

### Add the CSS
- Create a new build subdirectory as `build/extensions/payment/`
- Add [_payment-card.scss](_payment-card.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@forward "payment/payment-card";`
