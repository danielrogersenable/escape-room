import { Injectable, OnInit } from "@angular/core";
import { AnswerStatusData } from "./answer-status-data";
import { StorageService } from "./storage.service";

@Injectable({
    providedIn: 'root'
  })
export class AnswerStatus implements OnInit {
    private answerStatusData: AnswerStatusData = new AnswerStatusData();

    constructor(private readonly _storageService: StorageService) {
        const data = this._storageService.getAnswerStateFromLocalStorage();
        if (data) {
            this.answerStatusData = data;
        } else {
            this.resetAllAnswers();
        }
    }

    public ngOnInit(): void {
    }

    public get getIsIntroComplete(): boolean {
        return this.answerStatusData.isIntroComplete;
    }

    public setIntroComplete() {
        this.answerStatusData.isIntroComplete = true;
        this.storeAnswerStatusData();
    }

    public get getIsPuzzle1Complete(): boolean {
        return this.answerStatusData.isPuzzle1Complete;
    }

    public setPuzzle1Complete() {
        this.answerStatusData.isPuzzle1Complete = true;
        this.storeAnswerStatusData();
    }

    public get getIsPuzzle2Complete(): boolean {
        return this.answerStatusData.isPuzzle2Complete;
    }

    public setPuzzle2Complete() {
        this.answerStatusData.isPuzzle2Complete = true;
        this.storeAnswerStatusData();        
    }

    public get getIsPuzzle3Complete(): boolean {
        return this.answerStatusData.isPuzzle3Complete;
    }

    public setPuzzle3Complete() {
        this.answerStatusData.isPuzzle3Complete = true;
        this.storeAnswerStatusData();
    }

    public get getIsComplete() {
        return this.answerStatusData.isPuzzle1Complete && this.answerStatusData.isPuzzle2Complete && this.answerStatusData.isPuzzle3Complete;
    }

    public resetAllAnswers() {
        this.answerStatusData = {
            isIntroComplete: false,
            isPuzzle1Complete: false,
            isPuzzle2Complete: false,
            isPuzzle3Complete: false
        };
        this.storeAnswerStatusData();
    }

    private storeAnswerStatusData() {
        this._storageService.setAnswerStateInLocalStorage(this.answerStatusData);
    }
}