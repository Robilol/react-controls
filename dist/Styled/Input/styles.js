"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var inputStyles = (_a = ["\n  outline: none;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n  height: 30px;\n  padding: 0 10px;\n  vertical-align: middle;\n  line-height: 30px;\n  font-size: 14px;\n  font-weight: 400;\n  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  &:active {\n    background-color: ", ";\n  }\n  &:hover {\n\n  }\n  $:blur {\n    \n  }\n"], _a.raw = ["\n  outline: none;\n  border: none;\n  border-radius: 3px;\n  box-shadow: 0 0 0 0 rgba(19, 124, 189, 0), 0 0 0 0 rgba(19, 124, 189, 0), inset 0 0 0 1px rgba(16, 22, 26, 0.15), inset 0 1px 1px rgba(16, 22, 26, 0.2);\n  height: 30px;\n  padding: 0 10px;\n  vertical-align: middle;\n  line-height: 30px;\n  font-size: 14px;\n  font-weight: 400;\n  transition: box-shadow 100ms cubic-bezier(0.4, 1, 0.75, 0.9);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  &:active {\n    background-color: ", ";\n  }\n  &:hover {\n\n  }\n  $:blur {\n    \n  }\n"], styled_components_1.css(_a, function (props) { return props.borderColor; }));
exports.TextInputComponent = (_b = ["\n  ", "\n  background-color: ", ";\n  color: ", ";\n  font-size: ", ";\n  border: solid 1px ", ";\n"], _b.raw = ["\n  ", "\n  background-color: ", ";\n  color: ", ";\n  font-size: ", ";\n  border: solid 1px ", ";\n"], styled_components_1.default.input(_b, inputStyles, function (props) { return props.backgroundColor; }, function (props) { return props.color; }, function (props) { return props.fontSize; }, function (props) { return props.hasError ? 'red' : 'initial'; }));
var _a, _b;
//# sourceMappingURL=styles.js.map