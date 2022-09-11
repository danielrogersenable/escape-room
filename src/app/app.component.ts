import { Component } from '@angular/core';
import { AnswerStatus } from './shared/answer-status';
import { PageOptions } from './shared/page-options';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'escape-room';

  public isValidated = true; // TEMP
  
  public contentsVisible = true; // TEMP
  public puzzle1Visible = false;
  public puzzle2Visible = false;
  public puzzle3Visible = false;

  public answerStatus: AnswerStatus = new AnswerStatus();

  public handleSelectedPuzzle(pageOptions: PageOptions): void {
    this.deselectEverything();

    switch(pageOptions) {
      case PageOptions.Puzzle1:
        this.puzzle1Visible = true;
        break;
      case PageOptions.Puzzle2:
        this.puzzle2Visible = true;
        break;
      case PageOptions.Puzzle3:
        this.puzzle3Visible = true;
        break;
    }
  }

  public deselectEverything() {
    this.contentsVisible = false;
    this.puzzle1Visible = false;
    this.puzzle2Visible = false;
    this.puzzle3Visible = false;
  }

  public successfulValidation() {
    this.isValidated = true;
    this.contentsVisible = true;
  }

  public showContents() {
    this.deselectEverything();
    this.contentsVisible = true;
  }

  public get isPuzzle1Available(): boolean {
    return this.isValidated;
  }

  public handlePuzzle1Result() {
    this.answerStatus.puzzle1 = true;
    this.showContents();
  }

  public get isPuzzle2Available(): boolean {
    return this.isValidated && this.answerStatus.puzzle1;
  }

  public handlePuzzle2Result() {
    this.answerStatus.puzzle2 = true;
    this.showContents();
  }

  public get isPuzzle3Available(): boolean {
    return this.isValidated && this.answerStatus.puzzle1 && this.answerStatus.puzzle2;
  }

  public handlePuzzle3Result() {
    this.answerStatus.puzzle3 = true;
    this.showContents();
  }

  public get isComplete(): boolean {
    return this.isValidated && this.answerStatus.puzzle1 && this.answerStatus.puzzle2 && this.answerStatus.puzzle3;
  }
}
