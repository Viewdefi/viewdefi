
/*
* HSStepForm Plugin
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later
* @author: HtmlStream
* @event-namespace: .HSStepForm
* @license: Htmlstream Libraries (https://htmlstream.com/)
* Copyright 2019 Htmlstream
*/

export default class HSStepForm {
  constructor(elem, settings) {
    this.elem = elem;
    this.defaults = {
      progressSelector: null,
      progressItems: null,

      stepsSelector: null,
      stepsItems: null,
      stepsActiveItem: null,

      nextSelector: '[data-hs-step-form-next-options]',
      prevSelector: '[data-hs-step-form-prev-options]',
      endSelector: null,

      isValidate: false,

      classMap: {
        active: 'active',
        checked: 'is-valid',
        error: 'is-invalid',
        required: 'js-step-required',
        focus: 'focus'
      },

      finish: () => {
      },

      onNextStep: () => {
      },

      onPrevStep: () => {
      }
    };
    this.settings = settings;
  }

  init() {
    const context = this,
      $el = context.elem,
      dataSettings = $el.attr('data-hs-step-form-options') ? JSON.parse($el.attr('data-hs-step-form-options')) : {};
    let options = $.extend(true, context.defaults, dataSettings, context.settings);

    options.progressItems = $(options.progressSelector).find('> *');
    options.stepsItems = $(options.stepsSelector).find('> *');
    options.stepsActiveItem = $(options.stepsSelector).find(`> .${options.classMap.active}`);

    context._prepareObject($el, options);

    $el.find(options.nextSelector).on('click', function () {
      context._nextClickEvents($el, options, $(this));
    });

    $el.find(options.prevSelector).on('click', function () {
      context._prevClickEvents($el, options, $(this));
    });

    $el.find(options.endSelector).on('click', function () {
      context._endClickEvents($el, options, $(this));
    });
  }

  _prepareObject(el, params) {
    let options = params;

    options.stepsItems.not(`.${options.classMap.active}`).hide();
    options.progressItems.eq(options.stepsActiveItem.index()).addClass(options.classMap.active).addClass(options.classMap.focus);
  }

  _endClickEvents(el, params) {
    let options = params;

    return params.finish();
  }

  _nextClickEvents(el, params, nextEl) {
    const nextDataSettings = nextEl.attr('data-hs-step-form-next-options') ? JSON.parse(nextEl.attr('data-hs-step-form-next-options')) : {};
    let options = params,
      nextItemDefaults = {
        targetSelector: null
      },
      nextItemOptions = $.extend(true, nextItemDefaults, nextDataSettings);

    for (let i = 0; i < options.progressItems.length; i++) {
      if (typeof $(window).validate !== 'undefined' && options.isValidate) {
        if ($(nextItemOptions.targetSelector).index() > i) {
          $(options.progressItems[i]).addClass(options.classMap.error);

          let requiredSelector = $(options.progressItems[i]).find(options.nextSelector).attr('data-hs-step-form-next-options');

          options.stepsItems.hide().removeClass(options.classMap.active);

          $(JSON.parse(requiredSelector).targetSelector).show().addClass(options.classMap.active);

          if (!el.valid()) {
            return false;
          } else {
            $(options.progressItems[i]).removeClass(options.classMap.error);
          }
        }

        if ($(nextItemOptions.targetSelector).index() > i && options.isValidate) {
          $(options.progressItems[i]).addClass(options.classMap.checked);
        }
      } else {
        if ($(nextItemOptions.targetSelector).index() > i && options.isValidate) {
          $(options.progressItems[i]).addClass(options.classMap.checked);
        }

        if ($(nextItemOptions.targetSelector).index() > i && !options.isValidate) {
          $(options.progressItems[i]).addClass(options.classMap.active);
        }
      }
    }

    options.progressItems.removeClass(options.classMap.active).removeClass(options.classMap.focus);
    options.progressItems.eq($(nextItemOptions.targetSelector).index()).addClass(options.classMap.active).addClass(options.classMap.focus);

    options.stepsItems.hide().removeClass(options.classMap.active);
    $(nextItemOptions.targetSelector).fadeIn(400).addClass(options.classMap.active);

    return options.onNextStep();
  }

  _prevClickEvents(el, params, prevEl) {
    let options = params,
      prevItemDefaults = {
        targetSelector: null
      };

    const prevDataSettings = prevEl.attr('data-hs-step-form-prev-options') ? JSON.parse(prevEl.attr('data-hs-step-form-prev-options')) : {};
    let prevItemOptions = $.extend(true, prevItemDefaults, prevDataSettings);

    for (let i = 0; i < options.progressItems.length; i++) {
      if (typeof $(window).validate !== 'undefined' && options.isValidate) {
        if ($(prevItemOptions.targetSelector).index() > i) {
          $(options.progressItems[i]).addClass(options.classMap.error);

          let requiredSelector = $(options.progressItems[i]).find(options.nextSelector).attr('data-hs-step-form-next-options');

          options.stepsItems.hide().removeClass(options.classMap.active);

          $(JSON.parse(requiredSelector).targetSelector).show().addClass(options.classMap.active);

          if (!el.valid()) {
            return false;
          } else {
            $(options.progressItems[i]).removeClass(options.classMap.error);
          }
        }

        if ($(prevItemOptions.targetSelector).index() > i && options.isValidate) {
          $(options.progressItems[i]).addClass(options.classMap.checked);
        }
      } else {
        if ($(prevItemOptions.targetSelector).index() > i && options.isValidate) {
          $(options.progressItems[i]).addClass(options.classMap.checked);
        }

        if ($(prevItemOptions.targetSelector).index() > i && !options.isValidate) {
          $(options.progressItems[i]).addClass(options.classMap.active);
        }
      }
    }

    options.progressItems.removeClass(options.classMap.active).removeClass(options.classMap.focus);
    options.progressItems.eq($(prevItemOptions.targetSelector).index()).addClass(options.classMap.active).addClass(options.classMap.focus);

    options.stepsItems.hide().removeClass(options.classMap.active);
    $(prevItemOptions.targetSelector).fadeIn(400).addClass(options.classMap.active);

    return options.onPrevStep();
  }
}
