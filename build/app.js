"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _path = _interopRequireDefault(require("path"));

var _expressHandlebars = _interopRequireDefault(require("express-handlebars"));

var _handlebars2 = _interopRequireDefault(require("handlebars"));

var _handlebarsHelpers = _interopRequireDefault(require("handlebars-helpers"));

var _methodOverride = _interopRequireDefault(require("method-override"));

var _allowPrototypeAccess = require("@handlebars/allow-prototype-access");

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _inicialSetup = require("./libs/inicialSetup");

var _users = _interopRequireDefault(require("./routes/users.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _inicialSetup.createRoles)();
app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.use('/api/auth', _auth["default"]); // app.use('/api/user', userRoutes)

app.use('/users', _users["default"]); //Routes

app.use(require("./routes/aptos"));
app.use(require("./routes/index"));
var _default = app;
exports["default"] = _default;