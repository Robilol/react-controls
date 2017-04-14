"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var maps_1 = require("./maps");
var maps_2 = require("./maps");
var rootRem = 16;
var remFromPX = function (px) { return (px / rootRem); };
function calculateFlexWrap(wrap, reverse) {
    if (wrap && reverse) {
        return 'wrap-reverse';
    }
    else if (wrap && !reverse) {
        return 'wrap';
    }
    else {
        return 'nowrap';
    }
}
exports.calculateFlexWrap = calculateFlexWrap;
function sizeToString(size, smallSize) {
    if (smallSize === void 0) { smallSize = false; }
    var returnVal;
    if (typeof size === 'string') {
        returnVal = remFromPX(maps_2.SIZE_MAP[size]) + "rem";
    }
    else if (typeof size === 'object') {
        var horizontal = size.horizontal || 'none';
        var vertical = size.vertical || 'none';
        returnVal = remFromPX(maps_2.SIZE_MAP[vertical]) + "rem " + remFromPX(maps_2.SIZE_MAP[horizontal]) + "rem";
    }
    else {
        returnVal = "0rem";
    }
    return returnVal;
}
exports.sizeToString = sizeToString;
function stringBoxStyle(size) {
    if (size === 'full') {
        return {
            width: '100vw',
            height: '100vh',
        };
    }
    else {
        return {
            width: size ? remFromPX(maps_2.BOX_SIZE_MAP[size]) + "rem" : '',
            height: size ? remFromPX(maps_2.BOX_SIZE_MAP[size]) + "rem" : '',
        };
    }
}
function objectBoxStyle(size) {
    var width = 'auto';
    var height = 'auto';
    if (size.vertical) {
        height = size.vertical === 'full'
            ? '100vh'
            : remFromPX(maps_2.BOX_SIZE_MAP[size.vertical]) + "rem";
    }
    if (size.horizontal) {
        width = size.horizontal === 'full'
            ? '100vw'
            : remFromPX(maps_2.BOX_SIZE_MAP[size.horizontal]) + "rem";
    }
    return {
        width: width,
        height: height,
    };
}
function boxSizeToStyle(size) {
    if (typeof size === 'string') {
        return stringBoxStyle(size);
    }
    else if (typeof size === 'object') {
        return objectBoxStyle(size);
    }
    else {
        return { width: 'auto', height: 'auto' };
    }
}
exports.boxSizeToStyle = boxSizeToStyle;
function calculateFullStyle(full, postFix) {
    if (typeof full === 'object') {
        if (postFix === 'vw') {
            return full.horizontal ? "100" + postFix : 'auto';
        }
        else {
            return full.vertical ? "100" + postFix : 'auto';
        }
    }
    else if (typeof full === 'boolean') {
        return full ? "100" + postFix : 'auto';
    }
    return 'auto';
}
exports.calculateFullStyle = calculateFullStyle;
exports.breakPointCss = function (breakPoint) {
    var selector = breakPoint === 'desktop' ? 'min-width' : 'max-width';
    return (_a = ["\n    @media screen and (", ": ", ") {\n      padding: ", ";\n    }\n  "], _a.raw = ["\n    @media screen and (", ": ", ") {\n      padding: ", ";\n    }\n  "], styled_components_1.css(_a, selector, maps_1.BREAKPOINTS.phone, function (_a) {
        var pad = _a.pad;
        return sizeToString(pad);
    }));
    var _a;
};
exports.breakPoints = function (size) {
    if (size.desktop || size.mobile || size.tablet) {
        var css_1 = Object.keys(size).map(function (key) {
            return exports.breakPointCss(key);
        }).join('; \n');
        return css_1;
    }
    return '';
};
//# sourceMappingURL=styleUtils.js.map