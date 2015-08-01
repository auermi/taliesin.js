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
// OBJECT WIDTH
rabbak.prototype.width = function() {
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
// OBJECT HEIGHT
rabbak.prototype.height = function() {
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

// ALAKAZAM
var $ = new rabbak(".circle");
