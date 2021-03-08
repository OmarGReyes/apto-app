"use strict";

module.exports = {
  ifeq: function ifeq(a, b, options) {
    if (a === b) {
      return options.fn(this);
    }

    return options.inverse(this);
  },
  bar: function bar() {
    return "BAR!";
  }
};