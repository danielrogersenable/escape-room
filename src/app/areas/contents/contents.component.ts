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

  public selectPuzzle1() {
    this.selectedPuzzle.emit(PageOptions.Puzzle1);
  }

  public selectPuzzle2() {
    this.selectedPuzzle.emit(PageOptions.Puzzle2);
  }

  public selectPuzzle3() {
    this.selectedPuzzle.emit(PageOptions.Puzzle3);
  }

}
