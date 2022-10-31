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

    public get getIsPuzzle4Complete(): boolean {
        return this.answerStatusData.isPuzzle4Complete;
    }

    public setPuzzle4Complete() {
        this.answerStatusData.isPuzzle4Complete = true;
        this.storeAnswerStatusData();
    }

    public get getIsPuzzle5Complete(): boolean {
        return this.answerStatusData.isPuzzle5Complete;
    }

    public setPuzzle5Complete() {
        this.answerStatusData.isPuzzle5Complete = true;
        this.storeAnswerStatusData();
    }

    public get getIsPuzzle6Complete(): boolean {
        return this.answerStatusData.isPuzzle6Complete;
    }

    public setPuzzle6Complete() {
        this.answerStatusData.isPuzzle6Complete = true;
        this.storeAnswerStatusData();
    }

    public get getIsPuzzle7Complete(): boolean {
        return this.answerStatusData.isPuzzle7Complete;
    }

    public setPuzzle7Complete() {
        this.answerStatusData.isPuzzle7Complete = true;
        this.storeAnswerStatusData();
    }

    public get getIsPuzzle8Complete(): boolean {
        return this.answerStatusData.isPuzzle8Complete;
    }

    public setPuzzle8Complete() {
        this.answerStatusData.isPuzzle8Complete = true;
        this.storeAnswerStatusData();
    }

    public get getIsPuzzle9Complete(): boolean {
        return this.answerStatusData.isPuzzle9Complete;
    }

    public setPuzzle9Complete() {
        this.answerStatusData.isPuzzle9Complete = true;
        this.storeAnswerStatusData();
    }

    public get getIsPuzzle10Complete(): boolean {
        return this.answerStatusData.isPuzzle10Complete;
    }

    public setPuzzle10Complete() {
        this.answerStatusData.isPuzzle10Complete = true;
        this.storeAnswerStatusData();
    }

    public get getIsPuzzle11Complete(): boolean {
        return this.answerStatusData.isPuzzle11Complete;
    }

    public setPuzzle11Complete() {
        this.answerStatusData.isPuzzle11Complete = true;
        this.storeAnswerStatusData();
    }

    public get getIsPuzzle12Complete(): boolean {
        return this.answerStatusData.isPuzzle12Complete;
    }

    public setPuzzle12Complete() {
        this.answerStatusData.isPuzzle12Complete = true;
        this.storeAnswerStatusData();
    }

    public get getIsPuzzle13Complete(): boolean {
        return this.answerStatusData.isPuzzle13Complete;
    }

    public setPuzzle13Complete() {
        this.answerStatusData.isPuzzle13Complete = true;
        this.storeAnswerStatusData();
    }

    public get getIsPuzzle14Complete(): boolean {
        return this.answerStatusData.isPuzzle14Complete;
    }

    public setPuzzle14Complete() {
        this.answerStatusData.isPuzzle14Complete = true;
        this.storeAnswerStatusData();
    }

    public get getIsComplete() {
        return this.answerStatusData.isPuzzle1Complete
        && this.answerStatusData.isPuzzle2Complete
        && this.answerStatusData.isPuzzle3Complete
        && this.answerStatusData.isPuzzle4Complete
        && this.answerStatusData.isPuzzle5Complete
        && this.answerStatusData.isPuzzle6Complete
        && this.answerStatusData.isPuzzle7Complete
        && this.answerStatusData.isPuzzle8Complete
        && this.answerStatusData.isPuzzle9Complete
        && this.answerStatusData.isPuzzle10Complete
        && this.answerStatusData.isPuzzle11Complete
        && this.answerStatusData.isPuzzle12Complete
        && this.answerStatusData.isPuzzle13Complete
        && this.answerStatusData.isPuzzle14Complete;
    }

    public resetAllAnswers() {
        this.answerStatusData = {
            isIntroComplete: false,
            isPuzzle1Complete: false,
            isPuzzle2Complete: false,
            isPuzzle3Complete: false,
            isPuzzle4Complete: false,
            isPuzzle5Complete: false,
            isPuzzle6Complete: false,
            isPuzzle7Complete: false,
            isPuzzle8Complete: false,
            isPuzzle9Complete: false,
            isPuzzle10Complete: false,
            isPuzzle11Complete: false,
            isPuzzle12Complete: false,
            isPuzzle13Complete: false,
            isPuzzle14Complete: false,
        };
        this.storeAnswerStatusData();
    }

    private storeAnswerStatusData() {
        this._storageService.setAnswerStateInLocalStorage(this.answerStatusData);
    }
}