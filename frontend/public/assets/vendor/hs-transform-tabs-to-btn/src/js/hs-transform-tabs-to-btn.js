export default class HSTransformTabsToBtn {
	constructor(elem, settings) {
		this.elem = elem;
		this.defaults = {
			targetEl: null,
			transformResolution: 'md',
			btnClassNames: null,
			animationType: 'slide', // slide, accordion
			
			invokerSelector: '> *',
			contentSelector: '.tab-pane'
		};
		this.settings = settings;
	}
	
	init() {
		const context = this,
			$el = context.elem,
			dataSettings = $el.attr('data-hs-transform-tabs-to-btn-options') ? JSON.parse($el.attr('data-hs-transform-tabs-to-btn-options')) : {},
			options = $.extend(true, context.defaults, dataSettings, context.settings);
		
		const resolutionsList = {
				xs: 0,
				sm: 576,
				md: 768,
				lg: 992,
				xl: 1200
			},
			$invokerParent = $el.parent(),
			$tabsContent = $('#' + $el.data('target')),
			$tabsContentItem = $tabsContent.find('.tab-pane');
		
		$(window).on('resize', function() {
			if (window.innerWidth < resolutionsList[options.transformResolution]) {
				$el.hide();
				
				$el.parent().addClass('nav-mobile-mode-on');
				
				$('body').on('click', function () {
					if (options.animationType) {
						$el.slideUp(200);
					} else {
						$el.find('.nav-inner').slideUp(200);
					}
				});
			} else {
				$el.show();
				
				$el.parent().removeClass('nav-mobile-mode-on');
				
				$('body').off('click');
			}
			
			if (window.innerWidth > resolutionsList[options.transformResolution] && options.animationType) {
				$el.removeAttr('style');
				$tabsContentItem.removeAttr('style');
				$invokerParent.off('click', '.js-tabs-mobile-control');
				$invokerParent.off('click', '[role="tab"]');
				
				if (options.animationType === 'accordion') {
					$tabsContent.find('.js-tabs-mobile-control').remove();
				} else {
					$invokerParent.find('.js-tabs-mobile-control').remove();
				}
				
				return;
			}
			
			if (window.innerWidth < resolutionsList[options.transformResolution] && options.animationType === 'accordion') {
				context.accordionEffect($tabsContent, $el.find('> *'), $tabsContentItem, options.btnClassNames);
			} else if (window.innerWidth < resolutionsList[options.transformResolution] && options.animationType === 'slide') {
				context.slideEffect($invokerParent, $el, options.btnClassNames);
			}
		}).trigger('resize');
	}
	
	slideEffect(context, menu, btnClasses) {
		if (context.find('.js-tabs-mobile-control').length) return;
		
		//Create control
		var activeItemHTML = menu.find('.active').html();
		
		$(menu).before('<a class="js-tabs-mobile-control ' + btnClasses + '" href="#">' + activeItemHTML + '</a>');
		
		/*----- CLICK -----*/
		context.on('click', '.js-tabs-mobile-control', function (e) {
			e.stopPropagation();
			e.preventDefault();
			
			$(menu).slideToggle(200);
		});
		
		context.on('click', '[role="tab"]', function (e) {
			e.preventDefault();
			
			var thisHTML = $(this).html(),
				$targetControl = $(this).closest('ul').prev('.js-tabs-mobile-control');
			
			$targetControl.html(thisHTML);
			$(menu).slideUp(200);
		});
	}
	
	accordionEffect(context, menuItem, menu, btnClasses) {
		if (context.find('.js-tabs-mobile-control').length) return;
		
		//Create control
		$(menu).before('<a class="js-tabs-mobile-control ' + btnClasses + '" href="#"></a>');
		
		menuItem.each(function () {
			var thisIndex = $(this).index(),
				thisHTML = $(this).find('[role="tab"]').html();
			
			if ($(this).find('[role="tab"]').hasClass('active')) {
				$(menu[thisIndex]).prev().addClass('active');
			}
			
			$(menu[thisIndex]).prev().html(thisHTML);
		});
		
		/*----- CLICK -----*/
		context.on('click', '.js-tabs-mobile-control', function (e) {
			e.preventDefault();
			
			if ($(this).hasClass('active')) return;
			
			var contextID = context.attr('id');
			
			context.find('.js-tabs-mobile-control').removeClass('active');
			
			$('[data-target="' + contextID + '"]').find('.nav-link').removeClass('active');
			var $target = $(this).next(),
				targetID = $target.attr('id');
			
			if ($target.hasClass('fade')) {
				$(this).addClass('active');
				$('[href="#' + targetID + '"]').addClass('active');
				
				$(menu).slideUp(200);
				$target.slideDown(200, function () {
					context.find('[role="tabpanel"]').removeClass('show active');
					$target.addClass('show active');
				});
			} else {
				$(this).addClass('active');
				$(menu).slideUp(200);
				$target.slideDown(200);
			}
		});
	}
}
