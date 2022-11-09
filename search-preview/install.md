# Search Preview Installation

If your ReadyTheme did not come with the Search Preview extension pre-installed, you can add it to your site by performing the following steps.

### Update the Search Preview JavaScript
- Navigate to User Interface -> Global Settings -> Search Settings -> Search Preview Settings -> JavaScript Template
- Paste the content from [search-preview.js](search-preview.js)

### Update the Search Preview HTML
- Navigate to User Interface -> Global Settings -> Search Settings -> Search Preview Settings -> Menu Item Template
- Paste the content from [search-preview.mvt](search-preview.mvt)
- Copy the item tag `<mvt:item name="readytheme" param="contentsection( 'fasten_header' )" />`.


### Update Global Search
- Navigate to User Interface -> Global Settings -> Settings -> Global Header
- Replace your global search form with the following:
    - _Note: You may need to modify to fit best in your theme._

```html
<div class="o-layout__item u-width-12 u-width-4--l &mvte:global:checkout_hidden;" itemscope itemtype="http://schema.org/WebSite">
    <meta itemprop="url" content="//&mvt:global:domain:name;/"/>
    <form class="t-site-header__search-form" method="post" action="&mvte:urls:SRCH:rr;" itemprop="potentialAction" itemscope itemtype="http://schema.org/SearchAction">
        <fieldset>
            <legend>Product Search</legend>
            <div class="c-form-list">
                <div class="c-form-list__item c-form-list__item--full c-control-group u-flex">
                    <meta itemprop="target" content="&mvte:urls:SRCH:auto;?q={Search}"/>
                    <input class="c-form-input c-control-group__field u-bg-transparent u-border-none" data-mm_searchfield="Yes" data-mm_searchfield_id="x-search-preview" type="search" name="Search" value="&mvte:global:Search;" placeholder="Search" autocomplete="off" required itemprop="query-input" aria-label="Product Search">
                    <button class="c-button c-button--large c-control-group__button u-bg-transparent u-color-gray-50 u-icon-search u-border-none" type="submit" aria-label="Perform Product Search"></button>
                </div>
            </div>
        </fieldset>

        <ul class="x-search-preview" data-mm_searchfield_menu="Yes" data-mm_searchfield_id="x-search-preview" role="listbox"></ul>
    </form>
</div>
```

### Add the CSS
- Create a new build subdirectory as `build/extensions/search-preview/`
- Add [_search-preview.scss](_search-preview.scss) to the directory.
- Update your `build/extensions/extensions.scss` file to include `@forward "search-preview/search-preview";`
