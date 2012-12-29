### HEAD

### 1.5.0

* Changed from mobile first to desktop first responsive.
* Base styles are now compiled to `satus.css` and layout styles to `app.css`.
* Deleted `480`, `600`, `768`, `980` and `modules` less files.
* Changed `.fluid-video` to `.flex-video` and moved from `modules.less` to `normalize.less`.
* Added grid system inspired from Zurb's [Foundation 3](http://foundation.zurb.com/).
* Additions to `helpers.less` including responsive helpers from [Twitter Bootstrap](http://twitter.github.com/bootstrap/).
* Added `media-queries.less` and `plugins.less` files.
* Reduced number of elements for reset in `reset.less`.
* Changed font weight from 600 to 700 for `td` and `th` elements in `tables.less`. Uncommented code for radius table styling and made it so you can add a class of radius if desired.
* Updates to variables and mixins.
* Minor typography updates.
* Added meta tags for Microsoft tile for Windows 8 in `head`.
* Renamed `satusframework.html` to `elements.html`.
* Added `grid.html`. Contains grid examples and documentation.
* Deleted `.htaccess` and `crossdomain.xml`. Please see [h5bp/server-configs](https://github.com/h5bp/server-configs) for the latest server configuration files.

### 1.0.1 December 11, 2012

* Fixed css table of content comments as some were `-n-` instead of `!n!`.

### 1.0.0 November 27, 2012

* Initial Release.