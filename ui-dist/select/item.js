var _excluded = ["children", "className"];
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
import * as RadixSelect from "@radix-ui/react-select";
import React from "react";
import { cn } from "../_lib/cn";
var SelectItem = /*#__PURE__*/React.forwardRef(function (_ref, forwardedRef) {
  var children = _ref.children,
    className = _ref.className,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/React.createElement(RadixSelect.Item, _extends({}, props, {
    ref: forwardedRef,
    className: cn("outline-none text-sm cursor-pointer px-3 py-[7px] transition-colors text-lx-color-text-1", "data-[state=checked]:bg-lx-color-fill-2 hover:bg-lx-color-fill-2", "data-[disabled]:text-lx-color-text-4 data-[disabled]:bg-white data-[disabled]:cursor-not-allowed", className)
  }), /*#__PURE__*/React.createElement(RadixSelect.ItemText, null, children));
});
export default SelectItem;