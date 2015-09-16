(function () {
  // GENIUS -> https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
  var typeOf = function (obj) {
    return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
  }
  // SET-UP
  function rabbak (selector) {
    if (selector.charAt(0) === '#') {
      selector = selector.slice(1, selector.length);
      this.target = document.getElementById(selector);
    } else if (selector.charAt(0) === '.') {
      selector = selector.slice(1, selector.length);
      this.target = document.getElementsByClassName(selector);
    }
  }

  // FUNCTIONS
  // OBJECT OUTER WIDTH
  rabbak.prototype.outerWidth = function(includeMargin) {
    if (typeOf(this.target) === 'htmlcollection') {
      var widths = [];
      for (var i = 0; i < this.target.length; i++) {
        if (includeMargin == null || false) {
          widths.push(this.target[i].getBoundingClientRect().width);
        } else if (includeMargin) {
          var elementHorizontalMargin = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('margin-left')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('margin-right'));
          widths.push(this.target[i].getBoundingClientRect().width + elementHorizontalMargin);
        }
      }
      return widths;
    } else {
      if (includeMargin == null || false) {
        return this.target.getBoundingClientRect().width;
      } else if (includeMargin) {
        var elementHorizontalMargin = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('margin-left')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('margin-right'));
        return this.target.getBoundingClientRect().width + elementHorizontalMargin;
      }
    }
  }
  // OBJECT OUTER HEIGHT
  rabbak.prototype.outerHeight = function (includeMargin) {
    if (typeOf(this.target) === 'htmlcollection') {
      var heights = [];
      for (var i = 0; i < this.target.length; i++) {
        if (includeMargin == null || false) {
          heights.push(this.target[i].getBoundingClientRect().height);
        } else if (includeMargin) {
          var elementVerticalMargin = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('margin-top')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('margin-bottom'));
          heights.push(this.target[i].getBoundingClientRect().height + elementVerticalMargin);
        }
      }
      return heights;
    } else {
      if (includeMargin == null || false) {
        return this.target.getBoundingClientRect().height;
      } else if (includeMargin) {
        var elementVerticalMargin = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('margin-top')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('margin-bottom'));
        return this.target.getBoundingClientRect().height + elementVerticalMargin;
      }
    }
  }
  // OBJECT INNER WIDTH
  rabbak.prototype.innerWidth = function() {
    if (typeOf(this.target) === 'htmlcollection') {
      var widths = [];
      for (var i = 0; i < this.target.length; i++) {
        var elementHorizontalBorder = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-left')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-right'));
        widths.push(this.target[i].getBoundingClientRect().width - elementHorizontalBorder);
      }
      return widths;
    } else {
      var elementHorizontalBorder = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-left')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-right'));
      return this.target.offsetWidth - elementHorizontalBorder;
    }
  }
  // OBJECT INNER HEIGHT
  rabbak.prototype.innerHeight = function() {
    if (typeOf(this.target) === 'htmlcollection') {
      var heights = [];
      for (var i = 0; i < this.target.length; i++) {
        var elementVerticalBorder = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-top')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-bottom'));
        heights.push(this.target[i].getBoundingClientRect().height - elementVerticalBorder);
      }
      return heights;
    } else {
      var elementVerticalBorder = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-top')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-bottom'));
      return this.target.offsetHeight - elementVerticalBorder;
    }
  }
  // OBJECT WIDTH
  rabbak.prototype.width = function() {
    if (typeOf(this.target) === 'htmlcollection') {
      var widths = [];
      for (var i = 0; i < this.target.length; i++) {
        var elementHorizontalPadding = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('padding-right'));
        var elementHorizontalBorder = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-left')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-right'));
        widths.push(this.target[i].getBoundingClientRect().width - elementHorizontalPadding - elementHorizontalBorder);
      }
      return widths;
    } else {
      var elementHorizontalPadding = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('padding-right'));
      var elementHorizontalBorder = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-left')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-right'));
      return this.target.getBoundingClientRect().width - elementHorizontalPadding - elementHorizontalBorder;
    }
  }
  // OBJECT HEIGHT
  rabbak.prototype.height = function() {
    if (typeOf(this.target) === 'htmlcollection') {
      var heights = [];
      for (var i = 0; i < this.target.length; i++) {
        var elementVerticalPadding = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('padding-bottom'));
        var elementVerticalBorder = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-top')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-bottom'));
        heights.push(this.target[i].getBoundingClientRect().height - elementVerticalPadding - elementVerticalBorder);
      }
      return heights;
    } else {
      var elementVerticalPadding = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('padding-bottom'));
      var elementVerticalBorder = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-top')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-bottom'));
      return this.target.getBoundingClientRect().height - elementVerticalPadding - elementVerticalBorder;
    }
  }
  // ADD CLASS
  rabbak.prototype.addClass = function (className) {
    if (typeOf(this.target) === 'htmlcollection') {
      for (var i = 0; i < this.target.length; i++) {
        this.target[i].classList.add(className)
      }
      return;
    }
    this.target.classList.add(className)
  }
});
