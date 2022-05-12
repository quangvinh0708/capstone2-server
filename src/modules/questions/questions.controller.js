"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.__esModule = true;
exports.QuestionsController = void 0;
var common_1 = require("@nestjs/common");
var QuestionsController = /** @class */ (function () {
    function QuestionsController(questionsService) {
        this.questionsService = questionsService;
    }
    QuestionsController.prototype.create = function (createQuestionDto) {
        return this.questionsService.create(createQuestionDto);
    };
    QuestionsController.prototype.updateQuestion = function (createQuestionDto) {
        return this.questionsService.updateQuestion(createQuestionDto);
    };
    QuestionsController.prototype.findSomeByKeywordAndFacet = function (payload) {
        return this.questionsService.findSomeByKeywordAndFacet(payload);
    };
    QuestionsController.prototype.update = function (id, updateQuestionDto) {
        // return this.questionsService.update(+id, updateQuestionDto);
    };
    QuestionsController.prototype.remove = function (id) {
        return this.questionsService.remove(+id);
    };
    __decorate([
        (0, common_1.Post)(),
        __param(0, (0, common_1.Body)())
    ], QuestionsController.prototype, "create");
    __decorate([
        (0, common_1.Put)(),
        __param(0, (0, common_1.Body)())
    ], QuestionsController.prototype, "updateQuestion");
    __decorate([
        (0, common_1.Get)(),
        __param(0, (0, common_1.Query)())
    ], QuestionsController.prototype, "findSomeByKeywordAndFacet");
    __decorate([
        (0, common_1.Patch)(':id'),
        __param(0, (0, common_1.Param)('id')),
        __param(1, (0, common_1.Body)())
    ], QuestionsController.prototype, "update");
    __decorate([
        (0, common_1.Delete)(':id'),
        __param(0, (0, common_1.Param)('id'))
    ], QuestionsController.prototype, "remove");
    QuestionsController = __decorate([
        (0, common_1.Controller)('questions')
    ], QuestionsController);
    return QuestionsController;
}());
exports.QuestionsController = QuestionsController;
