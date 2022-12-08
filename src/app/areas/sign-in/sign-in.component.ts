import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  correctAnswerProvided = new EventEmitter(); 

  answer = new FormControl('');

  public displayError = false;

  public correctAnswers = ['Kennedy'];
  public errorMessage = 'That password was not correct. Please try again.';

  public handleValidationResponse(): void {
    this.correctAnswerProvided.emit();
  }
}
