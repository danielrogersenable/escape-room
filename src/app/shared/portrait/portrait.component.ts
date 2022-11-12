import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.scss']
})
export class PortraitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  name: string = 'Bob Smith';

  @Input()
  title: string = 'Test of Testerton';

  @Input()
  imageName: string = 'adam-brown-lord-singapore';
}
