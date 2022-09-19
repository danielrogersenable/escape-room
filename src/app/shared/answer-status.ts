export class AnswerStatus {
    private isPuzzle1Complete: boolean = false;
    private isPuzzle2Complete: boolean = false;
    private isPuzzle3Complete: boolean = false;    

    public get getIsPuzzle1Complete(): boolean {
        return this.isPuzzle1Complete;
    }

    public setPuzzle1Complete() {
        this.isPuzzle1Complete = true;
    }

    public get getIsPuzzle2Complete(): boolean {
        return this.isPuzzle2Complete;
    }

    public setPuzzle2Complete() {
        this.isPuzzle2Complete = true;
    }

    public get getIsPuzzle3Complete(): boolean {
        return this.isPuzzle3Complete;
    }

    public setPuzzle3Complete() {
        this.isPuzzle3Complete = true;
    }

    public get getIsComplete() {
        return this.isPuzzle1Complete && this.isPuzzle2Complete && this.isPuzzle3Complete;
    }

    public resetAllAnswers() {
        this.isPuzzle1Complete = false;
        this.isPuzzle2Complete = false;
        this.isPuzzle3Complete = false;
    }
}