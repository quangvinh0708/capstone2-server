"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SuggestQuestionSchema = exports.Suggest_Question = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var Suggest_Question = /** @class */ (function () {
    function Suggest_Question() {
    }
    __decorate([
        (0, mongoose_1.Prop)()
    ], Suggest_Question.prototype, "id");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Suggest_Question.prototype, "question");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Suggest_Question.prototype, "big5EnvIndicator");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Suggest_Question.prototype, "tags");
    Suggest_Question = __decorate([
        (0, mongoose_1.Schema)({ timestamps: true })
    ], Suggest_Question);
    return Suggest_Question;
}());
exports.Suggest_Question = Suggest_Question;
exports.SuggestQuestionSchema = mongoose_1.SchemaFactory.createForClass(Suggest_Question);
