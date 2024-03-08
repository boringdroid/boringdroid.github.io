/**
 * smooth-scroll.js 1.0.0
 * Make your page scrolling smooth
 * Requires JQuery - Does not work with JQuery slim
 * Based on https://css-tricks.com/snippets/jquery/smooth-scrolling/
 */

(function() {
  const duration = 500;

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
      .not('[href="#"]')
      .click(function(event) {
      // On-page links
        if (
          location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == hostname
        ) {
        // Figure out element to scroll to
          let target = $(this.hash);
          target = target.length ?
          target :
          $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
          // Only prevent default if animation is actually gonna happen
            event.preventDefault();

            $('html, body').animate(
                {
                  scrollTop: target.offset().top,
                },
                duration,
                function() {
                  // Callback after animation
                  // Must change focus!
                  const $target = $(target);
                  $target.focus();
                  if ($target.is(':focus')) {
                    // Checking if the target was focused
                    return false;
                  } else {
                    // Adding tabindex for elements not focusable
                    $target.attr('tabindex', '-1');
                    $target.focus(); // Set focus again
                  }
                },
            );
          }
        }
      });
})();
