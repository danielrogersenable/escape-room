export class AnswerStatus {
    public puzzle1: boolean = false;
    public puzzle2: boolean = false;
    public puzzle3: boolean = false;    

    public setPuzzle1Complete() {
        this.puzzle1 = true;
    }

    public setPuzzle2Complete() {
        this.puzzle2 = true;
    }

    public setPuzzle3Complete() {
        this.puzzle3 = true;
    }
}