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
var core_1 = require("@angular/core");
var fonticon_service_1 = require("../services/fonticon.service");
var TNSFontIconPipe = (function () {
    function TNSFontIconPipe(fonticon, _ref) {
        this.fonticon = fonticon;
        this._ref = _ref;
    }
    TNSFontIconPipe.prototype.transform = function (className, args) {
        var _this = this;
        if (!this._collectionName)
            this._collectionName = getCollectionName(className, args);
        if (!this._value || (this.fonticon.css && this.fonticon.css[this._collectionName] && this._value !== this.fonticon.css[this._collectionName][className])) {
            // only subscribe if value is changing
            // if there is a subscription to iconSub, clean it
            this._dispose();
            this._iconSub = this.fonticon.filesLoaded.subscribe(function (data) {
                if (data && data[_this._collectionName] && data[_this._collectionName][className]) {
                    if (_this._value !== data[_this._collectionName][className]) {
                        // only markForCheck if value has changed
                        _this._value = data[_this._collectionName][className];
                        _this._ref.markForCheck();
                        _this._dispose();
                    }
                }
            });
        }
        return this._value;
    };
    TNSFontIconPipe.prototype._dispose = function () {
        if (this._iconSub) {
            this._iconSub.unsubscribe();
            this._iconSub = undefined;
        }
    };
    TNSFontIconPipe.prototype.ngOnDestroy = function () {
        this._dispose();
    };
    return TNSFontIconPipe;
}());
TNSFontIconPipe = __decorate([
    core_1.Pipe({
        name: 'fonticon',
        pure: false
    }),
    __metadata("design:paramtypes", [fonticon_service_1.TNSFontIconService, core_1.ChangeDetectorRef])
], TNSFontIconPipe);
exports.TNSFontIconPipe = TNSFontIconPipe;
// Can be used for optimal performance, however requires usage of Observable values with the async pipe, see demo (app.ts) for example
var TNSFontIconPurePipe = (function () {
    function TNSFontIconPurePipe(fonticon) {
        this.fonticon = fonticon;
    }
    TNSFontIconPurePipe.prototype.transform = function (className, args) {
        if (!this._collectionName)
            this._collectionName = getCollectionName(className, args);
        // console.log(`fonticonPure: ${className}`);
        if (this.fonticon.css && this.fonticon.css[this._collectionName]) {
            return this.fonticon.css[this._collectionName][className];
        }
        else {
            return '';
        }
    };
    return TNSFontIconPurePipe;
}());
TNSFontIconPurePipe = __decorate([
    core_1.Pipe({
        name: 'fonticonPure'
    }),
    __metadata("design:paramtypes", [fonticon_service_1.TNSFontIconService])
], TNSFontIconPurePipe);
exports.TNSFontIconPurePipe = TNSFontIconPurePipe;
function getCollectionName(className, args) {
    if (args && args.length && args[0] !== null) {
        return args[0];
    }
    else if (className && className.indexOf('-') > -1) {
        // derive from classname
        return className.split('-')[0];
    }
    else {
        return '';
    }
}
//# sourceMappingURL=/home/dgomezs/workspace/project-eutychia/nativescript-ngx-fonticon/pipes/fonticon.pipe.js.map