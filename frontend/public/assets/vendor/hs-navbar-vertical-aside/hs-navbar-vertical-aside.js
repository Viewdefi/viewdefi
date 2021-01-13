;(function (factory) {
	'use strict';

	if (typeof define === 'function' && define.amd) {

		define(['jquery'], factory);

	} else if (typeof exports !== 'undefined') {

		module.exports = factory(require('jquery'));

	} else {

		factory(jQuery);

	}

}(function ($) {
	'use strict';

	var HSSideNav = window.HSSideNav || {};

	HSSideNav = (function () {

		function HSSideNav(element, settings) {

			var self = this,
				dataSettings;

			self.defaults = {
				mainContainer: 'body',

        compactClass: '.navbar-vertical-aside-compact-mode',
        compactMinClass: '.navbar-vertical-aside-compact-mini-mode',
				minClass: '.navbar-vertical-aside-mini-mode',
				closedClass: '.navbar-vertical-aside-closed-mode',

				transitionOnClassName: 'navbar-vertical-aside-transition-on',

				mobileOverlayClass: '.navbar-vertical-aside-mobile-overlay',
				toggleInvokerClass: '.js-navbar-vertical-aside-toggle-invoker',

				subMenuClass: '.js-navbar-vertical-aside-submenu',
				subMenuInvokerClass: '.js-navbar-vertical-aside-menu-link',
				subMenuInvokerActiveClass: '.show',
				hasSubMenuClass: '.navbar-vertical-aside-has-menu',

				subMenuAnimationSpeed: 200,
				subMenuOpenEvent: 'hover',

				showClassNames: {
					xs: 'navbar-vertical-aside-show-xs',
					sm: 'navbar-vertical-aside-show-sm',
					md: 'navbar-vertical-aside-show-md',
					lg: 'navbar-vertical-aside-show-lg',
					xl: 'navbar-vertical-aside-show-xl'
				},

				onMini: function () {},
				onFull: function () {}
			};
			self.$sidebar = $(element);

			dataSettings = $(element).data('hs-navbar-vertical-aside') || {};

			self.options = $.extend({}, self.defaults, settings, dataSettings);

			self.items = $(element).find(self.options.hasSubMenuClass);

			self.topLevels = $(self.options.hasSubMenuClass).parent(':not(' + self.options.subMenuClass + ')').children(self.options.hasSubMenuClass);

      // Set opened elements
      $(self.$sidebar).find(self.options.subMenuClass).not(":hidden").css({
        display: 'block'
      });


      $(self.$sidebar).find('.nav-link.active').parents(self.options.subMenuClass).each(function (key, item) {
        if (!$(item).parent().parent().hasClass('navbar-nav')) {
          $(item).css({
            display: 'block'
          })
        }
      })

      self.isMini = $(self.options.mainContainer).hasClass(self.className(self.options.minClass));
      self.isCompact = $(self.options.mainContainer).hasClass(self.className(self.options.compactClass));

      // Set state
      self.setState(self)

      // Toggle sub menus
      $(self.options.subMenuInvokerClass).click(function(e) {
        if (!$(self.options.mainContainer).hasClass(self.className(self.options.minClass)) && !$(self.options.mainContainer).hasClass(self.className(self.options.compactClass)) && !$(self.options.mainContainer).hasClass(self.className(self.options.compactMinClass)) && self.options.subMenuOpenEvent === 'hover') {
          self.toggleSubMenu($(e.currentTarget).parent(), self, true)
        } else if (self.options.subMenuOpenEvent === 'click') {
          self.toggleSubMenu($(e.currentTarget).parent(), self, true)
        }
      });

      if (self.options.subMenuOpenEvent === 'hover') {
        self.topLevels.hover(function(e) {
          if ($(self.options.mainContainer).hasClass(self.className(self.options.minClass)) || $(self.options.mainContainer).hasClass(self.className(self.options.compactClass)) || $(self.options.mainContainer).hasClass(self.className(self.options.compactMinClass))) {
            self.toggleSubMenu($(e.currentTarget), self, true)
          }
        });

        self.topLevels.find(self.options.hasSubMenuClass).click(function(e) {
          e.stopPropagation()

          if ($(self.options.mainContainer).hasClass(self.className(self.options.minClass)) || $(self.options.mainContainer).hasClass(self.className(self.options.compactMinClass))) {
            self.toggleSubMenu($(e.currentTarget), self, true)
          }
        });
      }

      // Toggle sidebar
      $(self.options.toggleInvokerClass).click(function() {
        self.toggleSidebar(self);
      });

      // On resize
      $(window).on('resize', function () {
        self.setState(self)
      });

      // Close when click outside (if sidebar is mini and has opened menu)
      $(window).on('click', function (e) {
        if ($(self.options.mainContainer).hasClass(self.className(self.options.minClass)) && self.$sidebar.find(self.options.subMenuClass).parent().hasClass(self.className(self.options.subMenuInvokerActiveClass)) && !self.$sidebar.is(e.target) && self.$sidebar.has(e.target).length === 0) {
          self.$sidebar.find(self.options.subMenuClass).hide().parent().removeClass(self.className(self.options.subMenuInvokerActiveClass));
        }
      });

      var sideNavOverlay = $('<div></div>').insertAfter(self.$sidebar).addClass(self.options.toggleInvokerClass.slice(1) + ' ' + self.className(self.options.mobileOverlayClass));

      sideNavOverlay.click(function () {
        self.toggleSidebar(self);
      });

      // Remove animation class
      $(self.$sidebar).on('transitionend webkitTransitionEnd mozTransitionEnd oTransitionEnd', function () {

        $(self.options.mainContainer).removeClass(self.options.transitionOnClassName);

      });

      // Done init sidebar
      $(self.$sidebar).addClass('navbar-vertical-aside-initialized');
		}

		return HSSideNav;

	}());

  HSSideNav.prototype.setState = function (self) {
    let isClosed = self.showResolutionChecking(self),
      mini = self.isMini || self.isCompact ? true : false;

    if (isClosed) {
      self.sidebarToggleClass = self.options.closedClass;

      $(self.options.mainContainer).addClass(self.className(self.options.closedClass));

      if (!mini) {
        $(self.options.mainContainer).removeClass(self.className(self.options.minClass));
      }

    } else {
      self.sidebarToggleClass = self.options.minClass;

      $(self.options.mainContainer).removeClass(self.className(self.options.closedClass));

    }

    if (isClosed || $(self.options.mainContainer).hasClass(self.className(self.options.minClass))) {
      self.items.each(function () {
        if ($(this).hasClass(self.className(self.options.subMenuInvokerActiveClass))) {
          let menu = $(this).find(self.options.subMenuClass).first();

          if (menu.css('display') === 'none') {
            $(this).removeClass(self.className(self.options.subMenuInvokerActiveClass))

            menu.css({
              display: 'none'
            })

            self.openedMenus = $(this)
          } else {
            menu.css({
              display: 'block'
            })
          }
        }
      })
    }
  };

  HSSideNav.prototype.showResolutionChecking = function (element) {
    var self = element;

    if ($(self.options.mainContainer).hasClass(self.options.showClassNames.xs) && window.innerWidth <= 0) {

      return true;

    } else if ($(self.options.mainContainer).hasClass(self.options.showClassNames.sm) && window.innerWidth <= 576) {

      return true;

    } else if ($(self.options.mainContainer).hasClass(self.options.showClassNames.md) && window.innerWidth <= 768) {

      return true;

    } else if ($(self.options.mainContainer).hasClass(self.options.showClassNames.lg) && window.innerWidth <= 992) {

      return true;

    } else if ($(self.options.mainContainer).hasClass(self.options.showClassNames.xl) && window.innerWidth <= 1200) {

      return true;

    } else {

      return false;

    }
  };

  HSSideNav.prototype.toggleSidebar = function (element) {
    var self = element;

    $(self.options.mainContainer).addClass(self.options.transitionOnClassName);

    $(self.options.mainContainer).toggleClass(self.className(self.sidebarToggleClass))

    if ($(self.options.mainContainer).hasClass(self.className(self.sidebarToggleClass))) {
      $(self.options.mainContainer).addClass(self.className(self.options.minClass))
    } else {
      $(self.options.mainContainer).removeClass(self.className(self.options.minClass))
    }

    if ($(self.options.mainContainer).hasClass(self.className(self.options.minClass))) {
      self.openedMenus = self.toggleSubMenu($(self.$sidebar).find(self.options.subMenuClass).not(":hidden").parent(), self, false);
    } else {
      if ($(self.$sidebar).find(self.options.subMenuClass).not(":hidden").length === 0 && self.hasOwnProperty('openedMenus') && self.openedMenus.length) {
        self.toggleSubMenu(self.openedMenus, self, false)
      } else {
        self.openedMenus = [];
      }
    }

    if (!self.showResolutionChecking(self) && $(self.options.mainContainer).hasClass(self.className(self.options.minClass)) || self.showResolutionChecking(self) && $(self.options.mainContainer).hasClass(self.className(self.options.closedClass))) {
      self.options.onMini();
      window.localStorage.setItem('hs-navbar-vertical-aside-mini', false)
    } else {
      self.options.onFull();
      window.localStorage.removeItem('hs-navbar-vertical-aside-mini')
    }
  };

  HSSideNav.prototype.toggleSubMenu = function(item, element) {
    var self = element,
      collapseOthers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true,
      menu = item.find(self.options.subMenuClass).first(),
      allExcludeTarget = item.parent().children(self.options.hasSubMenuClass).not(item),
      onAction = $(self.options.mainContainer).hasClass(self.className(self.options.transitionOnClassName)),
      topLevel = !item.parent().hasClass(self.className(self.options.subMenuClass)),
      mini = $(self.options.mainContainer).hasClass(self.className(self.options.minClass)) || $(self.options.mainContainer).hasClass(self.className(self.options.compactMinClass)) ? true : false,
      parentMenu = item;

    if (collapseOthers && onAction || collapseOthers && topLevel && mini) {
      allExcludeTarget.find(self.options.subMenuClass).hide().parent().removeClass(self.className(self.options.subMenuInvokerActiveClass))
    } else if (collapseOthers) {
      allExcludeTarget.find(self.options.subMenuClass).slideUp(self.options.subMenuAnimationSpeed).parent().removeClass(self.className(self.options.subMenuInvokerActiveClass))
    }

    if (onAction || topLevel && mini) {
      menu.css({
        transition: 'unset'
      })

      menu.fadeToggle(0)
    } else {
      while (parentMenu.parent().hasClass(self.className(self.options.subMenuClass))) {
        parentMenu = parentMenu.parent()
      }

      menu.slideToggle(self.options.subMenuAnimationSpeed)

      if(mini) {
        setTimeout(function () {
          if (parentMenu.outerHeight() + parentMenu.position().top > $(window).outerHeight()) {
            var distance = parentMenu.outerHeight() + parentMenu.position().top - $(window).outerHeight();

            parentMenu.css({
              top: parentMenu.position().top - distance,
              transition: '.4s'
            })
          }
        }, self.options.subMenuAnimationSpeed)
      }
    }

    item.toggleClass(self.className(self.options.subMenuInvokerActiveClass));

    if (menu.is(':visible')) {
      menu.css({
        top: item.position().top
      })

      if (menu.outerHeight() + menu.position().top > $(window).outerHeight()) {
        var distance = menu.outerHeight() + menu.position().top - $(window).outerHeight();

        menu.css({
          top: item.position().top - distance
        })
      }

      $('.navbar-vertical-container').scroll(function (e) {
        menu.css({
          top: item.position().top
        })

        if (menu.outerHeight() + menu.position().top > $(window).outerHeight()) {
          var distance = menu.outerHeight() + menu.position().top - $(window).outerHeight();

          menu.css({
            top: item.position().top - distance
          })
        }
      })
    }
    return item;
  }

  HSSideNav.prototype.className = function (className) {
    return className.replace(/\./g,'')
  }

	$.fn.hsSideNav = function () {
		var self = this,
			options = arguments[0],
			args = Array.prototype.slice.call(arguments, 1),
			selfLength = self.length,
			i,
			ret;

		for (i = 0; i < selfLength; i++) {
			if (typeof options == 'object' || typeof options == 'undefined') {

				self[i].HSSideNav = new HSSideNav(self[i], options);

			} else {

				ret = self[i].HSSideNav[options].apply(self[i].HSSideNav, args);

			}

			if (typeof ret != 'undefined') {

				return ret;

			}
		}

		return self;
	};

}));
