import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public isComplete = false;

  @Output()
  public correctAnswerProvided = new EventEmitter(); 

  @Output()
  public close = new EventEmitter(); 

  answer = new FormControl('');

  public displayError = false;

  public correctAnswers = ['ready'];
  public errorMessage = 'The answer here is just the word "ready". This wasn\'t intended to be a difficult puzzle!';

  public handleCorrectAnswerProvided(): void {
    this.correctAnswerProvided.emit();
  }

  public handleClose(): void {
    this.close.emit();
  }
}
