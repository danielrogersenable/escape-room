import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-puzzle2',
  templateUrl: './puzzle2.component.html',
  styleUrls: ['./puzzle2.component.scss']
})
export class Puzzle2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  correctAnswerProvided = new EventEmitter(); 

  @Output()
  public close = new EventEmitter(); 

  answer = new FormControl('');

  public displayError = false;

  public correctAnswer = 'coconut';
  public errorMessage = 'That wasn\'t right. Please try again.';

  public handleValidationResponse(): void {
    this.correctAnswerProvided.emit(); 
  }

  public handleClose(): void {
    this.close.emit();
  }
}