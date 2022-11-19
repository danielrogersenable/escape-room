import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-puzzle3',
  templateUrl: './puzzle3.component.html',
  styleUrls: ['./puzzle3.component.scss']
})
export class Puzzle3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public isComplete = false;
  
  @Output()
  correctAnswerProvided = new EventEmitter();

  @Output()
  public close = new EventEmitter(); 

  answer = new FormControl('');

  public displayError = false;

  public correctAnswers = ['Herman Melville'];
  public errorMessage = 'That wasn\'t right. Please try again.';

  public handleCorrectAnswerProvided(): void {
    this.correctAnswerProvided.emit();
  }

  public handleClose(): void {
    this.close.emit();
  }
}
