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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Array.prototype.move = function (from, to) {
    this.splice(to, 0, this.splice(from, 1)[0]);
};
Array.prototype.getObject = function (objectKey, searchValue, includes) {
    if (includes) {
        return this.find(function (x) { return x[objectKey].includes(searchValue); });
    }
    else {
        return this.find(function (x) { return x[objectKey] === searchValue; });
    }
};
Array.prototype.remove = function (index) {
    this.splice(index, 1);
};
var ElementCollection = /** @class */ (function () {
    function ElementCollection(elements) {
        var _this = this;
        this.on = function (event, cbOrQuery, cb) {
            if (typeof cbOrQuery === "function") {
                _this.elements.forEach(function (element) {
                    element.addEventListener(event, cbOrQuery);
                });
            }
            else {
                _this.elements.forEach(function (element) {
                    element.addEventListener(event, function (e) {
                        if (e.target.matches(cbOrQuery))
                            cb(e);
                    });
                });
            }
            return _this;
        };
        this.text = function (text) {
            _this.elements.forEach(function (e) { return (e.innerText = text); });
            return _this;
        };
        this.css = function (style, value) {
            var prop = style.replace(/(-[a-z])/, function (g) {
                return g.replace("-", "").toUpperCase();
            });
            _this.elements.forEach(function (e) { return (e.style[prop] = value); });
            return _this;
        };
        this.next = function () {
            return _this.elements.map(function (e) { return e.nextSibling; }).filter(function (e) { return e != null; });
        };
        this.prev = function () {
            return _this.elements.map(function (e) { return e.previousSibling; }).filter(function (e) { return e != null; });
        };
        this.removeClass = function (name) {
            _this.elements.forEach(function (element) {
                element.classList.remove(name);
            });
            return _this;
        };
        this.addClass = function (name) {
            _this.elements.forEach(function (element) {
                element.classList.add(name);
            });
            return _this;
        };
        this.toggleClass = function (name, toggle) {
            _this.elements.forEach(function (element) {
                element.classList.toggle(name, toggle);
            });
            return _this;
        };
        this.addElement = function (element) {
            _this.elements.forEach(function (el) {
                el.append(element);
            });
            return _this;
        };
        this.insertAfter = function (newNode, referenceNode) {
            var _a;
            (_a = referenceNode.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(newNode, referenceNode.nextSibling);
        };
        this.insertBefore = function (newNode, referenceNode) {
            var _a;
            (_a = referenceNode.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(newNode, referenceNode.previousSibling);
        };
        this.elements = elements;
        this.element = elements[0];
    }
    return ElementCollection;
}());
function t(query) {
    return new ElementCollection(document.querySelectorAll(query));
}
t.getJSON = function (url) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(url, {
                    method: "GET",
                }).then()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
t.$ = function (selector) {
    return document.querySelector(selector);
};
t.$all = function (selector) {
    return document.querySelectorAll(selector);
};
