"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SuggestQuestionsModule = void 0;
var common_1 = require("@nestjs/common");
var suggest_questions_service_1 = require("./suggest_questions.service");
var suggest_questions_controller_1 = require("./suggest_questions.controller");
var mongoose_1 = require("@nestjs/mongoose");
var suggestQuestion_schema_1 = require("./schemas/suggestQuestion.schema");
var question_1 = require("./schemas/question");
var user_1 = require("@modules/suggest_questions/schemas/user");
var SuggestQuestionsModule = /** @class */ (function () {
    function SuggestQuestionsModule() {
    }
    SuggestQuestionsModule = __decorate([
        (0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    { name: suggestQuestion_schema_1.Suggest_Question.name, schema: suggestQuestion_schema_1.SuggestQuestionSchema },
                    { name: question_1.Question.name, schema: question_1.QuestionSchema },
                    { name: user_1.User.name, schema: user_1.UserSchema },
                ]),
            ],
            controllers: [suggest_questions_controller_1.SuggestQuestionsController],
            providers: [suggest_questions_service_1.SuggestQuestionsService]
        })
    ], SuggestQuestionsModule);
    return SuggestQuestionsModule;
}());
exports.SuggestQuestionsModule = SuggestQuestionsModule;
