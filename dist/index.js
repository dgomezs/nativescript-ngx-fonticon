"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fonticon_pipe_1 = require("./pipes/fonticon.pipe");
var fonticon_service_1 = require("./services/fonticon.service");
// for manual imports
__export(require("./pipes/fonticon.pipe"));
__export(require("./services/fonticon.service"));
var TNSFontIconModule = TNSFontIconModule_1 = (function () {
    function TNSFontIconModule() {
    }
    TNSFontIconModule.forRoot = function () {
        return {
            ngModule: TNSFontIconModule_1,
            providers: [fonticon_service_1.TNSFontIconService]
        };
    };
    return TNSFontIconModule;
}());
TNSFontIconModule = TNSFontIconModule_1 = __decorate([
    core_1.NgModule({
        declarations: [
            fonticon_pipe_1.TNSFontIconPipe,
            fonticon_pipe_1.TNSFontIconPurePipe
        ],
        exports: [
            fonticon_pipe_1.TNSFontIconPipe,
            fonticon_pipe_1.TNSFontIconPurePipe
        ]
    })
], TNSFontIconModule);
exports.TNSFontIconModule = TNSFontIconModule;
var TNSFontIconModule_1;
