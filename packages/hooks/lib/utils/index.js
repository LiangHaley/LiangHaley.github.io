"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isUndef = exports.isString = exports.isFunction = void 0;
var isFunction = function isFunction(value) {
  return typeof value === 'function';
};
exports.isFunction = isFunction;
var isString = function isString(value) {
  return typeof value === 'string';
};
exports.isString = isString;
var isUndef = function isUndef(value) {
  return typeof value === 'undefined';
};
exports.isUndef = isUndef;