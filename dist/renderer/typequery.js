"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class Elements {
    constructor(parameter) {
        this.text = (text) => {
            this.elements.forEach((element) => {
                element.innerText = text;
            });
            return this;
        };
        this.getJSON = (url) => __awaiter(this, void 0, void 0, function* () {
            const fetched = yield fetch(url, {
                method: "get",
            });
            const data = yield fetched.json();
            return data;
        });
        this.css = (property, value) => {
            this.elements.forEach((element) => {
                const camelProp = property.replace(/(-[a-z])/, (g) => {
                    return g.replace("-", "").toUpperCase();
                });
                element.style[camelProp] = value;
            });
            return this;
        };
        this.elements = document.querySelectorAll(parameter !== null && parameter !== void 0 ? parameter : "");
        this.element = document.querySelector(parameter !== null && parameter !== void 0 ? parameter : "");
    }
}
function $(parameter) {
    return new Elements(parameter);
}
