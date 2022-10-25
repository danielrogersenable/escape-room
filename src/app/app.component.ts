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
  }

  public successfulValidation() {
    this.setIsValidated();
    this.permissionsStatus.completeValidation();
    this.visibilityStatus.showContents();
  }

  public showContents() {
    this.visibilityStatus.showContents();
  }

  public get isPuzzle1Available(): boolean {
    return this.permissionsStatus.getIsPuzzle1Permitted;
  }

  public handlePuzzle1Result() {
    this.answerStatus.setPuzzle1Complete();
    this.permissionsStatus.setPuzzle1Complete();
    this.visibilityStatus.showContents();
  }

  public get isPuzzle2Available(): boolean {
    return this.permissionsStatus.getIsPuzzle2Permitted;
  }

  public handlePuzzle2Result() {
    this.answerStatus.setPuzzle2Complete();
    this.permissionsStatus.setPuzzle2Complete();
    this.visibilityStatus.showContents();
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

  private loadFromStorage(): void {
    this.isValidated = this._storageService.getIsValidated();
  }

  private updateStorage() {
    this._storageService.setIsValidated(this.isValidated);
  }
}
