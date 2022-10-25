import { AnswerStatusData } from "./answer-status-data";

export class AnswerStatus {
    private answerStatusData: AnswerStatusData = null;

    constructor(data: AnswerStatusData = null) {
        if (data) {
            this.answerStatusData = data;
        } else {
            this.resetAllAnswers();
        }
    }

    public get getAnswerStatusData(): AnswerStatusData {
        return this.answerStatusData;
    }

    public get getIsPuzzle1Complete(): boolean {
        return this.answerStatusData.isPuzzle1Complete;
    }

    public setPuzzle1Complete() {
        this.answerStatusData.isPuzzle1Complete = true;
    }

    public get getIsPuzzle2Complete(): boolean {
        return this.answerStatusData.isPuzzle2Complete;
    }

    public setPuzzle2Complete() {
        this.answerStatusData.isPuzzle2Complete = true;
    }

    public get getIsPuzzle3Complete(): boolean {
        return this.answerStatusData.isPuzzle3Complete;
    }

    public setPuzzle3Complete() {
        this.answerStatusData.isPuzzle3Complete = true;
    }

    public get getIsComplete() {
        return this.answerStatusData.isPuzzle1Complete && this.answerStatusData.isPuzzle2Complete && this.answerStatusData.isPuzzle3Complete;
    }

    public resetAllAnswers() {
        this.answerStatusData = {
            isPuzzle1Complete: false,
            isPuzzle2Complete: false,
            isPuzzle3Complete: false
        };
    }
}