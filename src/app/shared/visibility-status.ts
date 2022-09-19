export class VisibilityStatus {
    private isContentsVisible: boolean = false;
    private isPuzzle1Visible: boolean = false;
    private isPuzzle2Visible: boolean = false;
    private isPuzzle3Visible: boolean = false;    

    public deselectEverything() {
        this.isContentsVisible = false;
        this.isPuzzle1Visible = false;
        this.isPuzzle2Visible = false;
        this.isPuzzle3Visible = false;
    }

    public get getIsContentsVisible(): boolean {
        return this.isContentsVisible;
    }

    public showContents() {
        this.deselectEverything();
        this.isContentsVisible = true;
    }

    public get getIsPuzzle1Visible(): boolean {
        return this.isPuzzle1Visible;
    }

    public showPuzzle1() {
        this.deselectEverything();
        this.isPuzzle1Visible = true;
    }

    public get getIsPuzzle2Visible(): boolean {
        return this.isPuzzle2Visible;
    }

    public showPuzzle2() {
        this.deselectEverything();
        this.isPuzzle2Visible = true;
    }

    public get getIsPuzzle3Visible(): boolean {
        return this.isPuzzle3Visible;
    }

    public showPuzzle3() {
        this.deselectEverything();
        this.isPuzzle3Visible = true;
    }
}