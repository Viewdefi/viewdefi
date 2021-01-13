export default class HSFormSearch {
  constructor(elem, settings) {
    this.elem = elem;
    this.handlers = {};
    this.defaults = {
      clearIcon: null,
      defaultIcon: null,
      delay: 300,
      isLoading: false,
      dropMenuOffset: 0,
      dropMenuDuration: 300,
      toggleIconOnFocus: false,
      activeClass: null
    };
    this.settings = settings;
  }

  init() {
    const context = this,
      $el = context.elem,
      dataSettings = $el.attr('data-hs-form-search-options') ? JSON.parse($el.attr('data-hs-form-search-options')) : {},
      options = $.extend(true, context.defaults, dataSettings, context.settings);

      context.options = options;

    context.toggleIcon($($el).val().length > 0, options);

    $(options.clearIcon).click(function () {
      $($el).val('');
      context.toggleIcon(false, options)

      if (context.handlers.clear) {
        context.handlers.clear();
      }
    });

    if (options.toggleIconOnFocus) {
      $($el).on('click', function (e) {
        context.toggleIcon(true, options);
      });
    } else {
      $($el).on('input', function (e) {
        context.toggleIcon($(e.target).val().length > 0, options);
      });
    }

    if (options.dropMenuElement) {
      let menu = $(options.dropMenuElement);

      menu.addClass('animated hs-form-search-menu-hidden hs-form-search-menu-initialized');

      $(window).click(function (e) {
        if (!$($el).is(e.target) && event.target.tagName.toLowerCase() === 'a' || !$($el).is(e.target) && menu.css('display') === 'block' && !menu.has(e.target).length) {
          menu.removeClass('slideInUp').addClass('fadeOut')

          if (options.toggleIconOnFocus) {
            context.toggleIcon($($el).val().length > 0, options);
          }

          setTimeout(function () {
            menu.addClass('hs-form-search-menu-hidden')
          }, options.dropMenuDuration);
        }
      });

      $($el).click(function () {
        if (menu.css('display') !== 'block') {
          setTimeout(function () {
            menu.css({
              top: 100 + options.dropMenuOffset + '%',
              width: '100%',
              animationDuration: options.dropMenuDuration + 'ms'
            });

            menu.removeClass('hs-form-search-menu-hidden fadeOut').addClass('slideInUp')
          }, 1)
        }
      });
    }

    return context;
  }

  on(event, callback) {
    this.handlers[event] = callback;
  }

  toggleIcon(input, config) {
    const context = this,
      options = config;

    if (!options.isLoading) {
      $(options.loadingIcon).fadeOut(0);

      if (!options.defaultIcon) {
        if (input) {
          $(options.clearIcon).fadeIn(options.loadingIcon ? 0 : options.delay);
          context.elem.addClass(options.activeClass)
        } else {
          $(options.clearIcon).fadeOut(0);
          context.elem.removeClass(options.activeClass)
        }
      } else {
        if (input) {
          $(options.defaultIcon).fadeOut(0);
          $(options.clearIcon).fadeIn(options.loadingIcon ? 0 : options.delay);
          context.elem.addClass(options.activeClass)
        } else {
          $(options.clearIcon).fadeOut(0);
          $(options.defaultIcon).fadeIn(options.loadingIcon ? 0 : options.delay);
          context.elem.removeClass(options.activeClass)
        }
      }
    }
  }

  loading(isLoading = true) {
    var input = $(this.elem).val().length > 0,
     options = this.options;

    if (isLoading) {
      options.isLoading = true;

      $(options.defaultIcon).fadeOut(0);
      $(options.clearIcon).fadeOut(0);

      $(options.loadingIcon).fadeIn(0);
    } else {
      options.isLoading = false;

      this.toggleIcon(input, options);
    }
  }
}
