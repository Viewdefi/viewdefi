export default class {
  constructor(elem, settings) {
    this.elem = elem;
    this.defaults = {
      classChangeTarget: null,
      defaultClass: null,
      showClass: null,
      show: false
    };
    this.settings = settings;
  }

  init() {
    const context = this,
      $el = context.elem,
      dataSettings = $el.getAttribute('data-hs-toggle-password-options') ? JSON.parse($el.getAttribute('data-hs-toggle-password-options')) : {},
      options = Object.assign(context.defaults, dataSettings, context.settings);

    if (Array.isArray(options.target)) {
      let targets = [];

      options.target.forEach((target) => {
        targets.push(document.querySelector(target))
      })

      options.target = targets;
      options.classChangeTarget = options.classChangeTarget ? document.querySelector(options.classChangeTarget) : options.target
    } else {
      options.target = document.querySelector(options.target)
      options.classChangeTarget = options.classChangeTarget ? document.querySelector(options.classChangeTarget) : options.target
    }

    if (options.show) {
      $el.type = "text";
    }

    context._toggleClass(options, options.show);
    context._showPassword($el, options);
  }

  _showPassword(el, config) {
    const context = this,
      $target = config.target;

    if (Array.isArray($target)) {
      $target.forEach((target) => {
        target.addEventListener('click', event => {
          if (el.type === "password") {
            el.type = "text";
            context._toggleClass(config, true);
          } else {
            el.type = "password";
            context._toggleClass(config, false);
          }
        });
      })
    } else {
      $target.addEventListener('click', event => {
        if (el.type === "password") {
          el.type = "text";
          context._toggleClass(config, true);
        } else {
          el.type = "password";
          context._toggleClass(config, false);
        }
      });
    }
  }

  _toggleClass( config, isShow = false) {
    const context = this,
      $target = config.classChangeTarget;

    if (Array.isArray($target)) {
      $target.forEach((target) => {
        if (isShow) {
          target.classList.add(config.showClass);
          target.classList.remove(config.defaultClass);
        } else {
          target.classList.add(config.defaultClass);
          target.classList.remove(config.showClass);
        }
      })
    } else {
      if (isShow) {
        $target.classList.add(config.showClass);
        $target.classList.remove(config.defaultClass);
      } else {
        $target.classList.add(config.defaultClass);
        $target.classList.remove(config.showClass);
      }
    }
  }
}
