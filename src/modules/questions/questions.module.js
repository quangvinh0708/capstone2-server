"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.QuestionsModule = void 0;
var common_1 = require("@nestjs/common");
var questions_service_1 = require("./questions.service");
var questions_controller_1 = require("./questions.controller");
var mongoose_1 = require("@nestjs/mongoose");
var question_1 = require("@modules/suggest_questions/schemas/question");
var QuestionsModule = /** @class */ (function () {
    function QuestionsModule() {
    }
    QuestionsModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    { name: question_1.Question.name, schema: question_1.QuestionSchema },
                ]),
            ],
            controllers: [questions_controller_1.QuestionsController],
            providers: [questions_service_1.QuestionsService]
        })
    ], QuestionsModule);
    return QuestionsModule;
}());
exports.QuestionsModule = QuestionsModule;
