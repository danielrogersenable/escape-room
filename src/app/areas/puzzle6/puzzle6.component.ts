import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-puzzle6',
  templateUrl: './puzzle6.component.html',
  styleUrls: ['./puzzle6.component.scss']
})
export class Puzzle6Component implements OnInit {

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

  public correctAnswers = ['Lake Ontario', 'Ontario'];
  public errorMessage = 'That wasn\'t right. Please try again.';

  public handleCorrectAnswerProvided(): void {
    this.correctAnswerProvided.emit();
  }

  public handleClose(): void {
    this.close.emit();
  }
}
