import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-puzzle9',
  templateUrl: './puzzle9.component.html',
  styleUrls: ['./puzzle9.component.scss']
})
export class Puzzle9Component implements OnInit {

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

  public correctAnswer = 'journals';
  public errorMessage = 'That wasn\'t right. Please try again.';

  public handleCorrectAnswerProvided(): void {
    this.correctAnswerProvided.emit();
    this.close.emit();
  }

  public handleClose(): void {
    this.close.emit();
  }
}
