"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuestionSchema = exports.Question = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Question = /** @class */ (function () {
    function Question() {
    }
    __decorate([
        (0, mongoose_1.Prop)()
    ], Question.prototype, "id");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Question.prototype, "question");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Question.prototype, "big5EnvIndicator");
    __decorate([
        (0, mongoose_1.Prop)()
    ], Question.prototype, "tags");
    __decorate([
        (0, mongoose_1.Prop)([
            {
                Openness: { type: String },
                _id: { type: mongoose_2.Schema.Types.ObjectId },
                Conciencetious: { type: String },
                Extraversion: { type: String },
                Agreeable: { type: String },
                Neuroticism: { type: String }
            },
        ])
    ], Question.prototype, "personality");
    __decorate([
        (0, mongoose_1.Prop)((0, mongoose_1.raw)({
            pointHigh: { type: Number },
            pointMedium: { type: Number },
            pointLow: { type: Number }
        }))
    ], Question.prototype, "point");
    __decorate([
        (0, mongoose_1.Prop)((0, mongoose_1.raw)({
            label: { type: String },
            parent: {
                type: {
                    label: { type: String },
                    _id: { type: mongoose_2.Schema.Types.ObjectId }
                }
            }
        }))
    ], Question.prototype, "facet");
    __decorate([
        (0, mongoose_1.Prop)((0, mongoose_1.raw)({
            label: { type: String }
        }))
    ], Question.prototype, "keyword");
    Question = __decorate([
        (0, mongoose_1.Schema)({ timestamps: true })
    ], Question);
    return Question;
}());
exports.Question = Question;
exports.QuestionSchema = mongoose_1.SchemaFactory.createForClass(Question);
