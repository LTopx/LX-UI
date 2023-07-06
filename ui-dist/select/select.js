function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import * as RadixSelect from "@radix-ui/react-select";
import React from "react";
import { cn } from "../_lib/cn";
import { Down_fill, Loading_line } from "../icon";
import SelectItem from "./item";
var Select = function Select(_ref) {
  var className = _ref.className,
    placeholder = _ref.placeholder,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? false : _ref$disabled,
    _ref$loading = _ref.loading,
    loading = _ref$loading === void 0 ? false : _ref$loading,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? "base" : _ref$size,
    _ref$options = _ref.options,
    options = _ref$options === void 0 ? [] : _ref$options,
    defaultValue = _ref.defaultValue,
    value = _ref.value,
    onChange = _ref.onChange;
  // data
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    isOpen = _React$useState2[0],
    setIsOpen = _React$useState2[1];

  // ref
  var triggerRef = React.useRef(null);
  var selectOptions = React.useMemo(function () {
    return options.map(function (item) {
      if (typeof item === "string" || typeof item === "number") {
        return {
          label: String(item),
          value: String(item),
          disabled: false
        };
      }
      return {
        label: item.label,
        value: item.value,
        disabled: !!item.disabled
      };
    });
  }, [options]);
  var onOpenChange = function onOpenChange(open) {
    if (open) return setIsOpen(true);
    setTimeout(function () {
      setIsOpen(false);
    }, 100);
  };
  var onValueChange = function onValueChange(value) {
    console.log(value, "value");
    onChange === null || onChange === void 0 ? void 0 : onChange(value);
  };
  return /*#__PURE__*/React.createElement(RadixSelect.Root, {
    open: isOpen,
    disabled: disabled,
    defaultValue: defaultValue,
    value: value,
    onOpenChange: onOpenChange,
    onValueChange: onValueChange
  }, /*#__PURE__*/React.createElement(RadixSelect.Trigger, {
    asChild: true
  }, /*#__PURE__*/React.createElement("div", {
    ref: triggerRef,
    className: cn("px-3 relative cursor-pointer transition-colors group select-none rounded outline-none inline-flex text-sm items-center justify-between border border-transparent", "data-[state=open]:bg-white data-[state=open]:border-sky-400", "data-[disabled]:bg-lx-color-fill-2 data-[disabled]:cursor-not-allowed data-[disabled]:text-lx-color-text-4", "bg-lx-color-fill-2 hover:bg-lx-color-fill-3 text-lx-color-text-3", {
      "h-7": size === "sm"
    }, {
      "h-8": size === "base"
    }, {
      "h-9": size === "lg"
    }, className)
  }, /*#__PURE__*/React.createElement(RadixSelect.Value, {
    placeholder: placeholder
  }), /*#__PURE__*/React.createElement(RadixSelect.Icon, null, loading ? /*#__PURE__*/React.createElement(Loading_line, {
    className: "animate-spin"
  }) : /*#__PURE__*/React.createElement(Down_fill, {
    className: cn({
      "rotate-180": isOpen
    })
  })))), /*#__PURE__*/React.createElement(RadixSelect.Portal, {
    container: triggerRef.current
  }, /*#__PURE__*/React.createElement(RadixSelect.Content, {
    asChild: true,
    position: "popper",
    sideOffset: 4,
    className: cn("z-[2000] bg-white shadow-md border rounded py-1", "data-[state=open]:animate-lx-select-open data-[state=closed]:animate-lx-select-closed")
  }, /*#__PURE__*/React.createElement(RadixSelect.Viewport, null, selectOptions.map(function (item) {
    return /*#__PURE__*/React.createElement(RadixSelect.Group, {
      key: item.value
    }, /*#__PURE__*/React.createElement(SelectItem, {
      value: item.value,
      disabled: item.disabled
    }, item.label));
  })))));
};
export default Select;