(function () {
    'use strict';
    /*jslint browser: true*/
    /*jslint vars: true, plusplus: true, devel: true, indent: 4, todo: true */
    function T(id) {
        if (id) {
            // Avoid clobbering the window scope:
            // return a new T object if we're in the wrong scope
            if (window === this) {
                return new T(id);
            }
            // We're in the correct object scope:
            // Init our element object and return the object
            this.e = document.getElementById(id);
            console.log('Error. No ID Specified');
            return this;
        }
        return console.log('Error. Can\'t find selector of called ' + id);
    }
    T.prototype = {
        // https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
        typeOf: function (object) {
            return ({}).toString.call(object).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
        },
        // Object Outer Width
        outerWidth: function (includeMargin) {
            var elementHorizontalMargin;
            if (this.typeOf(this.target) === 'htmlcollection') {
                var widths = [];
                var i;
                for (i = 0; i < this.target.length; i++) {
                    if (includeMargin === null || false) {
                        widths.push(this.target[i].getBoundingClientRect().width);
                    } else if (includeMargin) {
                        elementHorizontalMargin = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('margin-left')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('margin-right'));
                        widths.push(this.target[i].getBoundingClientRect().width + elementHorizontalMargin);
                    }
                }
                return widths;
            }
            if (includeMargin === null || false) {
                return this.target.getBoundingClientRect().width;
            }
            elementHorizontalMargin = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('margin-left')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('margin-right'));
            return this.target.getBoundingClientRect().width + elementHorizontalMargin;
        },
        outerHeight: function (includeMargin) {
            var elementVerticalMargin;
            var i;
            if (this.typeOf(this.target) === 'htmlcollection') {
                var heights = [];
                for (i = 0; i < this.target.length; i++) {
                    if (includeMargin === null || false) {
                        heights.push(this.target[i].getBoundingClientRect().height);
                    } else if (includeMargin) {
                        elementVerticalMargin = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('margin-top')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('margin-bottom'));
                        heights.push(this.target[i].getBoundingClientRect().height + elementVerticalMargin);
                    }
                }
                return heights;
            }
            if (includeMargin === null || false) {
                return this.target.getBoundingClientRect().height;
            }
            elementVerticalMargin = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('margin-top')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('margin-bottom'));
            return this.target.getBoundingClientRect().height + elementVerticalMargin;
        },
        // OBJECT INNER WIDTH
        innerWidth: function () {
            var elementHorizontalBorder;
            if (this.typeOf(this.target) === 'htmlcollection') {
                var widths = [];
                var i;
                for (i = 0; i < this.target.length; i++) {
                    elementHorizontalBorder = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-left')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-right'));
                    widths.push(this.target[i].getBoundingClientRect().width - elementHorizontalBorder);
                }
                return widths;
            }
            elementHorizontalBorder = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-left')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-right'));
            return this.target.offsetWidth - elementHorizontalBorder;
        },
        // OBJECT INNER HEIGHT
        innerHeight: function () {
            var elementVerticalBorder;
            if (this.typeOf(this.target) === 'htmlcollection') {
                var heights = [];
                var i;
                for (i = 0; i < this.target.length; i++) {
                    elementVerticalBorder = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-top')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-bottom'));
                    heights.push(this.target[i].getBoundingClientRect().height - elementVerticalBorder);
                }
                return heights;
            }
            elementVerticalBorder = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-top')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-bottom'));
            return this.target.offsetHeight - elementVerticalBorder;
        },
        // OBJECT WIDTH
        width: function () {
            var elementHorizontalPadding;
            var elementHorizontalBorder;
            if (this.typeOf(this.target) === 'htmlcollection') {
                var widths = [];
                var i;
                for (i = 0; i < this.target.length; i++) {
                    elementHorizontalPadding = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('padding-right'));
                    elementHorizontalBorder = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-left')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-right'));
                    widths.push(this.target[i].getBoundingClientRect().width - elementHorizontalPadding - elementHorizontalBorder);
                }
                return widths;
            }
            elementHorizontalPadding = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('padding-right'));
            elementHorizontalBorder = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-left')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-right'));
            return this.target.getBoundingClientRect().width - elementHorizontalPadding - elementHorizontalBorder;
        },
        // OBJECT HEIGHT
        height: function () {
            var elementVerticalPadding;
            var elementVerticalBorder;
            if (this.typeOf(this.target) === 'htmlcollection') {
                var heights = [];
                var i;
                for (i = 0; i < this.target.length; i++) {
                    elementVerticalPadding = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('padding-bottom'));
                    elementVerticalBorder = parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-top')) + parseFloat(window.getComputedStyle(this.target[i], null).getPropertyValue('border-bottom'));
                    heights.push(this.target[i].getBoundingClientRect().height - elementVerticalPadding - elementVerticalBorder);
                }
                return heights;
            }
            elementVerticalPadding = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('padding-bottom'));
            elementVerticalBorder = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-top')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('border-bottom'));
            return this.target.getBoundingClientRect().height - elementVerticalPadding - elementVerticalBorder;
        },
        // ADD CLASS
        addClass: function (className) {
            if (this.typeOf(this.target) === 'htmlcollection') {
                var i;
                for (i = 0; i < this.target.length; i++) {
                    this.target[i].classList.add(className);
                }
                return;
            }
            this.target.classList.add(className);
        }
    };
    // TODO -> Implement old selector functionality into new library structure.
    /*
    function rabbak (selector) {
      if (selector.charAt(0) === '#') {
        selector = selector.slice(1, selector.length);
        this.target = document.getElementById(selector);
      } else if (selector.charAt(0) === '.') {
        selector = selector.slice(1, selector.length);
        this.target = document.getElementsByClassName(selector);
      }
    }
    */
});
