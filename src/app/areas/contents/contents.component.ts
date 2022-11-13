import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnswerStatus } from 'src/app/shared/answer-status';
import { PageOptions } from 'src/app/shared/page-options';
import { PermissionsStatus } from 'src/app/shared/permissions-status';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public answerStatus;

  @Input()
  public permissionsStatus;

  @Output()
  public selectedPuzzle = new EventEmitter<PageOptions>();

  public selectIntro() {
    this.selectedPuzzle.emit(PageOptions.Intro);
  }

  public selectPuzzle1() {
    this.selectedPuzzle.emit(PageOptions.Puzzle1);
  }

  public selectPuzzle2() {
    this.selectedPuzzle.emit(PageOptions.Puzzle2);
  }

  public selectPuzzle3() {
    this.selectedPuzzle.emit(PageOptions.Puzzle3);
  }

  public selectPuzzle4() {
    this.selectedPuzzle.emit(PageOptions.Puzzle4);
  }

  public selectPuzzle5() {
    this.selectedPuzzle.emit(PageOptions.Puzzle5);
  }

  public selectPuzzle6() {
    this.selectedPuzzle.emit(PageOptions.Puzzle6);
  }

  public selectPuzzle7() {
    this.selectedPuzzle.emit(PageOptions.Puzzle7);
  }

  public selectPuzzle8() {
    this.selectedPuzzle.emit(PageOptions.Puzzle8);
  }

  public selectPuzzle9() {
    this.selectedPuzzle.emit(PageOptions.Puzzle9);
  }

  public selectPuzzle10() {
    this.selectedPuzzle.emit(PageOptions.Puzzle10);
  }

  public selectPuzzle11() {
    this.selectedPuzzle.emit(PageOptions.Puzzle11);
  }

  public selectPuzzle12() {
    this.selectedPuzzle.emit(PageOptions.Puzzle12);
  }

  public selectPuzzle13() {
    this.selectedPuzzle.emit(PageOptions.Puzzle13);
  }

  public selectPuzzle14() {
    this.selectedPuzzle.emit(PageOptions.Puzzle14);
  }

  public selectConclusion() {
    this.selectedPuzzle.emit(PageOptions.Conclusion);
  }
}
