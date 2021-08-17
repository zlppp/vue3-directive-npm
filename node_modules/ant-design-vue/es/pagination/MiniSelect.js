import { createVNode as _createVNode } from "vue";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { defineComponent } from 'vue';
import VcSelect, { SelectProps } from '../select';
import { getOptionProps, getSlot } from '../_util/props-util';
export default defineComponent({
  inheritAttrs: false,
  props: SelectProps(),
  Option: VcSelect.Option,
  render: function render() {
    var _this = this;

    var selectOptionsProps = getOptionProps(this);

    var selelctProps = _extends(_extends(_extends({}, selectOptionsProps), {
      size: 'small'
    }), this.$attrs);

    return _createVNode(VcSelect, selelctProps, {
      default: function _default() {
        return [getSlot(_this)];
      }
    });
  }
});