"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var AptoSchema = new Schema({
  Titulo: {
    type: String,
    required: true
  },
  Descripcion: {
    type: String,
    required: true
  },
  Latitud: {
    type: Number,
    required: true
  },
  Logitud: {
    type: Number,
    required: true
  },
  ID: {
    type: String,
    required: true
  },
  Precio: {
    type: Number,
    required: true
  },
  Habitaciones: {
    type: Number,
    required: true
  },
  Baños: {
    type: String,
    required: true
  }
});
AptoSchema.methods.allAptos = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return AptoSchema.find().lean();

        case 2:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
module.exports = mongoose.model('Apto', AptoSchema, 'aptos');