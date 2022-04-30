import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateSuggestQuestionDto } from './dto/create-suggest_question.dto';
import { UpdateSuggestQuestionDto } from './dto/update-suggest_question.dto';
import {
    Suggest_Question,
    SuggestQuestionDocument,
} from './schemas/suggestQuestion.schema';
import { Model } from 'mongoose';
import { Question } from './schemas/question';

@Injectable()
export class SuggestQuestionsService {
    constructor(
        @InjectModel(Suggest_Question.name)
        private readonly model: Model<SuggestQuestionDocument>,
        @InjectModel(Question.name)
        private readonly question: Model<Question>,
    ) {}

    async create(createSuggestQuestionDto: Question) {
        return await new this.question(createSuggestQuestionDto).save();
    }

    async findSomeByKeywordAndFacet({ keyword, facet }) {
        const x = await this.model.find({
            big5EnvIndicator: `${keyword} ${facet}`,
        });
        return x;
    }

    findOne(id: number) {
        return `This action returns a #${id} suggestQuestion`;
    }

    update(id: number, updateSuggestQuestionDto: UpdateSuggestQuestionDto) {
        return `This action updates a #${id} suggestQuestion`;
    }

    async remove(id: string) {
        return await this.model.findByIdAndDelete({
            _id: id,
        });
    }
}
