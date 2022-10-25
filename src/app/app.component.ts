import { ThrowStmt } from '@angular/compiler';
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

  public answerStatus: AnswerStatus = new AnswerStatus();
  public visibilityStatus: VisibilityStatus = new VisibilityStatus();
  public permissionsStatus: PermissionsStatus = new PermissionsStatus();

  public ngOnInit(): void {
    this.loadFromStorage();
  }

  public handleSelectedPuzzle(pageOptions: PageOptions): void {
    this.deselectEverything();

    switch(pageOptions) {
      case PageOptions.Puzzle1:
        this.visibilityStatus.showPuzzle1();
        break;
      case PageOptions.Puzzle2:
        this.visibilityStatus.showPuzzle2();
        break;
      case PageOptions.Puzzle3:
        this.visibilityStatus.showPuzzle3();
        break;
    }
  }

  public deselectEverything() {
    this.visibilityStatus.deselectEverything();
    this.updateStorage();
  }

  public successfulValidation() {
    this.isValidated = true;
    this.permissionsStatus.completeValidation();
    this.visibilityStatus.showContents();
    this.updateStorage();
  }

  public showContents() {
    this.visibilityStatus.showContents();
    this.updateStorage();
  }

  public get isPuzzle1Available(): boolean {
    return this.permissionsStatus.getIsPuzzle1Permitted;
  }

  public handlePuzzle1Result() {
    this.answerStatus.setPuzzle1Complete();
    this.permissionsStatus.setPuzzle1Complete();
    this.visibilityStatus.showContents();
    this.updateStorage();
  }

  public get isPuzzle2Available(): boolean {
    return this.permissionsStatus.getIsPuzzle2Permitted;
  }

  public handlePuzzle2Result() {
    this.answerStatus.setPuzzle2Complete();
    this.permissionsStatus.setPuzzle2Complete();
    this.visibilityStatus.showContents();
    this.updateStorage();
  }

  public get isPuzzle3Available(): boolean {
    return this.permissionsStatus.getIsPuzzle3Permitted;
  }

  public handlePuzzle3Result() {
    this.answerStatus.setPuzzle3Complete();
    this.permissionsStatus.setPuzzle3Complete();
    this.visibilityStatus.showContents();
    this.updateStorage();
  }

  public get isComplete(): boolean {
    return this.answerStatus.getIsComplete;
  }

  public handleRequestSignOut() {
    this.answerStatus.resetAllAnswers();
    this.permissionsStatus.revokePermissions();
    this.visibilityStatus.deselectEverything();
    this.isValidated = false;
    this.updateStorage();
  }

  private loadFromStorage(): void {
    this.answerStatus = this._storageService.getAnswerStateFromLocalStorage();
    this.permissionsStatus = this._storageService.getPermissionsStateFromLocalStorage();
    this.visibilityStatus = this._storageService.getVisibilityStateFromLocalStorage();
    this.isValidated = this._storageService.getIsValidated();
  }

  private updateStorage() {
    this._storageService.setAnswerStateInLocalStorage(this.answerStatus);
    this._storageService.setPermissionsStateInLocalStorage(this.permissionsStatus);
    this._storageService.setVisibilityStateInLocalStorage(this.visibilityStatus);
    this._storageService.setIsValidated(this.isValidated);
  }
}
