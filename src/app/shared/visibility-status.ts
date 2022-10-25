import { VisibilityStatusData } from "./visibility-status-data";

export class VisibilityStatus {
    private visibilityStatusData: VisibilityStatusData = null;
    
    constructor(visibilityStatusData: VisibilityStatusData = null) {
        if (visibilityStatusData) {
            this.visibilityStatusData = visibilityStatusData;
        } else {
            this.visibilityStatusData = {
                isContentsVisible: false,
                isPuzzle1Visible: false,
                isPuzzle2Visible: false,
                isPuzzle3Visible: false
            };
        }
    }

    public get getVisibilityStatusData(): VisibilityStatusData {
        return this.visibilityStatusData;
    }

    public deselectEverything() {
        this.visibilityStatusData.isContentsVisible = false;
        this.visibilityStatusData.isPuzzle1Visible = false;
        this.visibilityStatusData.isPuzzle2Visible = false;
        this.visibilityStatusData.isPuzzle3Visible = false;
    }

    public get getIsContentsVisible(): boolean {
        return this.visibilityStatusData.isContentsVisible;
    }

    public showContents() {
        this.deselectEverything();
        this.visibilityStatusData.isContentsVisible = true;
    }

    public get getIsPuzzle1Visible(): boolean {
        return this.visibilityStatusData.isPuzzle1Visible;
    }

    public showPuzzle1() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle1Visible = true;
    }

    public get getIsPuzzle2Visible(): boolean {
        return this.visibilityStatusData.isPuzzle2Visible;
    }

    public showPuzzle2() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle2Visible = true;
    }

    public get getIsPuzzle3Visible(): boolean {
        return this.visibilityStatusData.isPuzzle3Visible;
    }

    public showPuzzle3() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle3Visible = true;
    }
}