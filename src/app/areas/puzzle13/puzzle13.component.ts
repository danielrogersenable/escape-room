import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-puzzle13',
  templateUrl: './puzzle13.component.html',
  styleUrls: ['./puzzle13.component.scss']
})
export class Puzzle13Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this._buildLightArray();
  }

  @Input()
  public isComplete = false;
  
  @Output()
  correctAnswerProvided = new EventEmitter();

  @Output()
  public close = new EventEmitter(); 

  answer = new FormControl('');

  public displayError = false;

  public correctAnswer = 'blueprint';
  public errorMessage = 'That wasn\'t right. Please try again.';

  public handleCorrectAnswerProvided(): void {
    this.correctAnswerProvided.emit();
    this.close.emit();
  }

  public handleClose(): void {
    this.close.emit();
  }

  public lightArray: boolean[][] = [];

  public maxX = 4;
  public maxY = 4;

  private _buildLightArray() {
    for (var x = 0; x <= this.maxX; x++) {
      this.lightArray.push([]);
      for (var y = 0; y <= this.maxY; y++) {
        this.lightArray[x].push(false);
      }
    }

    this.lightArray[0][1] = true;
    this.lightArray[0][3] = true;
    this.lightArray[1][1] = true;
    this.lightArray[2][3] = true;
    this.lightArray[3][4] = true;
    this.lightArray[4][4] = true;
  }

  public get areAllLightsOn(): boolean {
    for (var x = 0; x <= this.maxX; x++) {
      for (var y = 0; y <= this.maxY; y++) {
        if (!this.lightArray[x][y]) {
          return false;
        }
      }
    }

    return true;
  }

  public toggle(x: number, y: number) {
    const canDecreaseX = x > 0;
    const canDecreaseY = y > 0;
    const canIncreaseX = x < this.maxX;
    const canIncreaseY = y < this.maxY;

    this.lightArray[x][y] = !this.lightArray[x][y];

    if (canDecreaseX) {
      this.lightArray[x-1][y] = !this.lightArray[x-1][y];
    }

    if (canIncreaseX) {
      this.lightArray[x+1][y] = !this.lightArray[x+1][y];
    }

    if (canDecreaseY) {
      this.lightArray[x][y-1] = !this.lightArray[x][y-1];
    }

    if (canIncreaseY) {
      this.lightArray[x][y+1] = !this.lightArray[x][y+1];
    }
  }
}
