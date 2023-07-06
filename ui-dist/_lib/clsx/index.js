function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
export * from "./types";
function toVal(mix) {
  var k,
    y,
    str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (_typeof(mix) === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
export function clsx() {
  var i = 0,
    tmp,
    x,
    str = "";
  while (i < arguments.length) {
    var _i;
    if (tmp = (_i = i++, _i < 0 || arguments.length <= _i ? undefined : arguments[_i])) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}
export default clsx;