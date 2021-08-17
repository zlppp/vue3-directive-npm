import { createVNode as _createVNode, resolveDirective as _resolveDirective } from "vue";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Omit from 'omit.js';
import Base, { baseProps } from './Base';

var Paragraph = function Paragraph(props, _ref) {
  var slots = _ref.slots,
      attrs = _ref.attrs;

  var paragraphProps = _extends(_extends(_extends({}, props), {
    component: 'div'
  }), attrs);

  return _createVNode(Base, paragraphProps, slots);
};

Paragraph.displayName = 'ATypographyParagraph';
Paragraph.inheritAttrs = false;
Paragraph.props = Omit(baseProps(), ['component']);
export default Paragraph;