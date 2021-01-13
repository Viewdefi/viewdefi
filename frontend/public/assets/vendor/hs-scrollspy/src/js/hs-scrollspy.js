/*
* HSScrollspy Plugin
* @version: 3.0.1 (Sat, 11 Jul 2020)
* @requires: jQuery v3.0 or later, Bootstrap 4.5 or later
* @author: HtmlStream
* @event-namespace: .HSScrollspy
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2020 Htmlstream
*/

export default class HSScrollspy {
	constructor(element, config) {
		this.element = element;
		this.defaults = {
			topLevelComponent: 'html, body',
			duration: 400,
			easing: 'linear',
			beforeScroll: null,
			afterScroll: null
		};
		this.config = config;
	}
	
	init() {
		const self = this,
			element = self.element,
			BSData = {
				offset: element.data('offset') ? element.data('offset') : 0,
				target: element.data('target') ? element.data('target') : null,
				method: element.data('method') ? element.data('method') : 'auto'
			},
			dataSettings = $(element).attr('data-hs-scrollspy-options') ? JSON.parse($(element).attr('data-hs-scrollspy-options')) : {};
		
		self.config = Object.assign({}, self.defaults, BSData, dataSettings, self.config);
		
		console.log(self.config);
		
		self._bindEvents();
		
		$(element).scrollspy(self.config);
	}
	
	_bindEvents() {
		const self = this;
		
		$(self.config.target).on('click', 'a:not([href="#"]):not([href="#0"])', function (e) {
			let $this = this,
				hash,
				offsetTop;
			
			e.preventDefault();
			
			let promise = new Promise((resolve) => {
				if ($.isFunction(self.config.beforeScroll)) {
					self.config.beforeScroll(resolve);
				} else {
					resolve('completed');
				}
			});
			
			promise.then(
				completed => {
					if ($this.hash !== '' && $($this.hash).length) {
						hash = $this.hash;
						offsetTop = self.config.topLevelComponent === 'html, body' ?
							($(hash).offset().top + 2) - self.config.offset :
							$(self.config.topLevelComponent).scrollTop() - $(self.config.topLevelComponent).offset().top + (($(hash).offset().top + 2) - self.config.offset);
						
						// Smooth scroll
						$(self.config.topLevelComponent).animate({
							scrollTop: offsetTop
						}, {
							duration: self.config.duration,
							easing: self.config.easing,
							complete: function () {
								if (history.replaceState) {
									history.replaceState(null, null, hash);
								}
								
								if ($.isFunction(self.config.afterScroll)) {
									self.config.afterScroll();
								}
							}
						});
						
						return false;
					}
				}
			);
		});
	}
}
