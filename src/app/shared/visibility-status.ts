import { Injectable, OnInit } from "@angular/core";
import { StorageService } from "./storage.service";
import { VisibilityStatusData } from "./visibility-status-data";

@Injectable({
    providedIn: 'root'
  })
export class VisibilityStatus implements OnInit {
    private visibilityStatusData: VisibilityStatusData = new VisibilityStatusData();
   
    // I don't love doing this work in the constructor. But if we do it on init we get issues with incorrect logic elsewhere.
    constructor(private readonly _storageService: StorageService) {
        const visibilityStatusData = this._storageService.getVisibilityStateFromLocalStorage();
        if (visibilityStatusData) {
            this.visibilityStatusData = visibilityStatusData;
        } else {
            this.deselectEverything();
            this.storeVisibilityStatusData();
        }
    }

    public ngOnInit(): void {
    }

    public get getVisibilityStatusData(): VisibilityStatusData {
        return this.visibilityStatusData;
    }

    public deselectEverything() {
        this.visibilityStatusData = {
            isContentsVisible: false,
            isIntroVisible: false,
            isPuzzle1Visible: false,
            isPuzzle2Visible: false,
            isPuzzle3Visible: false,
            isPuzzle4Visible: false,
            isPuzzle5Visible: false,
            isPuzzle6Visible: false,
            isPuzzle7Visible: false,
            isPuzzle8Visible: false,
            isPuzzle9Visible: false,
            isPuzzle10Visible: false,
            isPuzzle11Visible: false,
            isPuzzle12Visible: false,
            isPuzzle13Visible: false,
            isPuzzle14Visible: false,
            isConclusionVisible: false,
        };
        this.storeVisibilityStatusData();
    }

    public get getIsContentsVisible(): boolean {
        return this.visibilityStatusData.isContentsVisible;
    }

    public showContents() {
        this.deselectEverything();
        this.visibilityStatusData.isContentsVisible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsIntroVisible(): boolean {
        return this.visibilityStatusData.isIntroVisible;
    }

    public showIntro() {
        this.deselectEverything();
        this.visibilityStatusData.isIntroVisible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsPuzzle1Visible(): boolean {
        return this.visibilityStatusData.isPuzzle1Visible;
    }

    public showPuzzle1() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle1Visible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsPuzzle2Visible(): boolean {
        return this.visibilityStatusData.isPuzzle2Visible;
    }

    public showPuzzle2() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle2Visible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsPuzzle3Visible(): boolean {
        return this.visibilityStatusData.isPuzzle3Visible;
    }

    public showPuzzle3() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle3Visible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsPuzzle4Visible(): boolean {
        return this.visibilityStatusData.isPuzzle4Visible;
    }

    public showPuzzle4() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle4Visible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsPuzzle5Visible(): boolean {
        return this.visibilityStatusData.isPuzzle5Visible;
    }

    public showPuzzle5() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle5Visible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsPuzzle6Visible(): boolean {
        return this.visibilityStatusData.isPuzzle6Visible;
    }

    public showPuzzle6() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle6Visible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsPuzzle7Visible(): boolean {
        return this.visibilityStatusData.isPuzzle7Visible;
    }

    public showPuzzle7() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle7Visible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsPuzzle8Visible(): boolean {
        return this.visibilityStatusData.isPuzzle8Visible;
    }

    public showPuzzle8() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle8Visible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsPuzzle9Visible(): boolean {
        return this.visibilityStatusData.isPuzzle9Visible;
    }

    public showPuzzle9() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle9Visible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsPuzzle10Visible(): boolean {
        return this.visibilityStatusData.isPuzzle10Visible;
    }

    public showPuzzle10() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle10Visible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsPuzzle11Visible(): boolean {
        return this.visibilityStatusData.isPuzzle11Visible;
    }

    public showPuzzle11() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle11Visible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsPuzzle12Visible(): boolean {
        return this.visibilityStatusData.isPuzzle12Visible;
    }

    public showPuzzle12() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle12Visible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsPuzzle13Visible(): boolean {
        return this.visibilityStatusData.isPuzzle13Visible;
    }

    public showPuzzle13() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle13Visible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsPuzzle14Visible(): boolean {
        return this.visibilityStatusData.isPuzzle14Visible;
    }

    public showPuzzle14() {
        this.deselectEverything();
        this.visibilityStatusData.isPuzzle14Visible = true;
        this.storeVisibilityStatusData();
    }

    public get getIsConclusionVisible(): boolean {
        return this.visibilityStatusData.isConclusionVisible;
    }

    public showConclusion() {
        this.deselectEverything();
        this.visibilityStatusData.isConclusionVisible = true;
        this.storeVisibilityStatusData();
    }

    private storeVisibilityStatusData() {
        this._storageService.setVisibilityStateInLocalStorage(this.visibilityStatusData);
    }
}