export default function fullscreenAddClass(el, params) {
	const options = params;
	
	el.addClass(options.toggleClassName.slice(1));
	
	$(options.mainContainerSelector).addClass(options.preventScrollClassName.slice(1));
}
