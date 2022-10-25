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
    console.log('showing c');
    this.visibilityStatus.showContents();
  }

  public showPuzzle1() {
    console.log('showing 1');
    this.visibilityStatus.showPuzzle1();
  }

  public showPuzzle2() {
    console.log('showing 2');
    this.visibilityStatus.showPuzzle2();
  }

  public showPuzzle3() {
    this.visibilityStatus.showPuzzle3();
  }

  public showSignIn() {
  }

  public handleSignOut() {
    this.requestSignOut.emit();
  }
}
