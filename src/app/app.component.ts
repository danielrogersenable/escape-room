import { Component } from '@angular/core';
import { AnswerStatus } from './shared/answer-status';
import { PageOptions } from './shared/page-options';
import { PermissionsStatus } from './shared/permissions-status';
import { VisibilityStatus } from './shared/visibility-status';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'escape-room';

  public isValidated = false;

  public answerStatus: AnswerStatus = new AnswerStatus();
  public visibilityStatus: VisibilityStatus = new VisibilityStatus();
  public permissionsStatus: PermissionsStatus = new PermissionsStatus();

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
    this.isValidated = true;
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
  }

  public get isComplete(): boolean {
    return this.answerStatus.getIsComplete;
  }

  public handleRequestSignOut() {
    this.answerStatus.resetAllAnswers();
    this.permissionsStatus.revokePermissions();
    this.visibilityStatus.deselectEverything();
    this.isValidated = false;
  }
}
