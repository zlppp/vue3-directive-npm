import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) {
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
  }

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

import warning from '../_util/warning';
import Base, { baseProps } from './Base';
import Omit from 'omit.js';
import PropTypes from '../_util/vue-types';

var Link = function Link(props, _ref) {
  var slots = _ref.slots,
      attrs = _ref.attrs;

  var _a = _extends(_extends({}, props), attrs),
      ellipsis = _a.ellipsis,
      rel = _a.rel,
      restProps = __rest(_a, ["ellipsis", "rel"]);

  warning(_typeof(ellipsis) !== 'object', 'Typography.Link', '`ellipsis` only supports boolean value.');

  var mergedProps = _extends(_extends({}, restProps), {
    rel: rel === undefined && restProps.target === '_blank' ? 'noopener noreferrer' : rel,
    ellipsis: !!ellipsis,
    component: 'a'
  }); // https://github.com/ant-design/ant-design/issues/26622
  // @ts-ignore


  delete mergedProps.navigate;
  return _createVNode(Base, mergedProps, slots);
};

Link.displayName = 'ATypographyLink';
Link.inheritAttrs = false;
Link.props = Omit(_extends(_extends({}, baseProps()), {
  ellipsis: PropTypes.looseBool
}), ['component']);
export default Link;