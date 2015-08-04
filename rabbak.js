// GENIUS -> https://javascriptweblog.wordpress.com/2011/08/08/fixing-the-javascript-typeof-operator/
var typeOf = function(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
}

// SET-UP
function rabbak(selector) {
  if (selector.charAt(0) === "#") {
    selector = selector.slice(1, selector.length);
    this.target = document.getElementById(selector);
  } else if (selector.charAt(0) === ".") {
    selector = selector.slice(1, selector.length);
    this.target = document.getElementsByClassName(selector);
  }
}

///////// FUNCTIONS /////////
// OBJECT INNER WIDTH
rabbak.prototype.innerWidth = function() {
  if (typeOf(this.target) === "htmlcollection") {
    var widths = [];
    for (i = 0; i < this.target.length; i++) {
      widths.push(this.target[i].offsetWidth);
    }
    return widths;
  } else {
    return this.target.offsetWidth;
  }
}
// OBJECT INNER HEIGHT
rabbak.prototype.innerHeight = function() {
  if (typeOf(this.target) === "htmlcollection") {
    var heights = [];
    for (i = 0; i < this.target.length; i++) {
      heights.push(this.target[i].offsetHeight);
    }
    return heights;
  } else {
    return this.target.offsetHeight;
  }
}
// OBJECT WIDTH
rabbak.prototype.width = function() {
  var elementHorizontalPadding = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('padding-left')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('padding-right'));
  if (typeOf(this.target) === "htmlcollection") {
    var widths = [];
    for (i = 0; i < this.target.length; i++) {
      widths.push(this.target[i].getBoundingClientRect().width - elementHorizontalPadding);
    }
    return widths;
  } else {
    return this.target.getBoundingClientRect().width - elementHorizontalPadding;
  }
}
// OBJECT HEIGHT
rabbak.prototype.height = function() {
  var elementVerticalPadding = parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('padding-top')) + parseFloat(window.getComputedStyle(this.target, null).getPropertyValue('padding-bottom'));
  if (typeOf(this.target) === "htmlcollection") {
    var heights = [];
    for (i = 0; i < this.target.length; i++) {
      heights.push(this.target[i].getBoundingClientRect().height - elementVerticalPadding);
    }
    return heights;
  } else {
    return this.target.getBoundingClientRect().height - elementVerticalPadding;
  }
}
// ADD CLASS
rabbak.prototype.addClass = function(className) {
  if (typeOf(this.target) === "htmlcollection") {
    for (i = 0; i < this.target.length; i++) {
      this.target[i].classList.add(className)
    }
    return;
  }
  this.target.classList.add(className);
}

// ALAKAZAM
var $ = new rabbak("#box");
