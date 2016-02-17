(function() {
  var Taliesin = function(selector) {
    this.selector = document.querySelectorAll(selector)
    return this
  }
  // Taliesin prototype
  Taliesin.prototype = {
    outerWidth: function(includeMargin) {
      if (!includeMargin) {
        return this.selector[0].getBoundingClientRect().width
      } else {
        var elementHorizontalMargin = parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('margin-left')) + parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('margin-right'))
        return this.selector[0].getBoundingClientRect().width + elementHorizontalMargin
      }
    },
    outerHeight: function(includeMargin) {
      if (!includeMargin) {
        return this.selector[0].getBoundingClientRect().height
      } else {
        var elementVerticalMargin = parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('margin-top')) + parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('margin-bottom'))
        return this.selector[0].getBoundingClientRect().height + elementVerticalMargin
      }
    },
    innerWidth: function() {
      var elementHorizontalBorder = parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('border-left')) + parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('border-right'))
      return this.selector[0].offsetWidth - elementHorizontalBorder
    },
    innerHeight: function() {
      var elementVerticalBorder = parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('border-top')) + parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('border-bottom'))
      return this.selector[0].offsetHeight - elementVerticalBorder
    },
    width: function() {
      var elementHorizontalPadding = parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('padding-right'))
      var elementHorizontalBorder = parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('border-left')) + parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('border-right'))
      return this.selector[0].getBoundingClientRect().width - elementHorizontalPadding - elementHorizontalBorder
    },
    height: function() {
      var elementVerticalPadding = parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('padding-bottom'))
      var elementVerticalBorder = parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('border-top')) + parseFloat(window.getComputedStyle(this.selector[0], null).getPropertyValue('border-bottom'))
      return this.selector[0].getBoundingClientRect().height - elementVerticalPadding - elementVerticalBorder
    },
    addClass: function(className) {
      return this.selector[0].classList.add(className)
    },
    removeClass: function(className) {
      return this.selector[0].classList.remove(className)
    },
    toggleClass: function(className) {
      for (var i = 0; i < this.selector.length; i++) {
        this.selector[i].classList.toggle(className)
      }
      return this
    },
    remove: function() {
      for (var i = 0; i < this.selector.length; i++) {
        this.selector[i].parentNode.removeChild(this.selector[i])
      }
    },
    html: function(content) {
      if (!content) {
        return this.selector[0].innerHTML
      } else {
        for (var i = 0; i < this.selector.length; i++) {
          this.selector[i].innerHTML = content
        }
        return this
      }
    }
  }

  /**
   * Returning an instance of the Taliesin (prototype) everytime we call
   * the function T.
   */
  var T = function(selector) {
    return new Taliesin(selector)
  }

  /**
   * Here's the fun part! Everything here is anonymous, however, I assigned
   * the instance of Taliesin T (created above) to a global alias (T) that is
   * attached to the window scope so it can be accessed directy...
   * 💥MIND BLOWN 💥
   * Waseem Dahman helped a LOTTT with this. http://github.com/wsmd
   */
  if (!window.T) {
    window.T = T
  }
})()
