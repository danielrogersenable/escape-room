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
            isPuzzle3Visible: false
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

    private storeVisibilityStatusData() {
        this._storageService.setVisibilityStateInLocalStorage(this.visibilityStatusData);
    }
}