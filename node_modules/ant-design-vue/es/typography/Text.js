import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import warning from '../_util/warning';
import Base, { baseProps } from './Base';
import Omit from 'omit.js';

var Text = function Text(props, _ref) {
  var slots = _ref.slots,
      attrs = _ref.attrs;
  var ellipsis = props.ellipsis;
  warning(_typeof(ellipsis) !== 'object' || !ellipsis || !('expandable' in ellipsis) && !('rows' in ellipsis), 'Typography.Text', '`ellipsis` do not support `expandable` or `rows` props.');

  var textProps = _extends(_extends(_extends({}, props), {
    ellipsis: ellipsis && _typeof(ellipsis) === 'object' ? Omit(ellipsis, ['expandable', 'rows']) : ellipsis,
    component: 'span'
  }), attrs);

  return _createVNode(Base, textProps, slots);
};

Text.displayName = 'ATypographyText';
Text.inheritAttrs = false;
Text.props = Omit(baseProps(), ['component']);
export default Text;