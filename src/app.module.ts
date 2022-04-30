import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SuggestQuestionsModule } from './modules/suggest_questions/suggest_questions.module';

@Module({
    imports: [
        MongooseModule.forRoot(
            'mongodb+srv://GreenBig5:1QgvDJucHUpHxEbn@greenbig5.uszbe.mongodb.net/green_big_5?retryWrites=true&w=majority',
        ),
        SuggestQuestionsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
