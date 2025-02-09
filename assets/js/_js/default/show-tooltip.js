/*! J&Z Jekyll Theme - v1.1.0 (https://github.com/jzadaptrum/JandZ-JekyllTheme)
 *  Copyright (c) 2022 J&Z's Workshop https://www.jzadaptrum.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  var globals = {
    showToolTip: showToolTip
  };

  function showToolTip(targetElement, str) {
    if (targetElement === null) return;
    if (!str || str.length === 0) return;
    let elm = $(targetElement);
    /* get current tooltip */
    let oldTooltip = elm.attr('data-original-title');
    /* show immediately */
    elm.attr('data-original-title', str).tooltip('show');
    /* return tooltip to original without showing. */
    elm.attr('data-original-title', oldTooltip);
  }

  (function (window) {
    window.showToolTip = globals.showToolTip;
  })(window);

})();
