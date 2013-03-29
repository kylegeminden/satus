### HEAD

### 2.0.1 March 28, 2013

* Additions, updates and fixes for grid.
* Removed type="text/css" on css links.
* Added in visited color for links.
* Miscelaneous cleanup.

### 2.0.0 February 12, 2013

* Changed back to mobile first responsive similar to the initial release.
* Updated OOCSS grid for mobile first and added semantic grid option.
* Changed responsive helpers.
* Removed rounded corners off of touch icons.
* Added in meta tags for Windows 8 tile.
* Updated to jQuery 1.9.1.
* Updates to normalize.
* Removed uneccessary vendor prefixes from `mixins.less`.
* Removed border radius from `mixins.less` as it is no longer needed.

### 1.5.1 January 14, 2013

* Removed code comments in `grid.less` regarding only using even numbers as that is no longer valid.
* Removed `px` unit from code font size variable.

### 1.5.0 January 13, 2013

* Changed from mobile first to desktop first responsive.
* Base styles are now compiled to `satus.css` and layout styles to `app.css`.
* Deleted `480`, `600`, `768`, `980` and `modules` less files.
* Changed `.fluid-video` to `.flex-video` and moved from `modules.less` to `normalize.less`.
* Added responsive grid system inspired from [Object Oriented CSS Framework](https://github.com/stubbornella/oocss/tree/master/core/grid).
* Additions to `helpers.less` including responsive helpers from [Twitter Bootstrap](http://twitter.github.com/bootstrap/).
* Added `media-queries.less` and `plugins.less` files.
* Reduced number of elements for reset in `reset.less`.
* Changed font weight from 600 to 700 for `td` and `th` elements in `tables.less`. Uncommented code for radius table styling and made it so you can add a class of radius if desired.
* Other miscellaneous style updates.
* Renamed `satusframework.html` to `elements.html`.
* Added `grid.html`. Contains grid examples and documentation.
* Deleted `.htaccess` and `crossdomain.xml`. Please see [h5bp/server-configs](https://github.com/h5bp/server-configs) for the latest server configuration files.

### 1.0.1 December 11, 2012

* Fixed css table of content comments as some were `-n-` instead of `!n!`.

### 1.0.0 November 27, 2012

* Initial Release.