/*! J&Z Jekyll Theme - v1.1.0 (https://github.com/jzadaptrum/JandZ-JekyllTheme)
 *  Copyright (c) 2022 J&Z's Workshop https://www.jzadaptrum.com
 *  Licensed under MIT
*/

(function () {
  'use strict';

  $(function () {
    let readMoreLess = $(".read-more-less");

    if (readMoreLess.length > 0) {
      readMoreLess.click(function () {
        let element = $(this).parent().parent().parent().find('.markdown-style');

        let read_more = $(this).parent().parent().parent().find('.read-more-less').children('.read-more');
        let read_less = $(this).parent().parent().parent().find('.read-more-less').children('.read-less');

        if (element.css('display') == 'none') {
          read_more.hide();
          read_less.show();
        } else {
          read_more.show();
          read_less.hide();
        }
        element.slideToggle();
      });
    }
  });

})();
