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

  @Input()
  public displayReturnToMenu = true;

  @Output()
  public onComplete = new EventEmitter();

  @Output()
  public closeItem = new EventEmitter();

  answer = new FormControl('');

  public returnToMenu() {
    this.closeItem.emit();
  }

  public displayError = false;

  public onSubmit(): void {
    const submittedValue = this.formatString(String(this.answer.value));

    console.log(submittedValue);

    const successfulValidation = submittedValue === this.formatString(this.correctAnswer);

    if (successfulValidation) {
      this.displayError = false;
      this.onComplete.emit();
    } else {
      this.displayError = true;
    }
  }

  private formatString(inputString: string): string {
    if (!inputString) {
      return inputString;
    }

    return inputString.replace(/ /g,'').toLowerCase();
  }
}
