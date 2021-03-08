"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.consulta = exports.filterApto = exports.getAptoById = exports.getAptos = exports.createApto = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Apto = require("../models/Apto");

var createApto = function createApto(req, res) {};

exports.createApto = createApto;

var getAptos = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$query, _req$query$page, page, _req$query$limit, limit, apto, paginator;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            //modificado
            _req$query = req.query, _req$query$page = _req$query.page, page = _req$query$page === void 0 ? 1 : _req$query$page, _req$query$limit = _req$query.limit, limit = _req$query$limit === void 0 ? 10 : _req$query$limit;
            _context.next = 3;
            return Apto.find().limit(limit * 1).skip((page - 1) * limit).lean();

          case 3:
            apto = _context.sent;
            //Importante
            //.lean para evtar el error de handlebars
            paginator = Paginator(apto.length);
            res.render("index", {
              apto: apto,
              paginator: paginator
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAptos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getAptos = getAptos;

var getAptoById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var apto;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Apto.find({
              ID: req.params.id
            }).lean();

          case 2:
            apto = _context2.sent;
            console.log(apto);
            res.render("aptamento", {
              apto: apto
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getAptoById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAptoById = getAptoById;

var filterApto = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var response, _req$query2, _req$query2$page, page, _req$query2$limit, limit, max, min, hab, apto, paginator, nofound, _apto, _paginator, _nofound;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            response = req.query; // let responseNumber = response.map(parseFloat(element){
            //     return (element)
            // })
            //  response = response.forEach(element => {
            //     element = parseFloat(element)
            // });

            _req$query2 = req.query, _req$query2$page = _req$query2.page, page = _req$query2$page === void 0 ? 1 : _req$query2$page, _req$query2$limit = _req$query2.limit, limit = _req$query2$limit === void 0 ? 10 : _req$query2$limit;
            max = response.max, min = response.min, hab = response.hab;
            max = parseFloat(max);
            min = parseFloat(min);
            hab = parseInt(hab);

            if (!response) {
              _context3.next = 20;
              break;
            }

            _context3.prev = 7;
            _context3.next = 10;
            return Apto.find(_objectSpread({
              Precio: _objectSpread(_objectSpread({}, max ? {
                $lte: max
              } : {}), min ? {
                $gte: min
              } : {})
            }, hab ? {
              Habitaciones: hab
            } : {})).limit(limit * 1).skip((page - 1) * limit).lean();

          case 10:
            apto = _context3.sent;

            if (apto.length > 0) {
              paginator = Paginator(apto.length);
              console.log(paginator);
              res.render("index", {
                apto: apto,
                response: response,
                paginator: paginator
              });
            } else {
              nofound = true;
              res.render("index", {
                nofound: nofound,
                response: response
              });
            }

            _context3.next = 20;
            break;

          case 14:
            _context3.prev = 14;
            _context3.t0 = _context3["catch"](7);
            _context3.next = 18;
            return Apto.find(_objectSpread({}, hab ? {
              Habitaciones: hab
            } : {})).limit(limit * 1).skip((page - 1) * limit).lean();

          case 18:
            _apto = _context3.sent;

            if (_apto.length > 0) {
              _paginator = Paginator(_apto.length);
              res.render("index", {
                apto: _apto,
                response: response,
                paginator: _paginator
              });
            } else {
              _nofound = true;
              res.render("index", {
                nofound: _nofound,
                response: response
              });
            }

          case 20:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[7, 14]]);
  }));

  return function filterApto(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.filterApto = filterApto;

var consulta = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var response, lat, lon, km, aptos, preciosEnArea, aptosEnArea, sum, avg;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            response = req.body;
            lat = response.lat, lon = response.lon, km = response.km;
            lat = parseFloat(lat);
            lon = parseFloat(lon);
            km = parseFloat(km);
            _context4.next = 7;
            return Apto.find().lean();

          case 7:
            aptos = _context4.sent;
            //Importante
            preciosEnArea = [];
            aptosEnArea = [];
            aptos.forEach(function (apto) {
              if (getDistanceFromLatLonInKm(lat, lon, apto.Latitud, apto.Longitud) <= km) {
                preciosEnArea.push(apto.Precio);
                aptosEnArea.push(apto);
              }
            });

            if (preciosEnArea.length > 0) {
              sum = preciosEnArea.reduce(function (previous, current) {
                return current += previous;
              });
              avg = Math.round(sum / preciosEnArea.length);
              res.render('consulta', {
                aptosEnArea: aptosEnArea,
                avg: avg,
                response: response
              });
              console.log(preciosEnArea);
              console.log(avg);
            } else {
              res.render('consulta', {
                response: response
              });
            }

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function consulta(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}(); //<--- Funciones de ayuda ----->


exports.consulta = consulta;

function Paginator(lenApto) {
  console.log(lenApto);

  if (lenApto == 10) {
    return true;
  }
} // <--------- Distancia de LatLon a km ------>


function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
  var R = 6371; // Radius of the earth in km

  var dLat = deg2rad(lat2 - lat1); // deg2rad below

  var dLon = deg2rad(lon2 - lon1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c; // Distance in km

  return d;
} //<----grados to dadianes ---->


function deg2rad(deg) {
  return deg * (Math.PI / 180);
}