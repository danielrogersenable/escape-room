import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-puzzle8',
  templateUrl: './puzzle8.component.html',
  styleUrls: ['./puzzle8.component.scss']
})
export class Puzzle8Component implements OnInit {

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

  public correctAnswer = 'placeholder';
  public errorMessage = 'That wasn\'t right. Please try again.';

  public handleValidationResponse(): void {
    this.correctAnswerProvided.emit();
    this.close.emit();
  }

  public handleClose(): void {
    this.close.emit();
  }
}