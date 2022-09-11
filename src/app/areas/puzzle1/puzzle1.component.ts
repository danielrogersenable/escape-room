import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-puzzle1',
  templateUrl: './puzzle1.component.html',
  styleUrls: ['./puzzle1.component.scss']
})
export class Puzzle1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  public correctAnswerProvided = new EventEmitter(); 

  @Output()
  public close = new EventEmitter(); 

  answer = new FormControl('');

  public displayError = false;

  public correctAnswer = 'floorboard';
  public errorMessage = 'That wasn\'t right. Please try again.';

  public handleValidationResponse(): void {
    this.correctAnswerProvided.emit(); 
  }

  public handleClose(): void {
    this.close.emit();
  }
}
