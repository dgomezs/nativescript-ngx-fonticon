"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// angular
var core_1 = require("@angular/core");
// libs
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
// nativescript
var file_system_1 = require("tns-core-modules/file-system");
var TNSFontIconService = TNSFontIconService_1 = (function () {
    function TNSFontIconService(config) {
        this.config = config;
        this.css = {}; // font icon collections containing maps of classnames to unicode
        this.filesLoaded = new BehaviorSubject_1.BehaviorSubject(null);
        this.loadCss();
    }
    TNSFontIconService.prototype.loadCss = function () {
        var _this = this;
        var cnt = 0;
        var fontIconCollections = Object.keys(this.config);
        if (TNSFontIconService_1.debug) {
            console.log("Collections to load: " + fontIconCollections);
        }
        var initCollection = function () {
            _this._currentName = fontIconCollections[cnt];
            _this.css[_this._currentName] = {};
        };
        var loadFiles = function () {
            initCollection();
            if (cnt === fontIconCollections.length) {
                _this.filesLoaded.next(_this.css);
            }
            else {
                var fonts = _this.config;
                _this.loadFile(fonts[_this._currentName]).then(function () {
                    cnt++;
                    loadFiles();
                });
            }
        };
        loadFiles();
    };
    TNSFontIconService.prototype.loadFile = function (path) {
        var _this = this;
        if (TNSFontIconService_1.debug) {
            console.log("----------");
            console.log("Loading collection \"" + this._currentName + "\" from file: " + path);
        }
        var cssFile = file_system_1.knownFolders.currentApp().getFile(path);
        return new Promise(function (resolve, reject) {
            cssFile.readText().then(function (data) {
                _this.mapCss(data);
                resolve();
            }, function (err) {
                reject(err);
            });
        });
    };
    TNSFontIconService.prototype.mapCss = function (data) {
        var sets = data.split("}");
        var cleanValue = function (val) {
            return val.split("content:")[1].toLowerCase().replace(/\\e/, "\\ue").replace(/\\f/, "\\uf").trim().replace(/\"/g, "").replace(/;/g, "");
        };
        for (var _i = 0, sets_1 = sets; _i < sets_1.length; _i++) {
            var set = sets_1[_i];
            var pair = set.replace(/ /g, "").split(":before{");
            var keyGroups = pair[0];
            var keys = keyGroups.split(",");
            if (pair[1]) {
                var value = cleanValue(pair[1]);
                for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
                    var key = keys_1[_a];
                    key = key.trim().slice(1).split(":before")[0];
                    this.css[this._currentName][key] = String.fromCharCode(parseInt(value.substring(2), 16));
                    if (TNSFontIconService_1.debug) {
                        console.log(key + ": " + value);
                    }
                }
            }
        }
    };
    return TNSFontIconService;
}());
TNSFontIconService.debug = false;
TNSFontIconService = TNSFontIconService_1 = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [Object])
], TNSFontIconService);
exports.TNSFontIconService = TNSFontIconService;
var TNSFontIconService_1;
//# sourceMappingURL=/home/dgomezs/workspace/project-eutychia/nativescript-ngx-fonticon/services/fonticon.service.js.map