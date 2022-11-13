import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PermissionsStatus } from 'src/app/shared/permissions-status';
import { VisibilityStatus } from 'src/app/shared/visibility-status';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  @Input()
  public permissionsStatus: PermissionsStatus;

  @Input()
  public visibilityStatus: VisibilityStatus;

  @Output()
  public requestSignOut = new EventEmitter();

  ngOnInit(): void {
  }

  public tryThis() {
    this.visibilityStatus.showPuzzle1();
  }

  public showContents() {
    this.visibilityStatus.showContents();
  }

  public showIntro() {
    this.visibilityStatus.showIntro();
  }

  public showPuzzle1() {
    this.visibilityStatus.showPuzzle1();
  }

  public showPuzzle2() {
    this.visibilityStatus.showPuzzle2();
  }

  public showPuzzle3() {
    this.visibilityStatus.showPuzzle3();
  }

  public showPuzzle4() {
    this.visibilityStatus.showPuzzle4();
  }

  public showPuzzle5() {
    this.visibilityStatus.showPuzzle5();
  }

  public showPuzzle6() {
    this.visibilityStatus.showPuzzle6();
  }

  public showPuzzle7() {
    this.visibilityStatus.showPuzzle7();
  }

  public showPuzzle8() {
    this.visibilityStatus.showPuzzle8();
  }

  public showPuzzle9() {
    this.visibilityStatus.showPuzzle9();
  }

  public showPuzzle10() {
    this.visibilityStatus.showPuzzle10();
  }

  public showPuzzle11() {
    this.visibilityStatus.showPuzzle11();
  }

  public showPuzzle12() {
    this.visibilityStatus.showPuzzle12();
  }

  public showPuzzle13() {
    this.visibilityStatus.showPuzzle13();
  }

  public showPuzzle14() {
    this.visibilityStatus.showPuzzle14();
  }

  public showConclusion() {
    this.visibilityStatus.showConclusion();
  }

  public showSignIn() {
  }

  public handleSignOut() {
    this.requestSignOut.emit();
  }
}
