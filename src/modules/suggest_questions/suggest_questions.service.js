"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
exports.__esModule = true;
exports.SuggestQuestionsService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var suggestQuestion_schema_1 = require("./schemas/suggestQuestion.schema");
var question_1 = require("./schemas/question");
var node_fetch_1 = require("node-fetch");
var user_1 = require("./schemas/user");
var SuggestQuestionsService = /** @class */ (function () {
    function SuggestQuestionsService(model, question, user) {
        this.model = model;
        this.question = question;
        this.user = user;
    }
    SuggestQuestionsService.prototype.create = function (createSuggestQuestionDto) {
        return __awaiter(this, void 0, void 0, function () {
            var id, questionsFounded;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = createSuggestQuestionDto.id;
                        return [4 /*yield*/, this.question.findOne({ id: id }).exec()];
                    case 1:
                        questionsFounded = _a.sent();
                        if (questionsFounded) {
                            throw new common_1.HttpException({
                                status: common_1.HttpStatus.CONFLICT,
                                error: 'This suggested question is already exists in questions'
                            }, common_1.HttpStatus.CONFLICT);
                        }
                        return [4 /*yield*/, new this.question(createSuggestQuestionDto).save()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SuggestQuestionsService.prototype.saveAndSendToAllUser = function (createSuggestQuestionDto) {
        return __awaiter(this, void 0, void 0, function () {
            var id, question, data, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = createSuggestQuestionDto.id, question = createSuggestQuestionDto.question;
                        // const questionsFounded = await this.question.findOne({ id }).exec();
                        delete createSuggestQuestionDto.facet;
                        delete createSuggestQuestionDto.keyword;
                        data = {
                            key: 'MBe2IdLb-9dhasuidad02316156156552352sdggsdgsdaga2352bgdasasfas',
                            question: question
                        };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        // if (!questionsFounded) {
                        //     await new this.question({ ...createSuggestQuestionDto, }).save();
                        // }
                        return [4 /*yield*/, this.question.updateOne({ id: id }, __assign({}, createSuggestQuestionDto), { upsert: true })];
                    case 2:
                        // if (!questionsFounded) {
                        //     await new this.question({ ...createSuggestQuestionDto, }).save();
                        // }
                        _a.sent();
                        return [4 /*yield*/, (0, node_fetch_1["default"])('http://greenbig5.herokuapp.com/expert/sendQuestionToAll', {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json'
                                },
                                body: JSON.stringify(data)
                            })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        err_1 = _a.sent();
                        throw new common_1.HttpException({
                            status: common_1.HttpStatus.INTERNAL_SERVER_ERROR,
                            error: 'Internal Server Error!'
                        }, common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    SuggestQuestionsService.prototype.findSomeByKeywordAndFacet = function (_a) {
        var keyword = _a.keyword, facet = _a.facet;
        return __awaiter(this, void 0, void 0, function () {
            var x;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.model.find({
                            big5EnvIndicator: "".concat(keyword, " ").concat(facet)
                        })];
                    case 1:
                        x = _b.sent();
                        return [2 /*return*/, x];
                }
            });
        });
    };
    SuggestQuestionsService.prototype.findOne = function (id) {
        return "This action returns a #".concat(id, " suggestQuestion");
    };
    SuggestQuestionsService.prototype.update = function (id, updateSuggestQuestionDto) {
        return "This action updates a #".concat(id, " suggestQuestion");
    };
    SuggestQuestionsService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.model.findByIdAndDelete({
                            _id: id
                        })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SuggestQuestionsService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, mongoose_1.InjectModel)(suggestQuestion_schema_1.Suggest_Question.name)),
        __param(1, (0, mongoose_1.InjectModel)(question_1.Question.name)),
        __param(2, (0, mongoose_1.InjectModel)(user_1.User.name))
    ], SuggestQuestionsService);
    return SuggestQuestionsService;
}());
exports.SuggestQuestionsService = SuggestQuestionsService;
