export default class HsNavScroller {
  constructor(elem, settings) {
    this.elem = elem;
    this.defaults = {
      type: 'horizontal',
      target: '.active',
      offset: 0,
      delay: 20
    };
    this.settings = settings;
  }

  init() {
    const context = this,
      $el = context.elem,
      dataSettings = $el.attr('data-hs-nav-scroller-options') ? JSON.parse($el.attr('data-hs-nav-scroller-options')) : {},
      options = $.extend(true, context.defaults, dataSettings, context.settings);

    if (options.type == 'vertical') {
      $($el).animate({scrollTop: $($el).find(options.target).position().top - options.offset}, options.delay);
    } else if (options.type == 'horizontal') {
      var nav = $($el).find('.nav').first(),
        prev = $($el).find('.hs-nav-scroller-arrow-prev').first(),
        next = $($el).find('.hs-nav-scroller-arrow-next').first(),
        activeElementLeftPosition = nav.find(options.target).position().left,
        scrollMaxLeft = (nav[0].scrollWidth.toFixed() - nav.outerWidth()).toFixed(),
        scrollPosition = nav.scrollLeft();

      if (scrollPosition <= 0) {
        prev.fadeOut(0);
      }

      if (scrollMaxLeft <= 0) {
        next.fadeOut(0);
      }

      $(window).on('load resize', () => {
        var scrollMaxLeft = (parseInt(nav[0].scrollWidth.toFixed()) - parseInt(nav.outerWidth().toFixed())),
          scrollPosition = nav.scrollLeft();

        if (scrollPosition <= 0) {
          prev.fadeOut(0);
        } else {
          prev.fadeIn(0);
        }

        if (scrollMaxLeft <= 0) {
          next.fadeOut(0);
        } else {
          next.fadeIn(0);
        }
      })

      if (activeElementLeftPosition > nav.width() / 2) {
        nav.animate({scrollLeft: activeElementLeftPosition - options.offset - prev.width()}, options.delay);
      }

      next.click(() => {
        var scrollPosition = nav.scrollLeft();
        nav.animate({scrollLeft: scrollPosition + nav.outerWidth() - next.width()}, options.delay);
      })

      prev.click(() => {
        var scrollPosition = nav.scrollLeft();
        nav.animate({scrollLeft: scrollPosition - nav.outerWidth() + prev.width()}, options.delay);
      })

      nav.scroll(() => {
        var scrollMaxLeft = (nav[0].scrollWidth.toFixed() - nav.outerWidth()).toFixed(),
          scrollPosition = nav.scrollLeft();

        // Hide or Show Back Arrow
        if (scrollPosition <= 0) {
          prev.fadeOut(0);
        } else {
          prev.fadeIn(0);
        }

        // Hide or Show Next Arrow
        if (scrollPosition >= scrollMaxLeft) {
          next.fadeOut(0);
        } else {
          next.fadeIn(0);
        }
      })
    }
  }
}
