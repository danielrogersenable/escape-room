import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.scss']
})
export class AnswerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  public correctAnswer: string = '';

  @Input()
  public errorMessage: string = 'That answer was not correct. Please try again.'

  @Input()
  public isComplete = false;

  @Output()
  public successfulValidation = new EventEmitter();

  @Output()
  public closeItem = new EventEmitter();

  answer = new FormControl('');

  public returnToMenu() {
    this.closeItem.emit();
  }

  public displayError = false;

  public onSubmit(): void {
    const submittedValue = String(this.answer.value).toLowerCase();

    const successfulValidation = submittedValue === this.correctAnswer.toLowerCase();

    if (successfulValidation) {
      this.displayError = false;
      this.successfulValidation.emit();
      this.closeItem.emit();
    } else {
      this.displayError = true;
    }
  }
}
