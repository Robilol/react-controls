"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles_1 = require("./styles");
var BaseControl_1 = require("../BaseControl/BaseControl");
var TypeStringControl_1 = require("../Validation/TypeStringControl");
var TypeNumberControl_1 = require("../Validation/TypeNumberControl");
var Input = (function (_super) {
    __extends(Input, _super);
    function Input(p, c) {
        var _this = _super.call(this, p, c) || this;
        var pattern = null;
        var patternErrorMessage = null;
        if (_this.props.pattern != null) {
            pattern = new RegExp(_this.props.pattern);
            patternErrorMessage = "test";
        }
        else {
            switch (_this.props.type) {
                case "email":
                    pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    patternErrorMessage = "Doit être un mail";
                    break;
                case "number":
                    pattern = /^[0-9]*(|\.[0-9]*)*$/;
                    patternErrorMessage = "Doit être un nombre";
                    break;
                case "integer":
                    pattern = /^[0-9]*$/;
                    patternErrorMessage = "Doit être un nombre entier";
                    break;
                case "phone":
                    pattern = /^(0|\+33)[1-9]([-. ]?[0-9]{2}){4}$/;
                    patternErrorMessage = "Doit être un téléphone";
                    break;
                default:
            }
        }
        _this._validationManager.addControl(new TypeStringControl_1.default(pattern, patternErrorMessage));
        if (_this.props.type == "number" || _this.props.type == "integer") {
            var min, max = null;
            if (_this.props.min != null) {
                if (typeof (_this.props.min) === "number") {
                    min = _this.props.min;
                }
                else {
                    min = parseFloat(_this.props.min);
                }
            }
            if (_this.props.max != null) {
                if (typeof (_this.props.max) === "number") {
                    max = _this.props.max;
                }
                else {
                    max = parseFloat(_this.props.max);
                }
            }
            _this._validationManager.addControl(new TypeNumberControl_1.default(_this.props.type == "integer", min, max));
        }
        return _this;
    }
    Input.prototype.onChange = function (event) {
        return event.target.value;
    };
    Input.prototype.renderControl = function () {
        if (this.props.type == "email") {
            return (React.createElement(styles_1.EmailInputComponent, { type: "email", style: this.props.style, borderColor: this.props.borderColor, onClick: this.props.onClick, color: this.props.color, backgroundColor: this.props.backgroundColor, fontSize: this.props.fontSize, onChange: this.handleChangeEvent }, this.props.children));
        }
        return (React.createElement(styles_1.TextInputComponent, { type: "text", onClick: this.props.onClick, color: this.props.color, backgroundColor: this.props.backgroundColor, fontSize: this.props.fontSize, onChange: this.handleChangeEvent }, this.props.children));
    };
    return Input;
}(BaseControl_1.BaseControl));
Input.defaultProps = {
    color: '#fefefe',
    backgroundColor: '#c05b4d',
    borderColor: '#732419',
    fontSize: 'medium'
};
exports.default = Input;
//# sourceMappingURL=index.js.map