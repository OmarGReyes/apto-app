"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var router = (0, _express.Router)();
router.get('/signin', function (req, res) {
  res.render('users/signin');
});
router.get('/signup', function (req, res) {
  res.render('users/signup');
});
router.post('/signup', function (req, res) {});
var _default = router;
exports["default"] = _default;