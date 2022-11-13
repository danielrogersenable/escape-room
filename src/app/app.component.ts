import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AnswerStatus } from './shared/answer-status';
import { PageOptions } from './shared/page-options';
import { PermissionsStatus } from './shared/permissions-status';
import { StorageService } from './shared/storage.service';
import { VisibilityStatus } from './shared/visibility-status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private _storageService: StorageService) {
  }

  title = 'escape-room';

  public isValidated = false;

  /*
  OK, so we have a bit of an issue here.
  The idea was to change it so that each status below is in charge of storing its own data.
  This is because places other than here also update values on some of these statuses, and these values aren't getting persisted in this case.
  Whereas, having the status look after its own storage would mean this is more easily done.
  However, to do this requires injecting the storage service into each of these statuses, which changes when these become instantiated.
  We get round this for now by loading the data on construction rather than on init.
  This isn't very clean, but I think it works.
  */
  public answerStatus: AnswerStatus = new AnswerStatus(this._storageService);
  public visibilityStatus: VisibilityStatus = new VisibilityStatus(this._storageService);
  public permissionsStatus: PermissionsStatus = new PermissionsStatus(this._storageService);
  
  public ngOnInit(): void {
    this.loadFromStorage();
  }

  public handleSelectedPuzzle(pageOptions: PageOptions): void {
    this.deselectEverything();

    switch(pageOptions) {
      case PageOptions.Intro:
        this.visibilityStatus.showIntro();
        break;
      case PageOptions.Puzzle1:
        this.visibilityStatus.showPuzzle1();
        break;
      case PageOptions.Puzzle2:
        this.visibilityStatus.showPuzzle2();
        break;
      case PageOptions.Puzzle3:
        this.visibilityStatus.showPuzzle3();
        break;
      case PageOptions.Puzzle4:
        this.visibilityStatus.showPuzzle4();
        break;
      case PageOptions.Puzzle5:
        this.visibilityStatus.showPuzzle5();
        break;
      case PageOptions.Puzzle6:
        this.visibilityStatus.showPuzzle6();
        break;
      case PageOptions.Puzzle7:
        this.visibilityStatus.showPuzzle7();
        break;
      case PageOptions.Puzzle8:
        this.visibilityStatus.showPuzzle8();
        break;
      case PageOptions.Puzzle9:
        this.visibilityStatus.showPuzzle9();
        break;
      case PageOptions.Puzzle10:
        this.visibilityStatus.showPuzzle10();
        break;
      case PageOptions.Puzzle11:
        this.visibilityStatus.showPuzzle11();
        break;
      case PageOptions.Puzzle12:
        this.visibilityStatus.showPuzzle12();
        break;
      case PageOptions.Puzzle13:
        this.visibilityStatus.showPuzzle13();
        break;
      case PageOptions.Puzzle14:
        this.visibilityStatus.showPuzzle14();
        break;
      case PageOptions.Conclusion:
        this.visibilityStatus.showConclusion();
        break;
      }
  }

  public deselectEverything() {
    this.visibilityStatus.deselectEverything();
  }

  public successfulValidation() {
    this.setIsValidated();
    this.permissionsStatus.completeValidation();
    this.visibilityStatus.showContents();
  }

  public showContents() {
    this.visibilityStatus.showContents();
  }

  public handleIntroResult() {
    this.answerStatus.setIntroComplete();
    this.permissionsStatus.setIntroComplete();
  }

  public handlePuzzle1Result() {
    this.answerStatus.setPuzzle1Complete();
    this.permissionsStatus.setPuzzle1Complete();
    this.setConclusionIfAllComplete();
    this.updateStorage();
  }

  public handlePuzzle2Result() {
    this.answerStatus.setPuzzle2Complete();
    this.permissionsStatus.setPuzzle2Complete();
    this.setConclusionIfAllComplete();
    this.updateStorage();
  }

  public handlePuzzle3Result() {
    this.answerStatus.setPuzzle3Complete();
    this.permissionsStatus.setPuzzle3Complete();
    this.setConclusionIfAllComplete();
    this.updateStorage();
  }

  public handlePuzzle4Result() {
    this.answerStatus.setPuzzle4Complete();
    this.permissionsStatus.setPuzzle4Complete();
    this.setConclusionIfAllComplete();
    this.updateStorage();
  }

  public handlePuzzle5Result() {
    this.answerStatus.setPuzzle5Complete();
    this.permissionsStatus.setPuzzle5Complete();
    this.setConclusionIfAllComplete();
    this.updateStorage();
  }

  public handlePuzzle6Result() {
    this.answerStatus.setPuzzle6Complete();
    this.permissionsStatus.setPuzzle6Complete();
    this.setConclusionIfAllComplete();
    this.updateStorage();
  }

  public handlePuzzle7Result() {
    this.answerStatus.setPuzzle7Complete();
    this.permissionsStatus.setPuzzle7Complete();
    this.setConclusionIfAllComplete();
    this.updateStorage();
  }

  public handlePuzzle8Result() {
    this.answerStatus.setPuzzle8Complete();
    this.permissionsStatus.setPuzzle8Complete();
    this.setConclusionIfAllComplete();
    this.updateStorage();
  }

  public handlePuzzle9Result() {
    this.answerStatus.setPuzzle9Complete();
    this.permissionsStatus.setPuzzle9Complete();
    this.setConclusionIfAllComplete();
    this.updateStorage();
  }

  public handlePuzzle10Result() {
    this.answerStatus.setPuzzle10Complete();
    this.permissionsStatus.setPuzzle10Complete();
    this.setConclusionIfAllComplete();
    this.updateStorage();
  }

  public handlePuzzle11Result() {
    this.answerStatus.setPuzzle11Complete();
    this.permissionsStatus.setPuzzle11Complete();
    this.setConclusionIfAllComplete();
    this.updateStorage();
  }

  public handlePuzzle12Result() {
    this.answerStatus.setPuzzle12Complete();
    this.permissionsStatus.setPuzzle12Complete();
    this.setConclusionIfAllComplete();
    this.updateStorage();
  }

  public handlePuzzle13Result() {
    this.answerStatus.setPuzzle13Complete();
    this.permissionsStatus.setPuzzle13Complete();
    this.setConclusionIfAllComplete();
    this.updateStorage();
  }

  public handlePuzzle14Result() {
    this.answerStatus.setPuzzle14Complete();
    this.permissionsStatus.setPuzzle14Complete();
    this.setConclusionIfAllComplete();
    this.updateStorage();
  }

  public get isComplete(): boolean {
    return this.answerStatus.getIsComplete;
  }

  public handleRequestSignOut() {
    this.answerStatus.resetAllAnswers();
    this.permissionsStatus.revokePermissions();
    this.visibilityStatus.deselectEverything();
    this.setIsNotValidated();
  }

  public setIsValidated() {
    this.isValidated = true;
    this.updateStorage();
  }

  public setIsNotValidated() {
    this.isValidated = false;
    this.updateStorage();
  }

  public setConclusionIfAllComplete() {
    if (this.answerStatus.getIsComplete) {
      this.permissionsStatus.setAllPuzzlesComplete();
    }
  }

  private loadFromStorage(): void {
    this.isValidated = this._storageService.getIsValidated();
  }

  private updateStorage() {
    this._storageService.setIsValidated(this.isValidated);
  }
}
