var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = new Set(["px", "full", "screen"]);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
// Shadow always begins with x and y offset separated by underscore
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
export function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
}
export function isArbitraryLength(value) {
  return getIsArbitraryValue(value, "length", isLengthOnly);
}
export function isArbitrarySize(value) {
  return getIsArbitraryValue(value, "size", isNever);
}
export function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, "position", isNever);
}
export function isArbitraryUrl(value) {
  return getIsArbitraryValue(value, "url", isUrl);
}
export function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, "number", isNumber);
}

/**
 * @deprecated Will be removed in next major version. Use `isArbitraryNumber` instead.
 */
export var isArbitraryWeight = isArbitraryNumber;
export function isNumber(value) {
  return !Number.isNaN(Number(value));
}
export function isPercent(value) {
  return value.endsWith("%") && isNumber(value.slice(0, -1));
}
export function isInteger(value) {
  return isIntegerOnly(value) || getIsArbitraryValue(value, "number", isIntegerOnly);
}
export function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
export function isAny() {
  return true;
}
export function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
export function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, "", isShadow);
}
function getIsArbitraryValue(value, label, testValue) {
  var result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return result[1] === label;
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value);
}
function isNever() {
  return false;
}
function isUrl(value) {
  return value.startsWith("url(");
}
function isIntegerOnly(value) {
  return Number.isInteger(Number(value));
}
function isShadow(value) {
  return shadowRegex.test(value);
}